/**
 * ErrorHandler - Quản lý tập trung việc xử lý lỗi trong ứng dụng
 * 
 * Lớp này giúp xử lý lỗi một cách nhất quán, ghi log và hiển thị thông báo
 * phù hợp cho người dùng.
 */
const ErrorHandler = {
    // Mức độ lỗi
    LEVELS: {
        INFO: 'info',
        WARNING: 'warning',
        ERROR: 'error',
        CRITICAL: 'critical'
    },
    
    // Số lần thử kết nối lại
    connectionAttempts: 0,
    
    /**
     * Xử lý lỗi
     * 
     * @param {Error|String} error - Đối tượng lỗi hoặc thông báo lỗi
     * @param {String} level - Mức độ lỗi (từ LEVELS)
     * @param {String} context - Ngữ cảnh xảy ra lỗi
     */
    handle: function(error, level = this.LEVELS.ERROR, context = '') {
        // Log ra console
        console[level === this.LEVELS.CRITICAL ? 'error' : level](`[${context}] ${error.message || error}`);
        
        // Ghi log nếu cần
        this.logError(error, level, context);
        
        // Hiển thị thông báo cho người dùng nếu cần
        if (level === this.LEVELS.ERROR || level === this.LEVELS.CRITICAL) {
            this.showUserError(error, context);
        }
        
        // Xử lý đặc biệt cho lỗi nghiêm trọng
        if (level === this.LEVELS.CRITICAL) {
            this.handleCritical(error, context);
        }
    },
    
    /**
     * Log lỗi
     * 
     * @param {Error|String} error - Đối tượng lỗi hoặc thông báo lỗi
     * @param {String} level - Mức độ lỗi
     * @param {String} context - Ngữ cảnh xảy ra lỗi
     */
    logError: function(error, level, context) {
        const logData = {
            timestamp: new Date().toISOString(),
            level,
            context,
            message: error.message || error,
            stack: error.stack
        };
        
        // Lưu log vào localStorage để xem sau
        const logs = JSON.parse(localStorage.getItem('r1_error_logs') || '[]');
        logs.push(logData);
        // Giới hạn số lượng log
        if (logs.length > 100) logs.shift();
        localStorage.setItem('r1_error_logs', JSON.stringify(logs));
    },
    
    /**
     * Hiển thị lỗi cho người dùng
     * 
     * @param {Error|String} error - Đối tượng lỗi hoặc thông báo lỗi
     * @param {String} context - Ngữ cảnh xảy ra lỗi
     */
    showUserError: function(error, context) {
        const message = error.message || error;
        
        // Kiểm tra loại lỗi và hiển thị thông báo phù hợp
        if (message.includes('WebSocket')) {
            // Lỗi kết nối
            console.error(`Lỗi kết nối: ${message}`);
            // Cập nhật UI nếu có thể
            const h3Element = document.getElementsByTagName('h3')[0];
            if (h3Element) {
                h3Element.innerHTML = `Lỗi kết nối: Vui lòng kiểm tra kết nối mạng và IP thiết bị.`;
            }
        } else if (context === 'JSON') {
            // Lỗi dữ liệu
            console.error(`Lỗi dữ liệu: ${message}`);
            // Không hiển thị alert để tránh làm phiền người dùng
        } else {
            // Các lỗi khác
            console.error(`Lỗi: ${message}`);
        }
    },
    
    /**
     * Xử lý lỗi WebSocket
     * 
     * @param {Event} event - Sự kiện lỗi WebSocket
     */
    handleWebSocketError: function(event) {
        const errorMessage = event.message || "Không xác định";
        
        // Log chi tiết lỗi
        console.error("WebSocket Error:", errorMessage, event);
        
        // Phân tích nguyên nhân lỗi
        let reason = "Lỗi kết nối";
        if (errorMessage.includes("timeout")) {
            reason = "Kết nối bị hết thời gian chờ";
        } else if (errorMessage.includes("refused")) {
            reason = "Kết nối bị từ chối. Kiểm tra IP và cổng.";
        }
        
        // Cập nhật UI
        const h3Element = document.getElementsByTagName('h3')[0];
        if (h3Element) {
            h3Element.innerHTML = `Lỗi kết nối: ${reason}`;
        }
        
        // Kiểm tra số lần thử lại
        this.connectionAttempts++;
        
        if (this.connectionAttempts < 3) {
            // Thử lại kết nối với thời gian chờ tăng dần
            const timeout = 1000 * this.connectionAttempts;
            console.log(`Đang thử kết nối lại sau ${timeout/1000} giây...`);
            
            // Sử dụng TimerManager nếu có
            if (typeof TimerManager !== 'undefined') {
                TimerManager.set('reconnect', init, timeout);
            } else {
                setTimeout(init, timeout);
            }
        } else {
            // Hiển thị lựa chọn kết nối lại hoặc nhập IP mới
            console.error("Không thể kết nối sau nhiều lần thử. Yêu cầu tương tác người dùng.");
            
            // Hiển thị trang nhập IP nếu hàm tồn tại
            if (typeof custom_ip_page === 'function') {
                custom_ip_page();
            }
            
            // Reset counter
            this.connectionAttempts = 0;
        }
    },
    
    /**
     * Xử lý lỗi nghiêm trọng
     * 
     * @param {Error|String} error - Đối tượng lỗi hoặc thông báo lỗi
     * @param {String} context - Ngữ cảnh xảy ra lỗi
     */
    handleCritical: function(error, context) {
        // Thử kết nối lại hoặc reload trang
        if (typeof TimerManager !== 'undefined') {
            TimerManager.set('criticalError', () => {
                if (confirm('Đã xảy ra lỗi nghiêm trọng. Bạn có muốn tải lại trang không?')) {
                    location.reload();
                }
            }, 1000);
        } else {
            setTimeout(() => {
                if (confirm('Đã xảy ra lỗi nghiêm trọng. Bạn có muốn tải lại trang không?')) {
                    location.reload();
                }
            }, 1000);
        }
    },
    
    /**
     * Thiết lập xử lý lỗi toàn cục
     */
    setupGlobalHandlers: function() {
        // Bắt tất cả lỗi không xử lý
        window.onerror = (message, source, lineno, colno, error) => {
            console.error("Unhandled error:", message, "at", source, "line", lineno, "column", colno);
            console.error("Error object:", error);
            
            // Lưu lỗi vào localStorage để debug
            const errorLog = JSON.parse(localStorage.getItem('r1_global_errors') || '[]');
            errorLog.push({
                timestamp: new Date().toISOString(),
                message,
                source,
                lineno,
                colno,
                stack: error ? error.stack : null
            });
            
            // Giới hạn số lượng lỗi lưu trữ
            if (errorLog.length > 50) errorLog.shift();
            localStorage.setItem('r1_global_errors', JSON.stringify(errorLog));
            
            // Hiển thị lỗi cho người dùng trong trường hợp nghiêm trọng
            if (message.includes("Cannot read property") || 
                message.includes("is not defined") || 
                message.includes("is not a function")) {
                const h3Element = document.getElementsByTagName('h3')[0];
                if (h3Element) {
                    h3Element.innerHTML = "Lỗi JavaScript. Vui lòng tải lại trang!";
                }
            }
            
            // Tiếp tục xử lý lỗi mặc định
            return false;
        };
        
        // Bắt lỗi Promise không xử lý
        window.onunhandledrejection = (event) => {
            console.error("Unhandled promise rejection:", event.reason);
            
            // Lưu lỗi vào localStorage
            const errorLog = JSON.parse(localStorage.getItem('r1_promise_errors') || '[]');
            errorLog.push({
                timestamp: new Date().toISOString(),
                message: event.reason.message || String(event.reason),
                stack: event.reason.stack
            });
            
            // Giới hạn số lượng lỗi lưu trữ
            if (errorLog.length > 50) errorLog.shift();
            localStorage.setItem('r1_promise_errors', JSON.stringify(errorLog));
        };
    }
};

// Thiết lập xử lý lỗi toàn cục khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    ErrorHandler.setupGlobalHandlers();
});
