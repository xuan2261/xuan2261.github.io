// Sửa phần hiển thị lyrics
function fixLyrics() {
  // Tìm hàm update_lrc trong file r1_control.js
  var script = document.createElement('script');
  script.textContent = `
    // Ghi đè phần hiển thị lyrics
    var originalForEach = Array.prototype.forEach;
    
    // Ghi đè phương thức forEach để chặn và sửa đổi cách hiển thị lyrics
    Array.prototype.forEach = function(callback, thisArg) {
      if (this.length > 0 && this[0] instanceof Array && this[0].length === 2 && 
          typeof this[0][0] === 'number' && typeof this[0][1] === 'string') {
        // Đây có thể là mảng lyrics
        return originalForEach.call(this, function(lrc_line, index, array) {
          // Gọi callback gốc với tham số bổ sung
          if (lrc_line[0] === -1) {
            // Đây là dòng không có timestamp (tiêu đề, nghệ sĩ, album)
            var originalCallback = callback;
            callback = function(item, index, array) {
              // Tạo phần tử h3 mới
              var result = originalCallback(item, index, array);
              
              // Tìm phần tử h3 vừa được tạo
              var lrcElements = document.querySelectorAll('.lrc');
              if (lrcElements.length > 0) {
                var lastLrcElement = lrcElements[lrcElements.length - 1];
                lastLrcElement.style.fontWeight = 'bold';
                lastLrcElement.style.color = '#ff9347'; // Màu cam nhạt
              }
              
              return result;
            };
          }
          
          return callback.call(thisArg, lrc_line, index, this);
        }, thisArg);
      }
      
      // Nếu không phải mảng lyrics, sử dụng forEach gốc
      return originalForEach.call(this, callback, thisArg);
    };
    
    console.log('Đã sửa cách hiển thị lyrics');
  `;
  document.head.appendChild(script);
}

// Thực thi khi trang đã tải xong
window.addEventListener('load', fixLyrics);
