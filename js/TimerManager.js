/**
 * TimerManager - Quản lý tập trung các timer trong ứng dụng
 * 
 * Lớp này giúp quản lý các timer (setTimeout và setInterval) một cách hiệu quả,
 * tránh việc tạo quá nhiều timer và quên xóa chúng.
 */
const TimerManager = {
    // Lưu trữ các timer theo tên
    timers: {},
    
    /**
     * Đặt một timer mới
     * 
     * @param {String} name - Tên định danh của timer
     * @param {Function} callback - Hàm sẽ được gọi khi timer kết thúc
     * @param {Number} delay - Thời gian chờ (ms)
     * @param {Boolean} recurring - Nếu true, sử dụng setInterval thay vì setTimeout
     * @return {Number} ID của timer
     */
    set: function(name, callback, delay, recurring = false) {
        // Xóa timer cũ nếu tồn tại
        this.clear(name);
        
        // Tạo timer mới
        if (recurring) {
            this.timers[name] = setInterval(callback, delay);
        } else {
            this.timers[name] = setTimeout(callback, delay);
        }
        
        return this.timers[name];
    },
    
    /**
     * Xóa timer theo tên
     * 
     * @param {String} name - Tên định danh của timer cần xóa
     */
    clear: function(name) {
        if (this.timers[name]) {
            clearTimeout(this.timers[name]);
            clearInterval(this.timers[name]);
            delete this.timers[name];
        }
    },
    
    /**
     * Xóa tất cả timer
     */
    clearAll: function() {
        for (let name in this.timers) {
            this.clear(name);
        }
    },
    
    /**
     * Kiểm tra xem timer có tồn tại không
     * 
     * @param {String} name - Tên định danh của timer
     * @return {Boolean} true nếu timer tồn tại
     */
    exists: function(name) {
        return !!this.timers[name];
    },
    
    /**
     * Tạo một hàm debounce
     * 
     * @param {Function} func - Hàm cần debounce
     * @param {Number} wait - Thời gian chờ (ms)
     * @param {String} name - Tên định danh (tùy chọn)
     * @return {Function} Hàm đã được debounce
     */
    debounce: function(func, wait, name) {
        const timerName = name || 'debounce_' + Math.random().toString(36).substr(2, 9);
        return (...args) => {
            this.clear(timerName);
            this.set(timerName, () => func(...args), wait);
        };
    },
    
    /**
     * Tạo một hàm throttle
     * 
     * @param {Function} func - Hàm cần throttle
     * @param {Number} limit - Thời gian giới hạn (ms)
     * @param {String} name - Tên định danh (tùy chọn)
     * @return {Function} Hàm đã được throttle
     */
    throttle: function(func, limit, name) {
        const timerName = name || 'throttle_' + Math.random().toString(36).substr(2, 9);
        let lastRun = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastRun >= limit) {
                func(...args);
                lastRun = now;
            }
        };
    }
};

// Đảm bảo xóa tất cả timer khi trang được tải lại hoặc đóng
window.addEventListener('beforeunload', function() {
    TimerManager.clearAll();
});
