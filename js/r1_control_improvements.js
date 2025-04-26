/**
 * R1 Control Panel Improvements
 * 
 * Tài liệu này mô tả các cải tiến đề xuất cho file r1_control.js
 * 
 * 1. Thêm comment chi tiết hơn cho các hàm phức tạp
 * 2. Tối ưu hóa hiệu suất bằng cách giảm số lượng timer
 * 3. Thêm error handling chi tiết hơn
 */

// ========== PHẦN 1: CẢI TIẾN COMMENT CHO CÁC HÀM PHỨC TẠP ==========

/**
 * Ví dụ 1: Thêm comment chi tiết cho hàm init()
 */

/**
 * Khởi tạo kết nối WebSocket đến thiết bị R1
 * 
 * Quy trình hoạt động:
 * 1. Kiểm tra phiên bản và địa chỉ IP
 * 2. Khởi tạo kết nối WebSocket
 * 3. Thiết lập các event handlers (onopen, onclose, onerror, onmessage)
 * 4. Khởi tạo Unisound service và kiểm tra trạng thái đăng nhập
 * 5. Phục hồi trạng thái UI trước đó nếu kết nối lại
 * 
 * Xử lý lỗi:
 * - Địa chỉ IP trống hoặc không hợp lệ
 * - Lỗi khởi tạo WebSocket
 * - Timeout khi khởi tạo Unisound
 * - Kết nối bị đóng
 * 
 * Các biến quan trọng:
 * - ws: Đối tượng WebSocket
 * - ip: Địa chỉ IP của thiết bị R1
 * - ver, u_ver: Phiên bản của EchoService và Unisound
 * - init_state, init_state1: Trạng thái khởi tạo
 */
function init() {
    // Mã nguồn gốc...
}

/**
 * Ví dụ 2: Thêm comment chi tiết cho hàm update_info()
 */

/**
 * Cập nhật giao diện người dùng dựa trên dữ liệu nhận được từ thiết bị
 * 
 * Chức năng chính:
 * 1. Cập nhật các trạng thái điều khiển (volume, nút, thanh trượt)
 * 2. Kiểm tra các thay đổi phiên bản và reload nếu cần
 * 3. Cập nhật thông tin bài hát đang phát
 * 4. Cập nhật trạng thái Unisound và các chức năng đặc biệt
 * 5. Cập nhật cài đặt người dùng (TTS, nguồn nhạc, chế độ phát)
 * 
 * Tham số:
 * @param {Object} data - Dữ liệu trả về từ lệnh 'get_info'
 * 
 * Lưu ý:
 * - Chỉ cập nhật volume slider nếu không đang kéo (mousedown = false)
 * - Nếu phiên bản thay đổi, trang sẽ tải lại để áp dụng cập nhật
 * - Các cập nhật UI phụ thuộc vào phiên bản thiết bị (ver và u_ver)
 */
function update_info(data) {
    // Mã nguồn gốc...
}

/**
 * Ví dụ 3: Thêm comment cho hàm xử lý WebSocket
 */

/**
 * Gửi dữ liệu qua WebSocket và xử lý phản hồi
 * 
 * Chức năng:
 * 1. Đặt ID yêu cầu và thông báo thành công
 * 2. Kiểm tra trạng thái WebSocket trước khi gửi
 * 3. Xử lý các tình huống đặc biệt (như cập nhật DeviceStatus)
 * 4. Thực thi callback sau khi gửi (nếu được cung cấp)
 * 
 * Tham số:
 * @param {String} success_tip - Thông báo thành công
 * @param {String} type_id - ID yêu cầu (hiển thị trong bảng điều khiển)
 * @param {String} ws_type - Loại yêu cầu WebSocket
 * @param {Object} data_payload - Dữ liệu gửi đi
 * @param {Function} callback - Hàm callback sau khi gửi (tùy chọn)
 * 
 * Xử lý lỗi:
 * - Kiểm tra WebSocket đã sẵn sàng (OPEN)
 * - Hiển thị lỗi nếu kết nối không khả dụng
 */
function send(success_tip, type_id, ws_type, data_payload, callback = null) {
    // Mã nguồn gốc...
}

