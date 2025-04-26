if (!window.control_host) {
    // Vẫn có thể để lại control_host hoặc đặt thành '' cho local
    window.control_host = location.host;
}
var web_ver = 2791; // Giữ nguyên hoặc thay đổi nếu muốn kiểm tra phiên bản local
if (localStorage.getItem('web_ver') && localStorage.getItem('web_ver') != web_ver) {
    localStorage.setItem('web_ver', web_ver);
    var time = new Date().getTime();
    setCookie('time', time, 604800);
    // Dịch thông báo
    document.getElementsByTagName("h3")[0].innerHTML = 'Updating data...';
    setTimeout(function () {
        location.reload();
    }, 500);
} else {
    if (!localStorage.getItem('web_ver')) {
        localStorage.setItem('web_ver', web_ver);
    }
    var script = document.createElement('script'); script.type = 'text/javascript';
    var time = getCookie('time');
    if (time == '') {
        time = new Date().getTime();
        setCookie('time', time, 604800);
    }
    // Sửa đường dẫn CSS thành tương đối
    document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='./new_r1_control.css?t=" + time + "'/>";

    // Sửa đường dẫn JS thành tương đối
    script.src = './js/r1_control.js?t=' + time;
    document.body.appendChild(script);
}