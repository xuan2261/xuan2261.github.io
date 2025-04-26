/**
 * IP Scanner cho thiết bị Phicomm R1
 *
 * Module này cung cấp các chức năng để quét mạng hiện tại tìm các thiết bị R1
 * đang mở cổng 8080 và hiển thị chúng trên trang "Device Connection Page".
 */

const IPScanner = {
    /**
     * Danh sách các thiết bị đã tìm thấy
     * Mỗi thiết bị có định dạng: { ip: "192.168.1.x", status: "available", responseTime: 123 }
     */
    discoveredDevices: [],

    /**
     * Trạng thái quét
     */
    isScanning: false,

    /**
     * Số lượng thiết bị đã quét
     */
    scannedCount: 0,

    /**
     * Tổng số thiết bị cần quét
     */
    totalToScan: 0,

    /**
     * Callback khi quét hoàn tất
     */
    onScanComplete: null,

    /**
     * Callback khi tìm thấy thiết bị
     */
    onDeviceFound: null,

    /**
     * Callback khi tiến trình quét cập nhật
     */
    onScanProgress: null,

    /**
     * Lấy địa chỉ IP của máy hiện tại
     * @returns {Promise<string>} Địa chỉ IP của máy hiện tại
     */
    getCurrentIP: async function() {
        console.log("Bắt đầu lấy địa chỉ IP hiện tại...");

        try {
            // Phương pháp 1: Lấy IP từ URL hiện tại
            const currentURL = window.location.hostname;
            console.log("Hostname hiện tại:", currentURL);

            // Nếu hostname là IP và không phải localhost, sử dụng nó
            const ipRegex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/;
            if (ipRegex.test(currentURL) && !currentURL.startsWith('127.0.0')) {
                console.log("Sử dụng IP từ URL:", currentURL);
                return currentURL;
            }

            // Phương pháp 2: Lấy IP của client
            const clientIP = await this.getClientIP();
            if (clientIP && !clientIP.startsWith('127.0.0')) {
                console.log("Sử dụng IP của client:", clientIP);
                return clientIP;
            }

            // Phương pháp 3: Thử các IP mặc định phổ biến
            console.log("Không thể lấy IP thực tế, sử dụng IP mặc định: 192.168.10.100");
            return '192.168.10.100';

        } catch (error) {
            console.error("Lỗi khi lấy IP:", error);
            console.log("Sử dụng IP mặc định: 192.168.10.100");
            return '192.168.10.100';
        }
    },

    /**
     * Lấy địa chỉ IP của client
     * @returns {Promise<string|null>} Promise trả về địa chỉ IP của client hoặc null nếu không lấy được
     */
    getClientIP: function() {
        return new Promise((resolve) => {
            console.log("Bắt đầu lấy IP của client...");

            // Thử phương pháp 1: Sử dụng các API của trình duyệt
            if (navigator.connection && navigator.connection.localAddress) {
                console.log("Lấy IP từ navigator.connection:", navigator.connection.localAddress);
                resolve(navigator.connection.localAddress);
                return;
            }

            // Thử phương pháp 2: Sử dụng WebRTC
            try {
                if (!window.RTCPeerConnection) {
                    console.log("Trình duyệt không hỗ trợ WebRTC");
                    resolve(null);
                    return;
                }

                const pc = new RTCPeerConnection({iceServers: []});
                pc.createDataChannel('');

                // Timeout sau 3 giây nếu không tìm thấy IP
                const timeout = setTimeout(() => {
                    console.log("Hết thời gian chờ khi lấy IP của client");
                    pc.close();
                    resolve(null);
                }, 3000);

                pc.createOffer()
                    .then(offer => pc.setLocalDescription(offer))
                    .catch(error => {
                        console.error("Lỗi khi tạo offer:", error);
                        clearTimeout(timeout);
                        resolve(null);
                    });

                pc.onicecandidate = (ice) => {
                    if (!ice || !ice.candidate || !ice.candidate.candidate) return;

                    const candidateString = ice.candidate.candidate;
                    console.log("ICE candidate trong getClientIP:", candidateString);

                    const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
                    const ipMatch = ipRegex.exec(candidateString);

                    if (ipMatch) {
                        const ip = ipMatch[1];
                        console.log("Tìm thấy IP trong ICE candidate:", ip);

                        if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
                            console.log("Tìm thấy IP private hợp lệ:", ip);
                            clearTimeout(timeout);
                            pc.onicecandidate = null;
                            pc.close();
                            resolve(ip);
                        }
                    }
                };
            } catch (error) {
                console.error("Lỗi khi lấy IP của client:", error);
                resolve(null);
            }
        });
    },

    /**
     * Kiểm tra xem một địa chỉ IP có phải là thiết bị R1 không bằng cách sử dụng WebSocket
     * @param {string} ip - Địa chỉ IP cần kiểm tra
     * @param {number} port - Cổng cần kiểm tra (mặc định là 8080)
     * @param {number} retryCount - Số lần thử lại (mặc định là 1)
     * @returns {Promise<Object>} Kết quả kiểm tra
     */
    checkDevice: function(ip, port = 8080, retryCount = 1) {
        return new Promise((resolve) => {
            const startTime = performance.now();
            const timeout = 3000; // Tăng timeout lên 3 giây
            let isResolved = false;
            let timeoutId = null;
            let ws = null;

            // Hàm resolve kết quả và đảm bảo chỉ gọi một lần
            const resolveOnce = (result) => {
                if (!isResolved) {
                    isResolved = true;
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                        timeoutId = null;
                    }
                    console.log(`Kết quả kiểm tra ${ip}:${port}: ${result.status}${result.responseTime ? ', phản hồi: ' + result.responseTime + 'ms' : ''}`);
                    resolve(result);
                }
            };

            // Hàm thử lại nếu kết nối thất bại
            const retryConnection = () => {
                if (retryCount < 1) { // Chỉ thử lại tối đa 1 lần
                    console.log(`Thử lại kết nối đến ${ip}:${port}...`);
                    setTimeout(() => {
                        this.checkDevice(ip, port, retryCount + 1).then(resolve);
                    }, 500); // Chờ 500ms trước khi thử lại
                } else {
                    resolveOnce({
                        ip: ip,
                        port: port,
                        status: "unavailable",
                        responseTime: null,
                        connectionType: "websocket"
                    });
                }
            };

            // Kiểm tra IP có hợp lệ không
            if (ip === "") {
                console.error("IP address is empty, cannot initialize WebSocket.");
                resolveOnce({
                    ip: ip,
                    port: port,
                    status: "error",
                    responseTime: null,
                    connectionType: "websocket",
                    error: "IP address is empty"
                });
                return;
            }

            // Tạo URL WebSocket với cổng được chỉ định
            const ws_protocol = "ws://";
            const wsUrl = `${ws_protocol}${ip}:${port}`;
            console.log(`Đang kiểm tra thiết bị: ${ip}:${port} qua WebSocket (lần thử ${retryCount})`);

            try {
                // Kiểm tra trạng thái WebSocket hiện tại
                if (ws == null || ws.readyState == WebSocket.CLOSED || ws.readyState == WebSocket.CLOSING) {
                    // Chỉ tạo kết nối mới nếu không đang kết nối
                    if (ws == null || ws.readyState != WebSocket.CONNECTING) {
                        try {
                            // Tạo kết nối WebSocket mới
                            ws = new WebSocket(wsUrl);
                            console.log(`Đang kết nối đến thiết bị: ${ip}:${port}, vui lòng đợi...`);
                        } catch (e) {
                            console.error(`Lỗi khi tạo kết nối WebSocket: ${e}`);
                            // Thử lại sau 3 giây nếu có lỗi
                            setTimeout(() => {
                                retryConnection();
                            }, 3000);
                            return;
                        }
                    } else {
                        // Đang kết nối, chờ kết quả
                        console.log(`Đang chờ kết nối đến ${ip}:${port}...`);
                        return;
                    }
                } else if (ws.readyState == WebSocket.OPEN) {
                    // Đã kết nối, gửi tin nhắn kiểm tra ngay
                    const endTime = performance.now();
                    const responseTime = Math.round(endTime - startTime);
                    console.log(`Kết nối đã mở đến ${ip}:${port}, gửi tin nhắn kiểm tra`);

                    try {
                        // Gửi tin nhắn get_info sau 600ms
                        setTimeout(function() {
                            try {
                                ws.send(JSON.stringify({type: "get_info"}));
                            } catch (e) {
                                console.error(`Lỗi khi gửi tin nhắn: ${e}`);
                            }
                        }, 600);

                        resolveOnce({
                            ip: ip,
                            port: port,
                            status: "available",
                            responseTime: responseTime,
                            connectionType: "websocket"
                        });
                    } catch (e) {
                        console.error(`Lỗi khi gửi tin nhắn: ${e}`);
                        resolveOnce({
                            ip: ip,
                            port: port,
                            status: "error",
                            responseTime: null,
                            connectionType: "websocket",
                            error: e.toString()
                        });
                    }
                    return;
                } else {
                    // WebSocket đang trong trạng thái CONNECTING, chờ onopen hoặc onclose/onerror
                    console.log(`Đang chờ kết nối đến ${ip}:${port}...`);
                    // Thiết lập lại các handler trong trường hợp bị mất
                }

                // Xử lý khi kết nối thành công
                ws.onopen = function() {
                    const endTime = performance.now();
                    const responseTime = Math.round(endTime - startTime);
                    console.log(`Kết nối thành công đến ${ip}:${port}, thời gian phản hồi: ${responseTime}ms`);

                    // Gửi một tin nhắn đơn giản để kiểm tra xem có phải là thiết bị R1 không
                    try {
                        ws.send(JSON.stringify({type: "get_info"}));

                        // Đặt timeout cho tin nhắn ping
                        const pingTimeout = setTimeout(() => {
                            // Nếu không nhận được phản hồi sau 1 giây, vẫn coi là thiết bị hợp lệ
                            if (!isResolved) {
                                ws.close();
                                resolveOnce({
                                    ip: ip,
                                    port: port,
                                    status: "available",
                                    responseTime: responseTime,
                                    connectionType: "websocket"
                                });
                            }
                        }, 1000);

                        // Xử lý khi nhận được tin nhắn
                        ws.onmessage = function(event) {
                            clearTimeout(pingTimeout);
                            console.log(`Nhận được phản hồi từ ${ip}:${port}:`, event.data);
                            ws.close();
                            resolveOnce({
                                ip: ip,
                                port: port,
                                status: "available",
                                responseTime: responseTime,
                                connectionType: "websocket",
                                data: event.data
                            });
                        };
                    } catch (e) {
                        // Nếu không gửi được tin nhắn, vẫn coi là thiết bị hợp lệ
                        console.log(`Không thể gửi tin nhắn đến ${ip}:${port}:`, e);
                        ws.close();
                        resolveOnce({
                            ip: ip,
                            port: port,
                            status: "available",
                            responseTime: responseTime,
                            connectionType: "websocket"
                        });
                    }
                };

                // Xử lý khi có lỗi kết nối
                ws.onerror = function(event) {
                    console.log(`Lỗi kết nối đến ${ip}:${port}`, event);
                    // Không đóng kết nối ở đây, để onclose xử lý
                };

                // Xử lý khi kết nối bị đóng
                ws.onclose = function(event) {
                    // Nếu đã resolve rồi thì không làm gì
                    if (!isResolved) {
                        console.log(`Kết nối đến ${ip}:${port} đã bị đóng, code: ${event.code}`);

                        // Nếu kết nối bị từ chối (code 1006), thử lại
                        if (event.code === 1006) {
                            retryConnection();
                        } else {
                            resolveOnce({
                                ip: ip,
                                port: port,
                                status: "unavailable",
                                responseTime: null,
                                connectionType: "websocket",
                                closeCode: event.code
                            });
                        }
                    }
                };

                // Đặt timeout để tránh chờ quá lâu
                timeoutId = setTimeout(function() {
                    if (!isResolved) {
                        console.log(`Timeout khi kết nối đến ${ip}:${port}`);
                        ws.close();

                        // Thử lại nếu timeout
                        retryConnection();
                    }
                }, timeout);

            } catch (e) {
                // Lỗi khi tạo kết nối WebSocket
                console.error(`Lỗi khi tạo kết nối WebSocket đến ${ip}:${port}:`, e);
                retryConnection();
            }
        });
    },

    /**
     * Quét một dải IP để tìm thiết bị R1 qua WebSocket
     * @param {string} baseIP - Địa chỉ IP cơ sở (ví dụ: 192.168.1)
     * @param {number} start - Số bắt đầu quét
     * @param {number} end - Số kết thúc quét
     * @param {function} onDeviceFound - Callback khi tìm thấy thiết bị
     * @param {function} onProgress - Callback khi tiến trình cập nhật
     * @param {function} onComplete - Callback khi quét hoàn tất
     */
    scanIPRange: async function(baseIP, start, end, onDeviceFound, onProgress, onComplete) {
        console.log(`Bắt đầu quét dải IP từ ${baseIP}.${start} đến ${baseIP}.${end}`);

        this.isScanning = true;
        this.discoveredDevices = [];
        this.scannedCount = 0;
        this.totalToScan = end - start + 1;
        this.onDeviceFound = onDeviceFound;
        this.onScanProgress = onProgress;
        this.onScanComplete = onComplete;

        // Tạo danh sách các IP cần quét
        let ipList = [];
        for (let i = start; i <= end; i++) {
            ipList.push(`${baseIP}.${i}`);
        }

        // Sắp xếp lại danh sách IP để ưu tiên quét các IP có khả năng cao là thiết bị R1
        ipList = this.prioritizeIPs(ipList);

        // Số lượng quét đồng thời - giảm xuống để tránh quá tải
        const concurrentScans = 5;
        console.log(`Số lượng quét đồng thời: ${concurrentScans}`);

        // Chia thành các nhóm để quét
        for (let i = 0; i < ipList.length; i += concurrentScans) {
            // Kiểm tra nếu đã dừng quét
            if (!this.isScanning) {
                console.log("Quá trình quét đã bị dừng");
                break;
            }

            const batch = ipList.slice(i, i + concurrentScans);
            console.log(`Đang quét nhóm IP: ${batch.join(', ')}`);

            // Sử dụng Promise.allSettled thay vì Promise.all để tránh một lỗi làm hỏng cả nhóm
            const promises = batch.map(ip => this.checkDevice(ip, 8080));
            const results = await Promise.allSettled(promises);

            // Xử lý kết quả
            for (const result of results) {
                this.scannedCount++;

                // Kiểm tra nếu promise đã hoàn thành
                if (result.status === "fulfilled") {
                    const deviceResult = result.value;

                    if (deviceResult.status === "available") {
                        console.log(`Tìm thấy thiết bị: ${deviceResult.ip}, phản hồi: ${deviceResult.responseTime}ms`);
                        this.discoveredDevices.push(deviceResult);
                        if (this.onDeviceFound) {
                            this.onDeviceFound(deviceResult);
                        }
                    }
                } else {
                    // Xử lý lỗi nếu có
                    console.error(`Lỗi khi quét IP: ${result.reason}`);
                }

                // Cập nhật tiến trình
                if (this.onScanProgress) {
                    const progress = (this.scannedCount / this.totalToScan) * 100;
                    this.onScanProgress(progress, this.scannedCount, this.totalToScan);
                }
            }

            // Thêm delay ngắn giữa các nhóm để tránh quá tải mạng
            if (i + concurrentScans < ipList.length) {
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }

        this.isScanning = false;
        console.log(`Quét hoàn tất. Tìm thấy ${this.discoveredDevices.length} thiết bị.`);

        // Gọi callback hoàn tất
        if (this.onScanComplete) {
            this.onScanComplete(this.discoveredDevices);
        }

        return this.discoveredDevices;
    },

    /**
     * Sắp xếp lại danh sách IP để ưu tiên quét các IP có khả năng cao là thiết bị R1
     * @param {Array<string>} ipList - Danh sách IP cần sắp xếp
     * @returns {Array<string>} Danh sách IP đã được sắp xếp
     */
    prioritizeIPs: function(ipList) {
        // Các IP có khả năng cao là thiết bị R1
        const commonLastOctets = [1, 2, 100, 101, 102, 254, 253, 250, 200, 150, 50, 20, 10];

        // Tạo bản sao của danh sách IP
        const sortedList = [...ipList];

        // Sắp xếp danh sách IP dựa trên độ ưu tiên
        sortedList.sort((a, b) => {
            const aLastOctet = parseInt(a.split('.').pop());
            const bLastOctet = parseInt(b.split('.').pop());

            // Độ ưu tiên của IP a
            const aPriority = commonLastOctets.indexOf(aLastOctet);
            // Độ ưu tiên của IP b
            const bPriority = commonLastOctets.indexOf(bLastOctet);

            // Nếu cả hai IP đều có trong danh sách ưu tiên
            if (aPriority !== -1 && bPriority !== -1) {
                return aPriority - bPriority; // Sắp xếp theo độ ưu tiên
            }
            // Nếu chỉ IP a có trong danh sách ưu tiên
            else if (aPriority !== -1) {
                return -1; // Đặt IP a lên trước
            }
            // Nếu chỉ IP b có trong danh sách ưu tiên
            else if (bPriority !== -1) {
                return 1; // Đặt IP b lên trước
            }
            // Nếu cả hai IP đều không có trong danh sách ưu tiên
            else {
                return aLastOctet - bLastOctet; // Sắp xếp theo thứ tự tăng dần
            }
        });

        return sortedList;
    },

    /**
     * Bắt đầu quét mạng để tìm thiết bị R1 qua WebSocket
     * @param {function} onDeviceFound - Callback khi tìm thấy thiết bị
     * @param {function} onProgress - Callback khi tiến trình cập nhật
     * @param {function} onComplete - Callback khi quét hoàn tất
     */
    startNetworkScan: async function(onDeviceFound, onProgress, onComplete) {
        try {
            console.log("Bắt đầu quét mạng...");

            // Danh sách các dải mạng phổ biến cần quét
            // Ưu tiên quét các dải mạng phổ biến nhất trước
            const priorityNetworks = [
                "192.168.10",           // Dải mạng phổ biến nhất
                "192.168.1",           // Dải mạng phổ biến thứ hai
                // "192.168.0"           // Dải mạng phổ biến thứ ba
            ];

            // Các dải mạng phụ khác sẽ quét sau nếu không tìm thấy thiết bị nào
            const secondaryNetworks = [
                // "10.0.0",
                // "10.0.1",
                // "172.16.0",
                // "172.17.0",
                // "192.168.2",
                // "192.168.3"
            ];

            console.log("Các dải mạng ưu tiên:", priorityNetworks);
            console.log("Các dải mạng phụ:", secondaryNetworks);

            // Quét từ 1-254 qua WebSocket cho mỗi dải mạng
            let allDevices = [];

            // Cập nhật tổng số thiết bị cần quét
            const totalDevices = (priorityNetworks.length + secondaryNetworks.length) * 254;
            let scannedCount = 0;

            // Hàm quét một dải mạng
            const scanNetwork = async (network) => {
                console.log(`Bắt đầu quét dải mạng: ${network}.x`);

                // Tạo callback tiến trình cho từng dải mạng
                const networkProgress = (_, scanned, __) => {
                    if (onProgress) {
                        // Tính toán tiến trình tổng thể
                        const overallProgress = ((scannedCount + scanned) / totalDevices) * 100;
                        onProgress(overallProgress, scannedCount + scanned, totalDevices);
                    }
                };

                // Quét dải mạng
                const devices = await this.scanIPRange(network, 1, 254, onDeviceFound, networkProgress, null);
                allDevices = allDevices.concat(devices);
                scannedCount += 254;

                return devices.length > 0;
            };

            // Quét các dải mạng ưu tiên trước
            let foundDevices = false;
            for (const network of priorityNetworks) {
                const found = await scanNetwork(network);
                if (found) {
                    console.log(`Đã tìm thấy thiết bị trong dải mạng ${network}.x`);
                    foundDevices = true;
                    break;
                }
            }

            // Nếu không tìm thấy thiết bị trong các dải mạng ưu tiên, quét các dải mạng phụ
            if (!foundDevices) {
                console.log("Không tìm thấy thiết bị trong các dải mạng ưu tiên, quét các dải mạng phụ");

                for (const network of secondaryNetworks) {
                    const found = await scanNetwork(network);
                    if (found) {
                        console.log(`Đã tìm thấy thiết bị trong dải mạng ${network}.x`);
                        foundDevices = true;
                        break;
                    }
                }
            }

            // Nếu vẫn không tìm thấy thiết bị, hỏi người dùng có muốn quét đầy đủ không
            if (!foundDevices && confirm("Không tìm thấy thiết bị nào trong các dải mạng phổ biến. Bạn có muốn quét thêm các dải mạng 192.168.x khác không?")) {
                console.log("Bắt đầu quét thêm các dải mạng 192.168.x khác");

                // Quét thêm các dải mạng 192.168.x khác
                for (let i = 4; i <= 9; i++) {
                    const network = `192.168.${i}`;
                    const found = await scanNetwork(network);
                    if (found) {
                        console.log(`Đã tìm thấy thiết bị trong dải mạng ${network}.x`);
                        foundDevices = true;
                        break;
                    }
                }
            }

            // Gọi callback hoàn tất
            if (onComplete) {
                onComplete(allDevices);
            }

            // Hiển thị kết quả cuối cùng
            console.log(`Quét hoàn tất. Tìm thấy ${allDevices.length} thiết bị.`);

            return allDevices;
        } catch (error) {
            console.error("Lỗi khi quét mạng:", error);
            if (onComplete) {
                onComplete([]);
            }
            return [];
        }
    },

    /**
     * Dừng quét
     */
    stopScan: function() {
        this.isScanning = false;
    }
};