// ========== PHẦN 2: TỐI ƯU HÓA TIMER ==========

/**
 * CÁC VẤN ĐỀ VỚI TIMER HIỆN TẠI:
 * 
 * 1. Quá nhiều setTimeout không cần thiết (hơn 90 lần sử dụng)
 * 2. Nhiều timer không được xóa sau khi sử dụng (clearTimeout)
 * 3. Tốn tài nguyên do các timer chồng chéo
 * 4. Hiệu ứng "timer cascade" khi các timer lồng nhau
 */

/**
 * GIẢI PHÁP TỐI ƯU HÓA TIMER:
 */

/**
 * 1. Thay thế các setTimeout ngắn bằng requestAnimationFrame
 * 
 * Ví dụ thay đổi:
 * setTimeout(() => { 
 *     // update UI
 * }, 10);
 * 
 * Tối ưu thành:
 * requestAnimationFrame(() => {
 *     // update UI
 * });
 */

/**
 * 2. Hợp nhất các timer có cùng chức năng
 * 
 * Ví dụ thay đổi các đoạn:
 * vols_disabled_timer = setTimeout(function () { vols.style.pointerEvents = 'none'; }, 3000);
 * ...
 * vols_disabled_timer = setTimeout(() => { vols.style.pointerEvents = 'none'; }, 3000);
 * 
 * Tối ưu thành hàm trung gian:
 * function disableVolsAfterDelay() {
 *     clearTimeout(vols_disabled_timer);
 *     vols_disabled_timer = setTimeout(() => {
 *         vols.style.pointerEvents = 'none';
 *     }, 3000);
 * }
 */

/**
 * 3. Tạo Timer Manager để quản lý tập trung
 * 
 * const TimerManager = {
 *     timers: {},
 *     
 *     // Đặt timer mới
 *     set: function(name, callback, delay) {
 *         this.clear(name);
 *         this.timers[name] = setTimeout(callback, delay);
 *         return this.timers[name];
 *     },
 *     
 *     // Xóa timer theo tên
 *     clear: function(name) {
 *         if (this.timers[name]) {
 *             clearTimeout(this.timers[name]);
 *             delete this.timers[name];
 *         }
 *     },
 *     
 *     // Xóa tất cả timer
 *     clearAll: function() {
 *         for (let name in this.timers) {
 *             this.clear(name);
 *         }
 *     }
 * };
 * 
 * // Cách sử dụng:
 * TimerManager.set('updateInfo', () => {
 *     ws_send(JSON.stringify({ type: 'get_info' }));
 * }, 1000);
 * 
 * // Xóa timer khi không cần
 * TimerManager.clear('updateInfo');
 */

/**
 * 4. Sử dụng tiết chế (throttle) và debounce cho các hoạt động thường xuyên
 * 
 * // Hàm debounce
 * function debounce(func, wait) {
 *     let timeout;
 *     return function() {
 *         const context = this;
 *         const args = arguments;
 *         clearTimeout(timeout);
 *         timeout = setTimeout(() => {
 *             func.apply(context, args);
 *         }, wait);
 *     };
 * }
 * 
 * // Hàm throttle
 * function throttle(func, limit) {
 *     let inThrottle;
 *     return function() {
 *         const args = arguments;
 *         const context = this;
 *         if (!inThrottle) {
 *             func.apply(context, args);
 *             inThrottle = true;
 *             setTimeout(() => { inThrottle = false; }, limit);
 *         }
 *     };
 * }
 * 
 * // Áp dụng cho việc cập nhật thông tin
 * const throttledUpdateInfo = throttle(() => {
 *     if (ws && ws.readyState === WebSocket.OPEN) {
 *         ws_send(JSON.stringify({ type: 'get_info' }));
 *     }
 * }, 1000);
 */

// ========== PHẦN 3: CẢI THIỆN ERROR HANDLING ==========

/**
 * CÁC VẤN ĐỀ VỚI ERROR HANDLING HIỆN TẠI:
 * 
 * 1. Thiếu try-catch ở nhiều vị trí xử lý dữ liệu quan trọng
 * 2. Xử lý lỗi WebSocket chưa đầy đủ
 * 3. Thông báo lỗi không rõ ràng và không nhất quán
 * 4. Không ghi log lỗi đầy đủ để debug
 */

/**
 * GIẢI PHÁP CẢI THIỆN ERROR HANDLING:
 */

/**
 * 1. Thêm try-catch cho các xử lý JSON và API
 * 
 * Ví dụ thay đổi:
 * ws.onmessage = function (data) {
 *     var obj = JSON.parse(data.data);
 *     // Xử lý dữ liệu
 * };
 * 
 * Tối ưu thành:
 * ws.onmessage = function (data) {
 *     try {
 *         var obj = JSON.parse(data.data);
 *         // Xử lý dữ liệu
 *     } catch (e) {
 *         console.error("Lỗi phân tích dữ liệu JSON:", e);
 *         // Xử lý khi dữ liệu không hợp lệ
 *     }
 * };
 */

/**
 * 2. Tạo lớp ErrorHandler để quản lý lỗi tập trung
 * 
 * const ErrorHandler = {
 *     // Mức độ lỗi
 *     LEVELS: {
 *         INFO: 'info',
 *         WARNING: 'warning',
 *         ERROR: 'error',
 *         CRITICAL: 'critical'
 *     },
 *     
 *     // Xử lý lỗi
 *     handle: function(error, level = this.LEVELS.ERROR, context = '') {
 *         // Log ra console
 *         console[level](`[${context}] ${error.message || error}`);
 *         
 *         // Ghi log nếu cần
 *         this.logError(error, level, context);
 *         
 *         // Hiển thị thông báo cho người dùng nếu cần
 *         if (level === this.LEVELS.ERROR || level === this.LEVELS.CRITICAL) {
 *             this.showUserError(error, context);
 *         }
 *         
 *         // Xử lý đặc biệt cho lỗi nghiêm trọng
 *         if (level === this.LEVELS.CRITICAL) {
 *             this.handleCritical(error, context);
 *         }
 *     },
 *     
 *     // Log lỗi
 *     logError: function(error, level, context) {
 *         const logData = {
 *             timestamp: new Date().toISOString(),
 *             level,
 *             context,
 *             message: error.message || error,
 *             stack: error.stack
 *         };
 *         
 *         // Lưu log vào localStorage để xem sau
 *         const logs = JSON.parse(localStorage.getItem('r1_error_logs') || '[]');
 *         logs.push(logData);
 *         // Giới hạn số lượng log
 *         if (logs.length > 100) logs.shift();
 *         localStorage.setItem('r1_error_logs', JSON.stringify(logs));
 *     },
 *     
 *     // Hiển thị lỗi cho người dùng
 *     showUserError: function(error, context) {
 *         const message = error.message || error;
 *         // Kiểm tra loại lỗi và hiển thị thông báo phù hợp
 *         if (message.includes('WebSocket')) {
 *             // Lỗi kết nối
 *             alert(`Lỗi kết nối: ${message}. Vui lòng kiểm tra kết nối mạng và IP thiết bị.`);
 *         } else if (context === 'JSON') {
 *             // Lỗi dữ liệu
 *             console.error(`Lỗi dữ liệu: ${message}`);
 *             // Không hiển thị alert để tránh làm phiền người dùng
 *         } else {
 *             // Các lỗi khác
 *             alert(`Lỗi: ${message}`);
 *         }
 *     },
 *     
 *     // Xử lý lỗi nghiêm trọng
 *     handleCritical: function(error, context) {
 *         // Thử kết nối lại hoặc reload trang
 *         setTimeout(() => {
 *             if (confirm('Đã xảy ra lỗi nghiêm trọng. Bạn có muốn tải lại trang không?')) {
 *                 location.reload();
 *             }
 *         }, 1000);
 *     }
 * };
 * 
 * // Sử dụng:
 * try {
 *     // Code có thể gây lỗi
 * } catch (e) {
 *     ErrorHandler.handle(e, ErrorHandler.LEVELS.ERROR, 'WebSocket');
 * }
 */

/**
 * 3. Cải thiện xử lý lỗi WebSocket
 * 
 * ws.onerror = function(event) {
 *     const errorMessage = event.message || "Không xác định";
 *     
 *     // Log chi tiết lỗi
 *     console.error("WebSocket Error:", errorMessage, event);
 *     
 *     // Phân tích nguyên nhân lỗi
 *     let reason = "Lỗi kết nối";
 *     if (errorMessage.includes("timeout")) {
 *         reason = "Kết nối bị hết thời gian chờ";
 *     } else if (errorMessage.includes("refused")) {
 *         reason = "Kết nối bị từ chối. Kiểm tra IP và cổng.";
 *     }
 *     
 *     // Cập nhật UI
 *     const h3Element = document.getElementsByTagName('h3')[0];
 *     if (h3Element) {
 *         h3Element.innerHTML = `Lỗi kết nối: ${reason}`;
 *     }
 *     
 *     // Kiểm tra số lần thử lại
 *     connectionAttempts = (connectionAttempts || 0) + 1;
 *     
 *     if (connectionAttempts < 3) {
 *         // Thử lại kết nối với thời gian chờ tăng dần
 *         const timeout = 1000 * connectionAttempts;
 *         console.log(`Đang thử kết nối lại sau ${timeout/1000} giây...`);
 *         setTimeout(init, timeout);
 *     } else {
 *         // Hiển thị lựa chọn kết nối lại hoặc nhập IP mới
 *         console.error("Không thể kết nối sau nhiều lần thử. Yêu cầu tương tác người dùng.");
 *         alert(`Không thể kết nối với loa R1.\n\nNguyên nhân có thể:\n1. Địa chỉ IP không chính xác\n2. Loa không hoạt động\n3. Vấn đề mạng\n\nVui lòng kiểm tra và thử lại.`);
 *         
 *         // Hiển thị trang nhập IP
 *         custom_ip_page();
 *         
 *         // Reset counter
 *         connectionAttempts = 0;
 *     }
 * };
 */

/**
 * 4. Xử lý lỗi toàn cục
 * 
 * // Bắt tất cả lỗi không xử lý
 * window.onerror = function(message, source, lineno, colno, error) {
 *     console.error("Unhandled error:", message, "at", source, "line", lineno, "column", colno);
 *     console.error("Error object:", error);
 *     
 *     // Lưu lỗi vào localStorage để debug
 *     const errorLog = JSON.parse(localStorage.getItem('r1_global_errors') || '[]');
 *     errorLog.push({
 *         timestamp: new Date().toISOString(),
 *         message,
 *         source,
 *         lineno,
 *         colno,
 *         stack: error ? error.stack : null
 *     });
 *     
 *     // Giới hạn số lượng lỗi lưu trữ
 *     if (errorLog.length > 50) errorLog.shift();
 *     localStorage.setItem('r1_global_errors', JSON.stringify(errorLog));
 *     
 *     // Hiển thị lỗi cho người dùng trong trường hợp nghiêm trọng
 *     if (message.includes("Cannot read property") || 
 *         message.includes("is not defined") || 
 *         message.includes("is not a function")) {
 *         const h3Element = document.getElementsByTagName('h3')[0];
 *         if (h3Element) {
 *             h3Element.innerHTML = "Lỗi JavaScript. Vui lòng tải lại trang!";
 *         }
 *     }
 *     
 *     // Tiếp tục xử lý lỗi mặc định
 *     return false;
 * };
 * 
 * // Bắt lỗi Promise không xử lý
 * window.onunhandledrejection = function(event) {
 *     console.error("Unhandled promise rejection:", event.reason);
 *     
 *     // Lưu lỗi vào localStorage
 *     const errorLog = JSON.parse(localStorage.getItem('r1_promise_errors') || '[]');
 *     errorLog.push({
 *         timestamp: new Date().toISOString(),
 *         message: event.reason.message || String(event.reason),
 *         stack: event.reason.stack
 *     });
 *     
 *     // Giới hạn số lượng lỗi lưu trữ
 *     if (errorLog.length > 50) errorLog.shift();
 *     localStorage.setItem('r1_promise_errors', JSON.stringify(errorLog));
 * };
 */ 