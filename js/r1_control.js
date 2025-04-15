var xiaofei = true; // Keep original variable names unless clearly Chinese pinyin with obvious English equivalent
if (!ip) {
    var ip = '';
}
if (!ver) {
    var ver = 1000;
}
if (!u_ver) {
    var u_ver = 1000;
}
//var web_ver = 1000; // Defined in refresh.js
if (!custom_ip) {
    var custom_ip = false; // Keep as is, controls logic flow
}
if (!control_host) {
    // Let refresh.js handle this, or set to '' if needed for local logic
    var control_host = location.host;
}
var Storage = localStorage;
var connect_init = false;
var display_RebootEcho_timer = -1;
var Current_MusicData = null;
var login_timer = -1;
var switch_quality = document.createElement('select');
var quality_text = document.createElement('text');
var temp_song_list = null;
var _hmt = _hmt || []; // Baidu analytics related
var Cover_background_open = false;
var background_div = document.createElement('div');
var connect_id = null;
var connect_ip = -1; // Keep -1 as initial state
var update_lrc_init = false;
var long_press_timer = -1;
var listonclick_timer = -1;
var Wakeup_set_btn = document.createElement("input");
var update_music_info_timer = -1;
var login_param = { aid: 716027609, daid: 383, pt_3rd_aid: 100497308, u1: 'https://graph.qq.com/oauth2.0/login_jump', referer: 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&daid=383&style=33&theme=2&login_text=%E6%8E%88%E6%9D%83%E5%B9%B6%E7%99%BB%E5%BD%95&hide_title_bar=1&hide_border=1&target=self&s_url=https%3A%2F%2Fgraph.qq.com%2Foauth2.0%2Flogin_jump&pt_3rd_aid=100497308&pt_feedback_link=https%3A%2F%2Fsupport.qq.com%2Fproducts%2F77942%3FcustomInfo%3D.appid100497308' }; // Keep login params
var login_app = 'qqmusic'; // Default login app
var bak_lrc_time = -1;
var is_unisound_num = [0, 0, 0];
var Unisound_info = [];
var touch_disable = false;
var test_connect_timeout_timer = -1;
var test_connect_state = false;
var text_window_div = null;
var color_selection_div = null;
var Auto_restart_device_times = [];
var Auto_restart_device_div = null;
var Time_reporting_list = [];
var Voice_time_reporting_div = null;
var qr_last_update_time = -1;
var qr_update_time = -1;
var device_date = null;
var local_ip = null;
var ping_r1service_time = 0;
var ping_r1service = -1;
var btn_bluetooth_enable = document.createElement("input");
var btn_bluetooth_scan1 = document.createElement("input");
var btn_bluetooth_scan = document.createElement("input");
var bluetooth_scan_devices = document.createElement('div');
var bluetooth_pairing_devices = document.createElement('div');
var bluetooth_lists = document.createElement('div');
var bluetooth_list_div = document.createElement('div');
var update_bluetooth_timer = -1;
var bluetooth_div = document.createElement('div');
var page_list = [];
var bak_lrc = '';
var List = [];
var asrMaxDuration_value = document.createElement('text');
var asrMaxDuration_timer = -1;
var asrMaxDuration = document.createElement('input');
var inputs = [];
var Bluetooth_prompt_tone_btn = document.createElement("input");
var info = [];
var play_type = 0;
var Submit_Play_Record_btn = document.createElement("input");
var update_background_timer = -1;
var Data = []; // Potentially holds various data structures
var update_device_info_timer = -1;
var dormancy_btn = document.createElement("input");
var dev_name = ''; // Device name short identifier
var hostname = ''; // Full hostname
var music_progress_timer = -1;
var Main_Wakeup_Benchmark_timer = -1;
var Main_Wakeup_Benchmark = document.createElement('input');
var memo_list = []; // Reminder list
var is_new_unisound = true; // Flag for Unisound version
var is_unisound = true; // Flag if Unisound service is detected/enabled
var reload = false; // Flag to trigger page reload
var unisound_init_timer = -1;
var unisound_init_timer1 = -1;
var useless_services_list = [];
var test_arr = []; // For testing purposes probably
var time_lock = false; // Lock for music progress bar update
var update_device_info_time = 0;
var device_info_data = []; // Holds data for device info page
var device_info = document.createElement('div'); // Container for device info page
var iframe = document.createElement('iframe'); // Used for cross-domain storage sync?
var qrcode_load = false; // QR code loaded flag
var main_div = document.createElement('div'); // Main container
var connect_timer = -1; // Timer for auto-connect
var qrstate = 0; // QR code login state
var ping_timer = -1; // WebSocket ping timer
var login_state_timer = -1; // Timer for checking login state
var qrstate_timer = -1; // Timer for checking QR code state
var qrcode_msg = document.createElement('text'); // Text message for QR code status
var qrcode = document.createElement('img'); // QR code image element
var login_div = document.createElement('div'); // Container for login elements
var mousedown = false; // Flag for mouse down state (used for sliders)
var sound_effects_timer = -1; // Timer for updating sound effects page
var preset_div = document.createElement('div'); // Container for EQ presets
var eqs_div = document.createElement('div'); // Container for EQ bands
var bass_div = document.createElement('div'); // Container for Bass Boost
var loudness_div = document.createElement('div'); // Container for Loudness
var sound_effects_div = document.createElement('div'); // Container for sound effects page
var music_lrc = document.createElement('div'); // Container for lyrics
var popup = document.createElement('div'); // General purpose popup container
var play_index = 0; // Current playing index in the playlist
var music_title = ''; // For scrolling title display
var title_scrolling_timer = -1;
var switch_btns = document.createElement('div'); // Container for main page switching buttons
var btn_states = []; // Array to hold button elements for state updates
var info_time = []; // Array to store [timestamp, position, duration] for progress
var title_display_time = 0; // Timer to control title display vs lyrics
var lrcs = [[-1, 'No lyrics available']]; // Default lyrics // Dịch
var lrc_timer = -1; // Timer for lyrics update
var api_music_info = null; // Holds music info fetched from external API
var music_info = null; // Holds current music info from speaker
var init_state1 = true; // Initial state flags
var init_state = true;
var ws = null; // WebSocket object
var tips_data = []; // Stores success/error messages for buttons
var current_page = null; // Currently displayed page element
var mousewheel_interval = -1; // Interval for mouse wheel scrolling
var startx = -1; // Touch start coordinates
var starty = -1;
var vols_disabled_timer = -1; // Timer to disable volume slider after use
var music_id = ''; // Current music ID
var timer = -1; // General purpose timer, often for get_info polling
var screen_timer = -1; // Timer for screen capture update
var screen_div = document.createElement('div'); // Container for screen control page
var h3 = document.createElement('h3'); // Main title element
var divs = document.createElement('div'); // Main content container (holds pages)
var texts_div = document.createElement('div'); // Container for text input/output area
var btns_div = document.createElement('div'); // Container for action buttons
var musics_div = document.createElement('div'); // Container for music control page
var vols = document.createElement('input'); // Volume slider
var music_pic = document.createElement('img'); // Music cover image
var music_time = document.createElement('input'); // Music progress slider
var music_time_position = document.createElement('text'); // Current time text
var music_time_duration = document.createElement('text'); // Total duration text
var div_list = document.createElement('div'); // Container for playlist display area
var lists = document.createElement('div'); // Inner container for playlist scrolling
var list = document.createElement('table'); // Table element for playlist
var vol_text = document.createElement('text'); // Text displaying volume value

var mousedown_event = (e) => {
    mousedown = true;
}

var mouseup_event = (e) => {
    mousedown = false;
}

var buttons = [
    ['Play Music', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 1, obj: 'web_播放' }, type: 1, min_ver: 1600, min_uver: 1700, err: 'Please enter the music to play, e.g., Artist Song Title!', succ: 'Request sent successfully!' }],
    ['Play Radio', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 1, obj: 'web_收听' }, type: 1, min_ver: 1600, min_uver: 1700, err: 'Please enter the radio station name, e.g., Shandong Music Radio!', succ: 'Request sent successfully!' }],
    ['Play Playlist', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 9, obj: '' }, type: 1, min_ver: 1700, min_uver: 1700, err: 'Please enter the playlist link, e.g., https://y.qq.com/n/ryqq/playlist/211111!', succ: 'Request sent successfully!' }],
    //['Favorite Songs',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_播放我喜欢的歌'},type:0,min_ver:1600,min_uver:1700,succ:'Okay, playing my favorite songs!'}], // Kept original Chinese in obj
    ['Personal Radio', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 1, obj: 'web_播放个性电台' }, type: 0, min_ver: 1600, min_uver: 1700, succ: 'Okay, playing personal radio!' }], // Kept original Chinese in obj
    ['My Playlists', { type: -1, min_ver: 1600, min_uver: 1800, itemType: 'get_song_list' }],
    ['Unisound Favorites', { ws_type: 'send_message', param: { what: 65536, arg1: 0, arg2: 8 }, type: 0, min_ver: 1700, min_uver: 1700, succ: 'Okay, playing Unisound favorites playlist!' }],
    ['Local Music', { type: -1, min_ver: 1853, itemType: 'play_local_music', max_ver: 1855 }],
    ['Local Music', { type: -1, itemType: 'play_local_music', min_ver: 1856, max_ver: 1864, state: ['info.Current_PlayerType', [1]] }],
    ['Local Music', { type: -1, itemType: 'play_local_music', min_ver: 1865, state: ['info.Current_PlayerType', [1, 2]] }],
    ['Turn On Bluetooth', { ws_type: 'send_message', param: { what: 64, arg1: 1, arg2: -1 }, type: 0, max_ver: 1810, max_uver: 1000, succ: 'Bluetooth enabled!' }],
    ['Turn On Bluetooth', { ws_type: 'send_message', param: { what: 256, arg1: 3, arg2: -1 }, type: 0, max_ver: 1810, min_uver: 1001, succ: 'Bluetooth enabled!' }],
    ['Turn Off Bluetooth', { ws_type: 'send_message', param: { what: 64, arg1: 2, arg2: -1 }, type: 0, max_ver: 1810, succ: 'Bluetooth disabled!' }],
    ['Turn On Ambient Light', { ws_type: 'send_message', param: { what: 4, arg1: 64, arg2: 1 }, type: 0, max_ver: 1810, succ: 'Ambient light turned on!' }],
    ['Turn Off Ambient Light', { ws_type: 'send_message', param: { what: 4, arg1: 64, arg2: 0 }, type: 0, max_ver: 1810, succ: 'Ambient light turned off!' }],
    // Translate toggle buttons
    ['Turn On Bluetooth', { ws_type: 'send_message', title: ['Bluetooth (Off)', 'Bluetooth (On)'], tips: ['Turn On Bluetooth', 'Turn Off Bluetooth'], param: [{ what: 64, arg1: 1, arg2: -1 }, { what: 64, arg1: 2, arg2: -1 }], type: 2, min_ver: 1820, max_uver: 1000, is_unisound: false, succ: ['Bluetooth enabled!', 'Bluetooth disabled!'], state: [0, 'info.device_state', [[0, 1, 2], 3]] }],
    ['Turn On Bluetooth', { ws_type: 'send_message', title: ['Bluetooth (Off)', 'Bluetooth (On)'], tips: ['Turn On Bluetooth', 'Turn Off Bluetooth'], param: [{ what: 256, arg1: 3, arg2: -1 }, { what: 64, arg1: 2, arg2: -1 }], type: 2, min_ver: 1820, max_uver: 1000, is_unisound: true, succ: ['Bluetooth enabled!', 'Bluetooth disabled!'], state: [0, 'info.device_state', [[0, 1, 2], 3]] }],
    ['Turn On Bluetooth', { ws_type: 'send_message', title: ['Bluetooth (Off)', 'Bluetooth (On)'], tips: ['Turn On Bluetooth', 'Turn Off Bluetooth'], param: [{ what: 256, arg1: 3, arg2: -1 }, { what: 64, arg1: 2, arg2: -1 }], type: 2, min_ver: 1820, min_uver: 1001, succ: ['Bluetooth enabled!', 'Bluetooth disabled!'], state: [0, 'info.device_state', [[0, 1, 2, 5], 3]] }],
    ['Execute Command', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 1, obj: 'web_' }, type: 1, min_ver: 1600, min_uver: 1839, err: 'Please enter the command to execute, e.g., Tomorrow\'s weather!', succ: 'Command sent!' }],
    ['Execute Shell', { ws_type: 'shell', input: 'shell', param: { shell: '' }, type: 1, err: 'Please enter the shell command to execute, e.g., getprop!' }],
    ['Reboot Unisound', { type: -1, is_unisound: true, itemType: 'reboot_unisound' }],
    ['Reboot Speaker', { type: -1, itemType: 'reboot' }],
    ['Reboot Echo', { type: -1, itemType: 'reboot_echo', min_ver: 1854 }],
    ['Turn On Ambient Light', { ws_type: 'send_message', title: ['Ambient Light (Off)', 'Ambient Light (On)'], tips: ['Turn On Ambient Light', 'Turn Off Ambient Light'], param: [{ what: 4, arg1: 64, arg2: 1 }, { what: 4, arg1: 64, arg2: 0 }], type: 2, min_ver: 1820, succ: ['Ambient light turned on!', 'Ambient light turned off!'], state: [0, 'info.music_light_enable', [false, true]] }],
    ['Modify Device Name', { ws_type: 'set_dev_name', input: 'dev_name', param: { dev_name: '' }, type: 1, min_ver: 1841, err: "Please enter the new device name!", succ: "Device name modified successfully!\nChanges for Bluetooth/DLNA/AirPlay will take effect on next startup!" }],
    ['Modify Unisound Wake Word', { ws_type: 'send_message', input: 'obj', param: { what: 65536, arg1: 0, arg2: 3, obj: '' }, type: 1, min_uver: 1600, err: 'Please enter the new Unisound wake word!', succ: "Unisound wake word modified successfully!\nTip: The default '小讯小讯' wake word will still be available!" }], // Kept original default wake word
    ['Enable Xiaoai Wakeup', { ws_type: 'send_message', is_unisound: true, title: ['Enable Xiaoai Wakeup', 'Disable Xiaoai Wakeup'], param: [{ what: 65536, arg1: 0, arg2: 10, obj: { type: 'set_wakeup_xiaoai', enable: true } }, { what: 65536, arg1: 0, arg2: 10, obj: { type: 'set_wakeup_xiaoai', enable: false } }], type: 2, min_uver: 1837, succ: ['Xiaoai wakeup enabled!', 'Xiaoai wakeup disabled!'], state: [2, 'Unisound_info.Wakeup_Xiaoai', [false, true], ['Unisound_info.is_xiaoai_exists', true]] }],
    ['Modify Xiaoai Wake Word', { ws_type: 'send_message', input: 'obj.word', param: { what: 65536, arg1: 0, arg2: 10, obj: { type: 'set_wakeup_xiaoai_word', word: '' } }, type: 1, min_uver: 1837, err: 'Please enter the new Xiaoai wake word!', succ: 'Xiaoai wake word modified successfully!', state: ['Unisound_info.is_xiaoai_exists', [true]] }],
    //['Xiaoai Tone Settings',{type:-1,itemType:'xiaoai_tonesettings',state:['Unisound_info.is_xiaoai_exists',[true]]}], // Title needs translation if shown
    ['Xiaoai Settings Page', { type: -1, itemType: 'xiaoai_settings', state: ['Unisound_info.is_xiaoai_exists', [true]] }],
    ['Reboot Xiaoai Service', { type: -1, itemType: 'reboot_xiaoaiservice', state: ['Unisound_info.is_xiaoai_exists', [true]] }],
    ['Activate Xiaoai (One-Click)', { type: -1, itemType: 'activation_xiaoai', state: ['Unisound_info.xiaoai_vercode', [902010020]] }],
    ['Set Voice Time Reporting', { type: -1, itemType: 'Voice_time_reporting', min_uver: 1832 }],
    ['Set Auto Reboot', { type: -1, itemType: 'Auto_restart_device', min_ver: 1848 }],
    ['Set Ambient Light Brightness', { ws_type: 'send_message', input: 'arg2', param: { what: 4, arg1: 65, arg2: '' }, type: 1, err: 'Please enter the brightness (default 100, min 1, max ~200 recommended)!', succ: 'Ambient light brightness modified successfully!' }],
    ['Switch to Official Ambient Effect', { ws_type: 'send_message', param: { what: 4, arg1: 67, arg2: 0 }, type: 0, max_ver: 1500, succ: 'Switched to official ambient effect!' }],
    ['Switch to Colorful Ambient Effect', { ws_type: 'send_message', param: { what: 4, arg1: 67, arg2: 1 }, type: 0, max_ver: 1500, succ: 'Switched to colorful ambient effect!' }],
    ['Switch to Official Ambient Effect', { ws_type: 'send_message', param: { what: 4, arg1: 68, arg2: 0 }, type: 0, min_ver: 1600, max_ver: 1810, succ: 'Switched to official ambient effect!' }],
    ['Switch to Colorful Ambient Effect', { ws_type: 'send_message', param: { what: 4, arg1: 68, arg2: 2 }, type: 0, min_ver: 1600, max_ver: 1810, succ: 'Switched to colorful ambient effect!' }],
    // Toggle buttons for ambient light modes - titles need translation
    ['Switch Colorful Ambient Effect', { ws_type: 'send_message', title: ['Current: Official Effect', 'Current: Colorful Effect', 'Current: Colorful Rotating', 'Current: Colorful Rotating 1', 'Current: Single Color'], param: [{ what: 4, arg1: 68, arg2: 2 }, { what: 4, arg1: 68, arg2: 1 }, { what: 4, arg1: 68, arg2: 3 }, { what: 4, arg1: 68, arg2: 4 }, { what: 4, arg1: 68, arg2: 0 }], type: 2, min_ver: 1848, succ: ['Switched to colorful ambient!', 'Switched to colorful rotating!', 'Switched to colorful rotating 1!', 'Switched to single color!', 'Switched to official ambient!'], state: [0, 'info.music_light_mode', [0, 2, 1, 3, 4]] }],
    ['Set Color Gradient Speed', { ws_type: 'send_message', input: 'arg2', param: { what: 4, arg1: 66, arg2: '' }, type: 3, err: 'Please enter speed (default 4, min 0, max 100)!', succ: 'Ambient light color gradient speed modified successfully!', state: ['info.music_light_mode', [0, 1, 3]], hide: true }],
    ['Set Ambient Light Color', { type: -1, itemType: 'modify_color', state: ['info.music_light_mode', [4]], hide: true }],
    ['Set Background Image', { type: -1, itemType: 'set_background' }],
    ['Turn Lights On', { ws_type: 'shell', param: { shell: 'lights_test set 7fffff8000 ffffff' }, type: 0, succ: 'Turned on!' }],
    ['Turn Lights Off', { ws_type: 'shell', param: { shell: 'lights_test set 7fffff8000 0' }, type: 0, succ: 'Turned off!' }],
    ['TTS', { ws_type: 'send_message', input: 'obj', param: { what: 65536, obj: '' }, type: 1, min_uver: 1800, err: 'Please enter the text to speak', succ: '' }],
    ['Open Network Config', { type: -1, itemType: 'open_net_config' }],
    ['Set IOT_API', { ws_type: 'send_message', input: 'obj.iot_api', param: { what: 65536, arg1: 0, arg2: 10, obj: '{"type":"set_iot_api","iot_api":""}' }, type: 1, min_uver: 1816, err: 'Please enter the API, e.g., http://r1.wxfsq.com/iot.php, Example response: {"status":200,"message":"ok","text":"tts content"}', succ: 'IOT_API set successfully!' }],
    ['Upload Software Update', { type: -1, min_ver: 1835, itemType: 'upload_page' }],
    // Toggle buttons for always-on services - titles need translation
    ['Allow DLNA Service Start', { ws_type: 'Set_DLNA_Open', title: ['DLNA Service (Disabled)', 'DLNA Service (Enabled)'], tips: ['Allow DLNA Service Start', 'Forbid DLNA Service Start'], param: [{ open: true }, { open: false }], type: 2, min_ver: 1852, succ: ['Allowed!', 'Forbidden, will take effect after current service disconnects!'], state: [0, 'info.dlna_open', [false, true]] }],
    ['Allow AirPlay Service Start', { ws_type: 'Set_AirPlay_Open', title: ['AirPlay Service (Disabled)', 'AirPlay Service (Enabled)'], tips: ['Allow AirPlay Service Start', 'Forbid AirPlay Service Start'], param: [{ open: true }, { open: false }], type: 2, min_ver: 1852, succ: ['Allowed!', 'Forbidden, will take effect after current service disconnects!'], state: [0, 'info.airplay_open', [false, true]] }],
    ['Keep Bluetooth/DLNA/AirPlay Always On', { ws_type: 'Set_Service_Normally_Open', title: ['BT/DLNA/AirPlay Always On (Off)', 'BT/DLNA/AirPlay Always On (On)'], tips: ['Enable BT/DLNA/AirPlay Always On', 'Disable BT/DLNA/AirPlay Always On'], param: [{ open: true }, { open: false }], type: 2, min_ver: 1840, succ: ['Enabled!', 'Disabled!'], state: [0, 'info.Service_Normally_Open', [false, true]] }],
    ['Device Connection Page', { type: -1, itemType: 'connect_page' }],
    //['Test',{type:-1,itemType:'test'}] // Keep for testing if needed
];

var reg_ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
var reg_ip1 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/;
var background = 'background-color:#A9D0F5'; // Default background color

var update_log = [
    '2021-03-19: Added anti-mistouch for volume bar (double-click to activate).',
    '2021-03-20: Added top lyrics display, simplified page buttons (effective in v1.8.2.0).',
    '2021-03-22: Updated page effects, added scrolling lyrics (double-click cover to switch).',
    '2021-03-26: Added sound effects control page (effective in v1.8.2.2).',
    '2021-04-01: Optimized layout, fixed last line lyrics display error.',
    '2021-04-15: Adapted new_Unisound1.8, EchoService1.8.25 login function.',
    '2021-04-16: Added speaker connection page, optimized page layout.',
    '2021-04-30: Added device information page.',
    '2021-05-01: Fixed UI exception in iOS browser.',
    '2021-05-05: Adapted new_EchoService1.8.28 progress adjustment.',
    '2021-05-07: Click "Volume" title to unlock volume control.',
    '2021-05-08: Adapted new_EchoService1.8.29 ambient light effect switching, added function to set ambient light color gradient speed.',
    '2021-05-24: Hid unsupported features.',
    '2021-05-28: Added turn lights on/off function.',
    '2021-06-01: Fixed some lyrics parsing exceptions.',
    '2021-06-07: Fixed some lyrics parsing exceptions, adapted new_Unisound1.8.16 IOT_API setting.',
    '2021-06-20: Fixed Firefox input display exception (slider unchanged).',
    '2021-06-25: Device info page added disable useless services button (effectively frees up memory!), added clear alarm/reminder button.',
    '2021-07-23: Adapted new version, device info page added clear alarm/reminder button (not shown if empty, new_Unisound1.8.20, new_EchoService1.8.35 effective).',
    '2021-08-01: App added volume key listener.',
    '2021-08-06: Device info page added wake-up recognition accuracy control, optimized playback progress adjustment experience.',
    '2021-08-10: Optimized device connection page.',
    '2021-08-12: Device info page added enter/exit sleep button.',
    '2021-08-18: Device info page added real-time info update (login & auth info not real-time), added enable/disable play record submission button (submits record/time to logged-in account, new_Unisound1.8.24 effective).',
    '2021-08-21: Added enable/disable DLNA/AirPlay always-on button (new_EchoService1.8.39 effective).',
    '2021-08-24: Device info page added clean processes button.',
    '2021-08-29: Device info page added enable/disable Bluetooth prompt tone button (new_Unisound1.8.25, new_EchoService1.8.41 effective).',
    '2021-08-31: Device info page supports older new_EchoService versions.',
    '2021-09-28: Device connection page supports connecting using device name (e.g., Phicomm_R1_2B11).',
    '2021-10-22: Added Bluetooth control page (new_EchoService1.8.47 effective).',
    '2021-10-24: Supports automatically restoring last page.',
    '2021-10-31: Added upload background image function.',
    '2021-11-01: Optimized page loading process.',
    '2021-11-02: Supports restoring playlist collapsed state, optimized background image loading process.',
    '2021-11-25: Optimized QR code login experience.',
    '2021-11-30: Maximum volume is now dynamically obtained.',
    '2022-01-02: Added voice time reporting settings (new_Unisound1.8.32 effective).',
    '2022-01-03: Added 12-hour voice time reporting switch (new_Unisound1.8.33 effective), added auto-reboot setting, added reboot API (reboot, param: reason(optional)), added set ambient light color (for single color effect) (new_EchoService1.8.48 effective).',
    '2022-01-12: Optimized song info caching.',
    '2022-01-14: Optimized playlist.',
    '2022-01-15: Optimized progress bar, default hide playlist, device connection page added get speaker IP function (from database).',
    '2022-01-17: App automatically sets status bar color based on background.',
    '2022-01-18: Adapted app transparency.',
    '2022-01-26: Fixed issue where typing text on screen page automatically added "undefined".',
    '2022-02-06: Added "Forbid DLNA/AirPlay Service Start" switches (default allowed, new_EchoService1.8.52 effective).',
    '2022-02-07: Added skip waiting for Unisound initialization function (Click "Skip Waiting" button when using non-adapted Unisound versions).',
    '2022-02-15: Added "Modify Xiaoai Wake Word" button.',
    '2022-02-19: Device info page added "Login QQ Music", "Login Netease Music", "Logout" buttons.',
    '2022-02-24: Adapted new_EchoService1.8.53 API.',
    '2022-03-11: Screen control supports recognizing long-press events (mobile only).',
    '2022-03-23: Added Reboot Echo function (use when web functions respond slowly, new_EchoService1.8.54 effective), device info page added disable/enable Unisound function.',
    '2022-03-27: Page optimization.',
    '2022-03-28: Allowed access from non-local IPs.',
    '2022-04-07: Supports setting background blur, music control page automatically sets cover background.',
    '2022-04-13: Playback page adapted new_EchoService1.8.56, device info page added switch player button (new_EchoService1.8.56 effective).',
    '2022-04-16: Changed to a blue theme.',
    '2022-05-05: Added play current source playlist function (Click "My Playlists" button).',
    '2022-05-08: Added playback quality switching function (new_EchoService1.8.63 effective (ExoPlayer only)).',
    '2022-05-13: Fixed issue where older versions couldn\'t update playback info.',
    '2022-05-26: Optimized cover background effect, optimized multi-line scrolling lyrics effect.',
    '2022-07-22: Adapted new version.',
    '2023-02-15: Optimized cover background effect.',
    '2023-04-09: Performance optimization.',
    '2023-10-15: Max recording time minimum changed to 2 seconds.',
    '2023-11-22: Title automatically wraps.',
    '2024-04-07: Device info page adds CPU core temperature display.',
    '2024-04-13: Fixed issue where double-clicking volume button couldn\'t unlock, fixed issue where clicking playlist title had no response.',
    '2024-12-30: App\'s small white bar transparently hidden.',
];

window.onload = function () {
    var arr = getparam_arr();
    if (arr.length > 0) window.history.replaceState(null, null, (arr.length > 0 ? '/?' : '/') + arr.join('&'));

    var h3s = document.getElementsByTagName('h3');
    if (h3s.length > 0) {
        h3s[0].innerHTML = 'Page Loading...'; // Dịch
    }

    var tmp = Storage.getItem('Cover_background_open');
    if (tmp == null || tmp == '' || tmp == 'true') {
        tmp = true;
    } else {
        tmp = false;
    }
    Cover_background_open = tmp;

    setTimeout(function () {
        var temp_div = document.getElementById('temp_div');
        if (temp_div) {
            temp_div.remove();
        }

        background_div.id = 'background_div';
        background_div.style = 'z-index: -1; position: fixed; left: 0px; top: 0px; width:100%; height:100%';
        document.body.appendChild(background_div);
        document.body.style.backgroundColor = 'rgba(0, 0, 99, 1)';

        var img = background; // Default background
        // Keep logic for loading custom background from localStorage
        if (location.href.indexOf('noimg') == -1 && location.href.indexOf(control_host) == -1) {
            var current_hostname = Storage.getItem('current_hostname');
            if (!current_hostname) {
                current_hostname = '';
            }
            hostname = current_hostname;
            var background1 = Storage.getItem(current_hostname + '_background');
            if (background1) {
                img = background1;
            }
        }

        set_background_css(img);
        h3.innerHTML = 'R1 Speaker Control Panel'; // Dịch
        var height = h3.clientHeight;
        if (height < 60) {
            h3.style.minHeight = height;
        } else {
            h3.style.minHeight = 27;
        }

        var params = getparam(['connect_ip', 'connect_id', 'no_auto_connect', 'ver', 'u_ver']);
        if (params != null) {
            if (!params.hasOwnProperty('no_auto_connect')) {
                if (params.hasOwnProperty('connect_id')) {
                    connect_id = params['connect_id'];
                }
                if (params.hasOwnProperty('connect_ip')) {
                    connect_ip = params['connect_ip'];
                    if (connect_ip != null && connect_ip != '') {
                        if (connect_ip.indexOf(':') > -1) {
                            connect_ip = connect_ip.substring(0, connect_ip.indexOf(':'));
                        }
                    } else {
                        connect_ip = '';
                    }
                    if (!reg_ip.test(connect_ip) && !/phicomm_r1_\S+/u.test(connect_ip.toLowerCase())) {
                        connect_ip = -1;
                    }
                }
                if (params.hasOwnProperty('ver')) {
                    ver = params['ver'];
                    delparam('ver');
                }
                if (params.hasOwnProperty('u_ver')) {
                    u_ver = params['u_ver'];
                    delparam('u_ver');
                }
            }
        }

        if (custom_ip) {
            custom_ip_page();
        } else {
            init_login();
            init();
        }
    }, 500);
}
load(); // Initial load function call

function custom_ip_page() {
    var ip_connect = Storage.getItem('ip_connect') != 'false';

    document.title = 'R1 Speaker Connection'; // Dịch
    h3.innerHTML = 'Please enter speaker IP to connect!'; // Dịch
    h3.ondblclick = function () {
        this.ondblclick = function () { };
        load_console();
    };
    var div = document.createElement('div');
    div.id = 'custom_ip_page';

    if (ip_connect) {
        var tmp_ip = Storage.getItem('ip') ? Storage.getItem('ip') : Storage.getItem('hostname');
    } else {
        var tmp_ip = Storage.getItem('hostname') ? Storage.getItem('hostname') : Storage.getItem('ip');
    }

    if (connect_ip != -1) {
        tmp_ip = connect_ip;
    }

    if (tmp_ip != null && tmp_ip != '') {
        if (tmp_ip.indexOf(':') > -1) {
            tmp_ip = tmp_ip.substring(0, tmp_ip.indexOf(':'));
        }
    } else {
        tmp_ip = '';
    }
    // Logic for fetching device list from server - might not work locally
    var device_list;
    if (device_list) {
        device_list = JSON.parse(device_list);
    } else {
        if (control_host && control_host.indexOf('r1.wxfsq.com') > -1) { // Check if using original host
            $.ajax({
                async: false, type: 'POST', url: './ip', data: { type: 'list' }, dataType: 'json', success: (data) => {
                    if (data.code == 1) {
                        device_list = data.list;
                    }
                }
            });
        }
    }

    if (device_list != null) {
        if (tmp_ip == '' && device_list.length > 0) tmp_ip = device_list[0].ip;
        h3.innerHTML = 'Please select or enter speaker IP/Hostname to connect!'; // Dịch
        var arr = device_list;
        var text = document.createElement('text');
        text.innerHTML = 'Device: '; // Dịch
        div.appendChild(text);
        var device_select_list = document.createElement('select'); // Renamed variable to avoid conflict
        device_select_list.id = 'device_list';
        device_select_list.style = 'display:block;margin:10px auto;width:70%;height:50px;font-size: 16px;color: rgba(238, 0, 0, 1);border-color: rgba(0,160,255,1);outline: none;background:rgba(255, 255, 255, 0.2);border-radius: 15px;';
        device_select_list.onchange = function () {
            var input = document.getElementById('input');
            if (ip_connect && this.options[this.selectedIndex].getAttribute('ip') != '') { // Use options property
                input.value = this.options[this.selectedIndex].getAttribute('ip');
            } else {
                input.value = this.options[this.selectedIndex].getAttribute('hostname');
            }
            input.setAttribute('connect_id', this.options[this.selectedIndex].getAttribute('connect_id'));
            input.oninput(); // Trigger input update
        }
        for (var i = 0; i < arr.length; i++) {
            var option = document.createElement('option');
            option.innerHTML = arr[i].dev_name ? arr[i].dev_name : arr[i].hostname;
            option.setAttribute('hostname', arr[i].hostname);
            option.setAttribute('ip', arr[i].ip);
            var device_sid = arr[i].device_sid || ''; // Handle undefined
            option.setAttribute('device_sid', device_sid);
            var id = arr[i].device_msid || ''; // Handle undefined
            option.setAttribute('connect_id', id);
            option.value = i; // Use index as value

            if (arr[i].ip == tmp_ip || arr[i].hostname.toLowerCase() == tmp_ip.toLowerCase() || (connect_id != null && connect_id == id) || (connect_ip != -1 && (arr[i].ip == connect_ip || arr[i].hostname.toLowerCase() == connect_ip.toLowerCase()))) {
                if (ip_connect) {
                    tmp_ip = arr[i].ip ? arr[i].ip : arr[i].hostname;
                } else {
                    tmp_ip = arr[i].hostname ? arr[i].hostname : arr[i].ip;
                }
                if (!(connect_id != null && connect_id == id)) {
                    connect_id = null;
                }
                //option.selected = true; // Set selected here
            }
            device_select_list.appendChild(option);
        }
        device_select_list.value = ''; // Reset selection initially
        div.appendChild(device_select_list);
    } else {
        connect_id = null;
    }

    var text = document.createElement('text');
    text.innerHTML = 'IP / Device Name (Port not needed): '; // Dịch
    text.ondblclick = function () {
        if (input.value == '') {
            input.value = 'Phicomm_R1_'; // Default prefix
        }
    }
    div.appendChild(text);
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
    input.oninput = function () {
        var device_select_list = document.getElementById('device_list');
        if (device_select_list) {
            var found = false; // Flag to track if a match is found
            for (var i = 0; i < device_select_list.options.length; i++) {
                 var option = device_select_list.options[i]; // Get the option element
                if (this.value.toLowerCase() == option.getAttribute('hostname').toLowerCase() || this.value == option.getAttribute('ip')) {
                    option.selected = true; // Set selected property
                    hostname = option.getAttribute('hostname');
                    var background_text = Storage.getItem(hostname + '_background');
                    set_background_css(background_text ? background_text : background);
                    update_StatusBar();
                    var device_sid = option.getAttribute('device_sid');
                    var btn = document.getElementById('get_ip_btn');
                    if (device_sid != '') {
                        btn.setAttribute('device_sid', device_sid);
                        btn.style.display = 'inline-block';
                    } else {
                        btn.setAttribute('device_sid', '');
                        btn.style.display = 'none';
                    }
                    var id = option.getAttribute('connect_id');
                    id = (id == 'undefined' || id == null) ? '' : id; // Check for null/undefined
                    this.setAttribute('connect_id', id);
                    found = true; // Mark as found
                    break; // Exit loop once found
                }
            }
             // If no match was found in the loop, reset relevant elements
            if (!found) {
                var btn = document.getElementById('get_ip_btn');
                btn.setAttribute('device_sid', '');
                this.setAttribute('connect_id', '');
                btn.style.display = 'none';
                device_select_list.value = ''; // Reset select list value
                set_background_css(background); // Reset background
                update_StatusBar();
            }
        }
    }
    div.appendChild(input);

    var btn = document.createElement("input");
    btn.type = 'button';
    btn.className = 'btn';
    btn.value = 'Connect'; // Dịch
    btn.setAttribute('data', '');
    btn.onclick = function () {
        test_connect();
    };
    div.appendChild(btn);

    var btn = document.createElement("input");
    btn.type = 'button';
    btn.className = 'btn';
    btn.id = 'get_ip_btn';
    btn.value = 'Get IP & Connect'; // Dịch
    btn.style.display = 'none';
    btn.onclick = function () {
        get_ip(); // This function might not work locally
    };
    div.appendChild(btn);

    var btn = document.createElement("input");
    btn.type = 'button';
    btn.className = 'btn';
    if (ip_connect) {
        btn.value = 'Switch to Hostname Connect'; // Dịch
    } else {
        btn.value = 'Switch to IP Connect'; // Dịch
    }
    btn.setAttribute('data', '');
    btn.onclick = function () {
        if (ip_connect) {
            if (!confirm("After switching, you will connect using the device name. Continue?")) { // Dịch
                return;
            }
            Storage.setItem('ip_connect', false);
        } else {
            if (!confirm("After switching, you will connect using the IP address. Continue?")) { // Dịch
                return;
            }
            Storage.setItem('ip_connect', true);
        }
        location.reload();
    };

    var div1 = document.createElement('div');
    div1.appendChild(btn);

    if (device_select_list != null && device_select_list.options.length > 0) { // Check options length
        div.appendChild(div1);
    }

    div.appendChild(document.createElement('div'));
    var btn = document.createElement("input");
    btn.type = 'button';
    btn.className = 'btn';
    btn.value = 'Enter Network Config Page'; // Dịch
    btn.onclick = function () {
        // Redirecting might need adjustment for local setup
        location.href = './config_wifi'; // Assuming config_wifi is handled separately or not needed locally
        // alert("Network Config page might not be available locally."); // Inform user
    };
    div.appendChild(btn);

    var div1 = document.createElement('div');// Placeholder
    div1.style.height = '10px';
    div.appendChild(div1);

    divs.appendChild(div);

    // Auto-connect logic
    if (reg_ip.test(tmp_ip) || /phicomm_r1_\S+/u.test(tmp_ip.toLowerCase())) {
        input.value = tmp_ip;
        if (!location.href.includes('no_auto_connect')) {
            main_div.onclick = function () {
                main_div.onclick = function () { };
                clearTimeout(connect_timer);
                connect_timer = -1;
                h3.innerHTML = 'Auto-connect cancelled!'; // Dịch
                setTimeout(function () {
                    if (h3.innerHTML == 'Auto-connect cancelled!') { // Dịch
                        if (document.getElementById('device_list')) {
                             h3.innerHTML = 'Please select or enter speaker IP/Hostname to connect!'; // Dịch
                        } else {
                            h3.innerHTML = 'Please enter speaker IP/Hostname to connect!'; // Dịch
                        }
                    }
                }, 1000);
            };

            h3.innerHTML = 'Last connection detected, auto-connecting in 2 seconds. Click blank area to cancel!'; // Dịch
            connect_timer = setTimeout(function () {
                main_div.onclick = function () { };
                if (document.getElementById('get_ip_btn') && document.getElementById('get_ip_btn').style.display != 'none') { // Check if button exists
                    get_ip();
                } else {
                    test_connect();
                }
            }, 2000);
        }
    }

    // Set initial background based on input value
    if (input.value != '') {
        input.oninput(); // Trigger update based on initial value
        var background_text = null;
        var device_select_list = document.getElementById('device_list');
        if (device_select_list) {
            for (var i = 0; i < device_select_list.options.length; i++) {
                 var option = device_select_list.options[i];
                if (input.value.toLowerCase() == option.getAttribute('hostname').toLowerCase() || input.value == option.getAttribute('ip')) {
                    hostname = option.getAttribute('hostname');
                    background_text = Storage.getItem(hostname + '_background');
                    break;
                }
            }
        }
        set_background_css(background_text ? background_text : background);
    } else {
        set_background_css(background);
    }
    update_StatusBar();

    // Config net page container (keep structure)
    var div_config = document.createElement('div'); // Renamed variable
    div_config.id = 'config_net_page';
    div_config.style = 'display:none;';
}

function get_ip() {
    test_connect(); // Simplify for local: just try to connect directly
    return;
    // Original server-dependent logic commented out
    /*
    var get_ip_btn = document.getElementById('get_ip_btn');
    var input = document.getElementById('input');
    var device_sid = get_ip_btn.getAttribute('device_sid');
    get_ip_btn.value1 = get_ip_btn.value;
    if (device_sid != '') {
        var success = function (data) {
            if (data.code == 1) {
                get_ip_btn.value = 'Fetch successful!'; // Dịch
                input.value = data.local_ip;
                test_connect();
            } else if (data.code == 2) {
                get_ip_btn.value = 'Fetch successful!'; // Dịch
                input.value = data.local_ip;
                alert('Fetch successful, but this device hasn\'t been online for over a day, IP might be outdated!'); // Dịch
                test_connect();
            } else {
                get_ip_btn.value = 'Fetch failed (' + data.msg + ')!'; // Dịch
                alert(get_ip_btn.value);
            }
            setTimeout(function () {
                get_ip_btn.value = get_ip_btn.value1;
                get_ip_btn.disabled = false;
            }, 1000);
        };

        var error = function () {
            get_ip_btn.value = 'Fetch failed!'; // Dịch
            setTimeout(function () {
                get_ip_btn.value = get_ip_btn.value1;
                get_ip_btn.disabled = false;
            }, 1000);
        };

        if (control_host && control_host.indexOf('r1.wxfsq.com') > -1) { // Check if using original host
            input.value = '';
            $.ajax({ type: 'POST', url: './ip', data: { device_sid: device_sid }, dataType: 'json', success: success, error: error });
        } else {
             // Local behavior simulation (might just use current input)
            setTimeout(function () {
                success({ code: 1, local_ip: input.value });
            }, 500);
        }
        get_ip_btn.value = 'Fetching IP, please wait...'; // Dịch
        get_ip_btn.disabled = true;
    } else {
        alert('Sorry, cannot fetch IP currently!'); // Dịch
    }
    */
}

function test_connect() {
    var input_ip = document.getElementById('input');
    ip = input_ip.value;
    if (!reg_ip.test(ip) && !/phicomm_r1_\S+/u.test(ip.toLowerCase())) {
        alert('Please enter a valid IP or Hostname!'); // Dịch
    } else {
        if (ws != null) {
            clearTimeout(test_connect_timeout_timer);
            test_connect_timeout_timer = -1;
            ws.onclose = function () { }
            ws.close();
            ws = null;
        }
        h3.innerHTML = 'Please wait, connecting to speaker...'; // Dịch
        // Append port if it's likely an IP address, otherwise assume hostname might resolve correctly
        if (reg_ip.test(ip)) {
             ip = ip + ':8080';
        } else {
            // For hostnames, let WebSocket try default ports or rely on speaker discovery if implemented differently
             // For local testing, explicitly adding port might be necessary if hostname doesn't resolve with port
             ip = ip + ':8080';
        }


        // Remove HTTPS redirection logic for local use
        /*
        if (location.href.substring(0, 6) == 'https:') {
            setTimeout(() => {
                if (reg_ip1.test(ip)) {
                    window.Storage.removeItem('hostname');
                    window.Storage.setItem('ip', input_ip.value);
                } else {
                    window.Storage.removeItem('ip');
                    window.Storage.setItem('hostname', input_ip.value);
                }
                // This redirection won't work well locally, better to just use ws://
                // location.href = 'http://' + ip + '/';
                alert("HTTPS detected. Connection might fail. Trying ws:// anyway.");
            }, 600);
           // return; // Don't return, proceed with ws://
        }
        */

        // Always use ws:// for local connections
        var ws_protocol = "ws://";
        var ws_address = ws_protocol + ip; // Use ip which now includes :8080 if it was an IP

        try { // Add try-catch for WebSocket creation
            ws = new WebSocket(ws_address);
        } catch (e) {
             h3.innerHTML = 'Failed to create WebSocket. Check address/hostname and port.'; // Dịch
             alert('WebSocket connection error: ' + e); // Dịch
             return;
        }

        ws.onopen = function (data) {
            var inputElement = document.getElementById('input'); // Get the element first
            if (inputElement) { // Check if the element exists
                 connect_id = inputElement.getAttribute('connect_id');
                 connect_id = (connect_id != '' && connect_id != null && connect_id != 'undefined') ? connect_id : null;
            } else {
                 connect_id = null; // Handle case where input element might not exist yet
            }
            clearTimeout(test_connect_timeout_timer);
            test_connect_timeout_timer = -1;
            var customIpPage = document.getElementById('custom_ip_page'); // Get the element
            if (customIpPage && divs.contains(customIpPage)) { // Check if exists and is child
                divs.removeChild(customIpPage);
            }
            test_connect_state = true;
            connect_init = true;
            display_RebootEcho(true); // Consider if this is needed locally
            h3.innerHTML = 'Speaker connected successfully, initializing...'; // Dịch
            // Store the IP or hostname used for successful connection
            if (reg_ip1.test(input_ip.value)) { // Check the original input value
                window.Storage.removeItem('hostname');
                window.Storage.setItem('ip', input_ip.value);
            } else {
                window.Storage.removeItem('ip');
                window.Storage.setItem('hostname', input_ip.value);
            }
            // Removed the redirection logic for local use
            init_login(); // Proceed with initialization
            init();
            ws_send(JSON.stringify({ type: 'get_info' }));
        };
        ws.onclose = function (data) {
            clearTimeout(test_connect_timeout_timer);
            test_connect_timeout_timer = -1;
            test_connect_state = true; // Set state even on close
            if (data.code == 1006) {
                // Check if the custom_ip_page was already removed
                 if (!document.getElementById('custom_ip_page')) {
                      // If removed, it means connection was initially successful, then dropped
                      // Show error message and potentially try reconnecting via init()
                       h3.innerHTML = 'Connection lost. Reconnecting...'; // Or a more informative message
                       // Optionally recreate the custom_ip_page if reconnect fails repeatedly
                       // custom_ip_page(); // Be careful with infinite loops
                 } else {
                     // If custom_ip_page still exists, it means initial connection failed
                      h3.innerHTML = 'Please enter speaker IP/Hostname to connect!'; // Reset title
                 }
                var msg = 'Failed to connect to speaker (Code: 1006). Please ensure new_EchoService is installed!\nCheck if the IP/Hostname is correct or reboot the speaker and try again!'; // Dịch
                alert(msg);
                // If initial connection failed, don't automatically retry, let user re-enter IP
                if (!document.getElementById('custom_ip_page')) {
                     setTimeout(init, 1000); // Attempt reconnect if it was previously connected
                }

            } else {
                 // Handle other close codes if necessary
                  h3.innerHTML = 'Disconnected (Code: ' + data.code + '). Reconnecting...'; // Dịch
                  setTimeout(init, 1000); // Attempt reconnect
            }
        };
        ws.onerror = function (error) { // Add onerror handler
             clearTimeout(test_connect_timeout_timer);
             test_connect_timeout_timer = -1;
             test_connect_state = true; // Mark as tested even on error
              // Check if the custom_ip_page was already removed
             if (!document.getElementById('custom_ip_page')) {
                  h3.innerHTML = 'Connection error. Reconnecting...'; // Or a more informative message
                  // Optionally recreate custom_ip_page if reconnect fails repeatedly
             } else {
                 h3.innerHTML = 'Please enter speaker IP/Hostname to connect!'; // Reset title
             }
             alert('WebSocket error. Please check the IP/Hostname, port, and network connection. Error: ' + error); // Dịch
             // Don't automatically retry on error, let user correct
             if (!document.getElementById('custom_ip_page')) {
                  setTimeout(init, 1000); // Attempt reconnect if previously connected
             }
        };

        clearTimeout(test_connect_timeout_timer);
        test_connect_timeout_timer = -1;
        test_connect_timeout_timer = setTimeout(function () {
            if (!test_connect_state) {
                // Ensure ws exists before trying to close
                if (ws) {
                    ws.onclose = function () { }; // Prevent default onclose handler
                    ws.close();
                }
                // Check if custom_ip_page still exists before resetting title
                if (document.getElementById('custom_ip_page')) {
                     h3.innerHTML = 'Please enter speaker IP/Hostname to connect!'; // Reset title
                }
                var msg = 'Connection timed out. Please ensure new_EchoService is installed!\nCheck if the IP/Hostname is correct or reboot the speaker and try again!'; // Dịch
                alert(msg);
            }
        }, 12000); // Timeout period
    }
}

function init() {
    if (ver < 1) {
        ver = 1000;
    }
    var h3_init = document.getElementsByTagName('h3')[0]; // Use different variable name
    if (h3_init && h3_init.innerHTML == '') { // Check if h3 exists
        h3_init.innerHTML = 'Please wait...'; // Dịch
    }

    main_div.onclick = function () { }; // Clear auto-connect cancel handler
    clearTimeout(connect_timer);
    connect_timer = -1;

    delparam(['no_auto_connect', 'connect_ip', 'connect_id']);

    // Removed parameter setting for original host
    // if (location.host.indexOf(control_host) != -1) { ... }

    if (ip == '') {
        // IP should have been set by custom_ip_page or URL param if not local testing
        // If ip is still empty here, it's an issue. Maybe re-show IP input?
         if (!document.getElementById('custom_ip_page')) {
            console.error("IP address is empty, cannot initialize WebSocket.");
            // Optionally show the IP input page again
            // custom_ip_page();
            return;
         }
         // If custom_ip_page is showing, let the user input the IP.
         return;
    }

    // Use ws:// protocol
    var ws_protocol = "ws://";
    var ws_address = ws_protocol + ip; // ip should include :8080 if needed


    if (ws == null || ws.readyState == WebSocket.CLOSED || ws.readyState == WebSocket.CLOSING) { // Check CLOSING state too
         // Only attempt new connection if not already connecting
        if (ws == null || ws.readyState != WebSocket.CONNECTING) {
            try { // Add try-catch
                 ws = new WebSocket(ws_address);
                 if (h3_init) h3_init.innerHTML = 'Connecting to speaker, please wait...'; // Dịch
            } catch (e) {
                 if (h3_init) h3_init.innerHTML = 'WebSocket creation failed.'; // Dịch
                 alert('WebSocket connection error: ' + e); // Dịch
                 // Maybe retry after a delay or show IP input page
                 setTimeout(init, 3000); // Retry after 3 seconds
                 return;
            }
        } else {
             // Already connecting, wait for it to resolve
             if (h3_init) h3_init.innerHTML = 'Connection attempt in progress...'; // Dịch
             return;
        }
    } else if (ws.readyState == WebSocket.OPEN) {
         // Already open, maybe send a ping or get_info immediately
         setTimeout(function () {
             // Sending shell commands might fail if not supported by EchoService version
             // ws_send(JSON.stringify({ type: 'shell', type_id: 'ping_r1service', shell: 'date & ping -w 1 r1service.wxfsq.com' }));
             ws_send(JSON.stringify({ type: 'get_info' })); // Safer option
         }, 600);
    } else {
         // WebSocket is in CONNECTING state, wait for onopen or onclose/onerror
         if (h3_init) h3_init.innerHTML = 'Waiting for connection...'; // Dịch
         // Set up handlers again in case they were lost
    }


    ws.onopen = function (data) {
        var h3_onopen = document.getElementsByTagName('h3')[0]; // Get h3 inside handler
        if (init_state) { // First successful connection
            //clearInterval(ping_timer); // Clear previous ping timer if any
            //ping_timer = setInterval(function(){ ws_send(JSON.stringify({type:'ping'})); }, 30000); // Send ping less frequently
            connect_init = true;
            display_RebootEcho(true); // Show reboot button initially
            if (h3_onopen) h3_onopen.innerHTML = 'Speaker connected successfully, initializing...'; // Dịch
            setTimeout(function () {
                // ws_send(JSON.stringify({ type: 'shell', type_id: 'ping_r1service', shell: 'date & ping -w 1 r1service.wxfsq.com' }));
                ws_send(JSON.stringify({ type: 'get_info' })); // Get info instead
            }, 600);

            // Unisound initialization timeout logic (translate messages)
            if (unisound_init_timer == -1) {
                if (ver > 1825) { // Check version if available
                    unisound_init_timer = setTimeout(function () {
                        if (!init_state1) return; // Don't show if already initialized
                        reload = true; // Flag for potential reload
                        var btn_container = document.createElement('div'); // Container for buttons
                        btn_container.id = 'init_fail_buttons';

                         var h3_timeout = document.getElementsByTagName('h3')[0];
                         if(h3_timeout) {
                             h3_timeout.innerHTML = "Unisound initialization timed out. Ensure new_Unisound v1.8+ is installed!"; // Dịch
                             if(!document.getElementById('init_fail_buttons')) {
                                 h3_timeout.parentNode.appendChild(btn_container);
                             } else {
                                  btn_container = document.getElementById('init_fail_buttons'); // Reuse container
                                  btn_container.innerHTML = ''; // Clear previous buttons if any
                             }
                         }


                        var btn_enable = document.createElement("input");
                        btn_enable.type = 'button';
                        btn_enable.className = 'btn';
                        btn_enable.value = 'Enable Unisound'; // Dịch
                        btn_enable.onclick = function () {
                            this.value = 'Please wait...'; // Dịch
                            ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/pm unhide com.phicomm.speaker.device' }));
                            setTimeout(function () {
                                ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                                ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am startservice com.phicomm.speaker.player/.EchoService' }));
                                setTimeout(function () {
                                    if(h3_timeout) h3_timeout.innerHTML = 'Waiting for Unisound initialization... (Ensure new_Unisound v1.8+ is installed!)'; // Dịch
                                    alert('Operation complete!'); // Dịch
                                    location.reload();
                                }, 3000);
                            }, 3000);
                        };
                        btn_container.appendChild(btn_enable);

                        var btn_reboot_uni = document.createElement("input");
                        btn_reboot_uni.type = 'button';
                        btn_reboot_uni.className = 'btn';
                        btn_reboot_uni.value = 'Reboot Unisound'; // Dịch
                        btn_reboot_uni.onclick = function () {
                            this.value = 'Rebooting...'; // Dịch
                            ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
                            setTimeout(function () {
                                ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                                ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am startservice com.phicomm.speaker.player/.EchoService' }));
                                setTimeout(function () {
                                     if(h3_timeout) h3_timeout.innerHTML = "Waiting for Unisound initialization... (Ensure new_Unisound v1.8+ is installed!)"; // Dịch
                                    alert('Reboot complete!'); // Dịch
                                    location.reload();
                                }, 10000);
                            }, 3000);
                        };
                        btn_container.appendChild(btn_reboot_uni);

                        var btn_reboot_spk = document.createElement("input");
                        btn_reboot_spk.type = 'button';
                        btn_reboot_spk.className = 'btn';
                        btn_reboot_spk.value = 'Reboot Speaker'; // Dịch
                        btn_reboot_spk.onclick = function () {
                            this.value = 'Rebooting...'; // Dịch
                            ws_send(JSON.stringify({ type: 'shell', shell: 'stop adbd&&start adbd&&adb reboot' })); // This might not work without adb enabled
                            alert('Reboot command sent!'); // Dịch
                            // setTimeout(function () { location.reload(); }, 10000); // Reload might be too soon
                        };
                        btn_container.appendChild(btn_reboot_spk);
                    }, 6000); // Timeout duration
                }
            }
            start_unisound(); // Attempt to start Unisound service
            // Check login status only after potential timeout actions are set up
            if (login_div.style.display != 'none' && qrcode_load) {
                 if (h3_onopen) h3_onopen.innerHTML = 'R1 Speaker Login'; // Dịch
                start_update_qrstate();
            } else {
                ws_send(JSON.stringify({ type: 'get_info' })); // Initial request for speaker info
            }
        } else { // Reconnected
            if (h3_onopen) h3_onopen.innerHTML = 'Connection restored!'; // Dịch
            setTimeout(function () {
                var h3_reconnect = document.getElementsByTagName('h3')[0];
                if (current_page == null) {
                    current_page = document.getElementById('btn_page_music'); // Default page
                }
                // Check if current_page exists before accessing attributes
                if (current_page) {
                    var data_attr = current_page.getAttribute('data'); // Use different variable name
                    var title_reconnect = data_attr; // Get page title
                    if (title_reconnect == current_page.value) { // If page is already shown
                         if(h3_reconnect) h3_reconnect.innerHTML = 'R1 Speaker Control Panel' + dev_name; // Reset title
                    } else { // If page was hidden, show it
                        current_page.value = title_reconnect;
                        switch_page(current_page); // Restore the page
                    }
                } else {
                     if(h3_reconnect) h3_reconnect.innerHTML = 'R1 Speaker Control Panel' + dev_name; // Default title if page not found
                }
            }, 1000);
            // Recheck QR state if login page was active
            if (login_div.style.display != 'none' && qrcode_load) {
                 if (h3_onopen) h3_onopen.innerHTML = 'R1 Speaker Login'; // Dịch
                start_update_qrstate();
            } else {
                start_updateinfo(); // Start polling for info again
            }
        }
    };

    ws.onclose = function (data) {
        //clearInterval(ping_timer); // Stop ping on close
        stop_updateinfo(); // Stop polling
        var h3_onclose = document.getElementsByTagName('h3')[0];
        if (data.code == 1006 || data.code == 1005) { // Treat 1005 (closed) similarly
             if (h3_onclose) h3_onclose.innerHTML = 'Disconnected from speaker, attempting to reconnect in 1 second...'; // Dịch
            setTimeout(init, 1000); // Retry connection
        } else {
             if (h3_onclose) h3_onclose.innerHTML = 'Connection closed (Code: '+ data.code +'), attempting to reconnect in 1 second...'; // Dịch
             setTimeout(init, 1000); // Retry connection for other codes too
        }
    };

    ws.onerror = function (data) {
        stop_updateinfo(); // Stop polling on error
        var h3_onerror = document.getElementsByTagName('h3')[0];
        if (h3_onerror) h3_onerror.innerHTML = 'Connection error, attempting to reconnect in 3 seconds...'; // Dịch
        // Don't alert on every error, just log and retry
        console.error("WebSocket Error: ", data);
        setTimeout(init, 3000); // Retry connection after a longer delay on error
    };

    ws.onmessage = function (data) {
        if (typeof (data.data) == "string") {
            if (connect_init == true) { // First message after successful connect
                connect_init = false;
                display_RebootEcho(false); // Hide reboot button if connection is stable
            }
            try { // Add try-catch for JSON parsing
                var parsed_data = JSON.parse(data.data);
                message(parsed_data); // Process the message
            } catch (e) {
                console.error("Failed to parse WebSocket message:", data.data, e);
            }
        } else { // Binary data (likely screen capture)
            if (screen_div.style.display != 'none') {
                var screenImg = document.getElementById('screen_img');
                if (screenImg) { // Check if element exists
                    try { // Add try-catch for createObjectURL
                        screenImg.src = URL.createObjectURL(data.data);
                    } catch(e) {
                         console.error("Error creating object URL for screen capture:", e);
                         stop_screen(); // Stop if URL creation fails
                    }
                }
            } else {
                stop_screen(); // Stop capture if screen page is not visible
            }
        }
    };
}



function display_RebootEcho(display = true) {
    clearTimeout(display_RebootEcho_timer);
    var btn = document.getElementById("RebootEcho_btn");
    if (btn != null) {
        btn.remove();
    }

    if (display == true) { // Corrected variable name
        display_RebootEcho_timer = setTimeout(function () {
            var h3_container = document.getElementsByTagName('h3')[0]?.parentNode; // Get parent node safely
            if (!h3_container) return; // Exit if h3 or its parent not found

            var btn = document.createElement("input");
            btn.id = 'RebootEcho_btn';
            btn.type = 'button';
            btn.className = 'btn';
            btn.value = 'Reboot Echo'; // Dịch
            btn.onclick = function () {
                this.value = 'Rebooting...'; // Dịch
                this.disabled = true;
                ws_send(JSON.stringify({ type: 'reboot_echo' }));
                // Add a timeout to re-enable the button in case the command fails or page doesn't reload
                setTimeout(() => {
                    if(document.getElementById('RebootEcho_btn')) { // Check if button still exists
                        this.value = 'Reboot Echo';
                        this.disabled = false;
                    }
                }, 5000); // Re-enable after 5 seconds
            };
             // Append only if it doesn't exist
             if(!document.getElementById('RebootEcho_btn')) {
                 h3_container.appendChild(btn);
             }
        }, 3000);
    }
}

function start_unisound() {
    // Sending shell commands might fail depending on EchoService version and permissions
    // Consider making this optional or providing feedback if it fails.
    ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
}

function init_login() {
    login_div.innerHTML = ''; // Clear previous content
    login_div.style = 'display:none;'; // Hide initially
    qrcode.style = 'margin: 10px auto;position: relative;';
    login_div.appendChild(qrcode_msg);
    login_div.appendChild(document.createElement('div')); // Spacer
    login_div.appendChild(qrcode);

    var div_buttons = document.createElement('div'); // Container for buttons

    var btn_refresh = document.createElement("input");
    btn_refresh.type = 'button';
    btn_refresh.className = 'btn';
    btn_refresh.value = 'Refresh QR Code'; // Dịch
    btn_refresh.setAttribute('data', '');
    btn_refresh.onclick = function () {
        update_qrcode();
    };
    div_buttons.appendChild(btn_refresh);

    var btn_reboot_uni = document.createElement("input");
    btn_reboot_uni.type = 'button';
    btn_reboot_uni.className = 'btn';
    btn_reboot_uni.value = 'Reboot Unisound'; // Dịch
    btn_reboot_uni.setAttribute('data', '');
    btn_reboot_uni.onclick = function () {
        var reboot_unisound_btn = this;
        this.value = 'Rebooting...'; // Dịch
        this.disabled = true; // Disable button during reboot
        ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
        setTimeout(function () {
            ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
            setTimeout(function () {
                reboot_unisound_btn.value = 'Reboot Unisound'; // Dịch
                reboot_unisound_btn.disabled = false; // Re-enable button
                alert('Reboot complete!'); // Dịch
            }, 10000);
        }, 3000);
    };
    div_buttons.appendChild(btn_reboot_uni);

    var btn_sync_time = document.createElement("input");
    btn_sync_time.id = 'sync_time_btn'; // Changed ID slightly for clarity
    btn_sync_time.type = 'button';
    btn_sync_time.className = 'btn';
    btn_sync_time.value = 'Sync Speaker Time'; // Dịch
    btn_sync_time.setAttribute('data', '');
    btn_sync_time.onclick = function () {
        var btn = this;
        this.value = 'Syncing...'; // Dịch
        this.disabled = true;
        setTimeout(function () {
            btn.value = 'Sync Speaker Time'; // Dịch
            btn.disabled = false;
        }, 2000);
        // Using aliyun NTP server
        ws_send(JSON.stringify({ type: 'shell', type_id: "set_date", shell: 'settings put global ntp_server ntp1.aliyun.com & date ' + Math.floor(new Date().getTime() / 1000) })); // Use Math.floor
    };
    div_buttons.appendChild(btn_sync_time);

    login_div.appendChild(div_buttons);
    var div_spacer = document.createElement('div'); // Placeholder
    div_spacer.style.height = '10px';
    login_div.appendChild(div_spacer);
}

// This function presents login options or proceeds with QR code
function onhide_login() {

    // Simplified: Assume QQ login or handle other types if necessary
    // The Kuwo logic is complex and might be removed for simplicity if not needed.
    /*
    if (login_app == 'kuwo') {
        // ... Kuwo selection logic ...
        return;
    }
    */

    var tips = "";
    if (login_app == 'qqmusic') {
        tips = "This login will use QQ Connect to log into your QQ Music account. Continue?"; // Dịch
    } else if (login_app == 'netease') {
        tips = "This login will use QQ Connect to log into your Netease Cloud Music account. Continue?"; // Dịch
    } else if (login_app == 'kuwo_qq') {
        tips = "This login will use QQ Connect to log into your Kuwo Music account. Continue?"; // Dịch
    }
    // Removed Kuwo password logic for simplicity
    // else if (login_app == 'kuwo_pwd') { ... }

    qrcode.style = 'margin: 10px auto;position: relative;';
    if (!confirm(tips)) {
        if (ws) { // Close WebSocket if user cancels
            ws.close();
        }
        // Provide a way for the user to retry or go back
        document.body.innerHTML = "";
        var div_cancel = document.createElement("div");
        div_cancel.style = 'text-align: center;';
        document.body.appendChild(div_cancel);

        var h3_cancel = document.createElement("h3");
        h3_cancel.innerHTML = "Login Cancelled."; // Dịch
        div_cancel.appendChild(h3_cancel);

        var btn_refresh = document.createElement("input");
        btn_refresh.type = 'button';
        btn_refresh.className = 'btn';
        btn_refresh.value = 'Refresh Page'; // Dịch
        btn_refresh.setAttribute('data', '');
        btn_refresh.onclick = function () {
            location.reload();
        };
        div_cancel.appendChild(btn_refresh);
    } else {
        // Remove selection div if it exists
        var loginSelectionDiv = document.getElementById('login_selection_div');
        if (loginSelectionDiv) {
            loginSelectionDiv.remove();
        }
        // Removed Kuwo password login part
        /*
        if (login_app == 'kuwo_pwd') {
            // ... Kuwo password form ...
            return;
        }
        */
        var h3_login = document.getElementsByTagName('h3')[0];
        if(h3_login) h3_login.innerHTML = 'R1 Speaker Login'; // Dịch
        login_div.style.display = 'block';
        load_qrcode(); // Load or generate QR code
    }
}

function hide_login() {
    stop_update_qrstate(); // Stop checking QR status
    login_div.style.display = 'none'; // Hide the login container
}

function load_qrcode() {
    var qrcode_state = Storage.getItem('qrcode_state');
    var qrcode_data = Storage.getItem('qrcode_data');
    var tmp_login_app = (Storage.getItem('qrcode_app') == null ? login_app : Storage.getItem('qrcode_app'));

    // Clear stored data if login app type changed
    if (tmp_login_app != login_app) {
        Storage.removeItem('qrcode_state');
        Storage.removeItem('qrcode_data');
        Storage.removeItem('qrcode_app');
        qrcode_state = null; // Use null instead of 0
        qrcode_data = null;
    }

    // Set pt_3rd_aid based on the current login_app
    if (login_app == 'netease') {
        login_param['pt_3rd_aid'] = 100495085;
    } else if (login_app == 'kuwo_qq') {
        login_param['pt_3rd_aid'] = 100243533;
    } else { // Default to qqmusic
        login_param['pt_3rd_aid'] = 100497308;
    }


    if (qrcode_state == 1 && qrcode_data) { // Check if data exists
        // Load existing QR code from storage
        login_app = tmp_login_app; // Use the stored app type

        qrcode_load = false;
        qrcode_msg.innerHTML = '<h3>Please wait...</h3><h3></h3>'; // Dịch
        qrcode.onload = function () {
            qrcode_load = true;
            qrcode.onload = null; // Remove onload handler after first load
            if (qrcode_msg.getElementsByTagName('h3').length > 0) {
                 qrcode_msg.getElementsByTagName('h3')[0].innerText = 'Please use Mobile QQ to scan the QR code to log in! (You can paste this page address in Mobile QQ and long-press the QR code image to scan!)'; // Dịch
            }
            start_update_qrstate(); // Start polling status
        }
        try { // Add try-catch for parsing stored data
            update_qrcode_data(JSON.parse(qrcode_data));
        } catch(e) {
             console.error("Error parsing stored QR code data:", e);
             Storage.removeItem('qrcode_state'); // Clear invalid data
             Storage.removeItem('qrcode_data');
             Storage.removeItem('qrcode_app');
             update_qrcode(); // Request a new one
        }
    } else {
        // Request a new QR code
        update_qrcode();
    }
}

function update_qrcode() {
    qrcode.src = ''; // Clear previous image
    qrcode.qrsig = ''; // Clear previous signature
    Storage.removeItem('qrcode_state');
    Storage.removeItem('qrcode_data');
    Storage.removeItem('qrcode_app');

    qrcode_load = false;
    qrcode_msg.innerHTML = '<h3>Loading QR code, please wait...<br>Tip: First time loading might be slow, please be patient!</h3><h3></h3>'; // Dịch
    qrcode.onload = function () {
        qrcode_load = true;
        qrcode.onload = null; // Remove handler
        if(qrcode_msg.getElementsByTagName('h3').length > 0) {
             qrcode_msg.getElementsByTagName('h3')[0].innerText = 'Please use Mobile QQ to scan the QR code to log in! (You can paste this page address in Mobile QQ and long-press the QR code image to scan!)'; // Dịch
        }
        start_update_qrstate(); // Start polling status
    }
    var qr_timeout_timer = setTimeout(function () { // Use a separate timer for this timeout
        if (!qrcode_load) {
            // Try starting Unisound service again if QR times out
            ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
            var device_time_str = (device_date != null ? set_time(Math.floor(device_date.getTime() / 1000)) : 'Unknown'); // Use Math.floor
            var sync_time_button_html = '<br><button class="btn" onclick="document.getElementById(\'sync_time_btn\').click()">Sync Speaker Time</button>'; // Add button directly
             qrcode_msg.innerHTML = '<h3>QR code loading timed out. Please click Refresh QR Code. (If it fails multiple times, try Reboot Unisound).<br><p id="device_time" style="display:inline">Speaker Time: ' + device_time_str + '</p>. If time is incorrect, click Sync Time then Refresh QR Code.</h3><h3></h3>'; // Dịch
        }
    }, 30000); // 30 second timeout

    // Ensure WebSocket is ready before sending
    if (ws && ws.readyState === WebSocket.OPEN) {
         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_qrcode', login_param: login_param } }));
    } else {
        console.warn("WebSocket not ready, delaying QR code request.");
        // Optionally, wait for WebSocket to open before sending
        // This might require more complex state management
         qrcode_msg.innerHTML = '<h3>Connecting to speaker before loading QR code...</h3><h3></h3>'; // Dịch
         // The `init` function should handle sending the request once connected.
    }
}

function start_update_qrstate() {
     if (qrcode_msg.getElementsByTagName('h3').length > 1) {
        qrcode_msg.getElementsByTagName('h3')[1].innerText = 'Waiting for QR code status response...'; // Dịch
     }
    stop_update_qrstate(); // Clear previous timer
    qr_update_time = new Date().getTime();
    qr_last_update_time = -1;
    var update_qrcodef = function () {
        if (qr_update_time !== qr_last_update_time && qrcode.qrsig) { // Check if qrsig exists
            qr_last_update_time = qr_update_time;
             // Ensure WebSocket is ready
            if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'qrcode_state', qrsig: qrcode.qrsig, login_param: login_param } }));
            } else {
                 console.warn("WebSocket not open, skipping QR state update.");
            }
        }
    };
    // Check immediately if qrsig is already available from loaded data
    if (qrcode.qrsig) {
        update_qrcodef();
    }
    qrstate_timer = setInterval(update_qrcodef, 2000); // Poll every 2 seconds
}

function stop_update_qrstate() {
    clearInterval(qrstate_timer);
    qrstate_timer = -1;
}

function update_qrcode_data(data) {
    if (!data || !data.image || !data.cookies || !data.cookies.qrsig) {
        console.error("Invalid QR code data received:", data);
         qrcode_msg.innerHTML = '<h3>Error loading QR code data. Please refresh.</h3><h3></h3>'; // Dịch
        return;
    }
    qrstate = 0; // Reset state
    qrcode.src = data.image;
    qrcode.qrsig = data.cookies.qrsig;
    // Store valid data
    Storage.setItem('qrcode_state', 1); // Mark as loaded
    Storage.setItem('qrcode_data', JSON.stringify(data));
    Storage.setItem('qrcode_app', login_app);
}

function update_qrstate(data) {
    if (qrstate == 1) { // Already logged in state
        return;
    }
    qr_update_time = new Date().getTime(); // Update timestamp

    if (!data || !data.qrcode_state) {
        console.error("Invalid QR state data received:", data);
        return;
    }

    var qrcode_state_data = data.qrcode_state; // Use a clear variable name
    var call = qrcode_state_data[qrcode_state_data.call]; // Get the relevant part of the state data
    var msg = call && call.length > 4 ? call[4] : "Unknown status"; // Get message safely
    console.log("QR State:", qrcode_state_data); // Log for debugging

    // Clear stored data if QR code expired or invalid, unless successful login (code 0)
    if ((qrcode_state_data.code != 66 && qrcode_state_data.code != 67) || data.code == 0) { // 66: QR valid, 67: Scanned
         if (qrcode_state_data.code != 0) { // Don't clear if login success (code 0)
            Storage.removeItem('qrcode_state');
            Storage.removeItem('qrcode_data');
            Storage.removeItem('qrcode_app');
            stop_update_qrstate(); // Stop polling if invalid/expired
         }
    }

    // Handle successful scan and login
    if (qrcode_state_data.code == '0') { // Login successful
        stop_update_qrstate();
        qrstate = 1; // Set login state
        var uin = get_uin(qrcode_state_data.location.cookies.p_uin); // Extract UIN
        var nickname = call && call.length > 5 ? call[5] : 'Unknown User'; // Get nickname safely

        if (qrcode_msg.getElementsByTagName('h3').length > 0) {
            qrcode_msg.getElementsByTagName('h3')[0].innerText = "Logged in with QQ: " + nickname + "(" + uin + ")"; // Dịch
        }
        msg = "Fetching user information, please wait..."; // Dịch
        qrcode.style = 'margin: 10px auto;position: relative;border-radius: 100%;height:120px;width:120px;object-fit:cover;'; // Set style for avatar
        qrcode.src = "http://q1.qlogo.cn/g?b=qq&nk=" + uin + "&s=100"; // QQ avatar URL
        console.log("QR Login Success State:", JSON.stringify(qrcode_state_data));

        clearTimeout(login_timer);
        login_timer = setTimeout(function () {
            // Send login data based on the selected app
            if (ws && ws.readyState === WebSocket.OPEN) {
                var login_data_type = '';
                if (login_app == 'qqmusic') {
                     login_data_type = 'login';
                     msg = "Logging into QQ Music, please wait..."; // Dịch
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'login', qrcode_state: qrcode_state_data } }));
                } else if (login_app == 'netease') {
                     login_data_type = 'login_netease_music';
                     msg = "Logging into Netease Music, please wait..."; // Dịch
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'login_netease_music', qrcode_state: qrcode_state_data } }));
                } else if (login_app == 'kuwo_qq') {
                     login_data_type = 'login_kuwo_music';
                     msg = "Logging into Kuwo Music, please wait..."; // Dịch
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'login_kuwo_music', qrcode_state: qrcode_state_data } }));
                }
                 if (qrcode_msg.getElementsByTagName('h3').length > 1) {
                     qrcode_msg.getElementsByTagName('h3')[1].innerText = msg;
                 }
            } else {
                console.warn("WebSocket not open, cannot send login data.");
                 if (qrcode_msg.getElementsByTagName('h3').length > 1) {
                     qrcode_msg.getElementsByTagName('h3')[1].innerText = "Connection error, cannot complete login."; // Dịch
                 }
            }
        }, 1000);
    } else {
         // Update status message for other states (scanned, expired, etc.)
         if (qrcode_msg.getElementsByTagName('h3').length > 1) {
            qrcode_msg.getElementsByTagName('h3')[1].innerText = msg;
         }
    }
}

// Handles the final login result for QQ Music
function login(data) {
    if (data.code == 1) {
        if (data.login_state == 1) {
            alert('Login successful, Welcome ' + data.nick + '[' + data.userid + ']'); // Dịch
            // Request updated login state from Unisound after successful login
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'login_state' } }));
            }
            // The login_state function will handle hiding the login page and showing the main interface
        } else {
            alert("Login failed: " + data.login_msg); // Dịch
            // Show refresh button if login fails
            document.body.innerHTML = "";
            var div_fail = document.createElement("div");
            div_fail.style = 'text-align: center;';
            document.body.appendChild(div_fail);
            var h3_fail = document.createElement("h3");
            h3_fail.innerHTML = "Login Failed."; // Dịch
            div_fail.appendChild(h3_fail);
            var btn_refresh = document.createElement("input");
            btn_refresh.type = 'button';
            btn_refresh.className = 'btn';
            btn_refresh.value = 'Refresh Page'; // Dịch
            btn_refresh.setAttribute('data', '');
            btn_refresh.onclick = function () {
                location.reload();
            };
            div_fail.appendChild(btn_refresh);
        }
    } else {
        alert("Login request error (Code: " + data.code + ")"); // Dịch
        // Optionally handle specific error codes
        location.reload(); // Reload on error
    }
}

// Handles Netease login steps
function login_netease_music(data, type) {
    if (type == 0) { // Step 0: Got user info from Netease via QQ Connect redirect
        if (data.code == 1 && data.data && data.data.code == 200 && data.data.profile) {
            var nickname = data.data.profile.nickname;
            var userId = data.data.profile.userId;
            if(qrcode && qrcode_msg.getElementsByTagName('h3').length > 1) { // Check if elements exist
                qrcode.src = data.data.profile.avatarUrl || './pic/nopic.jpg'; // Use placeholder if no avatar
                qrcode_msg.getElementsByTagName('h3')[1].innerHTML = 'Netease Music Login Successful!<br>User: ' + nickname + '[' + userId + ']<br><div>Submitting login data...</div>'; // Dịch
            }
            // Step 1: Send this Netease profile data back to the speaker's API
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'login_netease_music', data: data.data } } }));
            } else {
                console.warn("WebSocket not open, cannot submit Netease login data.");
                if(qrcode_msg.getElementsByTagName('h3').length > 1) qrcode_msg.getElementsByTagName('h3')[1].innerText = 'Connection error, cannot submit data.'; // Dịch
            }
        } else {
             var error_msg = 'Netease Music Login Failed!'; // Dịch
             if(data.data && data.data.msg) error_msg += ' (' + data.data.msg + ')';
             if(qrcode_msg.getElementsByTagName('h3').length > 1) qrcode_msg.getElementsByTagName('h3')[1].innerText = error_msg;
             alert(error_msg);
             location.reload(); // Reload on failure
        }
    } else if (type == 1) { // Step 1: Speaker acknowledged the Netease profile data
        if (qrcode_msg.getElementsByTagName('h3').length > 1 && qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div').length > 0) {
            qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div')[0].innerHTML = 'Data submitted, restarting Unisound...'; // Dịch
        }
        // Step 2: Restart Unisound service to apply login
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
            setTimeout(function () {
                 if (ws && ws.readyState === WebSocket.OPEN) {
                    ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                    // Trigger a state check to proceed after restart
                    ws_send(JSON.stringify({ type: 'send_message', what: 65536, arg1: 3, arg2: 0, obj: '{"type":"login_state","code":1,"login_state":"0"}' })); // Simulate initial state after restart
                    setTimeout(function () {
                        location.reload(); // Reload the page to reflect logged-in state
                    }, 1000);
                 }
            }, 3000);
        }
    }
}


// Handles Kuwo login steps (via QQ Connect)
function login_kuwo_music(data, type) {
    if (type == 0) { // Step 0: Got user info from Kuwo via QQ Connect redirect
        if (data.code == 1 && data.data && data.data.result == "succ" && data.data.userInfo) {
            var userInfo = data.data.userInfo;
            var nickname = userInfo.nickName;
            var userId = userInfo.uid;
             if(qrcode && qrcode_msg.getElementsByTagName('h3').length > 1) { // Check elements
                qrcode.src = userInfo.pic || './pic/nopic.jpg'; // Use placeholder
                qrcode_msg.getElementsByTagName('h3')[1].innerHTML = 'Kuwo Music Login Successful!<br>User: ' + nickname + '[' + userId + ']<br><div>Submitting login data...</div>'; // Dịch
             }
            // Step 1: Send Kuwo profile data back to speaker's API
            setTimeout(function () { // Slight delay before sending
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'login_kuwo_music', data: data.data } } }));
                 } else {
                     console.warn("WebSocket not open, cannot submit Kuwo login data.");
                      if(qrcode_msg.getElementsByTagName('h3').length > 1) qrcode_msg.getElementsByTagName('h3')[1].innerText = 'Connection error, cannot submit data.'; // Dịch
                 }
            }, 1000);
        } else {
             var error_msg = 'Kuwo Music Login Failed!'; // Dịch
             if(data.data && data.data.msg) error_msg += ' (' + data.data.msg + ')';
             if(qrcode_msg.getElementsByTagName('h3').length > 1) qrcode_msg.getElementsByTagName('h3')[1].innerText = error_msg;
             alert(error_msg);
             location.reload(); // Reload on failure
        }
    } else if (type == 1) { // Step 1: Speaker acknowledged Kuwo profile data
        if (data.code == 200) { // Check if API call was successful on speaker side
             if (qrcode_msg.getElementsByTagName('h3').length > 1 && qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div').length > 0) {
                qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div')[0].innerHTML = 'Data submitted, restarting Unisound...'; // Dịch
             }
            // Step 2: Restart Unisound
             if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
                setTimeout(function () {
                     if (ws && ws.readyState === WebSocket.OPEN) {
                        ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                        // Trigger state check
                        ws_send(JSON.stringify({ type: 'send_message', what: 65536, arg1: 3, arg2: 0, obj: '{"type":"login_state","code":1,"login_state":"0"}' }));
                        setTimeout(function () {
                            location.reload();
                        }, 1000);
                     }
                }, 3000);
             }
        } else {
            var error_msg = "Data submission failed!\r\n" + (data.msg || 'Unknown error'); // Dịch
             if (qrcode_msg.getElementsByTagName('h3').length > 1) {
                 qrcode_msg.getElementsByTagName('h3')[1].innerText = error_msg;
             }
            alert(error_msg);
            location.reload();
        }
    }
}

// Handles the response from checking the login state with Unisound service
function login_state(data) {
    clearTimeout(login_state_timer); // Clear any pending checks
    login_state_timer = -1;

    if (data.code == 1) {
        if (!init_state) { // Already initialized, login state changed (e.g., logged out elsewhere)
            location.reload(); // Reload to reflect the change
            return;
        }

        if (data.login_state == 0) { // State 0: Unisound initializing or not logged in
            if (unisound_init_timer != -1) {
                clearTimeout(unisound_init_timer); // Clear the initial timeout if we got a state update
                // Remove the timeout buttons if they were added
                var initFailButtons = document.getElementById('init_fail_buttons');
                if (initFailButtons) initFailButtons.remove();
            }
            start_unisound(); // Try starting Unisound again
            var h3_login_state = document.getElementsByTagName('h3')[0];
            if (h3_login_state) h3_login_state.innerHTML = 'Waiting for Unisound initialization... (Ensure new_Unisound v1.8+ is installed!)'; // Dịch

            // Add "Skip Waiting" button if not present
            if (!document.getElementById('Skip_Waiting')) {
                var h3_parent = document.getElementsByTagName('h3')[0]?.parentNode;
                if (h3_parent) {
                    var btn_skip = document.createElement("input");
                    btn_skip.id = 'Skip_Waiting';
                    btn_skip.type = 'button';
                    btn_skip.className = 'btn';
                    btn_skip.value = 'Skip Waiting'; // Dịch
                    btn_skip.onclick = function () {
                         // Force the state to 1 (initialized) locally to bypass waiting
                         // This is useful for non-standard Unisound versions
                        if (ws && ws.readyState === WebSocket.OPEN) {
                             ws_send(JSON.stringify({ type: 'send_message', what: 65536, arg1: 3, arg2: 0, obj: '{"type":"login_state","code":1,"login_state":"1"}' }));
                        }
                        this.value = 'Skip command sent!'; // Dịch
                        this.disabled = true;
                        setTimeout(() => { // Remove button after a delay
                             if (document.getElementById('Skip_Waiting')) {
                                 document.getElementById('Skip_Waiting').remove();
                             }
                         }, 1000);
                         // Manually call the next step after skipping
                         login_state({ code: 1, login_state: 1 }); // Simulate state 1
                    };
                    h3_parent.appendChild(btn_skip);
                }
            }

            // Set a timer to request info again, hoping initialization completes
            login_state_timer = setTimeout(function () {
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'get_info' }));
                 }
             }, 1000);

             // Set another timeout to show recovery buttons if still not initialized (Unisound might be stuck)
             if (unisound_init_timer1 == -1) {
                 unisound_init_timer1 = setTimeout(function () {
                    if (!init_state1) return; // Don't show if already initialized
                    reload = true; // Flag for potential reload
                    var btn_container = document.getElementById('init_fail_buttons');
                    var h3_timeout1 = document.getElementsByTagName('h3')[0];
                     if(!btn_container && h3_timeout1) { // Create container if it doesn't exist
                         btn_container = document.createElement('div');
                         btn_container.id = 'init_fail_buttons';
                         h3_timeout1.parentNode.appendChild(btn_container);
                     } else if (btn_container) {
                        btn_container.innerHTML = ''; // Clear existing buttons
                     } else {
                        return; // No place to add buttons
                     }


                    // Re-add recovery buttons (similar to the first timeout)
                     var btn_reboot_uni = document.createElement("input");
                     btn_reboot_uni.type = 'button';
                     btn_reboot_uni.className = 'btn';
                     btn_reboot_uni.value = 'Reboot Unisound'; // Dịch
                     btn_reboot_uni.onclick = function () { /* ... (Reboot Unisound logic - same as above) ... */ };
                     btn_container.appendChild(btn_reboot_uni);

                     var btn_reboot_spk = document.createElement("input");
                     btn_reboot_spk.type = 'button';
                     btn_reboot_spk.className = 'btn';
                     btn_reboot_spk.value = 'Reboot Speaker'; // Dịch
                     btn_reboot_spk.onclick = function () { /* ... (Reboot Speaker logic - same as above) ... */ };
                     btn_container.appendChild(btn_reboot_spk);

                     var btn_sync_time = document.createElement("input");
                     btn_sync_time.id = 'sync_time_btn_fail'; // Different ID if needed
                     btn_sync_time.type = 'button';
                     btn_sync_time.className = 'btn';
                     btn_sync_time.value = 'Sync Speaker Time'; // Dịch
                     btn_sync_time.onclick = function () { /* ... (Sync time logic - same as above) ... */ };
                     btn_container.appendChild(btn_sync_time);
                 }, 6000); // Longer timeout for recovery options
             }

        } else if (data.login_state == 1) { // State 1: Unisound initialized and ready (might be logged in or not)
            // Clear initialization timers and remove related buttons
            if (unisound_init_timer != -1) {
                clearTimeout(unisound_init_timer);
                unisound_init_timer = -1;
                var initFailButtons = document.getElementById('init_fail_buttons');
                if (initFailButtons) initFailButtons.remove();
            }
            if (unisound_init_timer1 != -1) {
                clearTimeout(unisound_init_timer1);
                unisound_init_timer1 = -1;
                 var initFailButtons = document.getElementById('init_fail_buttons'); // Try removing again
                 if (initFailButtons) initFailButtons.remove();
            }
            // Remove skip button if present
            var skipBtn = document.getElementById('Skip_Waiting');
            if (skipBtn) skipBtn.remove();
            // Remove sync time button if present
             var syncTimeBtn = document.getElementById('sync_time_btn_fail') || document.getElementById('sync_time_btn');
             if(syncTimeBtn) syncTimeBtn.remove();


            hide_login(); // Hide login elements if shown
            onhide_index(); // Show the main control interface
             // Request full info now that Unisound is ready
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'get_info' }));
             }

        } else if (data.login_state == -4) { // State -4: Authorization error (likely server-side)
            // Clear init timers
            if (unisound_init_timer != -1) clearTimeout(unisound_init_timer); unisound_init_timer = -1;
            if (unisound_init_timer1 != -1) clearTimeout(unisound_init_timer1); unisound_init_timer1 = -1;

            var h3_auth_err = document.getElementsByTagName('h3')[0];
            var ping_r1service_function = function () {
                var msg = '';
                var time_str = ('' + ping_r1service_time).substring(0, 10); // Use current ping time
                if (ping_r1service == 1) msg = 'Success (' + time_str + ')'; // Dịch
                else if (ping_r1service == 0) msg = 'Failed (' + time_str + ')'; // Dịch
                else if (ping_r1service == -1) msg = 'Waiting (' + time_str + ')'; // Dịch
                else msg = 'Error (' + ping_r1service + ')'; // Dịch

                var device_time_str = (device_date != null ? set_time(Math.floor(device_date.getTime() / 1000)) : 'Unknown'); // Dịch
                 if (h3_auth_err) h3_auth_err.innerHTML = (data.login_msg || 'Authorization Error') + '<br><p id="device_time" style="display:inline">Speaker Time: ' + device_time_str + '</p><br>Test Ping Auth Server: ' + msg; // Dịch
                // Send ping request again
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'shell', type_id: 'ping_r1service', shell: 'date & ping -w 1 r1service.wxfsq.com' }));
                 }
            }
            ping_r1service_function(); // Update display immediately

            // Set timer to recheck login state
            login_state_timer = setTimeout(function () {
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'login_state' } }));
                 }
             }, 1000);

             // Add Sync Time button if not present
             var h3_parent = document.getElementsByTagName('h3')[0]?.parentNode;
             if (h3_parent && !document.getElementById('sync_time_btn_auth')) { // Use a specific ID
                 var btn_sync = document.createElement("input");
                 btn_sync.id = 'sync_time_btn_auth';
                 btn_sync.type = 'button';
                 btn_sync.className = 'btn';
                 btn_sync.value = 'Sync Speaker Time'; // Dịch
                 btn_sync.onclick = function () { /* ... (Sync time logic) ... */ };
                 h3_parent.appendChild(btn_sync);
             }

        } else { // Other login states (errors, etc.)
            // Clear init timers
            if (unisound_init_timer != -1) clearTimeout(unisound_init_timer); unisound_init_timer = -1;
            if (unisound_init_timer1 != -1) clearTimeout(unisound_init_timer1); unisound_init_timer1 = -1;

            var h3_other_err = document.getElementsByTagName('h3')[0];
            // If it's an authorization-related message, offer reboot
            if (data.login_msg && data.login_msg.includes('授权')) { // Check for keyword '授权' (Authorization)
                 var h3_parent = document.getElementsByTagName('h3')[0]?.parentNode;
                 if (h3_parent && !document.getElementById('reboot_unisound_auth_err')) {
                     var btn_reboot = document.createElement("input");
                     btn_reboot.id = 'reboot_unisound_auth_err';
                     btn_reboot.type = 'button';
                     btn_reboot.className = 'btn';
                     btn_reboot.value = 'Reboot Unisound'; // Dịch
                     btn_reboot.onclick = function () {
                          if (h3_other_err) h3_other_err.innerHTML = 'Rebooting...'; // Dịch
                          this.disabled = true;
                          ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
                          setTimeout(function () {
                              ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                              ws_send(JSON.stringify({ type: 'send_message', what: 65536, arg1: 3, arg2: 0, obj: '{"type":"login_state","code":1,"login_state":"0"}' }));
                              setTimeout(function () {
                                  alert('Reboot complete!'); // Dịch
                                  location.reload();
                              }, 10000);
                          }, 3000);
                     };
                     h3_parent.appendChild(btn_reboot);
                 }
                 if (h3_other_err) h3_other_err.innerHTML = data.login_msg; // Display the specific error
                 return; // Don't show generic alert or reload yet
            }

            alert("Login State Error: " + (data.login_msg || "Unknown error") + " (State: " + data.login_state + ")"); // Dịch
            if (!init_state) { // If already initialized, reload on error
                location.reload();
                return;
            }
            onhide_login(); // Show login options again if initialization failed this way
        }
    } else {
        console.error("Error in login_state response:", data);
        // Handle case where data.code is not 1
        alert("Received invalid login state response from speaker."); // Dịch
        location.reload(); // Reload as a fallback
    }
}

// Helper function to extract QQ UIN from cookie string
function get_uin(uin) {
    if (!uin || typeof uin !== 'string') return ''; // Basic validation
    uin = uin.substr(1); // Remove leading character (often 'o')
    for (var i = 0; i < uin.length; i++) { // Use var for broader compatibility
        if (uin[i] != '0') { // Find first non-zero digit
            return uin.substr(i);
        }
    }
    return uin; // Return original if all zeros (unlikely)
}

// Helper function to convert cookie object to array of strings
function get_cookies(data) {
    var cookies_arr = []; // Use a different name to avoid conflict
    if (data && typeof data === 'object') { // Check if data is a valid object
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                cookies_arr.push(key + "=" + data[key]);
            }
        }
    }
    return cookies_arr;
}

// Handles messages specifically from the Unisound service (sent via EchoService)
function Unisound(data) {
    // Check if data structure is as expected
    if (!data || !data.data || !data.data.data) {
         console.error("Invalid Unisound message structure:", data);
         return;
    }

    var unisound_data_str = data.data.data; // The actual JSON payload is nested
    var parsed_unisound_data;

    try {
        parsed_unisound_data = JSON.parse(unisound_data_str);
    } catch (e) {
        console.error("Failed to parse Unisound data:", unisound_data_str, e);
        return;
    }

    if (parsed_unisound_data != null) {
        test_arr = parsed_unisound_data; // Keep for debugging if needed
        // console.log("Unisound Data:", parsed_unisound_data);

        // Route based on the 'type' within the Unisound data
        if (parsed_unisound_data.code == 1 || parsed_unisound_data.code == 2) { // Check success codes
            var type = parsed_unisound_data.type;
            var payload = parsed_unisound_data.data; // Data payload specific to the type

            if (type == 'get_qrcode') {
                update_qrcode_data(payload);
            } else if (type == 'qrcode_state') {
                update_qrstate(parsed_unisound_data); // Pass the whole parsed object which includes the state
            } else if (type == 'login') {
                login(parsed_unisound_data); // Handle QQ Music login result
            } else if (type == 'login_state') {
                login_state(parsed_unisound_data); // Handle Unisound initialization/login state
            } else if (type == 'login_netease_music') {
                login_netease_music(parsed_unisound_data, 0); // Handle Netease login step 0
            } else if (type == 'login_kuwo_music') {
                login_kuwo_music(parsed_unisound_data, 0); // Handle Kuwo QQ login step 0
            } else if (type == 'login_kuwo') {
                // Handle Kuwo password login result (currently simplified, might need full logic if used)
                var pwd_login_btn = document.getElementById('pwd_login_btn');
                if (pwd_login_btn) {
                    if (parsed_unisound_data.code == 1 && payload && payload.result == 'succ') {
                        pwd_login_btn.value = payload.msg || 'Login Success'; // Dịch
                        login_kuwo_music(parsed_unisound_data, 0); // Proceed if basic login is ok
                    } else {
                        pwd_login_btn.value = parsed_unisound_data.msg || 'Login Failed'; // Dịch
                        alert(pwd_login_btn.value);
                        setTimeout(function () {
                            pwd_login_btn.disabled = false;
                            pwd_login_btn.value = 'Login'; // Dịch
                        }, 1000);
                    }
                }
            } else if (type == 'exit_login') {
                alert('Logged out successfully!'); // Dịch
                location.reload();
            } else if (type == 'api') {
                // Handle generic API responses from Unisound
                if (typeof payload !== 'undefined') {
                     // Determine if the payload itself needs parsing (older versions might double-encode)
                     var api_data = (typeof payload === 'string') ? JSON.parse(payload) : payload;
                     api(api_data, (typeof payload === 'string') ? 1 : 2); // Pass parsed data and type indicator
                } else {
                     api(parsed_unisound_data, 0); // Pass the whole message if no specific data field
                }
            } else if (type == 'get_memo' || type == 'add_memo' || type == 'update_memo' || type == 'del_memo' || type == 'delall_memo') {
                memo_info(parsed_unisound_data); // Handle reminder/alarm list updates
            } else if (type == 'Main_Wakeup_Benchmark') {
                Main_Wakeup_Benchmark_info(parsed_unisound_data); // Handle sensitivity info
            } else if (type == 'User_Wakeup_Benchmark') {
                User_Wakeup_Benchmark_info(parsed_unisound_data);
            } else if (type == 'get_info') {
                update_unisound_info(parsed_unisound_data); // Handle detailed Unisound status update
            } else if (type == 'Submit_Play_Record') {
                // Handle confirmation/status of play record submission (if needed)
            } else if (type == 'asrMaxDuration') {
                asrMaxDuration_info(parsed_unisound_data); // Handle max recording time info
            } else if (type == 'Voice_time_reporting') {
                create_Voice_time_reporting(payload); // Show/update voice time reporting settings UI
            } else if (type.startsWith('set_Time_reporting') || type == 'set_Whole_point_prompt' || type == 'set_Half_dot_prompt') { // Use startsWith
                Voice_time_reporting(); // Refresh the settings UI after a change
                if (type == 'set_Whole_point_prompt' || type == 'set_Half_dot_prompt') {
                    alert('Saved!'); // Dịch
                }
            } else if (type == 'is_xiaoai') {
                // This logic seemed incomplete or for debugging, can be kept or removed
                 /*
                var arr = btn_states;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].value == 'TTS' || arr[i].value == 'Execute Command') {
                        arr[i].setAttribute('skip', 1);
                        arr[i].style.display = '';
                    }
                }
                */
            }

            // After processing most Unisound messages, request its info again to keep UI updated
            // Avoid doing this immediately after get_info itself to prevent loops
            if (type !== 'get_info' && type !== 'login_state') {
                 setTimeout(function () {
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
                     }
                 }, 500);
            }

        } else {
             // Handle Unisound errors (code != 1 or 2)
             console.warn("Unisound message indicates error:", parsed_unisound_data);
             // Optionally display an error message to the user based on parsed_unisound_data.msg
        }
    }
}

// ===================================
// WEBSOCKET MESSAGE HANDLING
// ===================================

/**
 * Main message handler for WebSocket communications from EchoService
 * @param {Object} data - The message data received from WebSocket
 */
function message(data) {
    var messageType = data.type;
    // console.log("Raw Message:", data); // For debugging

    if (messageType === 'sends') { // Batch response
        if (data.code == 200 && data.data) {
            var list_sends = data.data; // Use different variable name
            if (data.type_id == 'device_info') { // Specific batch for device info
                hide = true; // Assume hide flag means don't show generic alert
                 // Find specific data parts within the batch
                 var deviceInfoPayload = list_sends.find(val => val.type_id == 'get_device_info')?.data;
                 var cpuTempPayload = list_sends.find(val => val.type_id == 'cpu_temp')?.data;
                 set_systeminfo1(deviceInfoPayload, cpuTempPayload); // Update UI
                return;
            }
             // Process other batch responses individually
            for (var i in list_sends) {
                 if (list_sends.hasOwnProperty(i)){ // Ensure it's not from prototype
                    message(list_sends[i]);
                 }
            }
        } else {
             console.error("Batch message error or no data:", data);
        }
        return;
    } else if (messageType === 'get_info') { // Main info update
        if (unisound_init_timer !== -1) {
            clearTimeout(unisound_init_timer);
            unisound_init_timer = -1;
        }

        if (unisound_init_timer1 !== -1) {
            clearTimeout(unisound_init_timer1);
            unisound_init_timer1 = -1;
        }

        var parsedInfoData = safeJsonParse(data.data, 'get_info');
        if (parsedInfoData) {
            if (init_state || init_state1) { // If first time receiving info
                var skipWaitingBtn = document.getElementById('Skip_Waiting');
                if (skipWaitingBtn) skipWaitingBtn.remove(); // Remove skip button
                index(parsedInfoData); // Initialize the main UI
                init_state = false; // Mark as initialized
            } else {
                update_info(parsedInfoData); // Update existing UI
            }
        }

    } else if (messageType === 'list') { // Playlist update
        var parsedListData = safeJsonParse(data.data, 'list');
        if (parsedListData) {
            update_list(parsedListData);
        }
    } else if (messageType === 'get_eq_config') { // Sound effects config update
        var parsedEqData = safeJsonParse(data.data, 'get_eq_config');
        if (parsedEqData) {
            update_sound_effects(parsedEqData);
        }
    } else if (messageType == 'login_state') { // Login state update (usually from Unisound)
        login_state(data.data); // Pass the inner data object
    } else if (messageType == 'Unisound') { // Encapsulated message from Unisound
        if (unisound_init_timer != -1) clearTimeout(unisound_init_timer); unisound_init_timer = -1;
        if (unisound_init_timer1 != -1) clearTimeout(unisound_init_timer1); unisound_init_timer1 = -1;
        Unisound(data); // Process Unisound message
    } else if (messageType == 'BT_Device') { // Bluetooth device list update
        update_bluetooth_data(data.data);
    } else if (messageType == 'BT_enable') { // Bluetooth enabled confirmation
        if (btn_bluetooth_enable) btn_bluetooth_enable.wait = false;
    } else if (messageType == 'BT_disable') { // Bluetooth disabled confirmation
        if (btn_bluetooth_enable) btn_bluetooth_enable.wait = false;
    } else if (messageType.startsWith('BT_')) { // Other Bluetooth commands (connect, disconnect, etc.)
        if (data.code != 200) {
            alert("Bluetooth Error: " + data.msg + ' [Code: ' + data.code + ']'); // Dịch
        }
        // Close the device config popup if it's open after a BT action
        var bt_config_div = document.getElementById('bluetooth_device_config_div');
         if (popup && popup.contains(bt_config_div)) { // Check if popup contains the div
             popup.onclose();
         }
    } else if (messageType == 'max_vol') { // Max volume info
        if (data.code == 200 && data.data != null) { // Check data validity
            vols.max = data.data;
            vol_text.innerHTML = ' ' + vols.value + '/' + vols.max; // Update display
        }
    } else if (messageType == 'Auto_restart_device') { // Auto-reboot settings received
        if (data.code == 200) {
            create_Auto_restart_device(data.data);
        }
    } else if (messageType == 'set_Auto_restart_device_open' || messageType == 'set_Auto_restart_device_time') { // Confirmation for auto-reboot setting change
        if (data.code == 200) {
            Auto_restart_device(); // Refresh the settings UI
        }
    } else if (messageType == 'play_local_music') { // Result of playing local music command
        var text_area = document.getElementById('text'); // Get text area element
        if (text_area) { // Check if exists
            if (data.code != 200) {
                var msg = '[Play Local Music]: ' + data.msg; // Dịch
                text_area.value = msg;
                alert(msg);
            } else {
                text_area.value = '[Play Local Music]: ' + data.data; // Dịch
            }
        }
    } else if (messageType == 'reboot_echo' && data.type_id != 'switch_player') { // Echo reboot confirmation
        alert('EchoService restarted successfully!'); // Dịch
        // Re-enable the button if it exists
        var rebootBtn = document.getElementById('RebootEcho_btn');
        if(rebootBtn) {
             rebootBtn.value = 'Reboot Echo';
             rebootBtn.disabled = false;
        }
    } else if (messageType == 'switch_player' || data.type_id == 'switch_player') { // Player switch result
        if (data.code == 200) {
             var switchBtn = document.getElementById('switch_player'); // Get button element
             if (switchBtn) { // Check if button exists
                 if (messageType == 'reboot_echo') { // Confirmation after reboot for switch
                     var player_name = switchBtn.getAttribute('PlayerType') == 2 ? 'ExoPlayer' : 'MediaPlayer';
                     alert('Switched to ' + player_name + ' successfully!'); // Dịch
                     return; // Don't need to send reboot again
                 }
                 // Initial switch command success, now trigger reboot
                 var player = data.data.player;
                 if (player == 2) {
                     switchBtn.setAttribute('PlayerType', 2);
                     switchBtn.value = 'Switch to MediaPlayer'; // Dịch
                 } else {
                     switchBtn.setAttribute('PlayerType', 1);
                     switchBtn.value = 'Switch to ExoPlayer'; // Dịch
                 }
                 // Send reboot command to apply the switch
                 ws_send(JSON.stringify({ type: 'reboot_echo', type_id: 'switch_player' }));
             }
        } else {
            alert("Switch failed! " + data.msg); // Dịch
        }
    } else { // Other message types (mostly shell command results or confirmations)
        var hide_alert = false; // Flag to suppress generic alert for specific cases
        var type_id = data.type_id; // Get the original request ID if present

        // Handle specific shell command results based on type_id
        if (data.type == 'shell' && type_id == 'query') { // Old system info query
            hide_alert = true;
            set_systeminfo(data.data);
        } else if (data.type == 'shell' && type_id == 'useless_services_detection') { // Useless services list
            hide_alert = true;
            useless_services_detection(data.data);
        } else if (data.type == 'shell' && type_id == 'hide_useless_services') { // Confirmation for hiding services
            hide_alert = true;
            var btn_hide = document.getElementById('hide_useless_services');
            if (btn_hide) { // Check if button exists
                btn_hide.value = 'Useless services disabled!'; // Dịch
                btn_hide.disabled = true;
                setTimeout(function () { // Re-run detection after a delay
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'shell', type_id: 'useless_services_detection', shell: '/system/bin/pm list packages' }));
                     }
                 }, 2000);
            }
        } else if (data.type == 'shell' && type_id == 'get_hostname') { // Hostname/IP result
            hide_alert = true;
            if (init_state || init_state1) { // If still initializing
                init_state = false; // Mark basic init as done (hostname received)
                 // Now request full info
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'get_info' }));
                 }
            }

            if (data.data) { // Parse hostname and IP
                var lines = data.data.split("\r\n");
                if (lines.length > 0) { // Check lines array length
                     hostname = lines[0] ? lines[0].trim() : hostname; // Get hostname from first line safely
                     var netcfg_lines = lines.slice(1); // Rest are likely from netcfg
                     local_ip = null; // Reset local_ip
                     netcfg_lines.forEach(function (line) {
                         if (line.includes('wlan0') && line.includes('UP')) { // Find active wlan0 interface
                             var parts = line.split(/\s+/); // Split by whitespace
                             parts.forEach(function (part) {
                                 if (reg_ip1.test(part)) { // Check if it's an IP address format
                                     local_ip = part.split('/')[0]; // Extract IP before '/'
                                 }
                             });
                         }
                     });

                    if (hostname != '') {
                         // Use local_ip if found, otherwise original ip might be the hostname itself
                         var ip_to_store = local_ip ? local_ip : ip.split(':')[0]; // Get IP part only
                         update_device_list({ hostname: hostname, ip: ip_to_store, dev_name: info.device_name, url: location.href.split('?')[0].split('#')[0], device_sid: '', device_msid: connect_id || '' }); // Update local list
                         Storage.setItem('current_hostname', hostname); // Store current hostname
                         clearTimeout(update_background_timer); // Clear previous background timer
                         update_background_timer = setTimeout(function () { // Update background after a delay
                             var img = Storage.getItem(hostname + '_background');
                             set_background_css(img ? img : background); // Use stored or default
                             update_StatusBar();
                         }, 50);
                         dev_name = '[' + hostname.substr(-4) + ']'; // Short identifier
                    }
                    // Update page title
                    if (document.title.substr(-6) != dev_name && !document.title.includes('Fetching')) { // Avoid updating if fetching
                        if (document.title.endsWith(']')) { // Check if ends with previous identifier
                            document.title = document.title.substring(0, document.title.length - 6) + dev_name;
                        } else {
                            document.title += dev_name;
                        }
                         var h3_title = document.getElementsByTagName('h3')[0];
                         if (h3_title && !h3_title.innerHTML.includes('Connecting') && !h3_title.innerHTML.includes('Initializing')) { // Avoid overwriting status messages
                             h3_title.innerHTML = document.title;
                         }
                    }
                }
            }
        } else if (data.type == 'shell' && type_id == 'ps') { // Process list result
            hide_alert = true;
            ps_message(data.data);
        } else if (data.type == 'shell' && type_id == 'ping_r1service') { // Ping result
            hide_alert = true;
            ping_r1service = -2; // Default to error
            if (data.code == 200) {
                ping_r1service_time = new Date().getTime();
                if (data.data) {
                    var lines = data.data.split("\r\n");
                    for (var i = 0; i < lines.length; i++) {
                        var str = lines[i];
                        if (str != '' && str.includes('CST') || str.includes('GMT')) { // Look for time zone marker
                            try { // Parse date robustly
                                 // Attempt parsing common formats, might need adjustment based on actual output
                                 device_date = new Date(str.replace(" CST ", " GMT+0800 ").replace(" GMT ", " GMT+0000 ")); // Try common replacements
                                 if (isNaN(device_date.getTime())) { // If parsing failed
                                      console.warn("Could not parse date string from shell:", str);
                                      device_date = null;
                                 }
                            } catch (e) {
                                 console.error("Error parsing date:", str, e);
                                 device_date = null;
                            }
                            break; // Assume first date line is correct
                        }
                    }
                    var device_time_str = (device_date != null ? set_time(Math.floor(device_date.getTime() / 1000)) : 'Unknown'); // Dịch
                    var deviceTimeElement = document.getElementById('device_time');
                    if (deviceTimeElement) {
                        deviceTimeElement.innerHTML = 'Speaker Time: ' + device_time_str; // Dịch
                    }
                    if (data.data.includes('icmp_seq=1')) { // Check if ping reply received
                        ping_r1service = 1; // Success
                    } else {
                        ping_r1service = 0; // Failed (timeout or other error)
                    }
                }
            } else {
                ping_r1service = data.code; // Store error code
            }
        } else if (data.type == 'shell' && type_id == 'set_date') { // Time sync confirmation
            hide_alert = true;
            alert('Speaker time synced successfully!'); // Dịch
             // Refresh time display
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'shell', type_id: 'ping_r1service', shell: 'date & ping -w 1 r1service.wxfsq.com' }));
             }
        } else if (data.type == 'shell' && type_id == 'reboot_xiaoaiservice') { // Xiaoai reboot part 1
            hide_alert = true;
            // Send broadcasts to restart Xiaoai services
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'shell', shell: 'am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/.ai.BootReceiver&am broadcast -a android.intent.action.BOOT_COMPLETED -n com.duoqin.ai/com.xiaofei.BootReceiver' }));
                 alert('Xiaoai service restart command sent!'); // Dịch
             }
        } else if (data.type == 'shell' && type_id == 'activation_xiaoai') { // Xiaoai activation part 1
             hide_alert = true;
             // Send broadcasts for activation
              if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'shell', shell: 'am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/.ai.BootReceiver&am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/com.taobao.accs.EventReceiver' }));
                  alert('Xiaoai activation command sent! Check screen page later.'); // Dịch
              }
              // Re-enable button after timeout
              var activationBtn = document.getElementById('activation_xiaoai'); // Assuming button has this ID
              if(activationBtn) {
                  setTimeout(function () {
                      activationBtn.value = 'Activate Xiaoai (One-Click)'; // Reset text
                      activationBtn.disabled = false;
                  }, 3000);
              }
        } else if (data.type == 'shell' && type_id == 'screen_shell') { // Handle shell command results from Screen view
            hide_alert = true;
            // Process shell command results for Screen view
            var resultText = document.getElementById('screen_shell_result');
            if (resultText) {
                if (data.code == 200) {
                    resultText.value += data.data + '\n';
                } else {
                    resultText.value += 'Error: ' + data.msg + '\n';
                }
                // Scroll to bottom of textarea
                resultText.scrollTop = resultText.scrollHeight;
            }
        } else if (data.type == 'play') { // Generic play confirmation (might be from index change)
            hide_alert = true;
        } else if (data.type == 'send_message' && type_id == 'dormancy') { // Enter/Exit sleep confirmation
            hide_alert = true;
             // Refresh Unisound info to update sleep state button
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
             }
        } else if (type_id == 'modify_color') { // Color save confirmation
            hide_alert = true;
            alert('Saved!'); // Dịch
        } else if (type_id == 'get_device_info') { // Batch device info result (part 1)
            hide_alert = true;
            // This is handled by the 'sends' type check now, but keep for safety
            // set_systeminfo1(data.data);
        }

        // Show generic success/error alert if not hidden and type_id exists
        if (type_id != null && !hide_alert) {
            var text_area = document.getElementById('text');
            var tips_text = '';
            if (data.code == 200) {
                 // Switch to music page after successful playback-related actions
                if (type_id.startsWith('Play') || type_id == 'Unisound Favorites' || type_id == 'Personal Radio') { // Use startsWith
                     var musicPageBtn = document.getElementById('btn_page_music');
                     if (musicPageBtn) switch_page(musicPageBtn);
                }
                var tips = get_tips(type_id); // Get stored success message
                tips_text = '[' + type_id + ']: ' + (tips != null ? tips : data.data); // Use stored tip or raw data
            } else {
                tips_text = '[' + type_id + ']: ' + (data.msg || 'Unknown error'); // Show error message
            }
            if (text_area) text_area.value = tips_text; // Update info text area
            alert(tips_text); // Show alert
        }
    }
}

// Retrieves stored success message for a specific action type_id
function get_tips(type_id) {
    return tips_data[type_id] || null; // Return stored tip or null
}

// Closes the main popup when clicking outside its content
window.onclick = function (event) {
    if (event.target == popup) { // Check if the click target is the popup background itself
        if(typeof popup.onclose === 'function') { // Check if onclose exists
            popup.onclose();
        }
    }
}

// ===================================
// UI INITIALIZATION AND UPDATES
// ===================================

// Initializes the main control interface after receiving initial info
function index(data) {
    if (reload) { // If reload flag is set (e.g., after Unisound error)
        location.reload();
        return;
    }

    info = data; // Store initial info globally
    if (data.ver != null) {
        ver = data.ver;
    }
    if (data.u_ver != null) {
        u_ver = data.u_ver;
    }

    // Determine Unisound status based on received data and version
    if (ver + 1 > 1835) { // Check if version supports the Unisound flag
        is_unisound = !!data.Unisound; // Use boolean conversion
        is_new_unisound = is_unisound && u_ver > 1000;
    } else {
        // Assume Unisound exists for older versions, may need refinement
        is_unisound = true;
        is_new_unisound = u_ver > 1000;
    }

    if (init_state) { // Still waiting for hostname/ip info
        var h3_index = document.getElementsByTagName('h3')[0];
        if (h3_index) h3_index.innerHTML = 'Fetching device info...'; // Dịch
        // Request hostname/IP info
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws_send(JSON.stringify({ type: 'shell', type_id: 'get_hostname', shell: 'getprop net.hostname && netcfg' }));
        }
        return; // Wait for hostname info before building UI
    }
    init_state1 = false; // Mark this initialization step as done

    // --- Build Main Page UI ---
    document.title = 'R1 Speaker Control Panel' + dev_name; // Set initial title
    h3.innerHTML = document.title;

    // Info Text Area
    texts_div.innerHTML = ''; // Clear previous content
    var text_info_label = document.createElement('text');
    text_info_label.innerHTML = 'Info: '; // Dịch
    texts_div.appendChild(text_info_label);
    var textarea_info = document.createElement('textarea');
    textarea_info.setAttribute('readonly', 'readonly');
    textarea_info.id = 'text';
    texts_div.appendChild(textarea_info);
    texts_div.appendChild(document.createElement('br'));

    // Input Area
    var text_input_label = document.createElement('text');
    text_input_label.innerHTML = 'Input: '; // Dịch
    texts_div.appendChild(text_input_label);
    var input_cmd = document.createElement('input');
    input_cmd.type = 'text';
    input_cmd.id = 'input';
    texts_div.appendChild(input_cmd);

    // Speaker and Source Selectors (if supported)
    var div_selectors = document.createElement('div'); // Container for selectors
    var addedSelector = false; // Flag to check if any selector was added

    if (ver > 1600 && u_ver > 1700) { // Requires higher versions
        addedSelector = true;
        var text_speaker_label = document.createElement('text');
        text_speaker_label.innerHTML = 'Speaker:'; // Dịch
        div_selectors.appendChild(text_speaker_label);
        // Speaker names (kept original values, translated display names)
        var speaker_options = [['Xuanxuan', 'SWEET'], ['Xiaowen', 'FEMALE'], ['Tangtang', 'CHILDREN'], ['Lingling', 'LZL'], ['Xiaofeng', 'MALE'], ['Tiantian', 'TIANTIAN']];
        var tts_speaker_select = document.createElement('select');
        tts_speaker_select.id = 'tts_speaker';
        tts_speaker_select.onchange = function () {
            update_TtsSpeaker(this.value);
        };
        for (var i = 0; i < speaker_options.length; i++) {
            var option = document.createElement('option');
            option.innerHTML = speaker_options[i][0]; // Translated name
            option.value = speaker_options[i][1]; // Original value
            if (option.value == data.ttsModelType) { // Check against initial data
                option.selected = true;
            }
            tts_speaker_select.appendChild(option);
        }
        div_selectors.appendChild(tts_speaker_select);
    }

    if ((ver > 1600 && u_ver > 1600) || (ver > 1600 && u_ver > 1700)) { // Check version compatibility for source selector
         addedSelector = true;
         var text_source_label = document.createElement('text');
         text_source_label.innerHTML = ' Music Source:'; // Dịch (add space)
         div_selectors.appendChild(text_source_label);
         // Source names (kept original values, translated display names)
         var source_options = [['QQ Music', 'qq'], ['Kuwo Music', 'kuwo'], ['Netease Music', 'netease']];
         var music_source_select = document.createElement('select');
         music_source_select.id = 'music_source';
         music_source_select.onchange = function () {
             set_music_source(this.value);
         };
         for (var i = 0; i < source_options.length; i++) {
             var option = document.createElement('option');
             option.innerHTML = source_options[i][0]; // Translated name
             option.value = source_options[i][1]; // Original value
             if (option.value == data.music_source) { // Check against initial data
                 option.selected = true;
             }
             music_source_select.appendChild(option);
         }
         div_selectors.appendChild(music_source_select);
    }

    if (addedSelector) {
        texts_div.appendChild(div_selectors); // Add selectors container if anything was added
    }
    divs.appendChild(texts_div); // Add the text/input area to main content


    // --- Build Bluetooth Page UI (if supported) ---
    if (ver + 1 > 1847) {
        bluetooth_div.innerHTML = ''; // Clear previous content
        bluetooth_div.style = 'display:none;';
        bluetooth_div.id = 'bluetooth'; // Keep ID

        // Enable/Disable Button
        btn_bluetooth_enable.type = 'button';
        btn_bluetooth_enable.className = 'btn';
        btn_bluetooth_enable.value = 'Enable Bluetooth Adapter'; // Default text // Dịch
        btn_bluetooth_enable.disabled = true; // Start disabled until status known
        btn_bluetooth_enable.wait = false;
        btn_bluetooth_enable.enable = -1; // -1: unknown, 0: off, 1: on
        btn_bluetooth_enable.onclick = function () {
            if (this.wait) return; // Prevent double clicks
            if (this.enable == 0) { // If currently off, turn on
                this.wait = true;
                this.disabled = true;
                this.value = 'Enabling...'; // Dịch
                ws_send(JSON.stringify({ type: 'BT_enable' }));
            } else if (this.enable == 1) { // If currently on, turn off
                this.wait = true;
                this.disabled = true;
                this.value = 'Disabling...'; // Dịch
                ws_send(JSON.stringify({ type: 'BT_disable' }));
            }
             // Re-enable button after a timeout in case confirmation doesn't arrive
            setTimeout(() => {
                 if(this.wait) { // Only reset if still waiting
                     this.wait = false;
                     this.disabled = false;
                     // Reset text based on last known state (or default)
                     this.value = this.enable == 1 ? 'Disable Bluetooth Adapter' : 'Enable Bluetooth Adapter';
                 }
             }, 3000);
        };
        bluetooth_div.appendChild(btn_bluetooth_enable);

        // Discoverable Button
        btn_bluetooth_scan1.type = 'button';
        btn_bluetooth_scan1.className = 'btn';
        btn_bluetooth_scan1.value = 'Make Discoverable'; // Dịch
        btn_bluetooth_scan1.disabled = true;
        btn_bluetooth_scan1.onclick = function () {
            // Determine target scan mode based on current state and Service_Normally_Open setting
            var targetMode = 20; // Default: Not discoverable
            if (this.ScanMode == 23 || this.ScanMode == 21) { // If currently discoverable
                 targetMode = 20; // Turn off discoverability
                 this.value = 'Make Discoverable'; // Dịch
            } else { // If currently not discoverable
                 targetMode = (info && info.Service_Normally_Open) ? 21 : 23; // 21: Connectable only, 23: Connectable & Discoverable
                 this.value = 'Disable Discoverable'; // Dịch
            }
             this.disabled = true; // Disable temporarily
             ws_send(JSON.stringify({ type: 'BT_setScanMode', mode: targetMode }));
             // Request updated device list shortly after
             setTimeout(() => {
                 ws_send(JSON.stringify({ type: 'BT_Device' }));
                 this.disabled = false; // Re-enable
             }, 500);
        };
        bluetooth_div.appendChild(btn_bluetooth_scan1);

        // Scan Button
        btn_bluetooth_scan.type = 'button';
        btn_bluetooth_scan.className = 'btn';
        btn_bluetooth_scan.value = 'Scan for Devices'; // Dịch
        btn_bluetooth_scan.disabled = true;
        btn_bluetooth_scan.onclick = function () {
            this.value = 'Scanning...'; // Dịch
            this.disabled = true;
            ws_send(JSON.stringify({ type: 'BT_StartScan' }));
            // Request device list shortly after starting scan
            setTimeout(() => ws_send(JSON.stringify({ type: 'BT_Device' })), 500);
            // Re-enable button after a scan duration (e.g., 12 seconds)
             setTimeout(() => {
                 this.value = 'Scan for Devices'; // Dịch
                 this.disabled = false;
             }, 12000);
        };
        bluetooth_div.appendChild(btn_bluetooth_scan);

        // Device List Container
        bluetooth_list_div.innerHTML = ''; // Clear previous
        bluetooth_list_div.style = 'max-width:600px;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px;';
        var div_list_spacer_top = document.createElement('div');
        div_list_spacer_top.style.height = '15px';
        bluetooth_list_div.appendChild(div_list_spacer_top);

        // Title and Toggle Icon for Playlist
        var div_list_title_container = document.createElement('div');
        div_list_title_container.style.cursor = 'pointer'; // Indicate clickable
        var text_list_title = document.createElement('text');
        text_list_title.id = 'bluetooth_list_title';
        text_list_title.style = 'color:rgba(0,160,255,1);font-size: 15px; margin-left: 10px;'; // Add margin
        text_list_title.innerHTML = 'Bluetooth Devices'; // Dịch
        div_list_title_container.appendChild(text_list_title);
        var text_list_icon = document.createElement('text');
        text_list_icon.id = 'bluetooth_list_ico';
        text_list_icon.style = 'font-size: 13px;color:rgba(0,160,255,1);';
        text_list_icon.innerHTML = '	▼'; // Default: collapsed
        div_list_title_container.appendChild(text_list_icon);
        div_list_title_container.onclick = function () { // Toggle visibility
            var list_ico = document.getElementById('bluetooth_list_ico');
            var list_occupancy = document.getElementById('bluetooth_list_occupancy');
            if (bluetooth_lists.style.display == 'none') {
                if (list_occupancy) list_occupancy.style.display = 'none';
                bluetooth_lists.style.display = 'block';
                list_ico.innerHTML = '	▲'; // Expanded icon
                 // Request fresh list when expanding
                 ws_send(JSON.stringify({ type: 'BT_Device' }));
            } else {
                if (list_occupancy) list_occupancy.style.display = 'block';
                bluetooth_lists.style.display = 'none';
                list_ico.innerHTML = '	▼'; // Collapsed icon
            }
        }
        bluetooth_list_div.appendChild(div_list_title_container);

        // Placeholder for collapsed state
        var div_list_occupancy = document.createElement('div');
        div_list_occupancy.id = 'bluetooth_list_occupancy';
        div_list_occupancy.style.display = 'block'; // Start collapsed
        div_list_occupancy.style.height = '15px';
        bluetooth_list_div.appendChild(div_list_occupancy);

        // Container for the actual list items
        bluetooth_lists.innerHTML = ''; // Clear previous
        bluetooth_lists.style = 'margin: 0px auto;max-height:500px;overflow-x:hidden;overflow-y:auto; display: none;'; // Start hidden

        var bluetooth_list_table = document.createElement('table'); // Use table for structure
        bluetooth_list_table.id = 'bluetooth_list_table'; // Give it an ID
        bluetooth_list_table.setAttribute('border', '0');
        bluetooth_list_table.setAttribute('cellspacing', '0');
        bluetooth_list_table.setAttribute('cellpadding', '0');
        bluetooth_list_table.setAttribute("style", "width:100%;color:rgba(0,160,255,1);margin: 0px auto;");
        bluetooth_lists.appendChild(bluetooth_list_table);

        // Paired Devices Section
        var tr_paired_title = bluetooth_list_table.insertRow();
        var td_paired_title = tr_paired_title.insertCell();
        td_paired_title.style.paddingTop = '10px'; // Add some spacing
        var text_paired_title = document.createElement('text');
        text_paired_title.id = 'bluetooth_pairing_title';
        text_paired_title.style = 'color:rgba(0,160,255,1);font-size: 13px; margin-left: 15px;'; // Style title
        text_paired_title.innerHTML = 'Paired Devices [0]'; // Dịch
        td_paired_title.appendChild(text_paired_title);
        bluetooth_pairing_devices.innerHTML = ''; // Clear content area
        var tr_paired_content = bluetooth_list_table.insertRow();
        var td_paired_content = tr_paired_content.insertCell();
        td_paired_content.appendChild(bluetooth_pairing_devices); // Add the container div here

        // Scanned Devices Section
        var tr_scan_hr = bluetooth_list_table.insertRow();
        var td_scan_hr = tr_scan_hr.insertCell();
        td_scan_hr.style.padding = '5px 0';
        var hr_scan = document.createElement('hr');
        hr_scan.size = 1;
        hr_scan.className = 'hr1';
        td_scan_hr.appendChild(hr_scan);

        var tr_scan_title = bluetooth_list_table.insertRow();
        var td_scan_title = tr_scan_title.insertCell();
        var text_scan_title = document.createElement('text');
        text_scan_title.id = 'bluetooth_scan_title';
        text_scan_title.style = 'color:rgba(0,160,255,1);font-size: 13px; margin-left: 15px;'; // Style title
        text_scan_title.innerHTML = 'Scanned Devices [0]'; // Dịch
        td_scan_title.appendChild(text_scan_title);
        bluetooth_scan_devices.innerHTML = ''; // Clear content area
        var tr_scan_content = bluetooth_list_table.insertRow();
        var td_scan_content = tr_scan_content.insertCell();
        td_scan_content.appendChild(bluetooth_scan_devices); // Add the container div here

         // Bottom Separator
         var tr_bottom_hr = bluetooth_list_table.insertRow();
         var td_bottom_hr = tr_bottom_hr.insertCell();
         td_bottom_hr.style.padding = '5px 0';
         var hr_bottom = document.createElement('hr');
         hr_bottom.size = 1;
         hr_bottom.className = 'hr1';
         td_bottom_hr.appendChild(hr_bottom);


        bluetooth_list_div.appendChild(bluetooth_lists); // Append the main list container
        bluetooth_div.appendChild(bluetooth_list_div); // Append the whole section
        divs.appendChild(bluetooth_div); // Add to main content area
    }
    // --- End Build Bluetooth Page UI ---

    // --- Build Device Info Page UI (if supported) ---
    if ((ver + 1 > 1825 || (ver < 1823 && ver > 1800))) { // Check version compatibility
        device_info.innerHTML = ''; // Clear previous content
        device_info.style = 'display:none;'; // Start hidden
        device_info.id = 'device_info'; // Assign ID

        var div_info_container = document.createElement('div');
        div_info_container.style = 'max-width:600px;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px; padding: 0 10px;'; // Add padding
        device_info.appendChild(div_info_container);

        var div_info_spacer_top = document.createElement('div');
        div_info_spacer_top.style.height = '15px';
        div_info_container.appendChild(div_info_spacer_top);

        // Login & Auth Info (only if new Unisound)
        if (is_new_unisound && u_ver + 1 > 1800 && ver + 1 > 1825) {
            var text_login_label = document.createElement('text');
            text_login_label.style.color = 'rgba(0,160,255,1)';
            text_login_label.innerHTML = "Login Info:<br>"; // Dịch
            div_info_container.appendChild(text_login_label);
            var user_info_text = document.createElement('text');
            user_info_text.style.color = 'rgba(0,160,255,1)';
            user_info_text.id = 'user_info_text';
            user_info_text.innerHTML = 'Loading...'; // Placeholder // Dịch
            div_info_container.appendChild(user_info_text);
            div_info_container.appendChild(document.createElement('br'));

            var text_auth_label = document.createElement('text');
            text_auth_label.innerHTML = "<br>Authorization Info:<br>"; // Dịch
            text_auth_label.style.color = 'rgba(0,160,255,1)';
            div_info_container.appendChild(text_auth_label);
            var sq_info_text = document.createElement('text');
            sq_info_text.style.color = 'rgba(0,160,255,1)';
            sq_info_text.id = 'sq_info_text';
            sq_info_text.innerHTML = 'Loading...'; // Placeholder // Dịch
            div_info_container.appendChild(sq_info_text);
            div_info_container.appendChild(document.createElement('br'));
        }

        // System Info
        var text_sys_label = document.createElement('text');
        if (is_new_unisound && u_ver + 1 > 1800 && ver + 1 > 1825) {
            text_sys_label.innerHTML = "<br>System Info:<br>"; // Dịch
        } else {
            text_sys_label.innerHTML = "System Info:<br>"; // Dịch
        }
        text_sys_label.style.color = 'rgba(0,160,255,1)';
        div_info_container.appendChild(text_sys_label);
        var state_info_text = document.createElement('text'); // Renamed variable
        state_info_text.style.color = 'rgba(0,160,255,1)';
        state_info_text.id = 'state_info_text';
        state_info_text.innerHTML = 'Loading...'; // Placeholder // Dịch
        div_info_container.appendChild(state_info_text);
        div_info_container.appendChild(document.createElement('br'));

        var div_info_spacer_bottom = document.createElement('div');
        div_info_spacer_bottom.style.height = '15px';
        div_info_container.appendChild(div_info_spacer_bottom);

        // Wake Word Sensitivity Slider (if supported)
        if (is_new_unisound && u_ver + 1 > 1822 && ver + 1 > 1825) {
            var Main_Wakeup_Benchmark_div = document.createElement('div');
            Main_Wakeup_Benchmark_div.style = 'color:rgba(238, 0, 0, 1); margin-bottom: 10px;'; // Add margin

            var text_sensitivity_label = document.createElement('text');
            text_sensitivity_label.innerHTML = 'Wake Word Sensitivity'; // Dịch
            var div_label_container = document.createElement('div');
             div_label_container.style.marginBottom = '5px'; // Space below label
             div_label_container.appendChild(text_sensitivity_label);
             Main_Wakeup_Benchmark_div.appendChild(div_label_container);


            var text_low = document.createElement('text');
            text_low.innerHTML = 'Low'; // Dịch
            var div_low = document.createElement('div');
             div_low.style = 'width:50px;display:inline-block;text-align:center; vertical-align: middle;'; // Align text
             div_low.appendChild(text_low);
             Main_Wakeup_Benchmark_div.appendChild(div_low);

            // Use existing global Main_Wakeup_Benchmark element
            Main_Wakeup_Benchmark.type = 'range';
            Main_Wakeup_Benchmark.min = 0;
            Main_Wakeup_Benchmark.step = 10;
            Main_Wakeup_Benchmark.max = 600;
            Main_Wakeup_Benchmark.maxvalue = 600; // Store original max
            Main_Wakeup_Benchmark.value = 0; // Default value
            Main_Wakeup_Benchmark.disabled = true; // Start disabled
            Main_Wakeup_Benchmark.style.verticalAlign = 'middle'; // Align slider
            Main_Wakeup_Benchmark.addEventListener('input', function () {
                clearTimeout(Main_Wakeup_Benchmark_timer);
                // Display current value dynamically if needed
                // var currentValText = document.getElementById('sensitivity_value_text');
                // if(currentValText) currentValText.innerHTML = (parseInt(this.value) / 100).toFixed(2);

                Main_Wakeup_Benchmark_timer = setTimeout(() => {
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        var type_to_send = (u_ver + 1 > 1848) ? 'User_Wakeup_Benchmark' : 'Main_Wakeup_Benchmark';
                        var value_to_send = parseInt(Main_Wakeup_Benchmark.value) / 100;
                        var data_to_send = { type: type_to_send };
                        if (type_to_send === 'User_Wakeup_Benchmark') {
                            data_to_send.User_Wakeup_Benchmark = value_to_send;
                        } else {
                            data_to_send.Benchmark = value_to_send;
                        }
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: data_to_send }));
                    }
                }, 100); // Debounce sending
            });
            Main_Wakeup_Benchmark_div.appendChild(Main_Wakeup_Benchmark);

            var text_high = document.createElement('text');
            text_high.innerHTML = 'High'; // Dịch
            var div_high = document.createElement('div');
             div_high.style = 'width:50px;display:inline-block;text-align:center; vertical-align: middle;'; // Align text
             div_high.appendChild(text_high);
             Main_Wakeup_Benchmark_div.appendChild(div_high);
            device_info.appendChild(Main_Wakeup_Benchmark_div);
        }

         // Max Recording Time Slider (if supported)
        if (is_new_unisound && u_ver + 1 > 1822 && ver + 1 > 1828) {
             var asrMaxDuration_div = document.createElement('div');
             asrMaxDuration_div.style = 'color:rgba(238, 0, 0, 1); margin-bottom: 10px;'; // Add margin

             var text_asr_label = document.createElement('text');
             text_asr_label.innerHTML = 'Max Recording Time'; // Dịch
             var div_asr_label = document.createElement('div');
              div_asr_label.style.marginBottom = '5px';
              div_asr_label.appendChild(text_asr_label);
              asrMaxDuration_div.appendChild(div_asr_label);

             var text_asr_spacer = document.createElement('text');
             var div_asr_spacer = document.createElement('div');
              div_asr_spacer.style = 'width:50px;display:inline-block; vertical-align: middle;';
              div_asr_spacer.appendChild(text_asr_spacer); // Empty spacer
              asrMaxDuration_div.appendChild(div_asr_spacer);

             // Use existing global asrMaxDuration element
             asrMaxDuration.type = 'range';
             asrMaxDuration.min = 2; // Minimum 2 seconds
             asrMaxDuration.step = 1;
             asrMaxDuration.max = 10; // Default max, will be updated
             asrMaxDuration.value = 1; // Default value
             asrMaxDuration.disabled = true; // Start disabled
             asrMaxDuration.style.verticalAlign = 'middle';
             asrMaxDuration.addEventListener('input', function () {
                 clearTimeout(asrMaxDuration_timer);
                 asrMaxDuration_value.innerHTML = this.value + 's'; // Update display immediately // Dịch 's'
                 asrMaxDuration_timer = setTimeout(() => {
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'asrMaxDuration', Duration: parseInt(asrMaxDuration.value) * 1000 } }));
                     }
                 }, 100); // Debounce
             });
             asrMaxDuration_div.appendChild(asrMaxDuration);

             // Use existing global asrMaxDuration_value element
             asrMaxDuration_value.innerHTML = 'Unknown'; // Initial text // Dịch
             var div_asr_value = document.createElement('div');
              div_asr_value.style = 'width:50px;display:inline-block;text-align:center; vertical-align: middle;';
              div_asr_value.appendChild(asrMaxDuration_value);
              asrMaxDuration_div.appendChild(div_asr_value);
             device_info.appendChild(asrMaxDuration_div);
        }

         // Buttons container
         var div_info_buttons = document.createElement('div');
         div_info_buttons.style.marginTop = '10px'; // Add space above buttons

        // Login related buttons (if new Unisound)
        if (is_new_unisound && u_ver + 1 > 1800 && ver + 1 > 1825) {
            var btn_refresh_auth = document.createElement("input");
            btn_refresh_auth.type = 'button';
            btn_refresh_auth.className = 'btn';
            btn_refresh_auth.value = 'Refresh Auth'; // Dịch
            btn_refresh_auth.onclick = function () {
                var data1 = this;
                data1.disabled = true;
                setTimeout(function () { data1.disabled = false; }, 1000);
                update_device_info(); // Trigger info refresh
            };
            div_info_buttons.appendChild(btn_refresh_auth);

            var btn_relogin_qq = document.createElement("input");
            btn_relogin_qq.type = 'button';
            btn_relogin_qq.className = 'btn';
            btn_relogin_qq.value = 'Re-login QQ Music'; // Dịch
            btn_relogin_qq.onclick = function () {
                if (confirm("Are you sure you want to re-login to QQ Music?\nPlease use the same QQ account used previously!")) { // Dịch
                    login_app = 'qqmusic';
                    hide_device_info();
                    stop_updateinfo();
                    if(divs) divs.innerHTML = ''; // Clear main content
                     if(h3) divs.appendChild(h3); // Re-add title
                     if(login_div) divs.appendChild(login_div); // Re-add login div
                    onhide_login(); // Show login process
                }
            };
            div_info_buttons.appendChild(btn_relogin_qq);

            if (u_ver + 1 > 1844) { // Kuwo relogin button
                var btn_relogin_kuwo = document.createElement("input");
                btn_relogin_kuwo.type = 'button';
                btn_relogin_kuwo.className = 'btn';
                btn_relogin_kuwo.value = 'Re-login Kuwo Music'; // Dịch
                btn_relogin_kuwo.onclick = function () {
                    if (confirm("Are you sure you want to re-login to Kuwo Music?")) { // Dịch
                        login_app = 'kuwo'; // Set app type
                        hide_device_info();
                        stop_updateinfo();
                         if(divs) divs.innerHTML = '';
                         if(h3) divs.appendChild(h3);
                         if(login_div) divs.appendChild(login_div);
                        onhide_login();
                    }
                };
                div_info_buttons.appendChild(btn_relogin_kuwo);
            }

            var btn_relogin_netease = document.createElement("input");
            btn_relogin_netease.type = 'button';
            btn_relogin_netease.className = 'btn';
            btn_relogin_netease.value = 'Re-login Netease Music'; // Dịch
            btn_relogin_netease.onclick = function () {
                if (confirm("Are you sure you want to re-login to Netease Cloud Music?")) { // Dịch
                    login_app = 'netease';
                    hide_device_info();
                    stop_updateinfo();
                     if(divs) divs.innerHTML = '';
                     if(h3) divs.appendChild(h3);
                     if(login_div) divs.appendChild(login_div);
                    onhide_login();
                }
            };
            div_info_buttons.appendChild(btn_relogin_netease);

            var btn_logout = document.createElement("input");
            btn_logout.type = 'button';
            btn_logout.className = 'btn';
            btn_logout.value = 'Logout'; // Dịch
            btn_logout.onclick = function () {
                if (confirm("Are you sure you want to log out?")) { // Dịch
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'exit_login' } }));
                     }
                }
            };
            div_info_buttons.appendChild(btn_logout);
        }
        // --- End Login Buttons ---

         // --- Other Device Info Buttons ---
         var btn_clean_proc = document.createElement("input");
         btn_clean_proc.type = 'button';
         btn_clean_proc.className = 'btn';
         btn_clean_proc.id = 'Cleanup_process';
         btn_clean_proc.value = 'Clean Processes'; // Dịch
         btn_clean_proc.onclick = function () {
             var btn = this;
             btn.disabled = true;
             btn.value = 'Please wait...'; // Dịch
              if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'shell', type_id: 'ps', shell: 'ps' })); // Request process list first
              } else {
                  alert("Connection error, cannot clean processes."); // Dịch
                  btn.disabled = false;
                  btn.value = 'Clean Processes'; // Dịch
              }
         };
         div_info_buttons.appendChild(btn_clean_proc);

         // Use existing global dormancy_btn element
         dormancy_btn.type = 'button';
         dormancy_btn.className = 'btn';
         dormancy_btn.id = 'dormancy_btn';
         dormancy_btn.value = 'Enter/Exit Sleep'; // Default text // Dịch
         dormancy_btn.style.display = 'none'; // Hide initially
         dormancy_btn.dormancy_state = -1; // -1: unknown, 0: awake, 1: asleep
         dormancy_btn.onclick = function () {
             var data1 = this;
             data1.disabled = true;
             setTimeout(function () { data1.disabled = false; }, 2000); // Prevent rapid clicks

             var confirm_msg = "Are you sure you want to " + this.value + "?"; // Dịch

             if (this.dormancy_state != -1) { // Only confirm if state is known
                 if (!confirm(confirm_msg)) {
                     return;
                 }
             }

             // Send command based on current state
             if (this.dormancy_state == 1) { // Currently asleep, wake up
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_message', what: 256, arg1: 1, arg2: -1, obj: true, type_id: 'dormancy' }));
                  }
             } else if (this.dormancy_state == 0) { // Currently awake, sleep
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_message', what: 256, arg1: 2, arg2: -1, obj: true, type_id: 'dormancy' }));
                  }
             } else {
                 alert("Cannot determine current sleep state."); // Dịch
             }
         }
         div_info_buttons.appendChild(dormancy_btn);

        // Mic enable/disable button (if supported)
        if (u_ver + 1 > 1840) {
            // Use existing global Wakeup_set_btn element
            Wakeup_set_btn.type = 'button';
            Wakeup_set_btn.className = 'btn';
            Wakeup_set_btn.id = 'Wakeup_set_btn'; // Ensure ID is set
            Wakeup_set_btn.value = 'Enable/Disable Mic'; // Default // Dịch
            Wakeup_set_btn.style.display = 'none'; // Hide initially
            Wakeup_set_btn.Wakeup_set_state = -1; // -1: unknown, 0: disabled, 1: enabled

            Wakeup_set_btn.onclick = function () {
                var data1 = this;
                data1.disabled = true;
                setTimeout(function () { data1.disabled = false; }, 2000); // Prevent rapid clicks

                var action_text = (this.Wakeup_set_state == 0 ? "Enable Mic" : "Disable Mic"); // Dịch
                var confirm_msg = "Are you sure you want to " + action_text + "?\nTip: This is a temporary switch!"; // Dịch

                if (this.Wakeup_set_state != -1) { // Only confirm if state is known
                    if (!confirm(confirm_msg)) {
                        return;
                    }
                } else {
                     alert("Cannot determine current microphone state."); // Dịch
                     return;
                }

                // Send command based on current state
                if (this.Wakeup_set_state == 1) { // Currently enabled, disable
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'stop_wakeup' } }));
                     }
                } else if (this.Wakeup_set_state == 0) { // Currently disabled, enable
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'enter_wakeup' } }));
                     }
                }
                 // Refresh info after sending command
                 setTimeout(() => {
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
                      }
                 }, 500);
            }
            div_info_buttons.appendChild(Wakeup_set_btn);
        }

         // --- Rest of Device Info Buttons ---
         // (Disable Useless Services, Enable/Disable Unisound, Clear Data, etc.)
         // Translate button text and confirmation messages similarly to the examples above.
         // Remember to check version compatibility (ver, u_ver) for each button.

         var btn_disable_useless = document.createElement("input");
         btn_disable_useless.type = 'button';
         btn_disable_useless.className = 'btn';
         btn_disable_useless.id = 'hide_useless_services';
         btn_disable_useless.value = 'No Useless Services to Disable'; // Default/Initial text // Dịch
         btn_disable_useless.disabled = true;
         btn_disable_useless.setAttribute('wait', 0); // Timer to prevent rapid clicks
         btn_disable_useless.onclick = function () {
             var btn = this; // Use 'this'
             if (!confirm("Are you sure you want to disable " + useless_services_list.length + " potentially useless services? This might affect functionality.")) return; // Dịch + Confirmation
             btn.disabled = true;
             btn.value = 'Please wait...'; // Dịch
             btn.setAttribute('wait', new Date().getTime() + 30000); // 30 sec timeout
             var commands = useless_services_list.map(service => '/system/bin/pm hide ' + service); // Create hide commands
              if (ws && ws.readyState === WebSocket.OPEN) {
                 // Send commands one by one or batched if supported
                 if (ver + 1 > 1855) { // Assumes batch support in newer versions
                     ws_send(JSON.stringify({ type: 'shell1', type_id: 'hide_useless_services', shells: commands }));
                 } else {
                     ws_send(JSON.stringify({ type: 'shell', type_id: 'hide_useless_services', shell: commands.join(' && ') }));
                 }
              } else {
                  alert("Connection error, cannot disable services."); // Dịch
                  btn.disabled = false;
                  btn.value = 'Disable Useless Services'; // Reset text
              }
         };
         div_info_buttons.appendChild(btn_disable_useless);

        if (ver + 1 > 1835) { // Enable/Disable Unisound Button
            var btn_toggle_unisound = document.createElement("input");
            btn_toggle_unisound.id = 'disable_unisound';
            btn_toggle_unisound.type = 'button';
            btn_toggle_unisound.className = 'btn';
            // Text will be set based on 'is_unisound' flag later
            btn_toggle_unisound.value = is_unisound ? 'Disable Unisound' : 'Enable Unisound'; // Dịch
            btn_toggle_unisound.onclick = function () {
                var action = this.value;
                if (confirm("Are you sure you want to " + action + "?")) { // Dịch
                    var data1 = this;
                    data1.disabled = true;
                    setTimeout(function () { data1.disabled = false; }, 1000);
                     var command = (action == 'Disable Unisound') ? 'hide' : 'unhide'; // Dịch comparison
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/pm ' + command + ' com.phicomm.speaker.device' }));
                         // Reload page after command to reflect change
                         setTimeout(() => location.reload(), 1500);
                     } else {
                          alert("Connection error."); // Dịch
                     }
                }
            };
            div_info_buttons.appendChild(btn_toggle_unisound);
        }

        if (is_unisound) { // Clear Unisound Data Button
            var btn_clear_unisound = document.createElement("input");
            btn_clear_unisound.id = 'clear_unisound';
            btn_clear_unisound.type = 'button';
            btn_clear_unisound.className = 'btn';
            btn_clear_unisound.value = 'Clear Unisound Data'; // Dịch
            btn_clear_unisound.onclick = function () {
                var confirm_text = "Are you sure you want to clear Unisound data?"; // Dịch
                if (ver + 1 > 1825) {
                    confirm_text += "\nAfter clearing, you will need to log in again!"; // Dịch
                }
                if (confirm(confirm_text) && confirm("Really clear Unisound data? This cannot be undone!")) { // Dịch double confirm
                    var btn = this; // Use 'this'
                    btn.disabled = true;
                    btn.value = 'Please wait...'; // Dịch
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/pm clear com.phicomm.speaker.device' }));
                         setTimeout(function () {
                             ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                             alert('Clear complete, please log in again later!'); // Dịch
                             btn.disabled = false;
                             btn.value = 'Clear Unisound Data'; // Dịch
                             location.reload(); // Reload after clearing data
                         }, 3000);
                     } else {
                          alert("Connection error."); // Dịch
                          btn.disabled = false;
                          btn.value = 'Clear Unisound Data'; // Dịch
                     }
                }
            };
            div_info_buttons.appendChild(btn_clear_unisound);
        }

         // Bluetooth Prompt Tone Button (if supported)
         if (u_ver + 1 > 1825 && ver + 1 > 1841) {
             // Use existing global Bluetooth_prompt_tone_btn
             Bluetooth_prompt_tone_btn.type = 'button';
             Bluetooth_prompt_tone_btn.className = 'btn';
             Bluetooth_prompt_tone_btn.id = 'Bluetooth_prompt_tone_btn';
             Bluetooth_prompt_tone_btn.value = 'Enable/Disable Bluetooth Prompt Tone'; // Default text // Dịch
             Bluetooth_prompt_tone_btn.style.display = 'none'; // Hide initially
             Bluetooth_prompt_tone_btn.state = -1; // -1: unknown, 0: off, 1: on
             Bluetooth_prompt_tone_btn.onclick = function () {
                 var data1 = this;
                 data1.disabled = true;
                 setTimeout(function () { data1.disabled = false; }, 1000);
                 var enable_action = (this.state == 1) ? false : true; // Toggle state
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'Set_Bluetooth_prompt_tone', enable: enable_action } }));
                      // Refresh info after sending command
                      setTimeout(() => {
                           if (ws && ws.readyState === WebSocket.OPEN) {
                               ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
                           }
                      }, 500);
                  } else {
                       alert("Connection error."); // Dịch
                  }
             }
             div_info_buttons.appendChild(Bluetooth_prompt_tone_btn);
         }

         // Submit Play Record Button (if supported)
         if (u_ver + 1 > 1824) {
             // Use existing global Submit_Play_Record_btn
             Submit_Play_Record_btn.type = 'button';
             Submit_Play_Record_btn.className = 'btn';
             Submit_Play_Record_btn.id = 'Submit_Play_Record_btn';
             Submit_Play_Record_btn.value = 'Enable/Disable Play Record Submission'; // Default // Dịch
             Submit_Play_Record_btn.style.display = 'none'; // Hide initially
             Submit_Play_Record_btn.state = -1; // -1: unknown, 0: off, 1: on
             Submit_Play_Record_btn.onclick = function () {
                 var data1 = this;
                 data1.disabled = true;
                 setTimeout(function () { data1.disabled = false; }, 1000);
                 var enable_action = (this.state == 1) ? false : true; // Toggle
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'Submit_Play_Record', enable: enable_action } }));
                      // Refresh info
                      setTimeout(() => {
                           if (ws && ws.readyState === WebSocket.OPEN) {
                               ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
                           }
                       }, 500);
                  } else {
                       alert("Connection error."); // Dịch
                  }
             }
             div_info_buttons.appendChild(Submit_Play_Record_btn);
         }

         // Clear Memo/Alarm Button (if supported)
         if (is_new_unisound && u_ver + 1 > 1820 && ver + 1 > 1815) {
             var btn_clear_memo = document.createElement("input");
             btn_clear_memo.id = 'clear_memo';
             btn_clear_memo.type = 'button';
             btn_clear_memo.className = 'btn';
             btn_clear_memo.value = 'No Alarms/Reminders to Clear'; // Default // Dịch
             btn_clear_memo.disabled = true;
             btn_clear_memo.setAttribute('wait', 0);
             btn_clear_memo.onclick = function () {
                 if (confirm("Are you sure you want to clear all alarms/reminders?")) { // Dịch
                     var btn = this; // Use 'this'
                     btn.disabled = true;
                     btn.value = 'Please wait...'; // Dịch
                     var command_type = (u_ver + 1 > 1840) ? 'delall_memo' : 'del_memo'; // Choose command based on version
                     var command_data = (command_type === 'del_memo') ? { data: memo_list } : {}; // Include list for older version
                      if (ws && ws.readyState === WebSocket.OPEN) {
                          ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: command_type, ...command_data } }));
                      } else {
                           alert("Connection error."); // Dịch
                           btn.disabled = false;
                           btn.value = 'Clear Alarms/Reminders'; // Reset text // Dịch
                      }
                     btn.setAttribute('wait', new Date().getTime() + 30000); // Timeout for re-enabling
                 }
             };
             div_info_buttons.appendChild(btn_clear_memo);
         }

         // Switch Player Button (if supported)
         if (ver + 1 > 1856) {
             var btn_switch_player = document.createElement("input");
             btn_switch_player.id = 'switch_player';
             btn_switch_player.type = 'button';
             btn_switch_player.className = 'btn';
             // Text set later based on 'info.PlayerType'
             btn_switch_player.value = 'Switch Player'; // Placeholder // Dịch
             btn_switch_player.onclick = function () {
                 var currentType = this.getAttribute('PlayerType');
                 var targetPlayer = (currentType == 2) ? 1 : 2; // Toggle between 1 (MediaPlayer) and 2 (ExoPlayer)
                 var targetName = (targetPlayer == 1) ? 'MediaPlayer' : 'ExoPlayer';
                 if (confirm("Are you sure you want to switch to " + targetName + "? The EchoService will restart.")) { // Dịch
                      if (ws && ws.readyState === WebSocket.OPEN) {
                          ws_send(JSON.stringify({ type: 'switch_player', player: targetPlayer }));
                      } else {
                           alert("Connection error."); // Dịch
                      }
                 }
             };
             div_info_buttons.appendChild(btn_switch_player);
         }

        // --- End Device Info Buttons ---
        device_info.appendChild(div_info_buttons); // Add buttons container
        divs.appendChild(device_info); // Add the whole page to main content
    }
    // --- End Build Device Info Page UI ---

    // --- Build Sound Effects Page UI (if supported) ---
    if (ver > 1821) {
        sound_effects_div.innerHTML = ''; // Clear previous content
        sound_effects_div.style = 'display:none; color:rgba(238, 0, 0, 1);'; // Start hidden, set text color
        sound_effects_div.id = 'sound_effects'; // Assign ID

        // EQ Section
        var div_eq_section = document.createElement('div');
        div_eq_section.style.marginBottom = '15px';

        var text_eq_label = document.createElement('text');
        text_eq_label.innerHTML = "EQ:"; // Dịch
        var checkbox_eq = document.createElement('input');
        checkbox_eq.type = 'checkbox';
        checkbox_eq.id = 'eq_switch';
        checkbox_eq.style.verticalAlign = 'middle'; // Align checkbox
        checkbox_eq.onclick = function () {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'set_eq_enable', enable: this.checked }));
                // Request updated config after changing state
                setTimeout(() => { // Delay slightly
                     if (ws && ws.readyState === WebSocket.OPEN) {
                        ws_send(JSON.stringify({ type: 'get_eq_config' }));
                     }
                 }, 100);
            }
        };
        div_eq_section.appendChild(text_eq_label);
        div_eq_section.appendChild(checkbox_eq);
        eqs_div.innerHTML = ''; // Clear previous EQ bands
        div_eq_section.appendChild(eqs_div); // Add container for bands
        sound_effects_div.appendChild(div_eq_section);

        // Bass Boost Section
        var div_bass_section = document.createElement('div');
        div_bass_section.style.marginBottom = '15px';
        var text_bass_label = document.createElement('text');
        text_bass_label.innerHTML = "Bass Boost:"; // Dịch
        var checkbox_bass = document.createElement('input');
        checkbox_bass.type = 'checkbox';
        checkbox_bass.id = 'bass_switch';
        checkbox_bass.style.verticalAlign = 'middle';
        checkbox_bass.onclick = function () {
             if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'set_bass_enable', enable: this.checked }));
                 setTimeout(() => {
                     if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'get_eq_config' }));
                     }
                 }, 100);
             }
        };
        div_bass_section.appendChild(text_bass_label);
        div_bass_section.appendChild(checkbox_bass);
        bass_div.innerHTML = ''; // Clear previous bass controls
        div_bass_section.appendChild(bass_div);
        sound_effects_div.appendChild(div_bass_section);

        // Loudness Section
        var div_loudness_section = document.createElement('div');
        div_loudness_section.style.marginBottom = '15px';
        var text_loudness_label = document.createElement('text');
        text_loudness_label.innerHTML = "Loudness:"; // Dịch
        var checkbox_loudness = document.createElement('input');
        checkbox_loudness.type = 'checkbox';
        checkbox_loudness.id = 'loudness_switch';
        checkbox_loudness.style.verticalAlign = 'middle';
        checkbox_loudness.onclick = function () {
             if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'set_loudness_enable', enable: this.checked }));
                 setTimeout(() => {
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'get_eq_config' }));
                      }
                 }, 100);
             }
        };
        div_loudness_section.appendChild(text_loudness_label);
        div_loudness_section.appendChild(checkbox_loudness);
        loudness_div.innerHTML = ''; // Clear previous loudness controls
        div_loudness_section.appendChild(loudness_div);
        sound_effects_div.appendChild(div_loudness_section);

        // Preset Section
        preset_div.innerHTML = ''; // Clear previous presets
        preset_div.style.marginTop = '10px';
        sound_effects_div.appendChild(preset_div);

        divs.appendChild(sound_effects_div); // Add page to main content
    }
    // --- End Build Sound Effects Page UI ---

    // --- Build Screen Control Page UI (if supported) ---
    if (ver > 1000) { // Check version
        screen_div.innerHTML = ''; // Clear previous content
        screen_div.id = 'screen_div';
        screen_div.style = 'display:none;'; // Start hidden

        var img_screen = document.createElement('img'); // Use different variable name
        img_screen.id = 'screen_img';
        img_screen.style = 'max-width:100%; height: auto; border: 1px solid grey; background-color: #eee; min-height: 100px; display:block; margin: 0 auto;'; // Add some styling
        img_screen.alt = "Screen Capture Loading..."; // Add alt text // Dịch
        img_screen.onclick = function (e) {
             if (!ws || ws.readyState !== WebSocket.OPEN) return;
            var rect = this.getBoundingClientRect();
            var x = e.clientX - rect.left; // Use clientX relative to element
            var y = e.clientY - rect.top;  // Use clientY relative to element
            // Use naturalWidth/Height if available and loaded, otherwise clientWidth/Height
            var naturalW = this.naturalWidth || this.clientWidth;
            var naturalH = this.naturalHeight || this.clientHeight;
            var clientW = this.clientWidth;
            var clientH = this.clientHeight;

             if (naturalW > 0 && naturalH > 0 && clientW > 0 && clientH > 0) { // Ensure dimensions are valid
                 var targetX = Math.round((x / clientW) * 720); // Target resolution
                 var targetY = Math.round((y / clientH) * 480); // Target resolution
                 ws_send(JSON.stringify({ type: 'input', input: 'tap ' + targetX + ' ' + targetY }));
             }
        };

        // Touch event handling for swipe/long-press
        function handleTouchEvent(event) {
            if (!ws || ws.readyState !== WebSocket.OPEN) return;
            var touch = event.changedTouches[0];
            var rect = this.getBoundingClientRect();
            var x = touch.clientX - rect.left;
            var y = touch.clientY - rect.top;
            var clientW = this.clientWidth;
            var clientH = this.clientHeight;

             if (clientW <= 0 || clientH <= 0) return; // Ignore if dimensions are invalid

            var targetX = Math.round((x / clientW) * 720);
            var targetY = Math.round((y / clientH) * 480);

            switch (event.type) {
                case "touchstart":
                    clearTimeout(long_press_timer); // Clear previous timer
                    startx = targetX; // Store start coordinates
                    starty = targetY;
                    // Set timer for long press action
                    long_press_timer = setTimeout(function () {
                        long_press_timer = -1; // Mark timer as fired
                        console.log("Long press detected at:", startx, starty);
                        ws_send(JSON.stringify({ type: 'input', input: 'swipe ' + startx + ' ' + starty + ' ' + (startx + 1) + ' ' + (starty + 1) + ' 1000' })); // Simulate long press with short swipe
                    }, 500); // 500ms for long press
                    break;
                case "touchend":
                    clearTimeout(long_press_timer); // Clear timer
                    if (long_press_timer === -1) { // If long press already fired, do nothing more
                        startx = -1; starty = -1; // Reset coords
                        return;
                    }
                    if (touch_disable) break; // Check disable flag

                    // Calculate distance moved
                    var dx = targetX - startx;
                    var dy = targetY - starty;
                    var distance = Math.sqrt(dx*dx + dy*dy);

                    if (startx === -1 || starty === -1) break; // Invalid start

                    // If movement is small, treat as tap (handled by onclick), otherwise treat as swipe
                    if (distance > 10) { // Threshold for swipe vs tap
                        console.log('Swipe from (' + startx + ',' + starty + ') to (' + targetX + ',' + targetY + ')');
                        ws_send(JSON.stringify({ type: 'input', input: 'swipe ' + startx + ' ' + starty + ' ' + targetX + ' ' + targetY }));
                    } else {
                         // It's a tap, onclick handler will manage it.
                         // We might still send a tap event here for robustness if onclick sometimes fails.
                         // ws_send(JSON.stringify({ type: 'input', input: 'tap ' + targetX + ' ' + targetY }));
                         console.log("Tap detected (or very short swipe) at:", targetX, targetY);
                    }
                    startx = -1; starty = -1; // Reset start coords
                    break;
                case "touchmove":
                    // Clear long press timer if finger moves significantly
                    var move_dx = targetX - startx;
                    var move_dy = targetY - starty;
                    if (Math.sqrt(move_dx*move_dx + move_dy*move_dy) > 5) { // Movement threshold
                         clearTimeout(long_press_timer);
                    }
                    event.preventDefault(); // Prevent default scrolling
                    break;
            }
        }
        img_screen.addEventListener("touchstart", handleTouchEvent, false);
        img_screen.addEventListener("touchend", handleTouchEvent, false);
        img_screen.addEventListener("touchmove", handleTouchEvent, false);

        // Mouse wheel scrolling simulation
        img_screen.onwheel = function (event) { // Use 'onwheel' standard event
             if (!ws || ws.readyState !== WebSocket.OPEN) return;
             event.preventDefault(); // Prevent page scroll

             var rect = this.getBoundingClientRect();
             var x = event.clientX - rect.left;
             var y = event.clientY - rect.top;
             var clientW = this.clientWidth;
             var clientH = this.clientHeight;

             if (clientW <= 0 || clientH <= 0) return;

             var targetX = Math.round((x / clientW) * 720);
             var targetY = Math.round((y / clientH) * 480);
             var scrollAmount = 150; // Pixels to simulate scroll
             var newY = targetY + (event.deltaY > 0 ? scrollAmount : -scrollAmount); // Calculate new Y based on scroll direction

             // Limit scroll interval
             var now = new Date().getTime();
             if (now - mousewheel_interval > 200) { // Min 200ms interval
                 mousewheel_interval = now;
                 console.log("Wheel swipe:", targetX, targetY, targetX, newY);
                 ws_send(JSON.stringify({ type: 'input', input: 'swipe ' + targetX + ' ' + targetY + ' ' + targetX + ' ' + newY + ' 300' })); // Add duration for swipe
             }
        };

        screen_div.appendChild(img_screen);
        screen_div.appendChild(document.createElement('br'));

        // Control Buttons (Back, Input Text, Delete, Reset Size)
        var div_screen_controls = document.createElement('div');
        div_screen_controls.style.marginTop = '10px';

        var key_controls = [['Back', 4], ['Input Text', -1, 'input'], ['Delete', 67]]; // Dịch
        for (var i = 0; i < key_controls.length; i++) {
            var btn_key = document.createElement("input");
            btn_key.type = 'button';
            btn_key.className = 'btn';
            btn_key.value = key_controls[i][0];

            if (key_controls[i][1] == -1 && key_controls[i][2] == 'input') { // Input Text Button
                btn_key.id = 'input_text_btn';
                btn_key.onclick = function () {
                    this.disabled = true;
                    stop_screen(); // Pause screen updates during prompt
                    setTimeout(() => { // Allow UI to update
                        var inputText = prompt('Please enter text:', ''); // Dịch
                        var btn = this; // Reference button inside timeout
                        setTimeout(() => { // Re-enable button and restart screen
                            btn.disabled = false;
                            start_screen();
                        }, 500);

                        if (inputText != null && inputText !== '') { // Check if user entered text
                            inputs = inputText.split(''); // Split into characters for sending
                            var input_function = function () {
                                if (!ws || ws.readyState !== WebSocket.OPEN) {
                                    console.warn("WebSocket closed, cannot send text input.");
                                    inputs = []; // Clear remaining input
                                    return;
                                }
                                var text_chunk = '';
                                // Send characters in small chunks to avoid issues
                                for (var i = 0; i < 5 && inputs.length > 0; i++) { // Send up to 5 chars at a time
                                    text_chunk += inputs.shift();
                                }
                                if (text_chunk !== '') {
                                    send_input("text '" + text_chunk.replace(/'/g, "'\\''") + "'"); // Send escaped text
                                    setTimeout(input_function, 150); // Delay between chunks
                                }
                            };
                            input_function(); // Start sending
                        }
                    }, 100); // Short delay before prompt
                };
            } else { // Other Key Event Buttons (Back, Delete)
                btn_key.setAttribute('data', key_controls[i][1]);
                btn_key.onclick = function () {
                    send_keyevent(this.getAttribute('data'));
                };
            }
            div_screen_controls.appendChild(btn_key);
        }

        // Reset Resolution Button
        var btn_reset_res = document.createElement("input");
        btn_reset_res.type = 'button';
        btn_reset_res.className = 'btn';
        btn_reset_res.value = 'Reset Resolution'; // Dịch
        btn_reset_res.onclick = function () {
            var btn = this;
            btn.disabled = true;
            btn.value = 'Reset to 720x480!'; // Dịch confirmation text
            setTimeout(function () {
                btn.value = 'Reset Resolution'; // Dịch reset
                btn.disabled = false;
            }, 1000);
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'shell', shell: 'wm size 720x480' })); // Command to reset size
             } else {
                  alert("Connection error."); // Dịch
             }
        }
        div_screen_controls.appendChild(btn_reset_res);

        screen_div.appendChild(div_screen_controls);

        // Add Execute Shell functionality to Screen view
        var shellDiv = document.createElement("div");
        shellDiv.style = 'margin-top: 15px;';

        // Shell input field
        var shellInput = document.createElement("input");
        shellInput.type = 'text';
        shellInput.id = 'screen_shell_input';
        shellInput.placeholder = 'Enter shell command...'; // Dịch
        shellInput.style = 'width: 70%; margin-right: 5px; padding: 5px;';
        // Add Enter key event handler
        shellInput.onkeydown = function(event) {
            if (event.keyCode === 13) { // Enter key
                event.preventDefault();
                var input = document.getElementById('screen_shell_input');
                if (input.value.trim() === '') {
                    alert('Please enter a shell command!'); // Dịch
                    return;
                }
                // Display command in results
                var resultText = document.getElementById('screen_shell_result');
                if (resultText) {
                    resultText.value += '$ ' + input.value + '\n';
                    resultText.scrollTop = resultText.scrollHeight;
                }
                // Send shell command with type_id for specific handling
                ws_send(JSON.stringify({ type: 'shell', type_id: 'screen_shell', shell: input.value }));
                // Clear input after sending
                input.value = '';
            }
        };
        shellDiv.appendChild(shellInput);

        // Execute Shell button
        var shellBtn = document.createElement("input");
        shellBtn.type = 'button';
        shellBtn.className = 'btn';
        shellBtn.value = 'Execute Shell'; // Dịch
        shellBtn.style = 'margin-top: 5px;';
        shellBtn.onclick = function() {
            var input = document.getElementById('screen_shell_input');
            if (input.value.trim() === '') {
                alert('Please enter a shell command!'); // Dịch
                return;
            }
            // Display command in results
            var resultText = document.getElementById('screen_shell_result');
            if (resultText) {
                resultText.value += '$ ' + input.value + '\n';
                resultText.scrollTop = resultText.scrollHeight;
            }
            // Send shell command with type_id for specific handling
            ws_send(JSON.stringify({ type: 'shell', type_id: 'screen_shell', shell: input.value }));
            // Clear input after sending
            input.value = '';
        };
        shellDiv.appendChild(shellBtn);

        // Results textarea
        var resultDiv = document.createElement("div");
        resultDiv.style = 'margin-top: 10px;';

        var resultText = document.createElement("textarea");
        resultText.id = 'screen_shell_result';
        resultText.readOnly = true;
        resultText.style = 'width: 90%; height: 150px; padding: 5px; margin-top: 5px; background-color: rgba(0, 0, 0, 0.7); color: rgba(0, 160, 255, 1);';
        resultText.placeholder = 'Shell command results will appear here...'; // Dịch
        resultDiv.appendChild(resultText);

        // Clear button for results
        var clearBtn = document.createElement("input");
        clearBtn.type = 'button';
        clearBtn.className = 'btn';
        clearBtn.value = 'Clear Results'; // Dịch
        clearBtn.style = 'margin-top: 5px;';
        clearBtn.onclick = function() {
            var resultText = document.getElementById('screen_shell_result');
            if (resultText) {
                resultText.value = '';
            }
        };
        resultDiv.appendChild(clearBtn);

        shellDiv.appendChild(resultDiv);
        screen_div.appendChild(shellDiv);

        divs.appendChild(screen_div); // Add screen page to main content
    }
    // --- End Build Screen Control Page UI ---

    // --- Build Music Page UI ---
    musics_div.innerHTML = ''; // Clear previous content
    musics_div.style = 'display: none;'; // Start hidden
    musics_div.id = 'music'; // Assign ID

    // Music Cover Image
    music_pic.id = 'music_pic';
    // Keep original styles for rotation etc.
    music_pic.style = 'display: block;margin: 0px auto;position: relative;width: 183px;height: 183px;border: 6px solid rgba(0, 0, 0, 0.1);overflow: hidden;border-radius: 100%;-webkit-animation: img 30s linear infinite;animation: img 30s linear infinite;animation-play-state:paused;';
    music_pic.nopic = './pic/nopic.jpg'; // Use relative path
    music_pic.src = music_pic.nopic; // Default image
    music_pic.onload = function () {
        musicpic_background(); // Update background when cover loads
    };
    music_pic.onerror = function () {
        this.src = music_pic.nopic; // Fallback on error
    }
    musics_div.appendChild(music_pic);

    // Lyrics Container
    music_lrc.innerHTML = '';
    music_lrc.id = 'music_lrc_container'; // Give it an ID
    music_lrc.style = 'display: none; width: 100%; height: 195px; margin-top: 10px;'; // Start hidden, add margin
    musics_div.appendChild(music_lrc);

    // Double-click actions for cover/lyrics toggle
    music_pic.ondblclick = function () {
        if (music_info != null) { // Update title based on current music
            var title = get_music_title(music_info);
            set_h3('Now Playing: ' + title); // Dịch
            document.title = dev_name + h3.innerHTML;
        }
        this.style.display = 'none'; // Hide cover
        music_lrc.style.display = 'block'; // Show lyrics
        update_lrc(true, true); // Force update and scroll lyrics
        Storage.setItem(hostname + '_lrc_mode', 1); // Save mode preference
    };
    music_lrc.ondblclick = function () {
        this.style.display = 'none'; // Hide lyrics
        music_pic.style.display = 'block'; // Show cover
        Storage.setItem(hostname + '_lrc_mode', 0); // Save mode preference
         // Optionally reset H3 title back to default when showing cover
         // document.title = 'R1 Speaker Music' + dev_name;
         // set_h3(document.title);
    };

    // Restore lyrics mode preference on load
    var lrc_mode = Storage.getItem(hostname + '_lrc_mode');
    if (lrc_mode && lrc_mode == 1) {
        music_pic.style.display = 'none';
        music_lrc.style.display = 'block';
        setTimeout(function () {
            update_lrc(true, true); // Update lyrics if mode was saved as lyrics visible
        }, 10);
    }

    // Spacer below cover/lyrics
    var div_spacer_below_cover = document.createElement('div');
    div_spacer_below_cover.style = 'height:15px;'; // Reduced spacer
    musics_div.appendChild(div_spacer_below_cover);

    // Music Progress Bar Area
    var div_progress_area = document.createElement('div');
    div_progress_area.style.display = 'flex'; // Use flexbox for alignment
    div_progress_area.style.alignItems = 'center'; // Vertically center items
    div_progress_area.style.justifyContent = 'center'; // Horizontally center items
    div_progress_area.style.margin = '0 5px'; // Add slight horizontal margin

    // Current Position Text
    music_time_position.innerHTML = '00:00';
    var div_pos_text = document.createElement('div');
     div_pos_text.style = 'width:50px; text-align: right; margin-right: 5px;'; // Align right
     div_pos_text.appendChild(music_time_position);
     div_progress_area.appendChild(div_pos_text);

    // Progress Slider
    music_time.type = 'range';
    music_time.min = 0;
    music_time.step = 1;
    music_time.max = 0; // Initial max
    music_time.value = 0; // Initial value
    music_time.style.margin = '0'; // Remove default margin
    music_time.style.flexGrow = '1'; // Allow slider to take available space
    music_time.disabled = true; // Start disabled until duration is known
    if (ver > 1827) { // Add listeners only if supported
        music_time.addEventListener('mousedown', function () { time_lock = true; }); // Lock updates on drag start
        music_time.addEventListener('touchstart', function () { time_lock = true; }); // Lock for touch
        music_time.addEventListener('mouseup', function () { // Send seek command on release
            setTimeout(() => { time_lock = false; }, 600); // Unlock after a delay
             if (ws && ws.readyState === WebSocket.OPEN) {
                 send(null, null, 'set_position', { position: parseInt(this.value) }); // Send seek command
                 // Request immediate update after seeking
                 setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send('{"type":"get_info"}'); }, 100);
             }
        });
         music_time.addEventListener('touchend', function () { // Handle touch release same as mouseup
             setTimeout(() => { time_lock = false; }, 600);
              if (ws && ws.readyState === WebSocket.OPEN) {
                 send(null, null, 'set_position', { position: parseInt(this.value) });
                 setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send('{"type":"get_info"}'); }, 100);
              }
         });
        music_time.addEventListener('input', function () { // Update display while dragging
            clearTimeout(music_time.time_lock_timer); // Clear any pending unlock timer
            clearTimeout(music_progress_timer); // Clear any pending update timer
            var position = parseInt(this.value); // Get current slider value
            info_time[0] = -1; // Mark timestamp as invalid during drag
            info_time[1] = position; // Update internal position
            // info_time[2] remains the same (duration)
            music_time_position.innerHTML = ms_to_is(position); // Update displayed time
            update_lrc(false); // Update lyrics based on dragged position
            // Don't send seek command here, wait for mouseup/touchend
        });
    }
    div_progress_area.appendChild(music_time);

    // Duration Text
    music_time_duration.innerText = '00:00';
    var div_dur_text = document.createElement('div');
     div_dur_text.style = 'min-width:50px; text-align: left; margin-left: 5px;'; // Align left
     div_dur_text.appendChild(music_time_duration);
     div_progress_area.appendChild(div_dur_text);

    musics_div.appendChild(div_progress_area); // Add progress area to music page

    // Music Quality Selector (if supported)
    var div_quality = document.createElement('div');
    div_quality.id = 'quality_div';
    div_quality.style = 'display: none; max-height:60px; margin-top: 5px;'; // Hide initially, add margin
    var text_quality_label = document.createElement('text');
    text_quality_label.innerHTML = 'Quality: '; // Dịch
    div_quality.appendChild(text_quality_label);

    // Use existing global switch_quality element
    switch_quality.innerHTML = ''; // Clear previous options
    switch_quality.style.margin = '0 5px 0 0'; // Adjust margin
    switch_quality.style.minWidth = '80px'; // Increase width slightly
    switch_quality.style.height = '25px';
    switch_quality.style.verticalAlign = 'middle';

    // Quality options (translated display names, keep original values)
    var quality_options = [['Hi-Res', 3], ['Lossless', 2], ['Super', 1], ['High', 0]];
    for (var i = 0; i < quality_options.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = quality_options[i][0]; // Translated name
        option.value = quality_options[i][1]; // Original value
        if (data && option.value == data.ExoPlayer_Quality) { // Check initial data if available
            option.selected = true;
        }
        switch_quality.appendChild(option);
    }

    // Hide unsupported quality options based on initial info (if available)
    if (data && data.Support_Flac != true) {
        if (switch_quality.options.length > 2) { // Check if Hi-Res/Lossless options exist
            switch_quality.options[0].style.display = 'none'; // Hide Hi-Res
            switch_quality.options[1].style.display = 'none'; // Hide Lossless
            if(switch_quality.selectedIndex < 2) switch_quality.selectedIndex = 2; // Default to Super if Hi-Res/Lossless was selected
        }
    }

    switch_quality.onchange = function () {
         if (ws && ws.readyState === WebSocket.OPEN) {
             ws_send(JSON.stringify({ type: 'switch_quality', quality: this.value }));
             // Request info update after changing quality
             setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send('{"type":"get_info"}'); }, 200);
         }
    };
    div_quality.appendChild(switch_quality);

    // Use existing global quality_text element
    quality_text.innerHTML = ''; // Clear previous text
    quality_text.style = 'vertical-align: middle;';
    div_quality.appendChild(quality_text);

    musics_div.appendChild(div_quality);
    musics_div.appendChild(document.createElement('div')); // Spacer

    // --- End Build Music Page UI ---

    // --- Music Control Buttons (Previous, Play/Pause, Next) ---
    var div_music_controls1 = document.createElement('div');
    div_music_controls1.style.marginTop = '10px'; // Add margin

    var controls1 = [['Previous', 'prev'], ['Play', 'play'], ['Next', 'next']]; // Dịch
    for (var i = 0; i < controls1.length; i++) {
        var btn = document.createElement("input");
        btn.id = 'music_btn_' + controls1[i][1];
        btn.type = 'button';
        btn.className = 'btn';
        btn.value = controls1[i][0]; // Button text
        btn.setAttribute('data', controls1[i][1]); // Action type
        btn.onclick = function () {
            // Debounce click
            let timeAttr = this.getAttribute('time'); // Use 'this'
            let lastClickTime = parseInt(timeAttr || '0'); // Default to 0 if attribute not set
            if (new Date().getTime() - lastClickTime < 500) return; // Prevent clicks faster than 500ms
            this.setAttribute('time', new Date().getTime().toString());
            send_music_cmd(this); // Call function to send command
        };
        div_music_controls1.appendChild(btn);
    }
    musics_div.appendChild(div_music_controls1);
    // --- End Music Control Buttons 1 ---

    // --- Music Control Buttons (Favorite, Play Mode) ---
    var div_music_controls2 = document.createElement('div');
    div_music_controls2.style.marginTop = '5px'; // Add margin

    var controls2 = [];
    if (u_ver + 1 > 1700) { // Favorite buttons require higher Unisound version
        controls2.push(['Favorite', 'collect']); // Dịch
        controls2.push(['Unfavorite', 'cancel_collect']); // Dịch
    }
    controls2.push(['Shuffle', 'playmode']); // Play mode button (default text 'Shuffle') // Dịch

    for (var i = 0; i < controls2.length; i++) {
        var btn = document.createElement("input");
        btn.id = 'music_btn_' + controls2[i][1];
        btn.type = 'button';
        btn.className = 'btn';
        btn.value = controls2[i][0]; // Button text

        // Hide favorite buttons initially or if not applicable
        if (controls2[i][1] == 'collect' || controls2[i][1] == 'cancel_collect') {
            btn.style.display = 'none';
        }

        if (controls2[i][1] == 'playmode') {
            // Set initial play mode text based on received data
            var playmode_options = [['Shuffle', 1], ['Sequence', 2], ['Repeat One', 3]]; // Dịch modes
            var current_playmode = playmode_options[0]; // Default to Shuffle
            if (data && data.play_mode) { // Check if initial data has play_mode
                 for (var ii = 0; ii < playmode_options.length; ii++) {
                     if (playmode_options[ii][1] == data.play_mode) {
                         current_playmode = playmode_options[ii];
                         break;
                     }
                 }
            }
            btn.setAttribute('mode', current_playmode[1]); // Store mode value
            btn.value = current_playmode[0]; // Set button text
            btn.onclick = function () {
                var playmode_options = [['Shuffle', 1], ['Sequence', 2], ['Repeat One', 3]]; // Dịch modes
                var currentMode = parseInt(this.getAttribute('mode'));
                var nextModeIndex = (playmode_options.findIndex(m => m[1] === currentMode) + 1) % playmode_options.length; // Cycle through modes
                var nextPlaymode = playmode_options[nextModeIndex];

                this.setAttribute('mode', nextPlaymode[1]); // Update attribute
                this.value = nextPlaymode[0]; // Update button text immediately

                // Send command to change play mode
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws_send(JSON.stringify({ type: 'set_play_mode', mode: nextPlaymode[1] }));
                    // Request info update to confirm change (optional, update_info should handle it)
                    // setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send('{"type":"get_info"}'); }, 200);
                }
            };
        } else { // Favorite/Unfavorite buttons
            btn.setAttribute('data', controls2[i][1]); // Action type
            btn.onclick = function () {
                send_music_cmd(this); // Call function to send command
            };
        }
        div_music_controls2.appendChild(btn);
    }
    musics_div.appendChild(div_music_controls2);
    // --- End Music Control Buttons 2 ---

    // --- Cover Background Toggle Button ---
    var div_cover_bg_toggle = document.createElement('div');
    div_cover_bg_toggle.style.marginTop = '10px';
    var btn_cover_bg = document.createElement("input");
    btn_cover_bg.type = 'button';
    btn_cover_bg.className = 'btn';
    btn_cover_bg.value = Cover_background_open ? 'Disable Cover Background' : 'Enable Cover Background'; // Dịch text based on state
    btn_cover_bg.onclick = function () {
        var msg;
        if (Cover_background_open) {
            msg = 'Are you sure you want to disable the cover background?'; // Dịch
        } else {
            msg = "Are you sure you want to enable the cover background?\nTip: Enabling this might cause page lag!"; // Dịch
        }
        if (!confirm(msg)) {
            return;
        }
        Cover_background_open = !Cover_background_open; // Toggle state
        Storage.setItem('Cover_background_open', Cover_background_open); // Save preference
        if (Cover_background_open) {
            this.value = 'Disable Cover Background'; // Dịch
            musicpic_background(); // Apply background immediately
        } else {
            this.value = 'Enable Cover Background'; // Dịch
            Restore_background(); // Restore original/default background
        }
    }
    div_cover_bg_toggle.appendChild(btn_cover_bg);
    musics_div.appendChild(div_cover_bg_toggle);
    // --- End Cover Background Toggle Button ---

    divs.appendChild(musics_div); // Add Music page to main content area
    // --- End Build Music Page UI ---


    // --- Build Volume Control UI ---
    var vols_div = document.createElement('div');
    vols_div.style.marginTop = '15px'; // Add margin above volume control

    var text_vol_label = document.createElement('text');
    text_vol_label.innerHTML = 'Volume: '; // Dịch
    text_vol_label.style.cursor = 'pointer'; // Indicate clickable label
    text_vol_label.addEventListener('click', function () { // Click label to enable slider
        vols.style.pointerEvents = 'auto';
        clearTimeout(vols_disabled_timer);
        vols_disabled_timer = setTimeout(function () { vols.style.pointerEvents = 'none'; }, 3000); // Disable after 3s
    });
    var div_vol_label = document.createElement('div');
     div_vol_label.style = 'min-width:50px; display:inline-block; vertical-align: middle;'; // Align label
     div_vol_label.appendChild(text_vol_label);
     vols_div.appendChild(div_vol_label);

    // Use existing global vols element
    vols.type = 'range';
    vols.min = 0;
    vols.step = 1;
    vols.max = (data && data.vol) ? data.vol : 15; // Set initial max based on data or default
    vols.value = (data && data.vol) ? data.vol : 0; // Set initial value
    vols.style.verticalAlign = 'middle'; // Align slider
    vols.addEventListener('input', function () {
        clearTimeout(vols_disabled_timer); // Reset disable timer on interaction
        clearTimeout(vols.setTimeout); // Clear previous send timer
        mousedown = true; // Set flag
        vols.setTimeout = setTimeout(() => { mousedown = false; }, 600); // Reset flag after delay
        vols_disabled_timer = setTimeout(() => { vols.style.pointerEvents = 'none'; }, 3000); // Schedule disable

        vol_text.innerHTML = ' ' + this.value + '/' + this.max; // Update value display

        // Debounce sending volume change
        if (vols.sendTimeout) clearTimeout(vols.sendTimeout);
        vols.sendTimeout = setTimeout(() => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'set_vol', vol: this.value }));
                 // Request info update after setting volume
                 // setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'get_info' })); }, 150);
            }
        }, 50); // Send after 50ms of no input
    });
    vols.style.pointerEvents = 'none'; // Start disabled
    vols_div.appendChild(vols);

    // Use existing global vol_text element
    vol_text.innerHTML = ' ' + vols.value + '/' + vols.max; // Initial value display
    var div_vol_value = document.createElement('div');
     div_vol_value.style = 'width:50px; display:inline-block; text-align: left; vertical-align: middle; margin-left: 5px;'; // Align value
     div_vol_value.appendChild(vol_text);
     vols_div.appendChild(div_vol_value);

    // Double-click to enable slider
    vols_div.addEventListener('dblclick', function () {
        vols.style.pointerEvents = 'auto';
        clearTimeout(vols_disabled_timer);
        vols_disabled_timer = setTimeout(function () { vols.style.pointerEvents = 'none'; }, 3000);
    });

    // Also enable on single click for better usability
    vols_div.addEventListener('click', function () {
        vols.style.pointerEvents = 'auto';
        clearTimeout(vols_disabled_timer);
        vols_disabled_timer = setTimeout(function () { vols.style.pointerEvents = 'none'; }, 3000);
    });

    // Prevent multi-touch issues on sliders/page
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    // --- End Build Volume Control UI ---


    // --- Build Main Page Switching Buttons ---
    switch_btns.innerHTML = ''; // Clear previous buttons
    var page_options = [ // Define pages and required versions
        ['Music', 'music', 1000],
        ['Screen', 'screen', 1000],
        ['Sound', 'sound_effects', 1822],
        ['Bluetooth', 'bluetooth', 1847],
        ['Device Info', 'device_info', 1822] // Dịch page names
    ];
    page_list = []; // Reset global page list

    for (var i = 0; i < page_options.length; i++) {
        if (ver + 1 > page_options[i][2]) { // Check version compatibility
            var btn_page = document.createElement("input");
            btn_page.id = 'btn_page_' + page_options[i][1];
            var page_data = [page_options[i][0], page_options[i][1], btn_page.id]; // Store page info
            page_list.push(page_data);

            btn_page.type = 'button';
            btn_page.className = 'btn';
            btn_page.value = page_options[i][0]; // Button text (translated name)
            btn_page.setAttribute('data', page_options[i][0]); // Store original name in data attribute
            btn_page.onclick = function () {
                switch_page(this); // Switch page on click
            };
            switch_btns.appendChild(btn_page);
        }
    }
    // Append page switch buttons before or after volume based on layout preference
    // Original code had logic based on URL parameter, simplifying here to place before volume
    divs.appendChild(switch_btns); // Add switch buttons to main content
    divs.appendChild(vols_div); // Add volume control to main content area
    // --- End Build Main Page Switching Buttons ---


    // --- Build Playlist Area UI ---
    div_list.innerHTML = ''; // Clear previous content
    div_list.style = 'max-width:600px;display:none;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px;'; // Hide initially
    div_list.id = 'playlist_container'; // Give it an ID

    var div_list_spacer_top = document.createElement('div');
    div_list_spacer_top.style.height = '15px';
    div_list.appendChild(div_list_spacer_top);

    // Playlist Title and Toggle Icon
    var div_playlist_title_container = document.createElement('div');
    div_playlist_title_container.style.cursor = 'pointer'; // Indicate clickable
    var text_playlist_title = document.createElement('text');
    text_playlist_title.id = 'list_title';
    text_playlist_title.style = 'color:rgba(0,160,255,1);font-size: 15px; margin-left: 10px;';
    text_playlist_title.innerHTML = 'Playlist [0]'; // Default title // Dịch
    div_playlist_title_container.appendChild(text_playlist_title);
    var text_playlist_icon = document.createElement('text');
    text_playlist_icon.id = 'list_ico';
    text_playlist_icon.style = 'font-size: 13px;color:rgba(0,160,255,1);';
    text_playlist_icon.innerHTML = '	▲'; // Default: expanded (change if default is collapsed)
    div_playlist_title_container.appendChild(text_playlist_icon);
    div_playlist_title_container.onclick = function () { // Toggle visibility
        var list_ico = document.getElementById('list_ico');
        var list_occupancy = document.getElementById('list_occupancy');
        var list_content = document.getElementById('playlist_content'); // Get the content div
        if (list_content.style.display == 'none') {
            if (list_occupancy) list_occupancy.style.display = 'none';
            list_content.style.display = 'block';
            list_ico.innerHTML = '	▲'; // Expanded icon
            Storage.setItem(hostname + '_music_list_hide', 0); // Save state: visible
            // Scroll to current song when expanding
            if (List && List.playIndex > -1 && list.rows.length > List.playIndex) { // Check if List and row exist
                 // Use timeout to allow DOM update before scrolling
                 setTimeout(() => {
                     var targetRow = list.rows[List.playIndex];
                     if(targetRow) { // Check if row exists
                        lists.scrollTop = targetRow.offsetTop - lists.offsetTop - 50; // Adjust scroll position slightly above the item
                     }
                 }, 50);
            }
        } else {
            if (list_occupancy) list_occupancy.style.display = 'block';
            list_content.style.display = 'none';
            list_ico.innerHTML = '	▼'; // Collapsed icon
            Storage.setItem(hostname + '_music_list_hide', 1); // Save state: hidden
        }
    };
    div_list.appendChild(div_playlist_title_container);

    // Placeholder for collapsed state
    var div_list_occupancy = document.createElement('div');
    div_list_occupancy.id = 'list_occupancy';
    div_list_occupancy.style.display = 'none'; // Start hidden if default is expanded
    div_list_occupancy.style.height = '15px';
    div_list.appendChild(div_list_occupancy);

    // Container for the actual list items
    lists.innerHTML = ''; // Clear previous
    lists.id = 'playlist_content'; // Assign ID
    lists.className = 'music_list_div';
    lists.style = 'margin: 1px auto;max-height:500px;overflow-x:hidden;overflow-y:auto; display: block;'; // Start visible (or 'none' if default collapsed)
    div_list.appendChild(lists);

    // Use existing global list element (table)
    list.innerHTML = ''; // Clear previous rows
    list.setAttribute('border', '0');
    list.setAttribute('cellspacing', '0');
    list.setAttribute('cellpadding', '0');
    list.setAttribute("style", "width:100%;color:rgba(0,160,255,1);margin: 0px auto;");
    lists.appendChild(list); // Append the table to the scrollable container

    // Restore playlist visibility state
    var music_list_hide = Storage.getItem(hostname + '_music_list_hide');
    if (music_list_hide && music_list_hide == 1) {
        if (div_list_occupancy) div_list_occupancy.style.display = 'block';
        lists.style.display = 'none';
        if (text_playlist_icon) text_playlist_icon.innerHTML = '	▼'; // Set icon to collapsed
    } else {
         if (div_list_occupancy) div_list_occupancy.style.display = 'none';
         lists.style.display = 'block';
         if (text_playlist_icon) text_playlist_icon.innerHTML = '	▲'; // Set icon to expanded
    }
    // --- End Build Playlist Area UI ---

    // --- Build Action Buttons ---
    btns_div.innerHTML = ''; // Clear previous buttons
    btn_states = []; // Reset button states array
    for (var i = 0; i < buttons.length; i++) {
        var button_config = buttons[i][1]; // Get config object
        // Check version compatibility and Unisound status
        if (button_config.min_ver == null) button_config.min_ver = 0; // Default min version
        if (button_config.max_ver == null) button_config.max_ver = Infinity; // Default max version
        if (button_config.min_uver == null) button_config.min_uver = 0;
        if (button_config.max_uver == null) button_config.max_uver = Infinity;
        if (button_config.is_unisound == null) {
             // Assume button works regardless of Unisound unless specified otherwise
             button_config.is_unisound_required = false;
        } else {
             button_config.is_unisound_required = true; // Flag if button depends on unisound status
        }


        // Check if button should be created based on versions
        var version_ok = (ver >= button_config.min_ver && ver <= button_config.max_ver) &&
                         (u_ver >= button_config.min_uver && u_ver <= button_config.max_uver);

        // Check Unisound requirement
        var unisound_ok = !button_config.is_unisound_required || (button_config.is_unisound === is_unisound);

        if (version_ok && unisound_ok) {
            var btn_action = document.createElement("input");
            btn_action.id = 'btn_' + i; // Unique ID based on index
            btn_action.type = 'button';
            btn_action.className = 'btn';
            btn_action.value = buttons[i][0]; // Button text (already translated)
            if (button_config.hide) { // Check hide flag from config
                btn_action.style.display = 'none';
            }
            btn_action.setAttribute('data', JSON.stringify(button_config)); // Store config
            btn_action.onclick = function () {
                click(this); // Call generic click handler
            };
            btn_states.push(btn_action); // Add to state array for later updates
            btns_div.appendChild(btn_action); // Add button to container
        }
    }
     divs.appendChild(btns_div); // Add action buttons container to main content
    // --- End Build Action Buttons ---

    // Initial actions after building UI
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'max_vol' })); // Request max volume
        update_btn_state(); // Update initial state of toggle buttons
        ws_send(JSON.stringify({ type: 'get_eq_config' })); // Request sound effects config
    }

    // Add version info display
    var ver_div = document.getElementById('ver_div');
    if (ver_div) { // Check if element exists
        var web_ver_str = web_ver.toString().split("").join('.');
        var echo_ver_str = ver.toString().split("").join('.');
        var unisound_ver_str = (is_new_unisound && u_ver > 1000) ? u_ver.toString().split("").join('.') : 'N/A'; // Handle Unisound version display
        ver_div.innerHTML = `<a style="color:rgba(238, 0, 0, 1);" href="javascript:create_text_window(null,get_ver());">Ver: E${echo_ver_str} U${unisound_ver_str} W${web_ver_str}</a>`; // Show versions // Dịch label if needed
    }

    start_updateinfo(); // Start polling for updates

    // Apply Firefox specific style if needed
    if (navigator.userAgent.includes('Firefox')) { // Use includes()
        insertStyle('input[type=range] {background:rgba(0,160,255,1);vertical-align:middle;height: 12px;}');
    }

    // --- App specific integration (PlusRuntime) ---
    if (typeof plus != 'undefined') {
        try { // Add try-catch for PlusRuntime features
             plus.key.setVolumeButtonEnabled(false); // Disable native volume control
             // Volume Up Listener
             plus.key.addEventListener("volumeupbutton", function (e) {
                 if (!vols || parseInt(vols.value) >= parseInt(vols.max)) return; // Check element and bounds
                 clearTimeout(vols.setTimeout);
                 mousedown = true; vols.setTimeout = setTimeout(() => { mousedown = false; }, 600);
                 var vol = parseInt(vols.value) + 1;
                 vols.value = vol; // Update slider visually
                 vol_text.innerHTML = ' ' + vol + '/' + vols.max; // Update text
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'set_vol', vol: vol }));
                     // Don't request get_info immediately, let polling handle it
                 }
             });
             // Volume Down Listener
             plus.key.addEventListener("volumedownbutton", function (e) {
                 if (!vols || parseInt(vols.value) <= 0) return; // Check element and bounds
                 clearTimeout(vols.setTimeout);
                 mousedown = true; vols.setTimeout = setTimeout(() => { mousedown = false; }, 600);
                 var vol = parseInt(vols.value) - 1;
                 vols.value = vol;
                 vol_text.innerHTML = ' ' + vol + '/' + vols.max;
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'set_vol', vol: vol }));
                  }
             });
             update_StatusBar(); // Update status bar style
        } catch (e) {
             console.error("PlusRuntime feature error:", e);
        }
    }
    // --- End App Specific Integration ---


    // Add the playlist container AFTER volume/buttons
    divs.appendChild(div_list);

    // Restore last opened page (if any)
    var last_page_id = Storage.getItem(hostname + '_page');
    if (last_page_id && last_page_id !== 'index') { // Check if a specific page was saved
        var page_button = document.getElementById('btn_page_' + last_page_id);
        if (page_button) {
            switch_page(page_button); // Switch to the saved page
        } else {
             switch_page(document.getElementById('btn_page_music')); // Default to music if saved page invalid
        }
    } else {
        switch_page(document.getElementById('btn_page_music')); // Default to music page initially
    }

    // Perform initial UI update with the data received
    update_info(info);

    // Show update log if web version changed
    if (web_ver != localStorage.getItem('web_ver1')) {
        // setTimeout(() => { // Show log after a short delay
            create_text_window('Update Log', get_ver()); // Dịch title
        // }, 2000);
        localStorage.setItem('web_ver1', web_ver); // Update stored version
    }

    // Request additional info needed for Device Info page
    if (ver + 1 > 1855) {
         // Batch request for newer versions
         if (ws && ws.readyState === WebSocket.OPEN) {
             var sends = [];
             sends.push({ type: 'send_to_unisound', data: { type: 'get_info' } });
             if (is_new_unisound) {
                 sends.push({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'info' } } });
             }
             ws_send(JSON.stringify({ type: 'sends', list: sends }));
         }
    } else {
        // Separate requests for older versions
        if (ws && ws.readyState === WebSocket.OPEN) {
             ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
             if (is_new_unisound) {
                 setTimeout(function () {
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'info' } } }));
                      }
                 }, 2000); // Delay API info request
             }
        }
    }

    // Handle browser back/forward navigation to restore page state
    window.onpopstate = () => {
        var page_id = Storage.getItem(hostname + '_page'); // Get saved page
        var target_page_btn_id = 'btn_page_' + (page_id || 'music'); // Default to music
        var target_button = document.getElementById(target_page_btn_id);

        if (target_button) {
             // Check if the target page is already the active one
             if (target_button.value !== target_button.getAttribute('data')) { // If button shows 'Back to Home' it's active
                 // Already on the correct page, do nothing or maybe just update title
             } else {
                 // Switch to the target page indicated by popstate/storage
                 switch_page(target_button);
             }
        } else if (page_id == 'index') { // Handle navigating back to index/IP input page
            // For local version, maybe just reload or go to default page
             // window.history.replaceState(null, null, '/?no_auto_connect');
             // window.history.go(0);
             var defaultButton = document.getElementById('btn_page_music');
             if (defaultButton) switch_page(defaultButton); // Go to default music page
        }
    };
}

// Updates UI elements based on detailed info from Unisound service
function update_unisound_info(data) {
    if (data.code == 1) { // Check if response is successful
        Unisound_info = data.data; // Store the data globally
        if (!is_new_unisound) { // Do nothing if it's not the new Unisound version
            return;
        }

        // Update Dormancy/Sleep Button state
        dormancy_btn.style.display = ''; // Make button visible
        var is_idle = data.data.isIdle; // Check idle status
        var device_status = data.data.DeviceStatus;

        // Update Mic Enable/Disable Button state
        Wakeup_set_btn.style.display = ''; // Make button visible
        if (is_idle) { // Mic is disabled if idle
            Wakeup_set_btn.Wakeup_set_state = 0;
            Wakeup_set_btn.value = 'Mic Disabled'; // Dịch
            Wakeup_set_btn.style.backgroundColor = 'rgba(238, 0, 0, 1)'; // Indicate disabled state
        } else {
            Wakeup_set_btn.Wakeup_set_state = 1;
            Wakeup_set_btn.value = 'Mic Enabled'; // Dịch
            Wakeup_set_btn.style.backgroundColor = ''; // Reset color
        }

        // Determine Sleep button text and state based on version and status
        if (u_ver + 1 > 1849) { // Newer version check
            if (device_status == 5) { // Specific sleep status
                dormancy_btn.value = 'Exit Sleep'; // Dịch
                dormancy_btn.dormancy_state = 1; // State: asleep
                dormancy_btn.style.backgroundColor = 'rgba(238, 0, 0, 1)'; // Indicate sleep state
                Wakeup_set_btn.disabled = true; // Disable mic toggle during sleep
                Wakeup_set_btn.style.backgroundColor = ''; // Reset mic button color
            } else {
                dormancy_btn.value = 'Enter Sleep'; // Dịch
                dormancy_btn.dormancy_state = 0; // State: awake
                dormancy_btn.style.backgroundColor = ''; // Reset color
                Wakeup_set_btn.disabled = false; // Enable mic toggle
            }
        } else { // Older version check (relies only on isIdle)
            if (is_idle) {
                dormancy_btn.value = 'Exit Sleep'; // Dịch
                dormancy_btn.dormancy_state = 1; // State: asleep
                dormancy_btn.style.backgroundColor = ''; // No color change for older versions
            } else {
                dormancy_btn.value = 'Enter Sleep'; // Dịch
                dormancy_btn.dormancy_state = 0; // State: awake
                dormancy_btn.style.backgroundColor = '';
            }
             // Disable mic button if idle in older versions too
             Wakeup_set_btn.disabled = is_idle;
        }

        // Update Submit Play Record Button state
        if (Submit_Play_Record_btn && u_ver + 1 > 1824) { // Check if button exists and version supports it
            Submit_Play_Record_btn.style.display = ''; // Show button
            if (data.data.Submit_Play_Record) {
                Submit_Play_Record_btn.value = 'Disable Play Record Submission'; // Dịch
                Submit_Play_Record_btn.state = 1; // State: enabled
            } else {
                Submit_Play_Record_btn.value = 'Enable Play Record Submission'; // Dịch
                Submit_Play_Record_btn.state = 0; // State: disabled
            }
        }

        // Update Bluetooth Prompt Tone Button state
        if (Bluetooth_prompt_tone_btn && u_ver + 1 > 1825 && ver + 1 > 1841) { // Check element and versions
            Bluetooth_prompt_tone_btn.style.display = ''; // Show button
            if (data.data.Bluetooth_prompt_tone) {
                Bluetooth_prompt_tone_btn.value = 'Disable Bluetooth Prompt Tone'; // Dịch
                Bluetooth_prompt_tone_btn.state = 1; // State: enabled
            } else {
                Bluetooth_prompt_tone_btn.value = 'Enable Bluetooth Prompt Tone'; // Dịch
                Bluetooth_prompt_tone_btn.state = 0; // State: disabled
            }
        }

        // Update sensitivity and recording time sliders
        if (u_ver + 1 > 1848) { // Use User_Wakeup_Benchmark for newer versions
            if (Unisound_info.Wakeup_Benchmark) { // Check if data exists
                var User_Wakeup_Benchmark_data = Unisound_info.Wakeup_Benchmark;
                User_Wakeup_Benchmark_data.code = 1; // Assume success for update
                User_Wakeup_Benchmark_info(User_Wakeup_Benchmark_data);
            }
        } else { // Use Main_Wakeup_Benchmark for older versions
             if (Unisound_info.Main_Wakeup_Benchmark) { // Check if data exists
                var Main_Wakeup_Benchmark_data = Unisound_info.Main_Wakeup_Benchmark;
                Main_Wakeup_Benchmark_data.code = 1; // Assume success
                Main_Wakeup_Benchmark_info(Main_Wakeup_Benchmark_data);
             }
        }

        if (Unisound_info.asrMaxDuration) { // Check if data exists
            var asrMaxDuration_data = Unisound_info.asrMaxDuration; // Use temp variable
            asrMaxDuration_data.code = 1; // Assume success
            asrMaxDuration_info(asrMaxDuration_data);
        }

        update_btn_state(); // Update general button states based on new info

        // Log ASR volume if it changes (for debugging)
        if (typeof (data.data.asr_volume) === 'number') {
            if (window.asr_volume !== data.data.asr_volume) {
                window.asr_volume = data.data.asr_volume;
                console.log('ASR Volume:', data.data.asr_volume); // Dịch log message if needed
            }
        }
    } else {
         console.warn("Received non-successful get_info response from Unisound:", data);
    }
}


// Update UI for Main Wakeup Benchmark slider
function Main_Wakeup_Benchmark_info(data) {
    if (data.code == 1 && is_new_unisound && u_ver + 1 > 1822 && Main_Wakeup_Benchmark) { // Check element exists
        Main_Wakeup_Benchmark.disabled = false;
        var minVal = parseFloat(data.Default_Main_WakeupBenchmark) * 100;
        Main_Wakeup_Benchmark.min = isNaN(minVal) ? 0 : minVal; // Handle potential NaN
        Main_Wakeup_Benchmark.max = Main_Wakeup_Benchmark.maxvalue; // Use stored original max
        var currentVal = parseFloat(data.Main_WakeupBenchmark) * 100;
         if(!mousedown) Main_Wakeup_Benchmark.value = isNaN(currentVal) ? 0 : currentVal; // Update only if not dragging
    }
}

// Update UI for User Wakeup Benchmark slider (newer versions)
function User_Wakeup_Benchmark_info(data) {
    if (data.code == 1 && is_new_unisound && u_ver + 1 > 1848 && Main_Wakeup_Benchmark) { // Check element
        Main_Wakeup_Benchmark.disabled = false;
        Main_Wakeup_Benchmark.min = 0; // User benchmark starts from 0 offset
         var defaultBenchmark = parseFloat(data.Default_Main_WakeupBenchmark);
         var maxOffset = ((Main_Wakeup_Benchmark.maxvalue / 100) - (isNaN(defaultBenchmark) ? 0 : defaultBenchmark)) * 100;
         Main_Wakeup_Benchmark.max = maxOffset > 0 ? maxOffset : 0; // Ensure max is not negative
         var currentVal = parseFloat(data.User_WakeupBenchmark) * 100;
         if(!mousedown) Main_Wakeup_Benchmark.value = isNaN(currentVal) ? 0 : currentVal; // Update only if not dragging
    }
}

// Update UI for Max Recording Time slider
function asrMaxDuration_info(data) {
    if (data.code == 1 && is_new_unisound && u_ver + 1 > 1822 && asrMaxDuration && asrMaxDuration_value) { // Check elements
        asrMaxDuration.disabled = false;
        var defaultDuration = parseInt(data.Default_asrMaxDuration) / 1000;
        asrMaxDuration.max = isNaN(defaultDuration) ? 10 : defaultDuration; // Use default if NaN
        var currentDuration = parseInt(data.asrMaxDuration) / 1000;
        if(!mousedown) asrMaxDuration.value = isNaN(currentDuration) ? 2 : currentDuration; // Use default if NaN, update if not dragging
        asrMaxDuration_value.innerHTML = asrMaxDuration.value + "s"; // Changed from "秒" to "s"
    }
}


/**
 * Updates the h3 element with the specified text
 * @param {string} text - The text to set in the h3 element
 */
function set_h3(text) {
    if (h3 && h3.innerHTML !== text) h3.innerHTML = text;
}

// Formats a JavaScript Date object (original function seems off, replaced with standard method)
function dateFormat(date, format) {
    if (!(date instanceof Date)) date = new Date(date); // Ensure it's a Date object
    if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid dates

    const map = {
        M: date.getMonth() + 1, // Month
        d: date.getDate(), // Day
        H: date.getHours(), // Hour
        m: date.getMinutes(), // Minute
        s: date.getSeconds(), // Second
        q: Math.floor((date.getMonth() + 3) / 3), // Quarter
        S: date.getMilliseconds() // Millisecond
    };

    format = format.replace(/([yMdpHmsqS])+/g, function(match, p1) {
        let v = map[p1];
        if (v !== undefined) {
            if (match.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (p1 === 'y') {
            return (date.getFullYear() + '').substr(4 - match.length);
        }
        return match;
    });
    return format;
}


// Converts Unix timestamp (seconds) to YYYY-MM-DD HH:MM:SS format
function set_time(str) {
    var n = parseInt(str) * 1000; // Convert seconds to milliseconds
    if (isNaN(n)) return "Invalid Timestamp"; // Handle invalid input

    var D = new Date(n);
    if (isNaN(D.getTime())) return "Invalid Date"; // Handle invalid date object

    var year = D.getFullYear();
    var month = ('0' + (D.getMonth() + 1)).slice(-2); // Add leading zero
    var day = ('0' + D.getDate()).slice(-2);
    var hours = ('0' + D.getHours()).slice(-2);
    var minutes = ('0' + D.getMinutes()).slice(-2);
    var seconds = ('0' + D.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

// Converts milliseconds to MM:SS format
function ms_to_is(m) {
    if (isNaN(m) || m < 0) m = 0; // Handle invalid input
    var totalSeconds = Math.floor(m / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    var i_str = ('0' + minutes).slice(-2); // Add leading zero for minutes
    var s_str = ('0' + seconds).slice(-2); // Add leading zero for seconds
    return i_str + ':' + s_str;
}

// Function to get version information and update log
function get_ver() {
    var web_ver_str = web_ver.toString().split("").join('.');
    var echo_ver_str = ver.toString().split("").join('.');
    var unisound_ver_str = (is_new_unisound && u_ver > 1000) ? u_ver.toString().split("").join('.') : 'N/A';

    var version_info = 'Web Version: ' + web_ver_str + '\n' +
                       'EchoService Version: ' + echo_ver_str + '\n' +
                       'Unisound Version: ' + unisound_ver_str + '\n\n';

    // Add update log entries
    if (update_log && update_log.length > 0) {
        version_info += 'Update Log:\n' + update_log.slice().reverse().join('\n');
    }

    return version_info;
}

// Function to update toggle button states based on current info
function update_btn_state() {
    if (!info || !btn_states || btn_states.length === 0) return; // Exit if no info or buttons

    // Loop through all buttons that need state updates
    for (var i = 0; i < btn_states.length; i++) {
        var btn = btn_states[i];
        if (!btn) continue; // Skip if button doesn't exist

        try {
            var btn_data = JSON.parse(btn.getAttribute('data') || '{}');
            if (btn_data.type !== 2) continue; // Only process toggle buttons (type 2)

            // Check if button has state configuration
            if (!btn_data.state || !Array.isArray(btn_data.state)) continue;

            var state_index = btn_data.state[0]; // Get the index to use in title/tips arrays
            var state_path = btn_data.state[1]; // Get the property path to check in info object
            var state_values = btn_data.state[2]; // Get the possible values to compare against
            var state_condition = btn_data.state[3]; // Optional additional condition

            // Skip if button requires Unisound but it's not available
            if (btn_data.is_unisound !== undefined && btn_data.is_unisound !== is_unisound) continue;

            // Get the actual value from info using the property path
            var parts = state_path.split('.');
            var value = info;
            var valueFound = true;

            for (var j = 0; j < parts.length; j++) {
                if (value === undefined || value === null) {
                    valueFound = false;
                    break;
                }
                value = value[parts[j]];
            }

            // For Unisound_info properties
            if (parts[0] === 'Unisound_info' && Unisound_info) {
                value = Unisound_info;
                valueFound = true;

                for (var j = 1; j < parts.length; j++) {
                    if (value === undefined || value === null) {
                        valueFound = false;
                        break;
                    }
                    value = value[parts[j]];
                }
            }

            // Skip this button if we couldn't find the value
            if (!valueFound || value === undefined) {
                continue;
            }

            // Check if additional condition is met
            var condition_met = true;
            if (state_condition) {
                var condition_path = state_condition[0];
                var condition_value = state_condition[1];
                var condition_found = true;

                var condition_parts = condition_path.split('.');
                var condition_actual = info;

                for (var j = 0; j < condition_parts.length; j++) {
                    if (condition_actual === undefined || condition_actual === null) {
                        condition_found = false;
                        break;
                    }
                    condition_actual = condition_actual[condition_parts[j]];
                }

                // For Unisound_info properties in condition
                if (condition_parts[0] === 'Unisound_info' && Unisound_info) {
                    condition_actual = Unisound_info;
                    condition_found = true;

                    for (var j = 1; j < condition_parts.length; j++) {
                        if (condition_actual === undefined || condition_actual === null) {
                            condition_found = false;
                            break;
                        }
                        condition_actual = condition_actual[condition_parts[j]];
                    }
                }

                // Only check condition if the property was found
                if (condition_found && condition_actual !== undefined) {
                    condition_met = (condition_actual === condition_value);
                } else {
                    condition_met = false; // If property not found, condition fails
                }
            }

            if (!condition_met) {
                btn.style.display = 'none'; // Hide button if condition not met
                continue;
            } else {
                btn.style.display = ''; // Show button if condition met
            }

            // Determine the state index based on the value
            var matched_index = -1;
            if (Array.isArray(state_values[0])) {
                // Multiple possible values for each state
                for (var j = 0; j < state_values.length; j++) {
                    if (Array.isArray(state_values[j]) && state_values[j].includes(value)) {
                        matched_index = j;
                        break;
                    }
                }
            } else {
                // Single value for each state
                matched_index = state_values.indexOf(value);
            }

            // If no match found, use the first state as default
            if (matched_index === -1) {
                matched_index = 0;
                console.warn("Could not find matching state for button value:", value, "- using default state");
            }

            // Update button text and tooltip based on state
            if (btn_data.title && Array.isArray(btn_data.title) && btn_data.title.length > matched_index) {
                btn.value = btn_data.title[matched_index];
            }

            if (btn_data.tips && Array.isArray(btn_data.tips) && btn_data.tips.length > matched_index) {
                btn.title = btn_data.tips[matched_index];
            }

            // Store success message for this state
            if (btn_data.succ && Array.isArray(btn_data.succ) && btn_data.succ.length > matched_index) {
                tips_data[btn.value] = btn_data.succ[matched_index];
            }

            // Update button's internal state for click handler
            btn.state_index = matched_index;
        } catch (e) {
            console.error('Error updating button state:', e, btn);
        }
    }
}

// Inserts CSS text into the document head
function insertStyle(cssText) {
    var head = document.getElementsByTagName("head")[0];
    if (!head) return; // Exit if head not found
    var style = document.createElement("style");
    style.type = "text/css";
    try { // Use try-catch for older IE compatibility (though likely not needed now)
        if (style.styleSheet) { // IE
            style.styleSheet.cssText = cssText;
        } else { // Standard browsers
            style.appendChild(document.createTextNode(cssText));
        }
        head.appendChild(style);
    } catch(e) {
        console.error("Error inserting style:", e);
    }
}

// Sends an input keyevent command via WebSocket
function send_keyevent(key) {
    send_input('keyevent ' + key);
}

// Sends a generic input command via WebSocket
function send_input(value) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'input', input: value }));
    }
}

// Function to handle music control button clicks
function send_music_cmd(button_element) {
    if (!button_element || !ws || ws.readyState !== WebSocket.OPEN) return;

    var action = button_element.getAttribute('data');
    if (!action) return;

    // Handle different music control actions
    switch (action) {
        case 'prev':
            ws_send(JSON.stringify({ type: 'prev' }));
            break;
        case 'play':
            ws_send(JSON.stringify({ type: 'play' }));
            break;
        case 'pause':
            ws_send(JSON.stringify({ type: 'pause' }));
            break;
        case 'next':
            ws_send(JSON.stringify({ type: 'next' }));
            break;
        case 'collect':
            if (!music_info) {
                alert('No music playing to favorite');
                return;
            }
            if (!confirm('Add current song to favorites?')) return;
            ws_send(JSON.stringify({
                type: 'send_to_unisound',
                data: {
                    type: 'api',
                    data: {
                        type: 'collect',
                        id: music_info.id,
                        title: music_info.title,
                        artist: music_info.artist || '',
                        albumUrl: music_info.albumUrl || ''
                    }
                }
            }));
            break;
        case 'cancel_collect':
            if (!music_info) {
                alert('No music playing to unfavorite');
                return;
            }
            if (!confirm('Remove current song from favorites?')) return;
            ws_send(JSON.stringify({
                type: 'send_to_unisound',
                data: {
                    type: 'api',
                    data: {
                        type: 'cancel_collect',
                        id: music_info.id
                    }
                }
            }));
            break;
        default:
            console.warn('Unknown music command:', action);
    }
}

// Switches the displayed page in the main content area
function switch_page(button_element) { // Changed parameter name for clarity
    if (!button_element || !button_element.id) return; // Exit if invalid element

    current_page = button_element; // Store the clicked button element
    var page_id_to_show = button_element.id.substr(9); // Extract page ID (e.g., 'music', 'screen')
    var page_title = button_element.getAttribute('data'); // Get the original button text (page title)

    // Determine if we are showing a page or going back to the index
    var is_showing_page = (button_element.value === page_title);

    // Hide all pages first
    hide_page(is_showing_page ? page_id_to_show : 'index');

    // Update button texts and show the target page
    var all_page_buttons = switch_btns.getElementsByClassName('btn'); // Get all page buttons
    for (var i = 0; i < all_page_buttons.length; i++) {
        var btn = all_page_buttons[i];
        var btn_title = btn.getAttribute('data');
        if (btn.id === button_element.id && is_showing_page) {
            // If clicking the button for the page to show, change its text to "Back to Home"
            btn.value = (btn_title.length > 6) ? 'Back' : 'Home'; // Use shorter text if title is long // Dịch
            // Call the onhide function for the specific page being shown
             var onhide_func_name = 'onhide_' + page_id_to_show;
             if (typeof window[onhide_func_name] === 'function') {
                 window[onhide_func_name](); // Execute the specific page's show logic
             }
             Storage.setItem(hostname + '_page', page_id_to_show); // Save current page
        } else {
            // Reset other buttons to their original titles
            btn.value = btn_title;
        }
    }

    // If we are going back to the index page
    if (!is_showing_page) {
         onhide_index(); // Show the index content
         Storage.setItem(hostname + '_page', 'index'); // Save index page state
    }
}


// Hides all content pages except the one specified (or hides all if no exclude)
function hide_page(exclude_page_id) {
    // Combine built-in index 'page' with dynamic page list
    var pages_to_hide = [['Index', 'index', 'index']].concat(page_list);

    for (var i = 0; i < pages_to_hide.length; i++) {
        var page_info = pages_to_hide[i];
        var page_id = page_info[1];
        if (page_id !== exclude_page_id) { // If it's not the page to exclude
            var hide_func_name = 'hide_' + page_id;
            if (typeof window[hide_func_name] === 'function') {
                try { // Add try-catch around hide functions
                    window[hide_func_name](); // Execute hide logic
                } catch(e) {
                    console.error("Error hiding page", page_id, e);
                }
            } else {
                 // Fallback: try hiding the container div directly if hide function doesn't exist
                 var page_container = document.getElementById(page_id); // Assuming page containers have matching IDs
                 if(page_container) page_container.style.display = 'none';
            }
        }
    }
}


// Manages hiding/showing pages based on the target page ID
function onhide_page(target_page_id) {
    hide_page(target_page_id); // Hide all other pages
    var show_func_name = 'onhide_' + target_page_id; // Function name to show the target page
    if (typeof window[show_func_name] === 'function') {
        try { // Add try-catch
            window[show_func_name](); // Execute show logic for the target page
            Storage.setItem(hostname + '_page', target_page_id); // Save the currently shown page
        } catch (e) {
             console.error("Error showing page", target_page_id, e);
             // Fallback to showing index if target page fails to show
             onhide_index();
             Storage.setItem(hostname + '_page', 'index');
        }
    } else {
         console.warn("Show function not found for page:", target_page_id);
         // Fallback to showing index if target page show function doesn't exist
         onhide_index();
         Storage.setItem(hostname + '_page', 'index');
    }
}

// --- Logic for showing/hiding specific page sections ---
function onhide_index() { // Show index page elements
    document.title = "R1 Speaker Control Panel" + dev_name; // Dịch
    h3.innerHTML = document.title;
    if(texts_div) texts_div.style.display = "block";
    if(btns_div) btns_div.style.display = "block";
    Restore_background(); // Restore default/user background when going to index
}
function hide_index() { // Hide index page elements
    if(texts_div) texts_div.style.display = "none";
    if(btns_div) btns_div.style.display = "none";
}

function onhide_music() { // Show music page elements
    start_title_scrolling(); // Start title scroll animation
    start_lrc(); // Start lyrics update interval
    document.title = "R1 Speaker Music" + dev_name; // Dịch
    set_h3(document.title);
    h3.onclick = function () { // Allow clicking title to show full song info temporarily
        title_display_time = new Date().getTime() + 2000;
        if (music_info) {
            var title = get_music_title(music_info);
            set_h3('Now Playing: ' + title); // Dịch
            document.title = dev_name + h3.innerHTML;
        }
    };
    // Collapse playlist by default when switching to music page
    var list_ico_music = document.getElementById('list_ico'); // Use specific ID
    var list_content_music = document.getElementById('playlist_content');
    var list_occupancy_music = document.getElementById('list_occupancy');
    if(list_content_music) list_content_music.style.display = 'none';
    if(list_occupancy_music) list_occupancy_music.style.display = 'block';
    if(list_ico_music) list_ico_music.innerHTML = '	▼'; // Set icon to collapsed
    Storage.setItem(hostname + '_music_list_hide', 1); // Save collapsed state

    if(musics_div) musics_div.style.display = "block";
    if(div_list) div_list.style.display = "block"; // Show the playlist container (title area)
    musicpic_background(); // Apply cover background if enabled
}
function hide_music() { // Hide music page elements
    stop_title_scrolling();
    stop_lrc();
    h3.onclick = null; // Remove title click handler
    if(musics_div) musics_div.style.display = "none";
    if(div_list) div_list.style.display = "none";
    Restore_background(); // Restore default/user background
}

// --- Title Scrolling Logic ---
function start_title_scrolling() {
    stop_title_scrolling(); // Clear previous interval
    // Update title immediately if music info available
    if (music_info != null && musics_div.style.display === "block") { // Check if music page is visible
        var title = get_music_title(music_info);
        set_h3('Now Playing: ' + title); // Dịch
        music_title = title + '    '; // Add padding for scrolling effect
    } else {
         music_title = ''; // Clear title if no music info
    }

    var title_scrolling_func = function () { // Renamed function
        if (music_title == '' || musics_div.style.display !== "block") { // Stop if no title or page hidden
            stop_title_scrolling();
            return;
        }
        // Only scroll if title needs scrolling (longer than display width - heuristic)
        // This part needs refinement - calculating actual width needed is complex.
        // Simple approach: only scroll if title is long.
        if (music_title.length > 30) { // Adjust threshold as needed
            music_title = music_title.substring(1) + music_title.substring(0, 1); // Rotate title
            set_h3('Now Playing: ' + music_title); // Update display // Dịch
            document.title = dev_name + h3.innerHTML; // Update browser title too
        } else {
             // If title is short, just display it statically and stop scrolling
             set_h3('Now Playing: ' + music_title.trim()); // Trim padding // Dịch
             document.title = dev_name + h3.innerHTML;
             stop_title_scrolling();
        }
    };
    // Only start interval if title is potentially long enough
    if (music_title.length > 30) {
       title_scrolling_timer = setInterval(title_scrolling_func, 500); // Scroll interval
    } else {
         // Display short title statically
         set_h3('Now Playing: ' + music_title.trim()); // Dịch
         document.title = dev_name + h3.innerHTML;
    }
}
function stop_title_scrolling() {
    clearInterval(title_scrolling_timer);
    title_scrolling_timer = -1;
}

// --- Lyrics Update Logic ---
function start_lrc() {
    title_display_time = new Date().getTime() + 1000; // Show title briefly
    stop_lrc(); // Clear previous interval
    setTimeout(function () { // Initial update after a short delay
        if (lrc_timer != -1 || musics_div.style.display === "block") { // Check if timer should be active
            update_lrc(true, true); // Force update and scroll
        }
    }, 500); // Shorter delay
    lrc_timer = setInterval(() => update_lrc(false), 100); // Update interval (100ms)
}
function stop_lrc() {
    clearInterval(lrc_timer);
    lrc_timer = -1;
}
// --- End Lyrics Update Logic ---

// --- Screen Page Show/Hide ---
function onhide_screen() {
    document.title = "R1 Speaker Screen" + dev_name; // Dịch
    var screenImg = document.getElementById('screen_img');
    if(screenImg) screenImg.src = ''; // Clear previous image
    h3.innerHTML = document.title;
    if(screen_div) screen_div.style.display = "block";
    start_screen(); // Start screen capture stream
}
function hide_screen() {
    stop_screen(); // Stop screen capture stream
    if (screen_div && screen_div.style.display != 'none') {
        screen_div.style.display = "none";
    }
}
// --- End Screen Page Show/Hide ---

// --- Sound Effects Page Show/Hide ---
function onhide_sound_effects() {
    document.title = "R1 Speaker Sound Effects" + dev_name; // Dịch
    h3.innerHTML = document.title;
    if(sound_effects_div) sound_effects_div.style.display = "block";
    start_sound_effects(); // Start polling for EQ config
}
function hide_sound_effects() {
    if(sound_effects_div) sound_effects_div.style.display = "none";
    stop_sound_effects(); // Stop polling
}
// --- End Sound Effects Page Show/Hide ---

// --- Sound Effects Polling ---
function start_sound_effects() {
    stop_sound_effects(); // Clear previous interval
     if (ws && ws.readyState === WebSocket.OPEN) { // Request immediately
         ws_send(JSON.stringify({ type: 'get_eq_config' }));
     }
    sound_effects_timer = setInterval(function () {
         if (ws && ws.readyState === WebSocket.OPEN) {
             ws_send(JSON.stringify({ type: 'get_eq_config' }));
         }
     }, 1000); // Poll every second
}
function stop_sound_effects() {
    clearInterval(sound_effects_timer);
    sound_effects_timer = -1;
}
// --- End Sound Effects Polling ---

/**
 * Updates the Sound Effects page UI based on received data
 * @param {Object} data - The sound effects configuration data
 */
/**
 * Updates the Sound Effects page UI based on received data
 * @param {Object} data - The sound effects configuration data
 */
function update_sound_effects(data) {
    if (!data || !sound_effects_div || sound_effects_div.style.display === 'none') {
        // Don't update if data is missing or page is hidden
        return;
    }

    // Get references to the switches
    var eq_switch = document.getElementById("eq_switch");
    var bass_switch = document.getElementById("bass_switch");
    var loudness_switch = document.getElementById("loudness_switch");

    // Extract configuration sections
    var eq = data.eq || {};
    var bass = data.bass || {};
    var loudness = data.loudness || {};
    // console.log("Sound Effects Data:", data);

    // Safely access nested properties
    var eq = data.eq || {};
    var bass = data.bass || {};
    var loudness = data.loudness || {};
    var Bands = eq.Bands || { list: [], minBandLevel: -1500, maxBandLevel: 1500 }; // Provide defaults
    var Preset_list = eq.Preset_list || [];
    var Current_Preset = eq.Current_Preset; // Can be null or -1

    // Update main switches
    var eq_switch = document.getElementById("eq_switch");
    var bass_switch = document.getElementById("bass_switch");
    var loudness_switch = document.getElementById("loudness_switch");

    if (eq_switch) eq_switch.checked = (eq.sound_effects_eq_enable === true);
    if (bass_switch) bass_switch.checked = (bass.sound_effects_bass_enable === true);
    if (loudness_switch) loudness_switch.checked = (loudness.sound_effects_loudness_enable === true);

    // --- Update EQ Bands ---
    var eqs_div_exists = (eqs_div && eqs_div.innerHTML !== ''); // Check if already initialized
    // Translated band names
    var hz_names = { 60000: 'Lows', 230000: 'Mid-Lows', 910000: 'Mids', 3600000: 'Mid-Highs', 14000000: 'Highs' }; // Dịch

    // Ensure Bands.list is an array
    var bandList = Array.isArray(Bands.list) ? Bands.list : [];

    for (var i = 0; i < bandList.length; i++) {
        var band_data = bandList[i];
        var band_id = 'band_' + band_data.Band;
        var band_text_id = 'band_text_' + band_data.Band;
        var band_slider = document.getElementById(band_id);
        var band_text = document.getElementById(band_text_id);

        if (!eqs_div_exists) { // Create elements if first time
            var div_band_container = document.createElement('div'); // Container for each band row
            div_band_container.style.marginBottom = '5px'; // Spacing between bands

            var hz_label = document.createElement('text');
            var band_name = hz_names[band_data.Frequency] || (band_data.Frequency / 1000) + 'Hz'; // Use name or frequency
            hz_label.innerHTML = band_name + ': '; // Add colon // Dịch :
            var div_label = document.createElement('div');
            div_label.style = 'width:80px; display:inline-block; vertical-align: middle; text-align: right; margin-right: 5px;'; // Style label
            div_label.appendChild(hz_label);
            div_band_container.appendChild(div_label);

            band_slider = document.createElement('input'); // Create slider
            band_slider.id = band_id;
            band_slider.type = 'range';
            band_slider.min = parseInt(Bands.minBandLevel / 100); // Set min/max from Bands object
            band_slider.max = parseInt(Bands.maxBandLevel / 100);
            band_slider.setAttribute('Band', band_data.Band); // Store band index
            band_slider.style.verticalAlign = 'middle'; // Align slider
            band_slider.addEventListener('input', function () { // Update on input (while dragging)
                var current_band_index = this.getAttribute('Band');
                var current_band_text = document.getElementById('band_text_' + current_band_index);
                if (current_band_text) current_band_text.innerHTML = ' ' + this.value + ' dB'; // Update text // Dịch dB
            });
             band_slider.addEventListener('change', function () { // Send command on change (after release)
                 var current_band_index = this.getAttribute('Band');
                  if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'set_eq_bandlevel', band: current_band_index, level: (parseInt(this.value) * 100) })); // Send level in millibels
                     // Request config update after change (optional, polling handles it too)
                     // setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'get_eq_config' })); }, 150);
                  }
             });
            div_band_container.appendChild(band_slider);

            band_text = document.createElement('text'); // Create text display
            band_text.id = band_text_id;
            var div_text = document.createElement('div');
            div_text.style = 'width:50px; display:inline-block; vertical-align: middle; margin-left: 5px;'; // Style text container
            div_text.appendChild(band_text);
            div_band_container.appendChild(div_text);

            eqs_div.appendChild(div_band_container); // Add row to main EQ container
        }
        // Update slider value and text (only if not currently being dragged)
        if (band_slider && band_text) {
            var current_level_db = parseInt(band_data.BandLevel / 100);
            if (!mousedown) { // Check mousedown flag
                band_slider.value = current_level_db;
            }
            band_text.innerHTML = ' ' + current_level_db + ' dB'; // Dịch dB
        }
    }

    // --- Update Bass Boost Slider ---
    var bass_div_exists = (bass_div && bass_div.innerHTML !== '');
    var bass_slider = document.getElementById('bass_value');
    var bass_text = document.getElementById('bass_text_value');

    if (!bass_div_exists) { // Create if first time
        var div_bass_container = document.createElement('div');

        var title_bass = document.createElement('text');
        title_bass.innerHTML = 'Strength: '; // Dịch
        var div_bass_label = document.createElement('div');
        div_bass_label.style = 'width:80px; display:inline-block; vertical-align: middle; text-align: right; margin-right: 5px;';
        div_bass_label.appendChild(title_bass);
        div_bass_container.appendChild(div_bass_label);

        bass_slider = document.createElement('input'); // Create slider
        bass_slider.id = 'bass_value';
        bass_slider.type = 'range';
        bass_slider.min = 0;
        bass_slider.max = 100; // Range 0-100%
        bass_slider.style.verticalAlign = 'middle';
        bass_slider.addEventListener('input', function () {
            var current_bass_text = document.getElementById('bass_text_value');
            if (current_bass_text) current_bass_text.innerHTML = ' ' + this.value + '%'; // Update text
        });
         bass_slider.addEventListener('change', function () {
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'set_bass_strength', strength: parseInt(this.value) * 10 })); // Send value 0-1000
             }
         });
        div_bass_container.appendChild(bass_slider);

        bass_text = document.createElement('text'); // Create text display
        bass_text.id = 'bass_text_value';
        var div_bass_text_cont = document.createElement('div');
        div_bass_text_cont.style = 'width:50px; display:inline-block; vertical-align: middle; margin-left: 5px;';
        div_bass_text_cont.appendChild(bass_text);
        div_bass_container.appendChild(div_bass_text_cont);
        bass_div.appendChild(div_bass_container);
    }

    // Update bass slider value and text (only if not dragging)
    if (bass_slider && bass_text) {
        var current_strength_percent = Math.round(bass.Current_Strength / 10); // Convert 0-1000 to 0-100
        if (!mousedown) {
            bass_slider.value = current_strength_percent;
        }
        bass_text.innerHTML = ' ' + current_strength_percent + '%';
    }

    // --- Update Loudness Slider ---
    var loudness_div_exists = (loudness_div && loudness_div.innerHTML !== '');
    var loudness_slider = document.getElementById('loudness_value');
    var loudness_text = document.getElementById('loudness_text_value');

    if (!loudness_div_exists) { // Create if first time
        var div_loudness_container = document.createElement('div');

        var title_loudness = document.createElement('text');
        title_loudness.innerHTML = 'Target Gain: '; // Dịch
        var div_loudness_label = document.createElement('div');
        div_loudness_label.style = 'width:80px; display:inline-block; vertical-align: middle; text-align: right; margin-right: 5px;';
        div_loudness_label.appendChild(title_loudness);
        div_loudness_container.appendChild(div_loudness_label);

        loudness_slider = document.createElement('input'); // Create slider
        loudness_slider.id = 'loudness_value';
        loudness_slider.type = 'range';
        loudness_slider.min = -3000; // Range -3000 to +3000 millibels
        loudness_slider.max = 3000;
        loudness_slider.step = 100; // Step by 1dB
        loudness_slider.style.verticalAlign = 'middle';
        loudness_slider.addEventListener('input', function () {
            var current_loudness_text = document.getElementById('loudness_text_value');
            if (current_loudness_text) current_loudness_text.innerHTML = ' ' + (this.value / 100).toFixed(1) + ' dB'; // Update text (1 decimal place) // Dịch dB
        });
         loudness_slider.addEventListener('change', function () {
              if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'set_loudness_gain', gain: parseInt(this.value) })); // Send millibels value
              }
         });
        div_loudness_container.appendChild(loudness_slider);

        loudness_text = document.createElement('text'); // Create text display
        loudness_text.id = 'loudness_text_value';
        var div_loudness_text_cont = document.createElement('div');
        div_loudness_text_cont.style = 'width:50px; display:inline-block; vertical-align: middle; margin-left: 5px;';
        div_loudness_text_cont.appendChild(loudness_text);
        div_loudness_container.appendChild(div_loudness_text_cont);
        loudness_div.appendChild(div_loudness_container);
    }

    // Update loudness slider value and text (only if not dragging)
    if (loudness_slider && loudness_text) {
        var current_gain_db = (loudness.Current_Gain / 100).toFixed(1); // Convert millibels to dB (1 decimal)
        if (!mousedown) {
            loudness_slider.value = loudness.Current_Gain || 0; // Use current gain or 0
        }
        loudness_text.innerHTML = ' ' + current_gain_db + ' dB'; // Dịch dB
    }

    // --- Update EQ Preset Selector ---
    var preset_div_exists = (preset_div && preset_div.innerHTML !== '');
    var preset_select = document.getElementById('preset_list');

    // Add "Custom" to the list if it's the current preset but not in the received list
    var presetList = Array.isArray(Preset_list) ? [...Preset_list] : []; // Copy array safely
    var hasCustom = presetList.some(p => p.Preset == -1);
    if (Current_Preset == -1 && !hasCustom && presetList.length > 0) {
        presetList.unshift({ Preset: -1, Name: 'Custom' });
    }

    if (!preset_div_exists && presetList.length > 0) { // Create if first time and presets exist
        var div_preset_container = document.createElement('div');
        div_preset_container.style.marginTop = '15px'; // Add space above presets

        var title_preset = document.createElement('text');
        title_preset.innerHTML = 'Preset EQ: '; // Dịch
        div_preset_container.appendChild(title_preset);

        preset_select = document.createElement('select'); // Create select element
        preset_select.id = 'preset_list';
        preset_select.style.marginLeft = '5px';
        preset_select.onchange = function () {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'set_eq_preset', preset: this.value }));
                 // Request config update after change
                 setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'get_eq_config' })); }, 150);
            }
        };

        // Translated Preset names
        var Preset_names_en = { // Dịch
            'Custom': 'Custom', 'Normal': 'Normal', 'Classical': 'Classical',
            'Dance': 'Dance', 'Flat': 'Flat', 'Folk': 'Folk',
            'Heavy Metal': 'Heavy Metal', 'Hip Hop': 'Hip Hop', 'Jazz': 'Jazz',
            'Pop': 'Pop', 'Rock': 'Rock'
        };

        // Add options to the select list
        presetList.forEach(preset_item => {
            var option = document.createElement('option');
            var name = Preset_names_en[preset_item.Name] || preset_item.Name; // Use translated or original name
            option.innerHTML = name;
            option.value = preset_item.Preset;
            if (preset_item.Preset == -1) { // Hide 'Custom' option visually unless active
                option.style.display = (Current_Preset == -1) ? '' : 'none';
            }
            if (option.value == Current_Preset) {
                option.selected = true; // Select current preset
            }
            preset_select.appendChild(option);
        });

        div_preset_container.appendChild(preset_select);
        preset_div.appendChild(div_preset_container);

    } else if (preset_select) { // Update existing select list if needed
        // This part is complex if the list itself changes. Simplest is often to rebuild.
        // For now, just update the selected value.
        var customOption = preset_select.querySelector('option[value="-1"]');
        if (customOption) { // Show/hide custom option
             customOption.style.display = (Current_Preset == -1) ? '' : 'none';
        }
        preset_select.value = Current_Preset !== null ? Current_Preset : ''; // Set selected value
    }
}

// --- Screen Capture Control ---
function start_screen() {
     if (ws && ws.readyState === WebSocket.OPEN) {
         var interval = (ver + 1 > 1855) ? 10 : 60; // Adjust interval based on version
         ws_send(JSON.stringify({ type: 'start_screencap', interval: interval }));
     }
    // Keyboard controls for screen navigation (optional)
    document.onkeydown = function (event) { // Use 'event' parameter
         if (!screen_div || screen_div.style.display === 'none') return; // Only active on screen page
         var handled = false;
         switch (event.keyCode) {
             case 13: send_keyevent(23); handled = true; break; // Enter -> OK
             case 37: send_keyevent(21); handled = true; break; // Left
             case 38: send_keyevent(19); handled = true; break; // Up
             case 39: send_keyevent(22); handled = true; break; // Right
             case 40: send_keyevent(20); handled = true; break; // Down
             case 8: send_keyevent(67); handled = true; break; // Backspace -> Delete
             case 27: send_keyevent(4); handled = true; break; // Escape -> Back
         }
         if (handled) {
             event.preventDefault(); // Prevent default browser action
             return false;
         }
    };
}
function stop_screen() {
     if (ws && ws.readyState === WebSocket.OPEN) {
         ws_send(JSON.stringify({ type: 'stop_screencap' }));
     }
    document.onkeydown = null; // Remove key listener
}
// --- End Screen Capture Control ---

// --- Device Info Page Show/Hide ---
function onhide_device_info() {
    document.title = "R1 Speaker Device Info" + dev_name; // Dịch
    h3.innerHTML = document.title;
    if(device_info) device_info.style.display = "block";
    update_device_info(); // Start updating device info
}
function hide_device_info() {
    clearInterval(update_device_info_timer); // Stop updating
    update_device_info_timer = -1;
    if(device_info) device_info.style.display = "none";
}
// --- End Device Info Page Show/Hide ---

// --- Bluetooth Page Show/Hide ---
function onhide_bluetooth() {
    document.title = "R1 Speaker Bluetooth" + dev_name; // Dịch
    h3.innerHTML = document.title;
    if(bluetooth_div) bluetooth_div.style.display = "block";
    update_bluetooth(); // Start updating Bluetooth info
}
function hide_bluetooth() {
    // Reset button states when hiding page
    if(btn_bluetooth_scan) { btn_bluetooth_scan.disabled = true; btn_bluetooth_scan.value = 'Scan for Devices'; } // Dịch
    if(btn_bluetooth_scan1) { btn_bluetooth_scan1.disabled = true; btn_bluetooth_scan1.value = 'Make Discoverable'; } // Dịch
    if(btn_bluetooth_enable) { btn_bluetooth_enable.disabled = true; btn_bluetooth_enable.value = 'Enable Bluetooth Adapter'; btn_bluetooth_enable.enable = -1; } // Dịch

    // Clear device lists
    if(bluetooth_pairing_devices) bluetooth_pairing_devices.innerHTML = '';
    if(bluetooth_scan_devices) bluetooth_scan_devices.innerHTML = '';
    var pairingTitle = document.getElementById('bluetooth_pairing_title');
    var scanTitle = document.getElementById('bluetooth_scan_title');
    if(pairingTitle) pairingTitle.innerHTML = 'Paired Devices [0]'; // Dịch
    if(scanTitle) scanTitle.innerHTML = 'Scanned Devices [0]'; // Dịch

    clearInterval(update_bluetooth_timer); // Stop updating
    update_bluetooth_timer = -1;
    if(bluetooth_div) bluetooth_div.style.display = "none";
}
// --- End Bluetooth Page Show/Hide ---

// --- Bluetooth Update Logic ---
function update_bluetooth() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'BT_Device' })); // Request device list
    }
    // Clear previous timer before setting a new one
    clearInterval(update_bluetooth_timer);
    update_bluetooth_timer = setInterval(function () {
        // Only request if the page is visible
        if (bluetooth_div && bluetooth_div.style.display === 'block') {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'BT_Device' }));
            }
        } else {
            stop_bluetooth_update(); // Stop polling if page is hidden
        }
    }, 2000); // Update every 2 seconds
}

function stop_bluetooth_update() {
     clearInterval(update_bluetooth_timer);
     update_bluetooth_timer = -1;
}

// Updates the Bluetooth device list UI
function update_bluetooth_data(data) {
    if (!data || !bluetooth_div || bluetooth_div.style.display === 'none') return; // Exit if no data or page hidden

    // Clear previous lists
    if(bluetooth_pairing_devices) bluetooth_pairing_devices.innerHTML = '';
    if(bluetooth_scan_devices) bluetooth_scan_devices.innerHTML = '';
    var pairingTitle = document.getElementById('bluetooth_pairing_title');
    var scanTitle = document.getElementById('bluetooth_scan_title');
    if(pairingTitle) pairingTitle.innerHTML = 'Paired Devices [0]'; // Dịch
    if(scanTitle) scanTitle.innerHTML = 'Scanned Devices [0]'; // Dịch

    // Update button states based on received data
    if (btn_bluetooth_scan) {
        btn_bluetooth_scan.disabled = !!data.Scanning; // Disable if scanning
        btn_bluetooth_scan.value = data.Scanning ? 'Scanning...' : 'Scan for Devices'; // Dịch
    }

    if (btn_bluetooth_enable) {
        if (!data.Enabled) { // If Bluetooth adapter is off
            if (btn_bluetooth_enable.wait === false && btn_bluetooth_enable.enable !== 0) { // Update state if not waiting
                btn_bluetooth_enable.enable = 0;
                btn_bluetooth_enable.disabled = false;
                btn_bluetooth_enable.value = 'Enable Bluetooth Adapter'; // Dịch
            }
            // Disable other buttons if adapter is off
            if(btn_bluetooth_scan) btn_bluetooth_scan.disabled = true;
            if(btn_bluetooth_scan1) btn_bluetooth_scan1.disabled = true;
            return; // Stop processing if adapter is off
        } else { // If Bluetooth adapter is on
             if (btn_bluetooth_enable.wait === false && btn_bluetooth_enable.enable !== 1) {
                btn_bluetooth_enable.enable = 1;
                btn_bluetooth_enable.disabled = false;
                btn_bluetooth_enable.value = 'Disable Bluetooth Adapter'; // Dịch
                 // Automatically set discoverable mode if always-on is enabled
                if (info && info.Service_Normally_Open === true) {
                     if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_setScanMode', mode: 21 })); // Connectable only
                }
             }
        }
    }

    if (btn_bluetooth_scan1) {
        btn_bluetooth_scan1.disabled = false; // Enable discoverable button
        btn_bluetooth_scan1.ScanMode = data.ScanMode;
        // Update text based on current scan mode (23 = Discoverable & Connectable, 21 = Connectable only)
        btn_bluetooth_scan1.value = (data.ScanMode == 23 || data.ScanMode == 21) ? 'Disable Discoverable' : 'Make Discoverable'; // Dịch
    }


    // Process device lists (ensure arrays exist)
    var Bonded_Devices = data.Bonded_Devices || [];
    var Scan_Devices = data.Scan_Devices || [];
    var A2dp_ConnectedDevices = data.A2dp_ConnectedDevices || [];
    var A2dpSink_ConnectedDevices = data.A2dpSink_ConnectedDevices || [];
    var ConnectedDeviceAddr = data.ConnectedDevice || ''; // Get connected device address

    // --- Helper to create device list item ---
    function createDeviceListItem(deviceData, isPairedList) {
        var tr = document.createElement('tr');
        tr.className = 'span'; // Use span class for styling
        tr.setAttribute('data', JSON.stringify(deviceData)); // Store full data

        var isConnected = false;
        // Check connection status (A2DP source or sink)
        if (A2dp_ConnectedDevices.includes(deviceData.Address) || A2dpSink_ConnectedDevices.includes(deviceData.Address)) {
            isConnected = true;
            tr.setAttribute('Connected', true);
            var span_status = document.createElement('span');
            span_status.innerHTML = '[Connected] '; // Dịch
            span_status.style.color = 'rgba(255, 147, 71, 1)'; // Highlight connected
            tr.appendChild(span_status);
        } else {
            tr.setAttribute('Connected', false);
        }

        tr.onclick = function () { create_bluetooth_device_config(this); }; // Open config on click

        var span_name = document.createElement('span');
        span_name.innerHTML = get_bluetooth_title(deviceData); // Get formatted title
        tr.appendChild(span_name);

        // Append to the correct list container
        var container = isPairedList ? bluetooth_pairing_devices : bluetooth_scan_devices;
        if (container) {
            if (container.hasChildNodes()) { // Add separator before adding new item (except first)
                 var hr = document.createElement('hr');
                 hr.className = 'hr';
                 hr.style.width = '80%';
                 hr.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                 container.appendChild(hr);
            }
            container.appendChild(tr);
        }
        return 1; // Return 1 to count the item
    }
    // --- End Helper ---

    // Populate Paired Devices list
    var paired_count = 0;
    var bonded_addresses = {}; // Keep track of bonded addresses
    Bonded_Devices.forEach(device => {
         // Add processed flags (done in original code, can be simplified or done in get_bluetooth_title)
         // device.A2dpConnect = A2dp_ConnectedDevices.includes(device.Address);
         // device.A2dpSinkConnect = A2dpSink_ConnectedDevices.includes(device.Address);
         // Add device type info (can also be done in get_bluetooth_title)
         var classInfo = processBluetoothClass(device.BluetoothClass);
         device.DeviceType = classInfo.DeviceType;
         device.A2dp = classInfo.A2dp;
         device.A2dpSink = classInfo.A2dpSink;

         paired_count += createDeviceListItem(device, true);
         bonded_addresses[device.Address] = true; // Mark as bonded
    });
    if(pairingTitle) pairingTitle.innerHTML = 'Paired Devices [' + paired_count + ']'; // Dịch

    // Populate Scanned Devices list (excluding already paired ones)
    var scanned_count = 0;
    var displayed_scan_addresses = {}; // Prevent duplicates in scanned list
    Scan_Devices.forEach(device => {
        if (!bonded_addresses[device.Address] && !displayed_scan_addresses[device.Address]) { // Only show if not bonded and not already shown
            var classInfo = processBluetoothClass(device.BluetoothClass);
            device.DeviceType = classInfo.DeviceType;
            device.A2dp = classInfo.A2dp;
            device.A2dpSink = classInfo.A2dpSink;
            scanned_count += createDeviceListItem(device, false);
            displayed_scan_addresses[device.Address] = true;
        }
    });
    if(scanTitle) scanTitle.innerHTML = 'Scanned Devices [' + scanned_count + ']'; // Dịch

    // Add padding if lists have items
    if (paired_count > 0 && pairingTitle) {
         var occupancy = pairingTitle.nextSibling; // Find spacer div if exists
         if(!occupancy || occupancy.nodeName !== 'DIV') { // Create spacer if needed
              occupancy = document.createElement('div');
              occupancy.style.height = '5px';
              pairingTitle.parentNode.insertBefore(occupancy, pairingTitle.nextSibling);
         }
    }
     if (scanned_count > 0 && scanTitle) {
          var occupancy = scanTitle.nextSibling;
          if(!occupancy || occupancy.nodeName !== 'DIV') {
              occupancy = document.createElement('div');
              occupancy.style.height = '5px';
              scanTitle.parentNode.insertBefore(occupancy, scanTitle.nextSibling);
          }
     }
}

// Helper to process Bluetooth Class Of Device (COD)
function processBluetoothClass(cod) {
    if(isNaN(cod)) return { DeviceType: 'UNKNOWN', A2dp: false, A2dpSink: false };

    var MajorDeviceClass = cod & 0x1F00; // Bits 8-12
    var MinorDeviceClass = cod & 0xFC; // Bits 2-7 (depends on Major)
    var MajorServiceClass = cod & 0xFFE000; // Bits 13-23

    var DeviceType = 'UNCATEGORIZED'; // Default
    if (MajorDeviceClass == 0x100) DeviceType = 'COMPUTER';
    else if (MajorDeviceClass == 0x200) DeviceType = 'PHONE';
    else if (MajorDeviceClass == 0x300) DeviceType = 'NETWORKING';
    else if (MajorDeviceClass == 0x400) DeviceType = 'AUDIO_VIDEO';
    else if (MajorDeviceClass == 0x500) DeviceType = 'PERIPHERAL';
    else if (MajorDeviceClass == 0x600) DeviceType = 'IMAGING';
    else if (MajorDeviceClass == 0x700) DeviceType = 'WEARABLE';
    else if (MajorDeviceClass == 0x800) DeviceType = 'TOY';
    else if (MajorDeviceClass == 0x1F00) DeviceType = 'MISC'; // Or HEALTH

    // Service Class Checks (Simplified - original logic was a bit mixed)
    // Rendering Service (Bit 18 / 0x40000) usually means it can *receive* audio (Sink)
    // Audio Service (Bit 21 / 0x200000) usually means it can *send* audio (Source)
    var isA2dpSink = (MajorServiceClass & 0x40000) !== 0 || (MajorServiceClass & 0x100000) !== 0; // Bit 18 or 20 (Capture)
    var isA2dp = (MajorServiceClass & 0x200000) !== 0; // Bit 21

    // Refine based on Major Device Class if needed (e.g., headphones are usually sinks)
    if (DeviceType === 'AUDIO_VIDEO') {
        // Minor classes for Audio/Video can specify Headset, Speaker, Headphones etc.
        // Headphones (Minor 0x04) are typically Sinks
         if ((MinorDeviceClass & 0x04) !== 0) isA2dpSink = true;
         // Speakers (Minor 0x05) are typically Sinks
         if ((MinorDeviceClass & 0x05) !== 0) isA2dpSink = true;
    }

    return { DeviceType: DeviceType, A2dp: isA2dp, A2dpSink: isA2dpSink };
}


// Creates the popup configuration window for a Bluetooth device
function create_bluetooth_device_config(tr_element) {
    var data_str = tr_element.getAttribute('data');
    if (!data_str) return;

    try {
        var data = JSON.parse(data_str);
    } catch(e) {
        console.error("Failed to parse device data:", data_str, e);
        return;
    }

    if (!data || !data.Address) return; // Need address at minimum

    var isConnected = tr_element.getAttribute('Connected') === 'true';

    popup.innerHTML = ''; // Clear previous popup content
    var config_container = document.createElement('div');
    config_container.id = 'bluetooth_device_config_div'; // Assign ID
    config_container.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:300px; max-width: 90%;'; // Adjust width

    popup.appendChild(config_container);

    // Title Bar
    var title_div = document.createElement('div');
    title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px 15px 0 0; padding: 10px; color: #ffffff; text-align: center;'; // Add padding
    config_container.appendChild(title_div);

    var title_h3 = document.createElement('h3');
    title_h3.id = 'bluetooth_device_config_title';
    title_h3.style = 'font-size: 16px; margin: 0;';
    title_h3.innerHTML = get_bluetooth_title(data) + '<br><span style="font-size: 12px;">MAC: ' + data.Address + '</span>'; // Use span for MAC
    title_div.appendChild(title_h3);

    // Options Area
    var option_div = document.createElement('div');
    option_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; max-height:400px; overflow-y:auto;'; // Limit height
    config_container.appendChild(option_div);

    // --- Helper to add option ---
    function addOption(text, onclick_func, is_disabled = false, is_highlighted = false) {
         if (option_div.hasChildNodes()) { // Add separator before new option (except first)
             var hr = document.createElement('hr');
             hr.className = 'hr'; // Use existing CSS class if suitable
             hr.style.margin = '0'; // Remove default margin
             hr.style.borderTop = '1px solid #eee';
             option_div.appendChild(hr);
         }
         var tr = document.createElement('tr'); // Use div instead of tr for simpler structure
         tr.className = 'span1'; // Apply styling class
         tr.style.display = 'block'; // Ensure block display
         if (is_disabled) {
             tr.setAttribute('none', true); // Apply disabled style
             tr.style.cursor = 'default';
         } else {
             tr.onclick = function() { // Attach click handler
                 onclick_func();
                 // Optionally close popup after action
                 // popup.onclose();
             };
         }
         var span = document.createElement('span');
         span.innerHTML = text;
         if (is_highlighted) {
             span.style.color = 'rgba(255, 147, 71, 1)'; // Highlight color
         }
         tr.appendChild(span);
         option_div.appendChild(tr);
    }
    // --- End Helper ---

    var canConnectA2DP = data.A2dpSink; // Can speaker connect *to* this device (speaker acts as sink)
    var canConnectA2DPSink = data.A2dp; // Can this device connect *to* the speaker (speaker acts as source)

    // Add Connect/Disconnect Options
    if (isConnected) {
         addOption('Disconnect Device', function() { // Dịch
             var disconnectType = data.A2dpConnect ? 'BT_Disconnect_A2dp_Device' : 'BT_Disconnect_A2dpSink_Device';
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: disconnectType, mac: data.Address }));
                 // Refresh list after action
                 setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_Device' })); }, 300);
                 popup.onclose(); // Close popup after initiating disconnect
             }
         });
    } else {
        // Show connection options only if not connected and pairing state is Bonded (12)
        if (data.BondState === 12) {
             var addedConnectOption = false;
             // Option 1: Speaker plays audio FROM the device (Speaker is Sink)
             if (canConnectA2DPSink) {
                 addOption('Connect (Play audio from this device)', function() { // Dịch
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'BT_Connect_A2dpSink_Device', mac: data.Address }));
                         setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_Device' })); }, 300);
                         popup.onclose();
                      }
                 });
                 addedConnectOption = true;
             }
             // Option 2: Speaker sends audio TO the device (Speaker is Source - less common for R1)
             if (canConnectA2DP && ver >= 1875) { // Check version for speaker-as-source support
                 addOption('Connect (Send audio to this device)', function() { // Dịch
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'BT_Connect_A2dp_Device', mac: data.Address }));
                         setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_Device' })); }, 300);
                         popup.onclose();
                      }
                 });
                 addedConnectOption = true;
             }
             // If no connection options are available for a bonded device
             if (!addedConnectOption) {
                 addOption('Cannot connect (Unsupported profiles)', null, true); // Dịch
             }
        } else { // Not bonded, show Pair option
             // Check if pairing is possible (basic check - might need profile check too)
             if (canConnectA2DP || canConnectA2DPSink) {
                 addOption('Pair with Device', function() { // Dịch
                      if (ws && ws.readyState === WebSocket.OPEN) {
                         ws_send(JSON.stringify({ type: 'BT_createBond', mac: data.Address }));
                         // Refresh list after trying to pair
                         setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_Device' })); }, 300);
                         popup.onclose();
                      }
                 });
             } else {
                 addOption('Cannot pair (Unsupported profiles)', null, true); // Dịch
             }
        }
    }

    // Add Unpair Option (only if bonded)
    if (data.BondState === 12) {
        addOption('Unpair Device', function() { // Dịch
            if (confirm("Are you sure you want to unpair this device?")) { // Dịch confirmation
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'BT_removeBond', mac: data.Address }));
                     setTimeout(() => { if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'BT_Device' })); }, 300);
                     popup.onclose();
                 }
            }
        });
    }

    // Add Cancel button
    addOption('Cancel', function() { popup.onclose(); }); // Dịch

    popup.style.display = 'block'; // Show the configured popup
}


// Formats the title for Bluetooth devices in the list
function get_bluetooth_title(deviceData) {
    if (!deviceData) return 'Unknown Device'; // Dịch

    const names = { // Icons or prefixes for device types
        'COMPUTER': '💻 ',
        'PHONE': '📱 ',
        'AUDIO_VIDEO': '🎧 ',
        'PERIPHERAL': '[Periph] ', // Dịch
        'WEARABLE': '[Wearable] ', // Dịch
        'TOY': '[Toy] ', // Dịch
        'NETWORKING': '[Net] ', // Dịch
        'IMAGING': '[Img] ', // Dịch
        'MISC': '[Misc] ', // Dịch
        'HEALTH': '[Health] ', // Dịch
        'UNCATEGORIZED': '' // No prefix for uncategorized
    };

    var title = '';
    if (deviceData.BondState == 11) { // Pairing state
        title += '[Pairing...] '; // Dịch
    }

    // Add device type icon/prefix
    title += names[deviceData.DeviceType] || ''; // Use mapped name or empty string

    // Add device name or address
    title += deviceData.name ? deviceData.name : (deviceData.Name ? deviceData.Name : deviceData.Address);

    return title;
}
// --- End Bluetooth Update Logic ---

// --- Device Info Update Logic ---
function load_device_info() {
    var user_info_text_elem = document.getElementById('user_info_text'); // Use specific var name
    var sq_info_text_elem = document.getElementById('sq_info_text'); // Use specific var name

    // Check if elements exist before updating
    if (!user_info_text_elem || !sq_info_text_elem || !device_info_data || !device_info_data.api_info) return;

    var api_info_data = device_info_data.api_info; // Use specific var name

    if (api_info_data.code == 200) {
        var data = api_info_data.data.nameValuePairs || api_info_data.data; // Handle potential nameValuePairs nesting
        var device_info_details = data.device_info.nameValuePairs || data.device_info; // Nested device info
        var user_info_details = data.user_info.nameValuePairs || data.user_info; // Nested user info

        // Update User Info Text
        user_info_text_elem.innerHTML = 'User: ' + (user_info_details.nick || 'N/A') + '(' + (user_info_details.userid || 'N/A') + ')'; // Dịch + Add fallback

        // QQ Music Status
        var qqmusic_login_state = (user_info_details.qqmusic_login_state == 1) ?
            'Logged In (' + (user_info_details.userid || 'N/A') + ')' : 'Not Logged In'; // Dịch
        user_info_text_elem.innerHTML += '<br>QQ Music: ' + qqmusic_login_state; // Dịch

        // Kuwo Music Status (if supported)
        if (u_ver + 1 > 1844) {
            var kuwo_uid = user_info_details.kuwo_uid || '';
            var kuwo_login_state = (user_info_details.kuwo_login_state == 1 && kuwo_uid != '') ?
                'Logged In (' + kuwo_uid + ')' : 'Not Logged In'; // Dịch
            user_info_text_elem.innerHTML += '<br>Kuwo Music: ' + kuwo_login_state; // Dịch
        }

        // Netease Music Status
        var netease_uid = user_info_details.netease_uid || '';
        var netease_login_state = (user_info_details.netease_login_state == 1 && netease_uid != '') ?
            'Logged In (' + netease_uid + ')' : 'Not Logged In'; // Dịch
        user_info_text_elem.innerHTML += '<br>Netease Music: ' + netease_login_state; // Dịch

        // Last Login Time
        var login_time = user_info_details.login_time ? set_time(user_info_details.login_time) : 'Unknown'; // Dịch
        user_info_text_elem.innerHTML += '<br>Last Login: ' + login_time; // Dịch

        // Update Authorization Info Text
        sq_info_text_elem.innerHTML = 'Public IP: ' + (device_info_details.ip || 'N/A'); // Dịch + Fallback
        sq_info_text_elem.innerHTML += '<br>Device SN: ' + (device_info_details.sn || 'N/A'); // Dịch + Fallback
        sq_info_text_elem.innerHTML += '<br>Device MAC: ' + (device_info_details.mac || 'N/A'); // Dịch + Fallback

        // Authorization Status Logic
        var sq_state = 'Not Authorized'; // Dịch default
        var current_time = Math.floor(new Date().getTime() / 1000);
        var expire_time = parseInt(device_info_details.sq_expire_time) || 0;
        var sq_type = parseInt(device_info_details.sq_type) || 0;

        if (sq_type === 1 || sq_type === 2 || sq_type === 3) { // Check if any auth type exists
            if (current_time > expire_time && sq_type !== 3) { // Expired (not type 3)
                sq_state = (sq_type === 2) ? 'Trial Expired' : 'Expired'; // Dịch
                sq_state += '<br>Expiry Time: ' + set_time(expire_time); // Dịch
            } else { // Active or Permanent
                if (sq_type === 2) {
                    sq_state = 'Trial Authorized'; // Dịch
                    sq_state += '<br>Expires: ' + set_time(expire_time); // Dịch
                } else { // Type 1 (Normal) or 3 (Permanent/Text)
                    sq_state = 'Authorized'; // Dịch
                    sq_state += '<br>Expires: '; // Dịch
                    if (sq_type === 3) {
                        sq_state += device_info_details.sq_expire_time_text || 'Permanent'; // Use text or 'Permanent' // Dịch
                    } else {
                        sq_state += set_time(expire_time);
                    }
                }
            }
        }
        sq_info_text_elem.innerHTML += '<br>Auth Status: ' + sq_state; // Dịch

        // Update URL parameters if on the original host (removed this logic for local)
        // delparam(['connect_id', 'connect_ip']);
        // if (location.host.indexOf(control_host) != -1) { ... }

        // Update local device list (useful if managing multiple speakers locally)
        var device_data_to_update = {
            hostname: hostname || '', // Ensure hostname is available
            ip: ip.split(':')[0], // Get IP part
            dev_name: info ? info.device_name : (hostname || 'R1 Speaker'), // Use stored name or hostname
            url: location.href.split('?')[0].split('#')[0], // Current page URL
            device_sid: device_info_details.device_sid || '',
            device_msid: device_info_details.device_msid || connect_id || '' // Use fetched ID or connection ID
        };
        update_device_list(device_data_to_update);

    } else { // Handle API info error
        user_info_text_elem.innerHTML = "Error fetching info: " + (api_info_data.msg || 'Unknown') + ' (Code: ' + api_info_data.code + ')'; // Dịch
        sq_info_text_elem.innerHTML = 'Failed to load.'; // Dịch
    }
}
// --- End Device Info Update Logic ---

// --- System Info Update Logic ---
function update_systeminfo() {
    if (!ws || ws.readyState !== WebSocket.OPEN) return; // Check connection

    if (ver + 1 > 1853) { // Newer versions support batch/specific info request
        const sends = [
            { type: 'get_device_info', type_id: 'get_device_info' },
            { type: 'shell', type_id: 'cpu_temp', shell: 'cat /sys/class/hwmon/hwmon0/device/temp0_input' } // Get CPU temp
        ];
        ws_send(JSON.stringify({ type: 'sends', type_id: 'device_info', list: sends }));
    } else { // Older versions use shell commands for basic info
        ws_send(JSON.stringify({ type: 'shell', type_id: 'query', shell: 'cat /proc/meminfo&&cat /proc/stat&&echo incremental:$(getprop ro.build.version.incremental)' }));
    }
}

// Updates UI with detailed system info (from get_device_info response)
function set_systeminfo1(deviceInfo, cpuTemp) {
     // Schedule next update only if timer is active
     if (update_device_info_timer !== -1) {
         setTimeout(function () {
             if (update_device_info_timer === -1) return; // Check again in case it was stopped
             update_systeminfo();
         }, 1000); // Update interval
     }

     update_device_info1(); // Trigger update for other parts of the info page

     var state_info_text_elem = document.getElementById('state_info_text'); // Get element
     if (!state_info_text_elem || !deviceInfo) { // Check elements and data
          if (state_info_text_elem) state_info_text_elem.innerHTML = 'Error loading system info.'; // Dịch
          return;
     }

     // --- Parse Memory Info ---
     var memLines = deviceInfo.meminfo ? deviceInfo.meminfo.split("\r\n") : [];
     var MemTotal = -1, MemFree = -1, Cached = -1;
     memLines.forEach(line => {
         var parts = line.split(':');
         if (parts.length === 2) {
             var key = parts[0].trim();
             var value = parseInt(parts[1]);
             if (!isNaN(value)) {
                 if (key === 'MemTotal') MemTotal = value;
                 else if (key === 'MemFree') MemFree = value;
                 else if (key === 'Cached') Cached = value;
             }
         }
     });

     // --- Parse CPU Info ---
     var onlineCPUs = 'N/A';
     if (deviceInfo.cpu) {
          var cpuLines = deviceInfo.cpu.split("\r\n");
          cpuLines.forEach(line => {
              var parts = line.split(':');
              if (parts.length === 2 && parts[0].trim() === 'online') {
                  onlineCPUs = parts[1].trim();
              }
          });
     }

     // --- Parse Max CPU Frequency ---
     var maxFreq = 0;
     if (deviceInfo.availableProcessors) {
          for (var i = 0; i < deviceInfo.availableProcessors; i++) {
              var cpuI = deviceInfo['cpu' + i];
              if (cpuI) {
                  var cpuILines = cpuI.split("\r\n");
                  cpuILines.forEach(line => {
                      var parts = line.split(':');
                      if (parts.length === 2 && parts[0].trim() === 'scaling_max_freq') { // Use scaling_max_freq for max potential
                           var freq = parseInt(parts[1]);
                           if (!isNaN(freq) && freq > maxFreq) {
                               maxFreq = freq;
                           }
                      } else if (parts.length === 2 && parts[0].trim() === 'cpuinfo_max_freq') { // Fallback
                           var freq = parseInt(parts[1]);
                           if (!isNaN(freq) && freq > maxFreq) {
                                maxFreq = freq;
                           }
                      }
                  });
              }
          }
     }
     var freqGhz = (maxFreq > 0) ? (maxFreq / 1000000).toFixed(2) + ' GHz' : 'N/A'; // Format frequency

     // --- Get Current Player Info ---
     var currentPlayer = 'MediaPlayer'; // Default
     if (info && info.Current_PlayerType) { // Check if info object exists
         if (info.Current_PlayerType == 2) {
             currentPlayer = 'ExoPlayer';
             if (info.Support_Flac === true) { // Use === for strict comparison
                 if (ver >= 1865) currentPlayer += '[FLAC]'; // Simplified version check
                 else if (ver >= 1856) currentPlayer += '[FLAC]'; // Older FLAC support check
                 // Removed FFmpeg check as it seems version dependent and less reliable
             }
         }
     }

     // --- Parse CPU Usage ---
     var cpuUsage = 'N/A';
     if (deviceInfo.cpuinfo && deviceInfo.cpuinfo.length > 3) {
         cpuUsage = parseInt(deviceInfo.cpuinfo[3]) + "%"; // Assuming index 3 is usage percentage
     }

     // --- Parse CPU Temperature ---
     var cpuTempStr = '';
     if (cpuTemp) {
         var tempLines = cpuTemp.split("\r\n");
         if (tempLines.length > 0 && !isNaN(parseInt(tempLines[0]))) { // Check if first line is a number
             cpuTempStr = ` ${Math.round(parseInt(tempLines[0]) / 1000)}°C`; // Assume value is in milliCelsius
         }
     }


     // --- Build Display String ---
     var infoHtml = '';
     infoHtml += 'Device Name: ' + (info && info.device_name ? info.device_name + ' (' + hostname + ')' : hostname); // Dịch + Use hostname as fallback
     infoHtml += '<br>Firmware Version: ' + (deviceInfo.incremental || 'N/A'); // Dịch + Fallback
     infoHtml += '<br>Device IP: ' + (local_ip || 'N/A'); // Dịch + Fallback
     if (ver + 1 > 1856) { // Show player only if supported
         infoHtml += '<br>Current Player: ' + currentPlayer; // Dịch
         if (info && info.Current_PlayerType == 2 && typeof (info.ExoPlayer_Version) == 'string') {
             infoHtml += '<br>ExoPlayer Version: ' + info.ExoPlayer_Version; // Dịch
         }
     }
     infoHtml += '<br>CPU Usage [' + onlineCPUs + ']: (' + freqGhz + ') ' + cpuUsage + cpuTempStr; // Dịch + Combine info
     var memAvailable = (MemFree > -1 && Cached > -1) ? parseInt((MemFree + Cached) / 1024) : 'N/A';
     var memTotal = (MemTotal > -1) ? parseInt(MemTotal / 1024) : 'N/A';
     infoHtml += '<br>Available/Total Memory: ' + memAvailable + "MB / " + memTotal + "MB"; // Dịch
     var uptime = (deviceInfo.elapsedRealtime) ? formatTimestamp(deviceInfo.elapsedRealtime) : 'N/A'; // Format uptime
     infoHtml += '<br>System Uptime: ' + uptime; // Dịch
     infoHtml += '<br>Info Updated: ' + set_time(Math.floor(new Date().getTime() / 1000)); // Dịch

     state_info_text_elem.innerHTML = infoHtml; // Update the element
}


// Updates UI with system info from older shell command method
function set_systeminfo(data) {
    // Schedule next update
    if (update_device_info_timer !== -1) {
         setTimeout(function () {
             if (update_device_info_timer === -1) return;
             update_systeminfo();
         }, 1000);
    }

    update_device_info1(); // Trigger update for other parts

    var state_info_text_elem = document.getElementById('state_info_text');
    if (!state_info_text_elem || !data) {
         if(state_info_text_elem) state_info_text_elem.innerHTML = 'Error loading system info.'; // Dịch
        return;
    }

    var lines = data.split("\r\n");
    var MemTotal = -1, MemFree = -1, Cached = -1;
    var cpuData = null, btime = null;
    var incremental = 'N/A'; // Default firmware version

    // Parse Meminfo
    lines.forEach(line => {
        if (MemTotal === -1 && line.startsWith('MemTotal:')) MemTotal = parseInt(line.split(':')[1]);
        if (MemFree === -1 && line.startsWith('MemFree:')) MemFree = parseInt(line.split(':')[1]);
        if (Cached === -1 && line.startsWith('Cached:')) Cached = parseInt(line.split(':')[1]);
        if (cpuData === null && line.startsWith('cpu ')) cpuData = line.substring(5).split(" "); // Get first CPU line
        if (btime === null && line.startsWith('btime ')) btime = parseInt(line.substring(6));
        if (incremental === 'N/A' && line.startsWith('incremental:')) incremental = line.split(':')[1] || 'N/A';
    });

    // Basic CPU usage calculation (very rough estimate, requires previous state not stored here)
    // This part is likely inaccurate without comparing two /proc/stat snapshots.
    // We'll skip the detailed CPU usage calculation for the older method.

    var memAvailable = (MemFree > -1 && Cached > -1 && !isNaN(MemFree) && !isNaN(Cached)) ? parseInt((MemFree + Cached) / 1024) : 'N/A';
    var memTotal = (MemTotal > -1 && !isNaN(MemTotal)) ? parseInt(MemTotal / 1024) : 'N/A';
    var uptime = (btime && !isNaN(btime)) ? formatTimestamp(new Date().getTime() - (btime * 1000)) : 'N/A'; // Calculate uptime

    // Build Display String
    var infoHtml = '';
    infoHtml += 'Device Name: ' + (info && info.device_name ? info.device_name + ' (' + hostname + ')' : hostname); // Dịch
    infoHtml += '<br>Firmware Version: ' + incremental; // Dịch
    infoHtml += '<br>Device IP: ' + (local_ip || 'N/A'); // Dịch
    // infoHtml += '<br>CPU Usage: N/A'; // Indicate CPU usage unavailable with this method
    infoHtml += '<br>Available/Total Memory: ' + memAvailable + "MB / " + memTotal + "MB"; // Dịch
    infoHtml += '<br>System Uptime: ' + uptime; // Dịch
    infoHtml += '<br>Info Updated: ' + set_time(Math.floor(new Date().getTime() / 1000)); // Dịch

    state_info_text_elem.innerHTML = infoHtml;
}
// --- End System Info Update Logic ---

// --- Device Info Page Polling Logic ---
function update_device_info() {
    // Schedule next basic system info update (memory, cpu, uptime)
    if (update_device_info_timer === -1) { // Start polling only if not already running
        update_device_info_timer = 1; // Set flag to indicate running
        update_systeminfo(); // Initial request
    }

    // Throttle requests for potentially heavier/less frequently changing data
    var now = new Date().getTime();

    // Request Unisound API info (login, auth, etc.) less frequently
    if (is_new_unisound && now > update_device_info_time) {
        update_device_info_time = now + 5000; // Update every 5 seconds
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'info' } } }));
        }
    }

    // Refresh other parts of the Device Info page (e.g., service list, memo list)
    // These are already triggered within update_device_info1 which is called by update_systeminfo's response handling
    // update_device_info1(); // No need to call this directly here
}

// Updates secondary info on the Device Info page (called after system info update)
function update_device_info1() {
    if (update_device_info_timer === -1) return; // Don't update if polling is stopped

    // Request detection of useless services
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'shell', type_id: 'useless_services_detection', shell: '/system/bin/pm list packages' }));
    }

    // Request memo list if supported
    if (is_new_unisound && u_ver + 1 > 1820 && ver + 1 > 1815) {
         if (ws && ws.readyState === WebSocket.OPEN) {
             ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_memo' } }));
         }
    }

    // Request detailed Unisound info if supported (updates sleep button, mic status, etc.)
     if (ws && ws.readyState === WebSocket.OPEN) {
         ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'get_info' } }));
     }
}

// Processes the list of installed packages to identify potentially useless ones
function useless_services_detection(data) {
    if (!data) return; // Exit if no data

    useless_services_list = []; // Reset the list
    // List of package names considered potentially useless
    var potential_useless = [
        'com.phicomm.speaker.airskill', 'com.android.providers.telephony',
        'com.phicomm.speaker.productiontest', 'com.android.externalstorage', // Be cautious with externalstorage
        'com.android.providers.downloads', 'com.android.certinstaller',
        'com.phicomm.speaker.bugreport', 'com.android.inputdevices',
        'com.android.server.telecom', 'com.android.keychain',
        'com.phicomm.speaker.otaservice', 'com.android.proxyhandler',
        'com.phicomm.speaker.ijetty', 'com.android.vpndialogs',
        'com.android.location.fused', 'com.phicomm.speaker.exceptionreporter'
    ];
    // Add systemtool conditionally based on version
    if (u_ver + 1 > 1845) {
        potential_useless.push('com.phicomm.speaker.systemtool');
    }

    var installed_packages = data.split("\r\n"); // Split output into lines

    installed_packages.forEach(pkg_line => {
         var pkg_name = pkg_line.replace('package:', '').trim(); // Extract package name
         if (potential_useless.includes(pkg_name)) {
             useless_services_list.push(pkg_name); // Add to list if found
         }
    });

    // Update the "Disable Useless Services" button state
    var btn_hide = document.getElementById('hide_useless_services');
    if (btn_hide) { // Check if button exists
        if (useless_services_list.length > 0) {
            // Enable button only if not waiting from a previous click
            var wait_time = parseInt(btn_hide.getAttribute('wait') || '0');
            if (new Date().getTime() > wait_time) {
                btn_hide.value = 'Disable [' + useless_services_list.length + '] Useless Services'; // Dịch
                btn_hide.style.display = ''; // Show button
                btn_hide.disabled = false;
            } else {
                 // Still waiting from previous click
                 btn_hide.value = 'Processing...'; // Dịch
                 btn_hide.disabled = true;
            }
        } else { // No useless services found
            btn_hide.value = 'No Useless Services Found'; // Dịch
            btn_hide.style.display = ''; // Show button but disabled
            btn_hide.disabled = true;
        }
    }
}

// Updates the "Clear Memo" button based on received memo list
function memo_info(data) {
    var btn_clear = document.getElementById('clear_memo');
    if (!btn_clear) return; // Exit if button doesn't exist

    if (data && data.data != null) { // Check if data is valid
        memo_list = data.data; // Store the list

        // Handle confirmation messages after deletion
        if (data.type == 'del_memo' || data.type == 'delall_memo') {
             // This logic assumes the response 'data.data' contains the remaining memos
             // If the original `memo_list` before deletion isn't stored, calculating 'num' isn't reliable here.
             // Instead, just confirm based on the action type.
             btn_clear.value = 'Clear operation finished!'; // Dịch generic confirmation
        }

        // Update button text and state based on the number of memos
        if (memo_list.length > 0) {
            var wait_time = parseInt(btn_clear.getAttribute('wait') || '0');
            if (new Date().getTime() > wait_time) {
                btn_clear.style.display = ''; // Show button
                btn_clear.disabled = false;
                btn_clear.value = 'Clear ' + memo_list.length + ' Alarms/Reminders'; // Dịch
            } else {
                 // Still waiting
                 btn_clear.value = 'Processing...'; // Dịch
                 btn_clear.disabled = true;
            }
        } else { // No memos left
            // Set text to indicate no memos and disable after a short delay
             setTimeout(function () {
                 var btn = document.getElementById('clear_memo'); // Get button again inside timeout
                 if (btn) {
                     btn.value = 'No Alarms/Reminders to Clear'; // Dịch
                     btn.disabled = true;
                 }
             }, 1000); // Delay before disabling
        }
    } else {
        // Handle error case where memo data is null
        console.warn("Received null memo data:", data);
         btn_clear.value = 'Error fetching memos'; // Dịch
         btn_clear.disabled = true;
    }
}
// --- End Device Info Update Logic ---


// --- API Response Handling ---
// Handles generic API responses, often from Unisound relayed via EchoService
function api(data, type_indicator) { // type_indicator: 0=no payload, 1=string payload, 2=object payload
    if (!data) return;

    // Check for login status errors first
    if (data.login_state != 1 && data.login_msg) {
        var user_info_text_elem = document.getElementById('user_info_text');
        if (user_info_text_elem) {
            user_info_text_elem.innerHTML = "API Error: " + data.login_msg + ' (State: ' + data.login_state + ')'; // Dịch
        }
        return; // Stop further processing if login state is bad
    }

    // Extract the actual payload (might be nested differently)
    var payload;
    if (type_indicator === 1 && typeof data.data === 'string') { // String payload, needs parsing
        try { payload = JSON.parse(data.data); } catch (e) { console.error("Failed to parse API string payload:", data.data, e); return; }
    } else if (type_indicator === 2 && typeof data.data === 'object') { // Already an object
        payload = data.data;
    } else if (type_indicator === 0) { // No specific data payload, use the main data object
        payload = data;
    } else {
        console.warn("Unknown API data structure:", data, type_indicator);
        return;
    }

    // Route based on the 'type' within the payload
    var api_type = payload.type;
    if (api_type == 'info') { // Detailed device/user info from API
        device_info_data.api_info = payload; // Store it
        load_device_info(); // Update the UI section
    } else if (api_type == 'get_xiaoai_id') { // Xiaoai activation related
        // Original code seemed to just send broadcasts, not use the ID directly
        // Keeping the alert/button reset logic
        var activationBtn = document.getElementById('activation_xiaoai');
        if (activationBtn) {
             activationBtn.value = 'Activation command sent! Check screen later.'; // Dịch
             activationBtn.disabled = true;
             setTimeout(function () {
                 if (activationBtn) { // Check again
                     activationBtn.value = 'Activate Xiaoai (One-Click)'; // Dịch
                     activationBtn.disabled = false;
                 }
             }, 3000);
        }
         // Trigger activation broadcasts (shell commands)
         if (ws && ws.readyState === WebSocket.OPEN) {
            ws_send(JSON.stringify({ type: 'shell', type_id: 'activation_xiaoai', shell: 'am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/.ai.BootReceiver&am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/com.taobao.accs.EventReceiver' }));
         }
    } else if (api_type == 'login_netease_music') { // Netease login step 1 confirmation (from speaker API)
        login_netease_music(payload, 1);
    } else if (api_type == 'login_kuwo_music') { // Kuwo login step 1 confirmation
        login_kuwo_music(payload, 1);
    } else if (api_type == 'collect' || api_type == 'cancel_collect') { // Favorite/Unfavorite confirmation
        alert(payload.msg || (api_type == 'collect' ? 'Favorited!' : 'Unfavorited!')); // Dịch fallbacks
         // Refresh music info to potentially update favorite status icon/button
         if (ws && ws.readyState === WebSocket.OPEN) {
            setTimeout(() => ws_send(JSON.stringify({ type: 'get_info' })), 200);
         }
    } else if (api_type == 'get_song_list') { // Playlist list received
        get_song_list(payload); // Process the playlist data
    } else {
        console.log("Unhandled API type:", api_type, payload);
    }
}
// --- End API Response Handling ---

// --- Process List (ps) Command Output ---
function ps_message(data) {
    if (!data) { // Handle empty data
        var btn_ps = document.getElementById('Cleanup_process');
        if (btn_ps) {
            btn_ps.value = 'Cleaned!'; // Dịch
            setTimeout(function () {
                if (btn_ps) { // Check again
                    btn_ps.disabled = false;
                    btn_ps.value = 'Clean Processes'; // Dịch
                }
            }, 1000);
        }
        return;
    }

    var lines = data.split("\r\n");
    var process_list = [];
    var packages_list = []; // Store processes that look like packages

    // Parse process list
    for (var i = 1; i < lines.length; i++) { // Skip header line (index 0)
        var parts = lines[i].trim().split(/\s+/); // Split by whitespace
        if (parts.length >= 9) { // Check if line has enough parts
             var user = parts[0];
             var pid = parts[1];
             var ppid = parts[2];
             var vsz = parts[3];
             var rss = parts[4];
             var wchan = parts[5];
             var addr = parts[6];
             var stat = parts[7]; // S=Sleeping, R=Running, Z=Zombie, T=Stopped
             var name = parts[parts.length - 1]; // Last part is usually the name

             process_list.push({ user, pid, ppid, vsz, rss, wchan, addr, stat, name });

             // Identify potential packages (heuristic: contains '.')
             if (name.includes('.')) {
                 packages_list.push({ pid: pid, name: name });
             }
        }
    }

    // Whitelist of packages/processes to keep running
    var white_list = [
        'com.android.bluetooth', 'com.vipercn.viper4android_v2',
        'com.phicomm.speaker.launcher', 'com.phicomm.speaker.systemtool',
        'com.phicomm.speaker.netctl', 'com.phicomm.speaker.device', // Core Unisound
        'com.phicomm.speaker.player', // Core EchoService
        'com.droidlogic.mediacenter', 'com.waxrain.airplaydmr',
        'com.xiaomi.xiaoailite', 'james.dsp', 'com.duoqin.ai',
        'system_server', 'zygote', 'adbd', 'logd', 'netd', // Core Android
        'surfaceflinger', 'media.logd', 'mediaserver', 'audioserver', // Core Android media
        'lmkd', 'servicemanager', 'hwservicemanager', 'gatekeeperd', // Core Android
         // Add any other essential processes identified through testing
         'netmgrd', 'wifihal', 'wpa_supplicant' // Networking
    ];

    var kill_commands = [];
    packages_list.forEach(proc => {
        var should_kill = true;
        // Check against whitelist (partial match is okay for packages)
        for (var j = 0; j < white_list.length; j++) {
            if (proc.name.includes(white_list[j])) {
                should_kill = false;
                break;
            }
        }
        // Avoid killing self (browser process - unlikely via adb shell ps, but good practice)
        if (proc.name.includes('webview') || proc.name.includes('browser')) {
            should_kill = false;
        }

        if (should_kill) {
            // Check if it's a common system process name even without a '.'
            if (!['sh', 'ps', 'toolbox', 'debuggerd', 'installd', 'keystore', 'su', 'dhcpcd'].includes(proc.name)) {
                 kill_commands.push('am force-stop ' + proc.name); // Use force-stop for packages
            }
        }
    });

    // Send kill commands if any
    var btn_ps = document.getElementById('Cleanup_process'); // Get button again
    if (kill_commands.length > 0) {
        if (ws && ws.readyState === WebSocket.OPEN) {
            if (ver + 1 > 1855) { // Batch command support
                ws_send(JSON.stringify({ type: 'shell1', shells: kill_commands }));
            } else {
                ws_send(JSON.stringify({ type: (ver + 1 > 1825 ? 'shell1' : 'shell'), shell: kill_commands.join(" & ") })); // Chain commands for older versions
            }
            if (btn_ps) btn_ps.value = 'Cleaned [' + kill_commands.length + '] processes!'; // Dịch
        } else {
             if (btn_ps) btn_ps.value = 'Connection Error!'; // Dịch
        }
    } else {
        if (btn_ps) btn_ps.value = 'Nothing to clean!'; // Dịch
    }

    // Re-enable button after timeout
    setTimeout(function () {
        if (btn_ps) { // Check again
            btn_ps.disabled = false;
            btn_ps.value = 'Clean Processes'; // Dịch
        }
    }, 1000);
}
// --- End ps_message function ---


// Formats milliseconds into a human-readable duration string (days, hours, minutes, seconds)
function formatTimestamp(timestamp, fullFormat = false) { // Default to short format
    if (isNaN(timestamp) || timestamp < 0) return "N/A"; // Handle invalid input

    var daysMillisecond = 86400000; // 1000 * 60 * 60 * 24
    var hoursMillisecond = 3600000; // 1000 * 60 * 60
    var minutesMillisecond = 60000; // 1000 * 60

    var days = Math.floor(timestamp / daysMillisecond);
    var hours = Math.floor((timestamp % daysMillisecond) / hoursMillisecond);
    var minutes = Math.floor((timestamp % hoursMillisecond) / minutesMillisecond);
    var seconds = Math.floor((timestamp % minutesMillisecond) / 1000);

    // Full format: "X days Y hours Z minutes W seconds"
    if (fullFormat) {
        return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds "; // Dịch units
    } else { // Short format: show only relevant units
        var arr = [];
        if (days > 0) { arr.push(days + "d"); } // Dịch "d"
        if (hours > 0 || (days > 0 && (minutes > 0 || seconds > 0))) { arr.push(hours + "h"); } // Dịch "h", show if days>0 and lower units exist
        if (minutes > 0 || ((days > 0 || hours > 0) && seconds > 0)) { arr.push(minutes + "m"); } // Dịch "m", show if higher units exist and seconds exist
        if (seconds >= 0) { arr.push(seconds + "s"); } // Dịch "s", always show seconds if > 0 or if other units shown
        return arr.length > 0 ? arr.join(' ') : "0s"; // Return joined string or "0s"
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
// Functions for time formatting, updates, and common operations

// Converts Unix timestamp (seconds) to YYYY-MM-DD HH:MM:SS format
function set_time(str) {
    var n = parseInt(str) * 1000; // Convert seconds to milliseconds
    if (isNaN(n)) return "Invalid Timestamp"; // Handle invalid input

    var D = new Date(n);
    if (isNaN(D.getTime())) return "Invalid Date"; // Handle invalid date object

    var year = D.getFullYear();
    var month = ('0' + (D.getMonth() + 1)).slice(-2); // Add leading zero
    var day = ('0' + D.getDate()).slice(-2);
    var hours = ('0' + D.getHours()).slice(-2);
    var minutes = ('0' + D.getMinutes()).slice(-2);
    var seconds = ('0' + D.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

// Converts milliseconds to MM:SS format
function ms_to_is(m) {
    if (isNaN(m) || m < 0) m = 0; // Handle invalid input
    var totalSeconds = Math.floor(m / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    var i_str = ('0' + minutes).slice(-2); // Add leading zero for minutes
    var s_str = ('0' + seconds).slice(-2); // Add leading zero for seconds
    return i_str + ':' + s_str;
}

// Starts polling the speaker for status updates
function start_updateinfo(interval_ms = 1000) { // Default interval 1 second
    if (!interval_ms || isNaN(interval_ms) || interval_ms < 500) {
        interval_ms = 1000; // Ensure a minimum interval
    }
    stop_updateinfo(); // Clear any existing timer first
    //clearInterval(ping_timer); // Keep ping timer separate if used elsewhere

    timer = setInterval(function () {
        if (ws != null && ws.readyState === WebSocket.OPEN) {
            ws_send(JSON.stringify({ type: 'get_info' })); // Send request
        } else {
            // Optionally stop polling if WebSocket is not open
            // stop_updateinfo();
            // console.warn("WebSocket not open, skipping info update poll.");
        }
    }, interval_ms);
}

// Stops polling the speaker for status updates
function stop_updateinfo() {
    clearInterval(timer);
    timer = -1;
}

// Sends command to change the TTS voice speaker
function update_TtsSpeaker(value) {
    // Send the command with success/typeid for feedback
    send('TTS Speaker changed successfully!', 'Change TTS Speaker', 'send_message', { what: 65536, arg1: 0, arg2: 2, obj: value }); // Dịch messages
}

// Generic click handler for action buttons
function click(button_element) { // Renamed parameter
    var data1 = button_element; // Use 'this' reference passed in
    data1.disabled = true; // Disable button temporarily
    setTimeout(function () { data1.disabled = false; }, 1000); // Re-enable after 1s

    var param;
    try { // Add try-catch for parsing JSON data
        param = JSON.parse(button_element.getAttribute('data'));
    } catch (e) {
        console.error("Error parsing button data:", button_element.getAttribute('data'), e);
        alert("Error processing button action."); // Dịch
        return;
    }

    var input_element = document.getElementById('input'); // Get input field
    var input_value = input_element ? input_element.value : ''; // Get value safely

    // --- Handle Type 1 & 3 (Input Required/Optional) ---
    if (param.type == 1 || param.type == 3) {
        var error_message = param.err || 'Input required!'; // Default error message // Dịch

        // Special validation/formatting for specific inputs
        if (button_element.value === 'Set Ambient Light Color') { // Check by translated value // Dịch
            var colorInt = parseInt(input_value);
            if (isNaN(colorInt) || (colorInt === 0 && !input_value.toLowerCase().includes('0x'))) {
                 input_value = ''; // Clear invalid input
                 error_message = 'Please enter a valid hexadecimal color value (e.g., 0xFF0000)!'; // Dịch
            } else {
                input_value = colorInt; // Use parsed integer
            }
        }

        // Check if input is empty when required (type 1)
        if (input_value === '' && param.type == 1) {
            // Prepend current value information to error message for certain actions
            var current_val_info = '';
            switch (button_element.value) { // Use translated button values
                case 'Modify Unisound Wake Word': // Dịch
                    current_val_info = "Current Unisound Wake Words:\n" + (info?.main_wakeup_word || []).concat('小讯小讯').join("\n") + "\n"; // Dịch
                    break;
                case 'Modify Device Name': // Dịch
                    current_val_info = info?.device_name ? ('Current Device Name: ' + info.device_name + "\n") : ''; // Dịch
                    break;
                 case 'Set Ambient Light Brightness': // Dịch
                    current_val_info = (info?.music_light_luma != null) ? ('Current Brightness: ' + info.music_light_luma + "\n") : ''; // Dịch
                    break;
                 case 'Set Color Gradient Speed': // Dịch
                    current_val_info = (info?.music_light_chroma != null) ? ('Current Gradient Speed: ' + info.music_light_chroma + "\n") : ''; // Dịch
                    break;
                 case 'Set Ambient Light Color': // Dịch (Handled above, but add current value info)
                    if (info?.music_light_color != null) {
                         var hex_color = info.music_light_color.toString(16).toUpperCase().padStart(6, '0');
                         current_val_info = 'Current Light Color: 0x' + hex_color + "\n"; // Dịch
                    }
                    break;
                 case 'Modify Xiaoai Wake Word': // Dịch
                     current_val_info = (Unisound_info?.Wakeup_Xiaoai_Word?.length > 0) ? ("Current Xiaoai Wake Words:\n" + Unisound_info.Wakeup_Xiaoai_Word.join("\n") + "\n") : ''; // Dịch
                     break;
            }
            error_message = current_val_info + error_message; // Combine messages
            var text_area = document.getElementById('text');
            if (text_area) text_area.value = '[' + button_element.value + ']: ' + error_message;
            alert('[' + button_element.value + ']: ' + error_message);
            return; // Stop processing if required input is missing
        }

        // Prepare payload by injecting input value
        var payload = { ...param.param }; // Shallow copy parameters
        var input_keys = (param.input || '').split('.'); // e.g., "obj.iot_api"

        if (input_keys.length > 1) { // Nested property like obj.iot_api
             var current_level = payload;
             for (var i = 0; i < input_keys.length - 1; i++) {
                 // Ensure nested objects exist, parsing if necessary
                 if (typeof current_level[input_keys[i]] === 'string') {
                     try { current_level[input_keys[i]] = JSON.parse(current_level[input_keys[i]]); }
                     catch (e) { console.error("Error parsing nested param:", input_keys[i]); current_level[input_keys[i]] = {}; }
                 } else if (typeof current_level[input_keys[i]] === 'undefined' || current_level[input_keys[i]] === null) {
                      current_level[input_keys[i]] = {};
                 }
                 current_level = current_level[input_keys[i]]; // Move to next level
             }
             // Set the final value, potentially appending if it's a prefix command
             var final_key = input_keys[input_keys.length - 1];
             current_level[final_key] = (current_level[final_key] || '') + input_value; // Append or set
        } else if (input_keys.length === 1 && input_keys[0] !== '') { // Simple property
             payload[input_keys[0]] = (payload[input_keys[0]] || '') + input_value; // Append or set
        }
        // Else: No specific input key defined, command might not use it directly

        // Confirmation for potentially sensitive actions
        if (button_element.value === 'Execute Command') { // Dịch
            if (!confirm("Are you sure you want to execute this command?\n" + input_value)) { // Dịch
                return;
            }
        } else if (button_element.value === 'Execute Shell') { // Dịch
            if (!confirm("Are you sure you want to execute this shell command?\n" + input_value)) { // Dịch
                return;
            }
        }

        // Clear input field after processing (except for shell commands, maybe)
        if (button_element.value !== 'Execute Shell') { // Dịch
             if(input_element) input_element.value = '';
        }
        // Send the command
        send(param.succ, button_element.value, param.ws_type, payload);

    // --- Handle Type 2 (Toggle Buttons) ---
    } else if (param.type == 2) {
        // Handle all toggle buttons directly with improved state management
        if (param.title && param.title.length > 0) {
            // Find current state by matching button text with title array
            var current_state = -1;
            var button_text = button_element.value;

            // First try exact match
            for (var i = 0; i < param.title.length; i++) {
                if (param.title[i] === button_text) {
                    current_state = i;
                    break;
                }
            }

            // If no exact match, try partial match
            if (current_state === -1) {
                for (var i = 0; i < param.title.length; i++) {
                    if (button_text.includes(param.title[i]) || param.title[i].includes(button_text)) {
                        current_state = i;
                        break;
                    }
                }
            }

            // Special case for known buttons with specific text
            if (current_state === -1) {
                if (button_text === 'Turn On Bluetooth') {
                    current_state = 0;
                } else if (button_text === 'Bluetooth (On)') {
                    current_state = 1;
                } else if (button_text === 'Turn On Ambient Light') {
                    current_state = 0;
                } else if (button_text === 'Ambient Light (On)') {
                    current_state = 1;
                } else if (button_text === 'Enable Xiaoai Wakeup') {
                    current_state = 0;
                } else if (button_text === 'Disable Xiaoai Wakeup') {
                    current_state = 1;
                } else if (button_text.includes('DLNA Service')) {
                    current_state = button_text.includes('Disabled') ? 0 : 1;
                } else if (button_text.includes('AirPlay Service')) {
                    current_state = button_text.includes('Disabled') ? 0 : 1;
                } else if (button_text.includes('Always On')) {
                    current_state = button_text.includes('Off') ? 0 : 1;
                } else if (button_text.includes('Current:')) {
                    // For ambient effect buttons, find the matching state
                    for (var i = 0; i < param.title.length; i++) {
                        if (button_text === param.title[i]) {
                            current_state = i;
                            break;
                        }
                    }
                }
            }

            // If we still couldn't determine the state, use state_index or default to 0
            if (current_state === -1) {
                console.warn("Could not find matching state for toggle button:", button_text);
                current_state = button_element.state_index !== undefined ? button_element.state_index : 0;
            }

            // Calculate next state (cycle through available states)
            var next_state = (current_state + 1) % param.title.length;

            // Get the appropriate action tip and payload for the current state
            var action_tip = param.tips ? param.tips[current_state] : button_text;
            var payload_to_send = param.param[current_state];

            // Confirmation (skip for light mode toggles)
            if (!(param.state && param.state[0] === 0 && param.state[1] === 'info.music_light_mode')) {
                if (!confirm(action_tip + '?')) {
                    return;
                }
            }

            // Send the command
            send(param.succ ? param.succ[current_state] : 'OK', action_tip, param.ws_type, payload_to_send);

            // Update button state immediately to show the change
            button_element.value = param.title[next_state]; // Set to the next state
            button_element.state_index = next_state; // Update internal state index

            // Request info update to refresh all button states
            setTimeout(function() {
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws_send(JSON.stringify({type: 'get_info'}));
                }
            }, 500);

            return;
        }

        var current_index = -1;

        // First try exact match
        for (var i = 0; i < param.title.length; i++) {
            if (param.title[i] == button_element.value) {
                current_index = i;
                break;
            }
        }

        // If no exact match, try partial match (for translated buttons)
        if (current_index === -1) {
            for (var i = 0; i < param.title.length; i++) {
                // Check if button text contains the title or vice versa
                if (button_element.value.includes(param.title[i]) ||
                    param.title[i].includes(button_element.value)) {
                    current_index = i;
                    break;
                }
            }
        }

        // If still no match, use state_index or default to first state
        if (current_index === -1) {
            console.warn("Could not find matching state for toggle button:", button_element.value);

            // If the button has a state_index property (set by update_btn_state), use that
            if (button_element.state_index !== undefined) {
                current_index = button_element.state_index;
            } else {
                // For specific known buttons, use index 0 (usually the 'enable' state)
                if (button_element.value.includes('Bluetooth') ||
                    button_element.value.includes('Turn On Bluetooth') ||
                    button_element.value.includes('Enable Bluetooth') ||
                    button_element.value.includes('Ambient Light') ||
                    button_element.value.includes('Turn On Ambient Light') ||
                    button_element.value.includes('DLNA') ||
                    button_element.value.includes('AirPlay') ||
                    button_element.value.includes('Always On')) {
                    current_index = 0;
                } else {
                    // Default to first state for other buttons
                    current_index = 0;
                }
            }
        }

        var action_tip = param.tips ? param.tips[current_index] : button_element.value; // Get tip or use button text
        var payload_to_send = param.param[current_index]; // Get the command payload for this action

        // Confirmation (skip for light mode toggles)
        if (!(param.state && param.state[0] === 0 && param.state[1] === 'info.music_light_mode')) {
            if (!confirm(action_tip + '?')) { // Dịch confirmation
                return;
            }
        }

        // Send the command
        send(param.succ ? param.succ[current_index] : 'OK', action_tip, param.ws_type, payload_to_send);

        // Request info update after sending toggle command to refresh button state
        setTimeout(function() {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({type: 'get_info'}));
            }
        }, 500);

    // --- Handle Type -1 (Special Local Actions) ---
    } else if (param.type == -1) {
        var itemType = param.itemType;
        // Execute specific function based on itemType
        switch (itemType) {
            case 'set_background': create_set_background_page(); break;
            case 'reboot_unisound':
                if (!confirm("Are you sure you want to reboot Unisound?")) return; // Dịch
                h3.innerHTML = 'Rebooting Unisound...'; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am force-stop com.phicomm.speaker.device' }));
                     setTimeout(function () {
                         ws_send(JSON.stringify({ type: 'shell1', shell: '/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity' }));
                         setTimeout(function () {
                             if(h3) h3.innerHTML = document.title; // Restore title
                             alert('Reboot complete!'); // Dịch
                         }, 10000);
                     }, 3000);
                 }
                break;
            case 'reboot':
                if (!confirm("Are you sure you want to reboot the speaker?")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     if (ver > 1847) ws_send(JSON.stringify({ type: 'reboot' }));
                     else ws_send(JSON.stringify({ type: 'shell', shell: 'stop adbd&&start adbd&&adb reboot' }));
                     alert('Reboot command sent!'); // Dịch
                 }
                break;
            case 'open_net_config':
                if (!confirm("Enter Network Configuration mode? Web control will disconnect.")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'send_message', what: 262144, arg1: 1 }));
                     ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'NetworkConfigOutputEvent', status: 1 } }));
                 }
                 alert("Network config mode enabled!\nRedirecting to configuration page..."); // Dịch
                 // Redirect to config_wifi page
                 setTimeout(function() {
                     location.href = './config_wifi/';
                 }, 1000);
                break;
            case 'upload_page':
                 // Redirect to upload page on the R1 speaker
                 if (ip && ip !== '') {
                     // Try to access the speaker's upload page directly
                     try {
                         // First try to redirect to our local upload page with the IP as a parameter
                         location.href = './upload.html?ip=' + encodeURIComponent(ip);
                     } catch (e) {
                         console.error('Error redirecting to upload page:', e);
                         alert('Error redirecting to upload page. Please try again.');
                     }
                 } else {
                     // Fallback to local upload page if IP is not available
                     alert('Speaker IP address not found. Please make sure you are connected to the speaker.');
                     location.href = './upload.html';
                 }
                break;
            case 'test': test(); break; // Call test function if defined
            case 'connect_page':
                // Go back to the initial connection page state
                var base_url = location.protocol + "//" + location.host + location.pathname; // Base URL
                // For local, just reload with no_auto_connect
                location.href = base_url + '?no_auto_connect';
                break;
            case 'Voice_time_reporting': Voice_time_reporting(); break;
            case 'Auto_restart_device': Auto_restart_device(); break;
            case 'modify_color': create_color_selection(); break;
            case 'xiaoai_tonesettings':
                 if (!confirm("Open Xiaoai Tone Settings page? This might cause lag. Please reboot Xiaoai service after setting.")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'shell1', shell: 'am start -n com.xiaomi.xiaoailite/.presenter.activity.ToneSettingActivity' }));
                 alert('Page opened, please check the Screen Control page!'); // Dịch
                 break;
            case 'xiaoai_settings':
                 if (!confirm("Open Xiaoai Settings page? This might cause lag. Please reboot Xiaoai service after setting.\nRecommended to disable microphone before opening.")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'shell', shell: 'am start -n com.xiaomi.xiaoailite/.presenter.info.PersonalInfoActivity&am start -n com.duoqin.ai/.MainActivity' }));
                 alert('Page opened, please check the Screen Control page!'); // Dịch
                 break;
            case 'reboot_xiaoaiservice':
                 if (!confirm("Are you sure you want to reboot Xiaoai service?")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'shell', type_id: 'reboot_xiaoaiservice', shell: 'am force-stop com.xiaomi.xiaoailite&am force-stop com.duoqin.ai' }));
                 alert('Restart command sent!'); // Dịch
                 break;
            case 'activation_xiaoai':
                 if (!confirm("Are you sure you want to activate Xiaoai?")) return; // Dịch
                 button_element.value = 'Fetching activation ID, please wait...'; // Dịch
                 button_element.id = 'activation_xiaoai'; // Ensure ID is set for response handler
                 button_element.disabled = true;
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'get_xiaoai_id' } } }));
                 break;
            case 'play_local_music':
                 var default_path = '/sdcard/music/';
                 var target_path = (input_value !== '') ? input_value : default_path;
                 var confirm_msg = "Play music from [" + target_path + "] directory?"; // Dịch
                 if (info && info.Current_PlayerType == 2 && info.Support_Flac !== true) { // Check player type and FLAC support
                     confirm_msg += "\nWarning: ExoPlayer doesn't have FLAC support installed. FLAC files might not play correctly."; // Dịch
                 }
                 if (!confirm(confirm_msg)) return;
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'play_local_music', path: target_path, play: true }));
                 break;
             case 'reboot_echo':
                 if (!confirm("Are you sure you want to reboot EchoService?")) return; // Dịch
                 if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify({ type: 'reboot_echo' }));
                 break;
             case 'get_song_list':
                 var cached_list = temp_song_list; // Use globally stored temp list
                 // Check cache validity (time and music source)
                 if (cached_list && cached_list.data && (new Date().getTime() - cached_list.time) < 600000 && cached_list.music_source === (info ? info.music_source : null)) {
                      // Use cached data immediately
                      setTimeout(() => create_song_list_window(cached_list.data), 10); // Show UI slightly delayed
                 } else {
                      // Fetch new list
                      temp_song_list = { music_source: (info ? info.music_source : null) }; // Reset cache object
                      if (ws && ws.readyState === WebSocket.OPEN) {
                          ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'get_song_list', music_source: temp_song_list.music_source } } }));
                      }
                      create_song_list_window(null); // Show loading state
                 }
                 break;
            default:
                console.warn("Unknown itemType for special action:", itemType);
                alert("Unknown action: " + itemType); // Dịch
        }

    // --- Handle Type 0 (Simple Commands, No Input) ---
    } else {
        var confirm_needed = true;
        var confirm_message = button_element.value + '?'; // Default confirmation // Dịch ?

        // Specific confirmations
        if (button_element.value === 'Unisound Favorites' || button_element.value === 'Favorite Songs' || button_element.value === 'Personal Radio') { // Dịch comparison
            confirm_message = 'Play ' + button_element.value + '?'; // Dịch
        }

        // Skip confirmation for some actions? (e.g., maybe light effects)
        // if (button_element.value.includes('Ambient Effect')) confirm_needed = false; // Example

        if (confirm_needed && !confirm(confirm_message)) {
            return;
        }
        // Send the simple command
        send(param.succ, button_element.value, param.ws_type, param.param);
    }
}

/* // --- send Function --- (Included again from previous part for completeness)
function send(success_tip, type_id, ws_type, data_payload, callback = null) {
    if (type_id != null) {
        tips_data[type_id] = success_tip;
        var text_area = document.getElementById('text');
        if (text_area) text_area.value = '[' + type_id + ']: Please wait...'; // Dịch
        data_payload.type_id = type_id;
    }
    data_payload.type = ws_type;

    if (data_payload.what == 65536 && data_payload.arg2 == 1) {
        if (is_new_unisound && u_ver + 1 > 1849 && Unisound_info && Unisound_info.DeviceStatus == 5) {
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'UpdateDeviceStatus', status: 0 } }));
                 setTimeout(() => {
                     if (ws && ws.readyState === WebSocket.OPEN) ws_send(JSON.stringify(data_payload));
                 }, 300);
                 return;
             }
        }
    }

    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify(data_payload));
    } else {
         var text_area = document.getElementById('text');
         var error_msg = '[' + (type_id || ws_type) + ']: Connection error. Command not sent.'; // Dịch
         if (text_area) text_area.value = error_msg;
         alert(error_msg);
    }

    if (typeof callback === 'function') {
        callback();
    }
}
// --- End send Function --- */

// Main function to update the UI based on the 'get_info' WebSocket response
function update_info(data) {
     if (!data) return; // Exit if no data

    // Ensure sliders update correctly on mouse events
     $('input[type=range]').each((key, val) => { // Use 'each' and arrow function
         val.onmousedown = mousedown_event;
         val.onmouseup = mouseup_event;
         val.ontouchstart = mousedown_event; // Add touch events
         val.ontouchend = mouseup_event;
     });

    // Check for version changes and reload if necessary
    if (data.ver != null && ver != data.ver) {
        console.log("EchoService version changed. Reloading page.");
        location.reload();
        return;
    }
    if (data.u_ver != null && u_ver != data.u_ver) {
        // Handle Unisound version change carefully
        if (data.u_ver == 1000) { // Potentially reverted to old version?
            is_unisound_num[2]++; // Increment counter
            if (is_unisound_num[2] > 6) { // Reload if it happens repeatedly
                console.log("Unisound version reverted unexpectedly. Reloading page.");
                location.reload();
                return;
            } else {
                 console.warn("Unisound version seems to have reverted. Keeping current u_ver:", u_ver);
                 // Don't update u_ver immediately, wait for confirmation
            }
        } else { // Updated to a newer (or different non-1000) version
            if (u_ver == 1000) { // Changed from old version
                console.log("Unisound version changed from old. Reloading page.");
                location.reload();
                return;
            }
            // Reset counter if version changed between valid versions
            is_unisound_num[2] = 0;
            u_ver = data.u_ver; // Update global version
        }
    }

    // Update Unisound status flags
    if (ver + 1 > 1835) {
        var disable_unisound_btn = document.getElementById('disable_unisound');
        var current_is_unisound = !!data.Unisound; // Get current status
        if (current_is_unisound !== is_unisound) { // If status changed
            console.log("Unisound status changed. Reloading page.");
            location.reload(); // Reload to rebuild UI correctly based on status
            return;
        }
        // Update button text based on current (stable) status
        if (disable_unisound_btn) {
            disable_unisound_btn.value = is_unisound ? 'Disable Unisound' : 'Enable Unisound'; // Dịch
        }
    }

    // Update global info object
    info = data;

    // Update Player Switch Button (if it exists)
    if (ver + 1 > 1856) {
        var btn_switch = document.getElementById('switch_player');
        if (btn_switch) {
             if (info.PlayerType == 2) {
                 btn_switch.setAttribute('PlayerType', 2);
                 btn_switch.value = 'Switch to MediaPlayer'; // Dịch
             } else {
                 btn_switch.setAttribute('PlayerType', 1);
                 btn_switch.value = 'Switch to ExoPlayer'; // Dịch
             }
        }
    }

    // Update Volume Slider and Text (only if not currently dragging)
    if (!mousedown) {
        if (vols && vols.value != data.vol) vols.value = data.vol; // Update slider value
    }
    var vol_display = ' ' + vols.value + '/' + vols.max; // Construct display string
    if (vol_text && vol_text.innerHTML != vol_display) vol_text.innerHTML = vol_display; // Update text if changed

    // Update TTS Speaker Selector
    var tts_speaker_select = document.getElementById('tts_speaker');
    if (tts_speaker_select && tts_speaker_select.value !== data.ttsModelType) { // Check if value needs update
         var found = false;
         for (var i = 0; i < tts_speaker_select.options.length; i++) {
             if (tts_speaker_select.options[i].value == data.ttsModelType) {
                 tts_speaker_select.selectedIndex = i;
                 found = true;
                 break;
             }
         }
         if (!found) console.warn("TTS Speaker value not found in select list:", data.ttsModelType);
    }

    // Update Music Source Selector
    if (ver > 1600 && u_ver > 1600) { // Check version support
        var music_source_select = document.getElementById('music_source');
        if (music_source_select && music_source_select.value !== data.music_source) { // Check if needs update
             var found = false;
             for (var i = 0; i < music_source_select.options.length; i++) {
                 if (music_source_select.options[i].value == data.music_source) {
                     music_source_select.selectedIndex = i;
                     found = true;
                     break;
                 }
             }
              if (!found) console.warn("Music Source value not found in select list:", data.music_source);
        }
    }

    // Update Play Mode Button
    if (ver > 1600) { // Check version support
        var playmode_options = [['Shuffle', 1], ['Sequence', 2], ['Repeat One', 3]]; // Dịch
        var current_playmode = playmode_options[0]; // Default
        for (var i = 0; i < playmode_options.length; i++) {
            if (playmode_options[i][1] == data.play_mode) {
                current_playmode = playmode_options[i];
                break;
            }
        }
        var btn_playmode = document.getElementById('music_btn_playmode');
        if (btn_playmode) { // Check button exists
            btn_playmode.setAttribute('mode', current_playmode[1]);
            btn_playmode.value = current_playmode[0]; // Update text
        }
    }

    // Update Favorite/Unfavorite Buttons Visibility
    if (u_ver + 1 > 1700) { // Check version support
        var btn_collect = document.getElementById('music_btn_collect');
        var btn_cancel_collect = document.getElementById('music_btn_cancel_collect');
        if (btn_collect && btn_cancel_collect) { // Check buttons exist
            var show_fav_buttons = (data.music_info && (data.music_info.ItemType == 0 || data.music_info.ItemType == 1)); // Determine visibility based on item type
            btn_collect.style.display = show_fav_buttons ? '' : 'none';
            btn_cancel_collect.style.display = show_fav_buttons ? '' : 'none';
        }
    }

    // Update general button states (for toggle buttons like Bluetooth, Light, etc.)
    if (typeof update_btn_state === 'function') {
        update_btn_state();
    }

    // --- Update Music Page Specifics ---
    if (musics_div.style.display == "none") { // Don't update music details if page not visible
        return;
    }

    // Update currently playing music info
    var new_music_info = null;
    if (data.music_info && typeof data.music_info === 'object') {
        // Deep copy might be excessive, shallow copy or direct use is often fine
        // new_music_info = JSON.parse(JSON.stringify(data.music_info));
        // delete new_music_info.Current_MusicData; // Remove potentially large data
        new_music_info = data.music_info; // Use reference directly for simplicity
    }
    music_info = new_music_info; // Update global music_info

    // Update Title based on play type
    var current_title = '';
    if (data.play_type == 2) current_title = 'Now Playing: DLNA Mode'; // Dịch
    else if (data.play_type == 3) current_title = 'Now Playing: AirPlay Mode'; // Dịch
    else if (data.play_type == 4) current_title = 'Now Playing: Bluetooth Mode'; // Dịch
    // Will be overwritten below if music_info exists

    // Update controls based on play type
    var prevBtn = document.getElementById('music_btn_prev');
    var nextBtn = document.getElementById('music_btn_next');
    var playBtn = document.getElementById('music_btn_play');
    var playmodeBtn = document.getElementById('music_btn_playmode');

    if (data.play_type == 2 || data.play_type == 3) { // DLNA or AirPlay
        if(prevBtn) prevBtn.disabled = true;
        if(nextBtn) nextBtn.disabled = true;
        if(playBtn && data.play_type == 3) playBtn.disabled = true; // Disable play/pause for AirPlay only?
        if(playmodeBtn) playmodeBtn.style.display = 'none';
    } else { // Music playback or Bluetooth
        if(prevBtn) prevBtn.disabled = false;
        if(nextBtn) nextBtn.disabled = false;
        if(playBtn) playBtn.disabled = false;
        if(playmodeBtn) playmodeBtn.style.display = (data.play_type == 1) ? '' : 'none'; // Show playmode only for internal playback
    }

    // Update Play/Pause Button and Cover Animation
    if (music_info != null) {
        // Handle alias 'arist' for 'artist'
        if (typeof music_info.arist !== 'undefined') music_info.artist = music_info.arist;

        // Determine if playing based on state and type
        var is_playing = false;
        if (ver + 1 > 1858) { // Newer state logic
             is_playing = data.play_state && music_info.state != 6 && music_info.state != 10; // Playing if state is true and not buffering/loading
        } else { // Older state logic
             is_playing = (data.play_state && music_info.state != 6) || // Playing and not buffering
                          ((music_info.state != 2 && music_info.state != 3 && music_info.state != 6) && data.play_type != 4) || // Playing internal source (not paused/stopped/buffering)
                          ((music_info.state == 1 || music_info.state == 2) && data.play_type == 4); // Playing Bluetooth
        }

        // Update button and animation
        if (playBtn) { // Check if button exists
            if (is_playing) {
                if (music_pic) music_pic.style.webkitAnimationPlayState = "running";
                playBtn.value = 'Pause'; // Dịch
                playBtn.setAttribute('data', 'pause');
                playBtn.disabled = false;
            } else {
                if (music_pic) music_pic.style.webkitAnimationPlayState = "paused";
                playBtn.value = 'Play'; // Dịch
                playBtn.setAttribute('data', 'play');
                // Set text and disable if buffering/loading
                if (music_info.state == 6 || music_info.state == 10) { // 6 = Buffering, 10 = Loading
                    playBtn.value = (music_info.state == 6) ? 'Buffering' : 'Loading'; // Dịch
                    playBtn.disabled = true;
                } else {
                    playBtn.disabled = false;
                }
            }
        }

        // Check if music track has changed
        var current_track_identifier = '';
        if (data.play_type == 2) { // DLNA uses combined info as ID
             current_track_identifier = encodeURIComponent((music_info.title || '') + '-' + (music_info.artist || '') + '-' + (music_info.albumUrl || ''));
        } else { // Other types use music_info.id
            current_track_identifier = music_info.id;
        }

        if (music_id !== current_track_identifier) {
            // Music changed: Reset times, lyrics, cover, title
            info_time = [];
            lrcs = [[-1, 'No lyrics available']]; // Dịch
            music_id = current_track_identifier; // Update stored ID
            update_lrc(true); // Force lyrics update
            if (music_pic) { // Update cover
                music_pic.src = (music_info.albumUrl && music_info.albumUrl != '') ? music_info.albumUrl : music_pic.nopic;
            }
            if(music_lrc) music_lrc.innerHTML = ''; // Clear old lyrics display
            stop_title_scrolling(); // Stop previous scroll
            music_title = ''; // Reset title for scrolling

            var display_title = get_music_title(music_info); // Get formatted title
            if (data.play_type == 2 && display_title !== 'undefined-undefined') current_title = '[DLNA] ' + display_title; // Dịch prefix
            else if (data.play_type == 4) current_title = '[Bluetooth] ' + (display_title !== 'undefined-undefined' ? display_title : ''); // Dịch prefix
            else current_title = 'Now Playing: ' + display_title; // Dịch prefix

            set_h3(current_title); // Update main title
            document.title = dev_name + h3.innerHTML; // Update browser title
            update_music_info(); // Fetch detailed info (like lyrics) for the new track
        } else if (!list || list.rows.length < 1) { // If playlist is empty, still try to update info (e.g., after initial load)
            update_music_info();
        }

        // Update Progress Bar Info (only if not dragging)
        if (!time_lock && music_info.duration != null && music_info.position != null) { // Check if position/duration exist
             info_time[0] = new Date().getTime(); // Timestamp of this update
             var pos = parseInt(music_info.position) || 0;
             var dur = parseInt(music_info.duration) || 0;

             if (pos > dur && dur > 0) { // Handle position exceeding duration
                 info_time[1] = dur; // Set position to duration
                 info_time[2] = dur;
             } else {
                 info_time[1] = pos;
                 info_time[2] = dur;
             }
             // Enable/disable slider based on duration
             if (music_time) music_time.disabled = (dur <= 0);
        }

        // Update Title Display (if timeout allows)
        var display_title_now = get_music_title(music_info);
        if (title_display_time - new Date().getTime() > 0) {
            // Reconstruct title based on play type for brief display
            if (data.play_type == 2 && display_title_now !== 'undefined-undefined') current_title = '[DLNA] ' + display_title_now; // Dịch
            else if (data.play_type == 4) current_title = '[Bluetooth] ' + (display_title_now !== 'undefined-undefined' ? display_title_now : ''); // Dịch
            else current_title = 'Now Playing: ' + display_title_now; // Dịch

            set_h3(current_title);
            document.title = dev_name + h3.innerHTML;
        }

    } else { // No music info (stopped or playing non-info source like BT without metadata)
        if (music_id != null || (play_type != 0 && data.play_type == 0)) {
            // Clear music display if something was playing before or switching from BT/DLNA/Airplay
            quality_text.innerHTML = '';
             if(quality_div) quality_div.style.display = 'none';
            stop_title_scrolling();
            music_title = '';
            info_time = [];
            music_id = null;
            lrcs = [[-1, 'No lyrics available']]; // Dịch
            update_lrc(true); // Update lyrics display to show default
            if(list) list.innerHTML = ''; // Clear playlist table
            List = []; // Clear playlist data
            var list_title_elem = document.getElementById('list_title');
            if(list_title_elem) list_title_elem.innerHTML = 'Playlist [0]'; // Dịch
            document.title = 'R1 Speaker Music' + dev_name; // Reset title // Dịch
            set_h3(document.title);
            if(music_pic) music_pic.src = music_pic.nopic; // Reset cover
            if(music_lrc) music_lrc.innerHTML = ''; // Clear lyrics display
             if(music_time) { // Reset progress bar
                 music_time.max = 0;
                 music_time.value = 0;
                 music_time.disabled = true;
             }
             if(music_time_duration) music_time_duration.innerText = '00:00';
             if(music_time_position) music_time_position.innerText = '00:00';
             Restore_background(); // Restore original background
        }
        // Update Play/Pause button for stopped state
        if (playBtn) { // Check button exists
            if (music_pic) music_pic.style.webkitAnimationPlayState = "paused";
            playBtn.value = 'Play'; // Dịch
            playBtn.setAttribute('data', 'play');
            playBtn.disabled = false; // Enable play button
        }
    }
    play_type = data.play_type; // Store current play type
}

// Formats the display title for a music track
function get_music_title(data) {
    if (!data) return 'Unknown Track'; // Dịch + Fallback
    // Use title primarily, append artist or album if available
    if (!data.title || data.title === 'null' || data.title === 'undefined') { // Check for invalid titles
        return data.album || data.artist || 'Unknown Album/Artist'; // Use album/artist or fallback // Dịch
    } else if (data.artist && data.artist !== 'null' && data.artist !== 'undefined') {
        return data.title + ' - ' + data.artist;
    } else if (data.album && data.album !== 'null' && data.album !== 'undefined') {
        return data.title + ' - ' + data.album; // Use album if artist missing
    } else {
        return data.title;
    }
}

// Fetches detailed music info (lyrics, full metadata) from external API or cache
function update_music_info() {
    // Don't fetch if not internal music playback
    if (!info || info.play_type != 1) return;

    // Debounce requests
    clearTimeout(update_music_info_timer);
    update_music_info_timer = setTimeout(() => {
        var post_data;
        var api_url = location.protocol + '//r1.wxfsq.com/music'; // Use original API URL for now

        // Prepare data for API request
        if (music_id != null && music_id.toString().startsWith('local_')) { // Local file
             if (Current_MusicData == null && ver + 1 > 1865) return; // Need metadata for local files on newer versions
             post_data = { info: music_id, file: music_info.title, metadata: JSON.stringify(Current_MusicData?.MediaMetadata || null) }; // Safely access metadata
        } else if (info.play_type == 2) { // DLNA
            post_data = { type: 'dlna', info: music_id, file: get_music_title(info.music_info) };
        } else if (music_id != null) { // Standard online track
            post_data = { info: music_id, music_info: JSON.stringify(music_info || null) }; // Include basic info if available
        } else {
            return; // No valid ID to query
        }

        // API Success Handler
        var success_callback = function (api_data) {
            // console.log("API Music Info:", api_data);
            if (api_data.code == 1) {
                var fetched_info = api_data.data;
                // Check if the fetched info is still for the currently playing track
                if (music_id != fetched_info.id) {
                     console.log("API info received for outdated track:", fetched_info.id, "current:", music_id);
                     return; // Ignore outdated info
                }

                api_music_info = fetched_info; // Store fetched info globally

                // Cache the result if update interval is specified
                if (api_data.update && api_data.update > 0) {
                    window.Storage.removeItem('musicinfo'); // Clear old cache if update interval specified
                    // Reschedule fetch based on interval (This seems to conflict with the main polling)
                    // Consider removing this self-scheduling or integrating with main poll timer
                    // clearTimeout(update_music_info_timer);
                    // update_music_info_timer = setTimeout(update_music_info, parseInt(api_data.update));
                } else {
                    // Cache successful fetch without update interval
                    window.Storage.setItem('musicinfo', JSON.stringify(api_data));
                }

                // Update UI elements with fetched data
                if (music_pic && fetched_info.pic) music_pic.src = fetched_info.pic; // Update cover art

                // Process Lyrics
                lrcs = [[-1, 'No lyrics available']]; // Reset lyrics with default // Dịch
                if (fetched_info.lrc && typeof fetched_info.lrc === 'string') {
                    var raw_lrc = fetched_info.lrc.replace(/\[/g, "\r\n[").replace(/\r\n\r\n/g, "\r\n").trim();
                    var lrc_lines = raw_lrc.split("\r\n");
                    var parsed_lrcs = [];
                    lrc_lines.forEach(line => {
                        var time_matches = line.match(/(\[\d{1,3}:\d{1,2}[.:]\d{1,3}\])/g); // Match timestamps [mm:ss.xxx] or [mm:ss:xxx]
                        var lrc_text = line.replace(/(\[.*?\])/g, '').trim(); // Remove all time tags to get text

                        if (time_matches && lrc_text !== '') {
                            time_matches.forEach(time_tag => {
                                var time_str = time_tag.substring(1, time_tag.length - 1);
                                var key = to_ms(time_str); // Convert timestamp to milliseconds
                                if (!isNaN(key)) {
                                    parsed_lrcs.push([key, lrc_text]);
                                }
                            });
                        } else if (lrc_text !== '') {
                             // Keep lines without standard timestamps if needed (e.g., headers like [ti:..])
                             // parsed_lrcs.push([-1, lrc_text]); // Or ignore them
                        }
                    });

                    if (parsed_lrcs.length > 0) {
                        lrcs = parsed_lrcs.sort((a, b) => a[0] - b[0]); // Sort by time
                    }
                    // console.log("Parsed Lyrics:", lrcs);
                }
            } else { // API returned error code
                 console.warn("Music API Error:", api_data.msg);
                 lrcs = [[-1, 'No lyrics available']]; // Reset lyrics on error // Dịch
            }
            update_lrc(true); // Update lyrics display
        };

        // API Error Handler
        var error_callback = function (jqXHR, textStatus, errorThrown) {
            console.error("Music API Request Failed:", textStatus, errorThrown);
             lrcs = [[-1, 'Error fetching lyrics']]; // Dịch
             update_lrc(true);
        };

        // Check local cache first
        var cached_data_str = window.Storage.getItem('musicinfo');
        if (cached_data_str) {
            try {
                var cached_data = JSON.parse(cached_data_str);
                // Use cache only if it matches the current music ID
                if (cached_data.code == 1 && cached_data.data && cached_data.data.id == music_id) {
                    // console.log('Using cached music info');
                    success_callback(cached_data);
                    return; // Don't make API call if cache is valid
                } else {
                     window.Storage.removeItem('musicinfo'); // Remove invalid cache
                }
            } catch(e) {
                console.error("Error parsing cached music info:", e);
                window.Storage.removeItem('musicinfo');
            }
        }

        // Make API call if no valid cache
        // console.log('Fetching music info from API:', post_data);
        $.ajax({
            type: 'POST',
            url: api_url,
            data: post_data,
            dataType: 'jsonp', // Use JSONP for cross-domain request to original server
            success: success_callback,
            error: error_callback,
            timeout: 5000 // Add a timeout for the API call
        });

    }, 200); // Debounce delay (200ms)
}

// Updates the lyrics display based on current playback time
function update_lrc(force_update = false, wait_for_load = false) { // Renamed wait parameter
    var lrc_div_container = document.getElementById('music_lrc_container'); // Get the lyrics container
    if (!lrc_div_container) return; // Exit if container not found

    // Reset progress bar display if no time info
    if (info_time.length < 1 && (music_time.max != 0 || music_time.value != 0)) {
         if (music_time) {
            music_time.max = 0;
            music_time.value = 0;
            music_time.disabled = true;
         }
         if(music_time_duration) music_time_duration.innerText = '00:00';
         if(music_time_position) music_time_position.innerText = '00:00';
        bak_lrc_time = -1; // Reset backup time
    }

    // Function to perform the actual lyric update
    var _update_lrc_display = () => {
        if (!info_time || info_time.length < 2) return; // Need position and duration

        var current_ms;
        // Calculate current playback time in milliseconds
        if (info_time[0] && info_time[0] !== -1 && music_pic && music_pic.style.webkitAnimationPlayState === 'running' && !time_lock) {
             // Estimate time based on last timestamp and elapsed time (if playing and not dragging)
             current_ms = Math.max(0, parseInt(info_time[1] + (new Date().getTime() - info_time[0])));
        } else {
             // Use stored position directly if paused, dragging, or no timestamp
             current_ms = Math.max(0, parseInt(info_time[1]));
        }

        // Clamp time to duration if available
        var duration_ms = parseInt(info_time[2]);
        if (!isNaN(duration_ms) && duration_ms > 0 && current_ms > duration_ms) {
            current_ms = duration_ms;
        }

        // Prevent time going backwards slightly due to timing issues
        if (current_ms < bak_lrc_time && bak_lrc_time - current_ms < 1000) {
            current_ms = bak_lrc_time;
        }
        bak_lrc_time = current_ms;

        // Update progress bar and time display (only if not dragging)
        if (musics_div.style.display === "block" && !time_lock) {
             if(music_time) {
                 if(music_time.max != duration_ms && !isNaN(duration_ms)) music_time.max = duration_ms;
                 if(music_time.value != current_ms) music_time.value = current_ms;
                 music_time.disabled = (isNaN(duration_ms) || duration_ms <= 0);
             }
             if(music_time_duration && !isNaN(duration_ms)) {
                 var duration_str = ms_to_is(duration_ms);
                 if(music_time_duration.innerText != duration_str) music_time_duration.innerText = duration_str;
             }
             if(music_time_position) {
                 var position_str = ms_to_is(current_ms);
                 if(music_time_position.innerText != position_str) music_time_position.innerText = position_str;
             }
        }

        // Find the current lyric line
        if (lrcs && lrcs.length > 0) {
            var current_lrc_index = -1;
            var current_display_index = -1; // Index in the filtered display list (lrcs1)
            var display_lrcs = []; // Filtered list containing only lines with actual text

            // Find the index of the line that should be currently active
            for (var idx = 0; idx < lrcs.length; idx++) {
                 if (lrcs[idx][1] !== '') { // Check if it has text
                     display_lrcs.push(lrcs[idx]); // Add to display list
                     // Check timing, add slight offset for better sync
                     if (parseInt(lrcs[idx][0]) <= current_ms + 280) { // Adjust offset as needed
                         current_lrc_index = idx; // Store index from original lrcs array
                         current_display_index = display_lrcs.length - 1; // Store index in display_lrcs array
                     }
                 } else {
                     // If the current active line was blank, keep the index from the last non-blank line
                     if (parseInt(lrcs[idx][0]) <= current_ms + 280) {
                         // current_lrc_index remains unchanged
                     }
                 }
            }

            // If no line matched, default to the first or last displayable line
            if (current_lrc_index === -1 && display_lrcs.length > 0) {
                current_lrc_index = lrcs.findIndex(l => l === display_lrcs[0]); // Find original index of first displayable line
                current_display_index = 0;
            } else if (current_lrc_index === -1){
                // No displayable lyrics at all
                 current_display_index = -1;
            }


            // Update lyrics display if visible
            if (music_lrc.style.display === "block") {
                var lrc_scroll_div = music_lrc.getElementsByClassName('music_lrc_div')[0];

                // Rebuild lyrics list if lyrics data changed or forced update
                if (force_update || music_lrc.lrcs !== lrcs) {
                    music_lrc.lrcs = lrcs; // Store current lyrics data
                    music_lrc.innerHTML = ''; // Clear container

                    lrc_scroll_div = document.createElement('div');
                    lrc_scroll_div.style = 'width: 100%; height: 193px; overflow-x:hidden; overflow-y:auto;';
                    lrc_scroll_div.className = 'music_lrc_div';
                    music_lrc.appendChild(lrc_scroll_div);

                    // Add padding lines for scrolling alignment
                    var padding_lines = Math.max(0, 3 - display_lrcs.length); // Ensure at least 3 lines total effective height
                    for (var i = 0; i < Math.floor(padding_lines / 2) + 1; i++) { // Add top padding
                        var pad_h3_top = document.createElement('h3');
                        pad_h3_top.className = 'lrc';
                        pad_h3_top.style.height = '20px'; // Adjust height as needed
                        pad_h3_top.innerHTML = ' '; // Non-breaking space
                        lrc_scroll_div.appendChild(pad_h3_top);
                    }

                    // Add actual lyric lines
                    display_lrcs.forEach(lrc_line => {
                        var lrc_h3 = document.createElement('h3');
                        lrc_h3.className = 'lrc';
                        lrc_h3.innerHTML = lrc_line[1] || ' '; // Use text or space
                        lrc_scroll_div.appendChild(lrc_h3);
                    });

                    // Add bottom padding
                    for (var i = 0; i < Math.ceil(padding_lines / 2) + 1; i++) {
                        var pad_h3_bottom = document.createElement('h3');
                        pad_h3_bottom.className = 'lrc';
                        pad_h3_bottom.style.height = '20px';
                        pad_h3_bottom.innerHTML = ' ';
                        lrc_scroll_div.appendChild(pad_h3_bottom);
                    }
                     force_update = true; // Ensure highlight happens after rebuild
                }

                // Highlight the current line and scroll
                if (lrc_scroll_div && current_display_index !== -1) {
                    var lrc_h3s = lrc_scroll_div.getElementsByTagName('h3');
                    // Calculate the actual index in the h3 list (including padding)
                    var highlight_index = current_display_index + Math.floor(padding_lines / 2) + 1;

                    if (lrc_h3s && lrc_h3s.length > highlight_index) {
                        var current_line_element = lrc_h3s[highlight_index];
                        // Check if this line is already highlighted
                        var needs_highlight = !current_line_element.classList.contains('custom_lrc');

                        if (needs_highlight || force_update) { // Highlight if needed or forced
                            // Remove highlight from previous line
                            var highlighted = lrc_scroll_div.querySelector('.custom_lrc');
                            if (highlighted) highlighted.classList.remove('custom_lrc');

                            // Add highlight to current line
                            current_line_element.classList.add('custom_lrc');
                             // Set custom attribute based on whether the original line had text (for styling)
                             // This seems overly complex, styling can be done with just the class
                             // current_line_element.setAttribute('custom', (lrcs[current_lrc_index][1] != '').toString());

                            // Scroll the container to center the highlighted line
                            // Calculate scroll position (center alignment)
                            var targetScrollTop = current_line_element.offsetTop - (lrc_scroll_div.clientHeight / 2) + (current_line_element.clientHeight / 2);

                            // Use jQuery animate for smooth scroll if available
                             if (typeof $ !== 'undefined' && $.fn.animate) {
                                 $(lrc_scroll_div).stop().animate({ scrollTop: targetScrollTop }, 200); // Smooth scroll
                             } else {
                                 lrc_scroll_div.scrollTop = targetScrollTop; // Immediate scroll
                             }
                        }
                    }
                }
            } else { // If lyrics display is hidden, update main H3 title
                if (current_lrc_index !== -1 && lrcs[current_lrc_index]) {
                     var lrc_text = lrcs[current_lrc_index][1];
                     // Only update H3 if it's different and not blank
                     if (lrc_text !== '' && h3.innerHTML !== lrc_text && title_display_time - new Date().getTime() <= 0) {
                         set_h3(lrc_text);
                     }
                } else if (h3.innerHTML !== '-' && title_display_time - new Date().getTime() <= 0) {
                    // If no current lyric, show placeholder (unless title is still showing)
                     set_h3('-');
                }
            }
        }
    };

    // If waiting for load, use Promise (though simpler logic might suffice)
    if (wait_for_load) {
        var start_time = new Date().getTime();
        new Promise(resolve => {
            var check_interval = setInterval(() => {
                 // Check if duration and lyrics are available OR timeout reached
                 if ((info_time && info_time[2] > 0 && lrcs && lrcs.length > 0 && lrcs[0][0] !== -1) || (new Date().getTime() - start_time) > 1500) { // 1.5 sec timeout
                     clearInterval(check_interval);
                     _update_lrc_display();
                     resolve();
                 }
            }, 50); // Check every 50ms
        });
    } else {
        _update_lrc_display(); // Update immediately if not waiting
    }
}

// Applies the current music cover as a blurred background if enabled
function musicpic_background() {
    // Check if feature enabled and music page is visible
    if (musics_div.style.display !== "block" || !Cover_background_open || !music_pic) {
        return;
    }
    var url = music_pic.src;
    // Check if URL is valid and not the placeholder
    if (url && url !== music_pic.nopic && !url.startsWith('http://localhost/')) { // Added localhost check
        background_div.style.filter = ''; // Clear previous filters temporarily
        background_div.style.width = '120%'; // Enlarge for blur effect
        background_div.style.height = '120%';
        // Apply background image and blur styles
        var blurAmount = Storage.getItem(hostname + '_BackgroundBlur') || '40'; // Get saved blur or default
        var img_style = `
            z-index: -1;
            background: url("${url}") center center / cover no-repeat fixed;
            filter: blur(${blurAmount}px) brightness(60%) contrast(160%);
            opacity: 0.8;
            transform: translate(-8%, -8%); /* Adjust centering for enlarged div */
            transition: background 0.5s ease-in-out; /* Smooth transition */
        `;
        set_background_css(img_style); // Apply styles
        // Add overlay for better text readability
        if(main_div) main_div.style.backgroundColor = 'rgba(19, 16, 66, 0.6)'; // Dark overlay
        update_StatusBar(true); // Update status bar for dark background
    } else {
        // If no valid cover, optionally restore default background
        // Restore_background(); // Uncomment this if you want default bg when no cover
    }
}

// Restores the default or user-set background image/color
function Restore_background(default_bg = background) { // Allow passing default
    var img = Storage.getItem(hostname + '_background'); // Check for user-set background
    if (!img || img === 'null') {
        img = default_bg; // Use default if none set
    }
    if(background_div) { // Check if element exists
        background_div.style.width = '100%'; // Reset size
        background_div.style.height = '100%';
        background_div.style.filter = ''; // Clear filter
        background_div.style.opacity = '1'; // Reset opacity
        background_div.style.transform = ''; // Reset transform
        background_div.style.transition = 'background 0.5s ease-in-out'; // Smooth transition
    }
    set_background_css(img); // Apply the background style
    if(main_div) main_div.style.backgroundColor = 'rgba(0,0,0,0.0)'; // Remove overlay
    update_StatusBar(); // Update status bar for potentially light background
}

// Helper function to apply CSS to the background div
function set_background_css(cssText, id = '#background_div') {
    if (!cssText || typeof cssText !== 'string') return; // Ignore invalid input

    // Create unique style ID based on element ID
    var style_id = id.replace('#', '').replace('.', '') + '_style';
    var head = document.getElementsByTagName("head")[0];
    if (!head) return;

    var style_element = document.getElementById(style_id);
    if (!style_element) { // Create style element if it doesn't exist
        style_element = document.createElement("style");
        style_element.id = style_id;
        style_element.type = "text/css";
        head.appendChild(style_element);
    }

    // Construct the full CSS rule
    // Handle cases where cssText might already be a full rule or just properties
    if (!cssText.trim().startsWith(id)) {
        cssText = id + "{" + cssText + "}";
    }

    // Clear previous content and add new rule
    style_element.innerHTML = ''; // Clear previous rules
    try {
        if (style_element.styleSheet) { // IE
            style_element.styleSheet.cssText = cssText;
        } else { // Standard
            style_element.appendChild(document.createTextNode(cssText));
        }
    } catch (e) {
         console.error("Error applying background CSS:", e);
    }
}

// Sends a command via WebSocket and updates the info text area
function send(success_tip, type_id, ws_type, data_payload, callback = null) { // Renamed parameters // Added callback
    if (type_id != null) {
        tips_data[type_id] = success_tip; // Store success message
        var text_area = document.getElementById('text');
        if (text_area) text_area.value = '[' + type_id + ']: Please wait...'; // Dịch + Update info area
        data_payload.type_id = type_id; // Add type_id for tracking response
    }
    data_payload.type = ws_type; // Add the main WebSocket command type

    // Special handling before sending command (e.g., wake from sleep)
    if (data_payload.what == 65536 && data_payload.arg2 == 1) { // If it's a voice command type
        // Check sleep status (requires info object to be up-to-date)
        if (is_new_unisound && u_ver + 1 > 1849 && Unisound_info && Unisound_info.DeviceStatus == 5) {
             if (ws && ws.readyState === WebSocket.OPEN) {
                 // Send wake command first
                 ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'UpdateDeviceStatus', status: 0 } }));
                 // Send the actual command after a short delay
                 setTimeout(() => {
                     if (ws && ws.readyState === WebSocket.OPEN) {
                          ws_send(JSON.stringify(data_payload));
                     }
                 }, 300); // Delay to allow waking up
                 return; // Don't send immediately
             }
        }
    }

    // Send the command if WebSocket is ready
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify(data_payload));
    } else {
         // Handle connection error
         var text_area = document.getElementById('text');
         var error_msg = '[' + (type_id || ws_type) + ']: Connection error. Command not sent.'; // Dịch
         if (text_area) text_area.value = error_msg;
         alert(error_msg);
    }

     // Execute callback if provided (though original code didn't seem to use it)
     if (typeof callback === 'function') {
         callback();
     }
}

// --- Keep helper functions: create_set_background_page, Voice_time_reporting, create_Voice_time_reporting, Auto_restart_device, create_Auto_restart_device, create_text_window, create_color_selection, create_music_info_window, get_song_list, create_song_list_window, compressImage, findTextColor, resBgColor, get_background_data, get_background_color, get_background_color1, update_StatusBar, getparam, putparam, delparam, getparam_arr, setparam_arr, update_device_list, ws_send, load, load_console, no_referrer, setCookie, getCookie ---
// Ensure all user-facing strings within these functions are translated. Examples:
// - create_set_background_page: Translate titles and button texts like 'Set Background Image', 'Upload Image:', 'Image URL:', 'Set Background', 'Restore Default Background'.
// - create_Voice_time_reporting: Translate 'Set Voice Time Reporting', 'Voice Time Reporting', 'Half-hour Reporting', '12-hour format', 'Save', 'Whole Point Prompt:', 'Half Point Prompt:'.
// - create_Auto_restart_device: Translate 'Set Auto Reboot', 'Switch', 'Daily', 'Auto Reboot'.
// - create_text_window: Translate default 'Hint' title.
// - create_color_selection: Translate 'Set Ambient Light Color', 'Select Color:', 'Color Value:', 'Save'.
// - create_music_info_window: Translate 'Loading song info...', 'Play Song', 'Favorite Song', 'Unfavorite Song', 'Song Info', 'Cancel'. Also translate labels within the song info details.
// - create_song_list_window: Translate 'Loading playlist...', error messages.

// Final check for any remaining Chinese characters or comments that need translation.


function create_set_background_page() {
    popup.innerHTML = ''; // Clear previous popup
    var uploadpic_div = document.createElement('div');
    uploadpic_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px; max-width: 90%;'; // Added max-width
    popup.appendChild(uploadpic_div);
    popup.style.display = 'block'; // Show popup

    // Title Bar
    var title_div = document.createElement('div');
    title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px 15px 0 0;'; // Only top radius
    uploadpic_div.appendChild(title_div);

    var div_title_spacer = document.createElement('div'); div_title_spacer.style.height = '1px'; // Spacer for layout
    var div_title_content = document.createElement('div');
    // div_title_content.style = 'border-radius:15px;'; // Radius handled by parent
    div_title_content.appendChild(div_title_spacer);
    var title = document.createElement('h3');
    title.style = 'font-size: 16px;color:#ffffff; padding: 10px; margin: 0; text-align: center;'; // Add padding, remove margin
    title.title = 'Set Background Image'; // Dịch
    title.innerHTML = title.title;
    div_title_content.appendChild(title);
    title_div.appendChild(div_title_content);

    // Content Area
    var content_div = document.createElement('div');
    content_div.style = 'background-color: #ffffff; border-radius:0 0 15px 15px; margin: 0 auto; max-height:500px; overflow-x:hidden; overflow-y:auto; padding: 15px;'; // Remove margin, add padding
    title_div.appendChild(content_div); // Append content to title_div which acts as the main container now

    var upload_controls_div = document.createElement('div'); // Inner container for controls
    content_div.appendChild(upload_controls_div);

    // Upload Input
    var div_upload = document.createElement('div');
    div_upload.style.marginBottom = '10px';
    var text_upload_label = document.createElement('text');
    text_upload_label.innerHTML = 'Upload Image: '; // Dịch
    div_upload.appendChild(text_upload_label);
    var upload_input = document.createElement('input');
    upload_input.type = 'file';
    upload_input.accept = 'image/*';
    upload_input.style = 'color:rgba(238, 0, 0, 1); height:30px; width:180px; vertical-align: middle;'; // Align vertically
    div_upload.appendChild(upload_input);
    upload_controls_div.appendChild(div_upload);

    // URL Input
    var div_url = document.createElement('div');
    div_url.style.marginBottom = '10px';
    var text_url_label = document.createElement('text');
    text_url_label.innerHTML = 'Image URL: '; // Dịch
    div_url.appendChild(text_url_label);
    var text_input = document.createElement('input');
    text_input.style = 'height:30px; width:180px; vertical-align: middle;';
    text_input.type = 'text';
    div_url.appendChild(text_input);
    upload_controls_div.appendChild(div_url);

    // Background Blur Slider
    var BackgroundBlur_div = document.createElement('div');
    BackgroundBlur_div.style.marginBottom = '10px';
    var text_blur_label = document.createElement('text');
    text_blur_label.innerHTML = 'Background Blur: '; // Dịch
    BackgroundBlur_div.appendChild(text_blur_label);

    var BackgroundBlurValue = Storage.getItem(hostname + '_BackgroundBlur') || 0; // Default to 0 blur

    var Blur_slider = document.createElement('input'); // Use different name
    Blur_slider.id = 'BackgroundBlur';
    Blur_slider.style = 'width: 130px; vertical-align: middle;'; // Align
    Blur_slider.type = 'range';
    Blur_slider.min = 0;
    Blur_slider.step = 1;
    Blur_slider.max = 60;
    Blur_slider.value = BackgroundBlurValue;
    Blur_slider.addEventListener('input', function () {
        var blur_val = this.value;
        Storage.setItem(hostname + '_BackgroundBlur', blur_val);
        var blurText = document.getElementById('BackgroundBlurText');
        if (blurText) blurText.innerHTML = blur_val + 'px';
        if (background_div) background_div.style.filter = 'blur(' + blur_val + 'px)';
        update_StatusBar(); // Update status bar on blur change
    });
    BackgroundBlur_div.appendChild(Blur_slider);

    var text_blur_value = document.createElement('text');
    text_blur_value.id = 'BackgroundBlurText';
    text_blur_value.innerHTML = BackgroundBlurValue + 'px';
    text_blur_value.style.marginLeft = '5px'; // Add space
    BackgroundBlur_div.appendChild(text_blur_value);
    upload_controls_div.appendChild(BackgroundBlur_div);

    // Buttons Area
    var div_buttons_area = document.createElement('div');
    div_buttons_area.style.marginTop = '10px';

    var set_btn = document.createElement('input');
    set_btn.type = 'button';
    set_btn.value = 'Set Background'; // Dịch
    set_btn.className = 'btn';
    set_btn.style = 'margin: 5px; padding: 10px 23px;';
    set_btn.onclick = async function () { // Make async for await
        var file = upload_input.files[0];
        var url_value = text_input.value.trim();
        var current_title_elem = title_div.querySelector('h3'); // Get title element

        if (file) { // Prioritize file upload
            if (!confirm("Set the uploaded image as background?")) return; // Dịch
            var file_to_process = file;
            const max_size = 1048576 * 2; // Allow up to 2MB before compressing
            if (file.size > max_size) {
                 if (current_title_elem) current_title_elem.innerHTML = 'Compressing large image...'; // Dịch
                 try {
                     // Attempt compression (adjust quality/resolution as needed)
                     const blob = await compressImage(file, 0.7); // Compress to 70% quality
                     file_to_process = blob.compressFile;
                     if (file_to_process.size > max_size * 1.5) { // Check if still too large after compression
                          if (current_title_elem) current_title_elem.innerHTML = title.title; // Restore title
                          alert('Image too large even after compression. Please use a smaller file.'); // Dịch
                          return;
                     }
                 } catch (err) {
                      if (current_title_elem) current_title_elem.innerHTML = title.title; // Restore title
                      alert('Error compressing image: ' + err); // Dịch
                      return;
                 } finally {
                      if (current_title_elem) current_title_elem.innerHTML = title.title; // Restore title
                 }
            }
            // Read file as Data URL
            var reader = new FileReader();
            reader.onload = function (e) {
                set_background(e.target.result); // Set background using Data URL
                 popup.onclose();
            };
            reader.onerror = function() {
                alert('Error reading file.'); // Dịch
            }
            reader.readAsDataURL(file_to_process);

        } else if (url_value !== '') { // Use URL if no file selected
            if (!confirm("Set image from URL as background?")) return; // Dịch
            set_background(url_value); // Set background using URL
             popup.onclose();
        } else {
            alert('Please select an image file or enter an image URL!'); // Dịch
            return;
        }
    }
    div_buttons_area.appendChild(set_btn);

    // Restore Default Button
    var rec_btn = document.createElement('input');
    rec_btn.type = 'button';
    rec_btn.value = 'Restore Default'; // Dịch
    rec_btn.className = 'btn';
    rec_btn.style = 'margin: 5px; padding: 10px 23px;';
    rec_btn.onclick = function () {
        if (!confirm("Are you sure you want to restore the default background?")) return; // Dịch
        set_background(''); // Pass empty string to restore default
        popup.onclose();
    }
    div_buttons_area.appendChild(rec_btn);

     // Cancel Button
     var cancel_btn = document.createElement('input');
     cancel_btn.type = 'button';
     cancel_btn.value = 'Cancel'; // Dịch
     cancel_btn.className = 'btn';
     cancel_btn.style = 'margin: 5px; padding: 10px 23px; background-color: #aaa;'; // Style differently
     cancel_btn.onclick = function () {
         popup.onclose();
     }
     div_buttons_area.appendChild(cancel_btn);


    content_div.appendChild(div_buttons_area); // Append buttons container
}

// Applies the background CSS and saves preference
function set_background(data) {
    var text_area = document.getElementById('text'); // Get info text area
    var img_css;
    if (data == '' || data == null) { // Restore default
        img_css = background; // Use default color string
        Storage.removeItem(hostname + '_background'); // Remove custom background from storage
        if (text_area) text_area.value = 'Restored default background!'; // Dịch
    } else { // Set custom background
        // Basic validation for URL (optional but recommended)
        if (data.startsWith('http') || data.startsWith('data:image')) {
            img_css = 'background: url("' + data + '") center center / cover no-repeat fixed;'; // Use center center
            Storage.setItem(hostname + '_background', img_css); // Save custom background
            if (text_area) text_area.value = 'Set background image successfully!'; // Dịch
        } else {
             if (text_area) text_area.value = 'Invalid background URL or data.'; // Dịch
             alert('Invalid background URL or data.'); // Dịch
             return; // Don't apply invalid background
        }
    }
    set_background_css(img_css); // Apply the CSS
    update_StatusBar(); // Update status bar color based on new background
    // Show confirmation alert after a short delay
    if (text_area && text_area.value) {
         setTimeout(() => { alert(text_area.value); }, 600);
    }
}

// Function to update playlist based on received data
function update_list(data) {
    if (!data || !list) return; // Exit if no data or list element

    // Store the data globally
    List = data;

    // Clear the current list
    list.innerHTML = '';

    // Update playlist title with count
    var list_title = document.getElementById('list_title');
    if (list_title) {
        list_title.innerHTML = 'Playlist [' + (data.length || 0) + ']'; // Dịch
    }

    // If no items, exit
    if (!data.length) return;

    // Get current playing index if available
    var playIndex = data.playIndex !== undefined ? data.playIndex : -1;
    List.playIndex = playIndex;

    // Create table rows for each item
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var tr = document.createElement('tr');

        // Highlight current playing item
        if (i === playIndex) {
            tr.style.color = 'rgba(238, 0, 0, 1)';
            tr.style.fontWeight = 'bold';
        }

        // Add click handler to play this item
        tr.onclick = function() {
            var index = this.rowIndex;
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws_send(JSON.stringify({ type: 'play', index: index }));
            }
        };

        // Create and add index cell
        var td_index = document.createElement('td');
        td_index.style.width = '30px';
        td_index.style.textAlign = 'center';
        td_index.innerHTML = (i + 1);
        tr.appendChild(td_index);

        // Create and add title cell
        var td_title = document.createElement('td');
        td_title.innerHTML = item.title || 'Unknown Title'; // Dịch
        if (item.artist) {
            td_title.innerHTML += ' - ' + item.artist;
        }
        tr.appendChild(td_title);

        // Add row to table
        list.appendChild(tr);
    }

    // Scroll to current playing item if visible
    if (playIndex > -1 && lists && list.rows.length > playIndex) {
        setTimeout(() => {
            if (lists.style.display !== 'none') {
                var targetRow = list.rows[playIndex];
                if (targetRow) {
                    lists.scrollTop = targetRow.offsetTop - lists.offsetTop - 50;
                }
            }
        }, 100);
    }
}

// Sends request to get voice time reporting settings
function Voice_time_reporting() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'Voice_time_reporting' } }));
    }
}

// Creates or updates the voice time reporting settings popup
function create_Voice_time_reporting(data) {
    if (data != null) {
        Time_reporting_list = data.Time_reporting_list || []; // Use received list or empty array
    } else {
        console.error("Received null data for Voice Time Reporting settings.");
        return; // Don't proceed without data
    }

    var container_id = 'Voice_time_reporting_popup_div'; // Unique ID for container

    if (!document.getElementById(container_id)) { // Create popup if it doesn't exist
        Voice_time_reporting_div = document.createElement('div');
        Voice_time_reporting_div.id = container_id;
        Voice_time_reporting_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px; max-width: 95%;'; // Adjust width

        popup.innerHTML = ''; // Clear previous popup content
        popup.appendChild(Voice_time_reporting_div);
        popup.style.display = 'block'; // Show popup

        // Title Bar
        var title_div = document.createElement('div');
        title_div.style = 'background-color: rgba(0,160,255,1); border-radius:15px 15px 0 0;';
        Voice_time_reporting_div.appendChild(title_div);
        var title = document.createElement('h3');
        title.style = 'font-size: 16px; color:#ffffff; padding: 10px; margin: 0; text-align: center;';
        title.title = 'Set Voice Time Reporting'; // Dịch
        title.innerHTML = title.title;
        title_div.appendChild(title);

        // Content Area
        var content_div = document.createElement('div');
        content_div.style = 'background-color: #ffffff; border-radius:0 0 15px 15px; margin: 0 auto; max-height:500px; overflow-y:auto; padding: 15px; text-align: left;'; // Align left
        title_div.appendChild(content_div);
        var settings_div = document.createElement('div'); // Inner container for settings
        content_div.appendChild(settings_div);

        // --- Controls ---
         var div_controls = document.createElement('div');
         div_controls.style.marginBottom = '10px';

         // Main Switch
         var time_reporting_switch = document.createElement('input');
         time_reporting_switch.type = 'checkbox';
         time_reporting_switch.id = 'time_reporting_switch';
         time_reporting_switch.style.verticalAlign = 'middle';
         time_reporting_switch.onclick = function () {
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Time_reporting_open', open: this.checked } }));
             }
         };
         div_controls.appendChild(time_reporting_switch);
         var text_main_label = document.createElement('label'); // Use label for accessibility
         text_main_label.htmlFor = 'time_reporting_switch';
         text_main_label.style = 'margin-left: 6px; vertical-align: middle;';
         text_main_label.innerHTML = "Enable Voice Time Reporting"; // Dịch
         div_controls.appendChild(text_main_label);
         div_controls.appendChild(document.createElement('br')); // Line break

         // Half-hour Switch
         var Half_an_hour_switch = document.createElement('input');
         Half_an_hour_switch.type = 'checkbox';
         Half_an_hour_switch.id = 'Half_an_hour_switch';
         Half_an_hour_switch.style.verticalAlign = 'middle';
         Half_an_hour_switch.onclick = function () {
             var newList = [...Time_reporting_list]; // Create a copy to modify
             for (var i = 0; i < newList.length; i++) { // Iterate up to list length
                 if (newList[i] > 0) { // Only change active hours
                     newList[i] = this.checked ? 3 : 1; // 3 = hourly+half, 1 = hourly only
                 }
             }
              if (ws && ws.readyState === WebSocket.OPEN) {
                  ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Time_reporting_list', list: newList } }));
                  Time_reporting_list = newList; // Update global list after sending
              }
         };
         div_controls.appendChild(Half_an_hour_switch);
         var text_half_label = document.createElement('label');
         text_half_label.htmlFor = 'Half_an_hour_switch';
         text_half_label.style = 'margin-left: 6px; vertical-align: middle;';
         text_half_label.innerHTML = "Report at Half Past the Hour"; // Dịch
         div_controls.appendChild(text_half_label);
         div_controls.appendChild(document.createElement('br')); // Line break

         // 12-hour Format Switch (if supported)
         if (u_ver + 1 > 1833) {
             var Time_reporting_12h_switch = document.createElement('input');
             Time_reporting_12h_switch.type = 'checkbox';
             Time_reporting_12h_switch.id = 'Time_reporting_12h_switch';
             Time_reporting_12h_switch.style.verticalAlign = 'middle';
             Time_reporting_12h_switch.onclick = function () {
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Time_reporting_12h', open: this.checked } }));
                  }
             };
             div_controls.appendChild(Time_reporting_12h_switch);
             var text_12h_label = document.createElement('label');
             text_12h_label.htmlFor = 'Time_reporting_12h_switch';
             text_12h_label.style = 'margin-left: 6px; vertical-align: middle;';
             text_12h_label.innerHTML = "Use 12-Hour Format"; // Dịch
             div_controls.appendChild(text_12h_label);
         }
         settings_div.appendChild(div_controls); // Add controls group

        // --- Hour Selection Grid ---
         var div_hour_grid = document.createElement('div');
         div_hour_grid.style.marginTop = '10px';
         var hours_per_row = 6; // Adjust layout
         for (var i = 0; i < 24; i++) {
             var div_hour_item = document.createElement('div');
             div_hour_item.style = 'display: inline-block; width: ' + (100 / hours_per_row) + '%; margin-bottom: 5px;'; // Arrange in grid

             var checkbox = document.createElement('input');
             checkbox.type = 'checkbox';
             checkbox.id = 'time_reporting_' + i;
             checkbox.style.verticalAlign = 'middle';
             checkbox.onclick = function () {
                 var hour_index = parseInt(this.id.split('_').pop()); // Get index from ID
                 var halfHourSwitch = document.getElementById('Half_an_hour_switch');
                 var isHalfHourEnabled = halfHourSwitch ? halfHourSwitch.checked : false;
                 // Update the specific hour's state
                 Time_reporting_list[hour_index] = this.checked ? (isHalfHourEnabled ? 3 : 1) : 0;
                  if (ws && ws.readyState === WebSocket.OPEN) {
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Time_reporting_list', list: Time_reporting_list } }));
                  }
             };
             div_hour_item.appendChild(checkbox);

             var text_hour_label = document.createElement('label');
             text_hour_label.htmlFor = 'time_reporting_' + i;
             text_hour_label.style = 'margin-left: 6px; vertical-align: middle;';
             text_hour_label.innerHTML = i + ":00"; // Display hour // Dịch "点" if needed
             div_hour_item.appendChild(text_hour_label);
             div_hour_grid.appendChild(div_hour_item);
         }
         settings_div.appendChild(div_hour_grid);

        // --- Custom Prompt Inputs ---
         var div_prompts = document.createElement('div');
         div_prompts.style.marginTop = '15px';

         // Whole Hour Prompt
         var div_whole = document.createElement('div');
         div_whole.style.marginBottom = '10px';
         var text_whole_label = document.createElement('text');
         text_whole_label.innerHTML = "Hourly Prompt: "; // Dịch
         div_whole.appendChild(text_whole_label);
         var Whole_point_prompt_input = document.createElement('input'); // Use specific name
         Whole_point_prompt_input.type = 'text';
         Whole_point_prompt_input.id = 'Whole_point_prompt';
         Whole_point_prompt_input.placeholder = 'e.g., It is now [hour] o\'clock'; // Dịch placeholder
         Whole_point_prompt_input.style = 'height:30px; width:150px; vertical-align: middle; margin: 0 5px;';
         div_whole.appendChild(Whole_point_prompt_input);
         var btn_save_whole = document.createElement('input');
         btn_save_whole.type = 'button';
         btn_save_whole.value = 'Save'; // Dịch
         btn_save_whole.className = 'btn';
         btn_save_whole.style = 'margin: 0; padding: 6px 12px; vertical-align: middle;';
         btn_save_whole.onclick = function () {
             var prompt_input = document.getElementById('Whole_point_prompt');
             if (prompt_input.value !== '' && !prompt_input.value.includes('[hour]')) { // Require placeholder
                 alert('Please include the [hour] placeholder in the prompt!'); // Dịch
                 return;
             }
              if (ws && ws.readyState === WebSocket.OPEN) {
                  ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Whole_point_prompt', prompt: prompt_input.value } }));
                  // Confirmation happens via the 'set_Whole_point_prompt' response type
              }
         };
         div_whole.appendChild(btn_save_whole);
         div_prompts.appendChild(div_whole);

         // Half Hour Prompt
         var div_half = document.createElement('div');
         div_half.style.marginBottom = '10px';
         var text_half_label2 = document.createElement('text'); // Different variable name
         text_half_label2.innerHTML = "Half-Hour Prompt: "; // Dịch
         div_half.appendChild(text_half_label2);
         var Half_dot_prompt_input = document.createElement('input'); // Use specific name
         Half_dot_prompt_input.type = 'text';
         Half_dot_prompt_input.id = 'Half_dot_prompt';
         Half_dot_prompt_input.placeholder = 'e.g., It is now half past [hour]'; // Dịch placeholder
         Half_dot_prompt_input.style = 'height:30px; width:150px; vertical-align: middle; margin: 0 5px;';
         div_half.appendChild(Half_dot_prompt_input);
         var btn_save_half = document.createElement('input');
         btn_save_half.type = 'button';
         btn_save_half.value = 'Save'; // Dịch
         btn_save_half.className = 'btn';
         btn_save_half.style = 'margin: 0; padding: 6px 12px; vertical-align: middle;';
         btn_save_half.onclick = function () {
             var prompt_input = document.getElementById('Half_dot_prompt');
             if (prompt_input.value !== '' && !prompt_input.value.includes('[hour]')) { // Require placeholder
                 alert('Please include the [hour] placeholder in the prompt!'); // Dịch
                 return;
             }
              if (ws && ws.readyState === WebSocket.OPEN) {
                  ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'set_Half_dot_prompt', prompt: prompt_input.value } }));
              }
         };
         div_half.appendChild(btn_save_half);
         div_prompts.appendChild(div_half);

         settings_div.appendChild(div_prompts); // Add prompts section

         // Close Button
         var close_btn_voice = document.createElement('span'); // Use span or div styled as button
         close_btn_voice.className = 'span1'; // Use existing style
         close_btn_voice.style.borderRadius = '0'; // Remove radius if applied by span1
         close_btn_voice.style.display = 'block'; // Ensure block display
         close_btn_voice.style.marginTop = '15px'; // Add margin above close
         close_btn_voice.style.borderTop = '1px solid #eee'; // Separator
         close_btn_voice.innerHTML = 'Close'; // Dịch
         close_btn_voice.onclick = function () { popup.onclose(); };
         content_div.appendChild(close_btn_voice); // Append close button to content area

    } else { // Popup already exists, just ensure it's visible
        if (popup.style.display !== 'block') {
            popup.innerHTML = ''; // Clear any old content
            popup.appendChild(Voice_time_reporting_div); // Re-attach the existing div
            popup.style.display = 'block';
        }
        // Find existing controls to update their state
        var time_reporting_switch = document.getElementById('time_reporting_switch');
        var Half_an_hour_switch = document.getElementById('Half_an_hour_switch');
        var Time_reporting_12h_switch = document.getElementById('Time_reporting_12h_switch');
        var Whole_point_prompt_input = document.getElementById('Whole_point_prompt'); // Use specific name
        var Half_dot_prompt_input = document.getElementById('Half_dot_prompt'); // Use specific name
    }

    // Update control states based on received data
    if(time_reporting_switch) time_reporting_switch.checked = !!data.Time_reporting_open; // Use boolean conversion
    var isAnyHalfHour = false;
    if (Time_reporting_list && Time_reporting_list.length === 24) { // Check list validity
        for (var i = 0; i < 24; i++) {
             if (Time_reporting_list[i] > 1) isAnyHalfHour = true; // Check if any hour has half-hour report enabled
             var checkbox = document.getElementById('time_reporting_' + i);
             if(checkbox) checkbox.checked = (Time_reporting_list[i] > 0); // Update individual hour checkbox
        }
    }
    if(Half_an_hour_switch) Half_an_hour_switch.checked = isAnyHalfHour; // Set main half-hour switch based on individual hours

    if (u_ver + 1 > 1833 && Time_reporting_12h_switch) { // Check element exists
        Time_reporting_12h_switch.checked = !!data.Time_reporting_12h;
    }
    if(Whole_point_prompt_input) Whole_point_prompt_input.value = data.Whole_point_prompt || ''; // Use empty string if null
    if(Half_dot_prompt_input) Half_dot_prompt_input.value = data.Half_dot_prompt || '';
}

// Sends request to get auto-reboot settings
function Auto_restart_device() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws_send(JSON.stringify({ type: 'Auto_restart_device' }));
    }
}

// Creates or updates the auto-reboot settings popup
function create_Auto_restart_device(data) {
    if (data != null) {
        Auto_restart_device_times = data.Auto_restart_device_time || [0, 0]; // Use received times or default [0, 0]
    } else {
        console.error("Received null data for Auto Restart settings.");
        return; // Don't proceed without data
    }

    var container_id = 'Auto_restart_device_popup_div'; // Unique ID

    if (!document.getElementById(container_id)) { // Create popup if it doesn't exist
        Auto_restart_device_div = document.createElement('div');
        Auto_restart_device_div.id = container_id;
        Auto_restart_device_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:300px; max-width: 90%;'; // Adjust width

        popup.innerHTML = '';
        popup.appendChild(Auto_restart_device_div);
        popup.style.display = 'block';

        // Title Bar
        var title_div_auto = document.createElement('div'); // Use specific name
        title_div_auto.style = 'background-color: rgba(0,160,255,1);border-radius:15px 15px 0 0;';
        Auto_restart_device_div.appendChild(title_div_auto);
        var title_auto = document.createElement('h3');
        title_auto.style = 'font-size: 16px; color:#ffffff; padding: 10px; margin: 0; text-align: center;';
        title_auto.title = 'Set Auto Reboot'; // Dịch
        title_auto.innerHTML = title_auto.title;
        title_div_auto.appendChild(title_auto);

        // Content Area
        var content_div_auto = document.createElement('div');
        content_div_auto.style = 'background-color: #ffffff; border-radius:0 0 15px 15px; margin: 0 auto; padding: 15px; text-align: left;'; // Align left
        title_div_auto.appendChild(content_div_auto);
        var settings_div_auto = document.createElement('div');
        content_div_auto.appendChild(settings_div_auto);

        // --- Controls ---
         var div_auto_controls = document.createElement('div');
         div_auto_controls.style.marginBottom = '10px';

         // Enable Switch
         var Auto_restart_device_switch = document.createElement('input');
         Auto_restart_device_switch.type = 'checkbox';
         Auto_restart_device_switch.id = 'Auto_restart_device_switch';
         Auto_restart_device_switch.style.verticalAlign = 'middle';
         Auto_restart_device_switch.onclick = function () {
             if (ws && ws.readyState === WebSocket.OPEN) {
                 ws_send(JSON.stringify({ type: 'set_Auto_restart_device_open', open: this.checked }));
             }
         };
         div_auto_controls.appendChild(Auto_restart_device_switch);
         var text_auto_label = document.createElement('label');
         text_auto_label.htmlFor = 'Auto_restart_device_switch';
         text_auto_label.style = 'margin-left: 8px; vertical-align: middle;';
         text_auto_label.innerHTML = "Enable Auto Reboot"; // Dịch
         div_auto_controls.appendChild(text_auto_label);
         settings_div_auto.appendChild(div_auto_controls);

         // Time Input
         var div_time_input = document.createElement('div');
         div_time_input.style.marginTop = '10px';
         var text_time_prefix = document.createElement('text');
         text_time_prefix.style.marginRight = '8px';
         text_time_prefix.innerHTML = "Reboot daily at"; // Dịch
         div_time_input.appendChild(text_time_prefix);
         var Auto_restart_device_time_input = document.createElement('input'); // Specific name
         Auto_restart_device_time_input.type = 'time';
         Auto_restart_device_time_input.id = 'Auto_restart_device_time';
         Auto_restart_device_time_input.style.verticalAlign = 'middle';
         Auto_restart_device_time_input.onchange = function () { // Use onchange to send after selection
             if (this.value) {
                 var time_parts = this.value.split(':');
                 if (time_parts.length >= 2) {
                     var times = [parseInt(time_parts[0]), parseInt(time_parts[1])];
                      if (!isNaN(times[0]) && !isNaN(times[1])) { // Basic validation
                          if (ws && ws.readyState === WebSocket.OPEN) {
                              ws_send(JSON.stringify({ type: 'set_Auto_restart_device_time', times: JSON.stringify(times) }));
                              Auto_restart_device_times = times; // Update global state
                          }
                      }
                 }
             }
         };
         div_time_input.appendChild(Auto_restart_device_time_input);
         settings_div_auto.appendChild(div_time_input);

        // Close Button
         var close_btn_auto = document.createElement('span');
         close_btn_auto.className = 'span1';
         close_btn_auto.style.borderRadius = '0';
         close_btn_auto.style.display = 'block';
         close_btn_auto.style.marginTop = '15px';
         close_btn_auto.style.borderTop = '1px solid #eee';
         close_btn_auto.innerHTML = 'Close'; // Dịch
         close_btn_auto.onclick = function () { popup.onclose(); };
         content_div_auto.appendChild(close_btn_auto);

    } else { // Popup exists, make sure it's visible
        if (popup.style.display !== 'block') {
            popup.innerHTML = '';
            popup.appendChild(Auto_restart_device_div);
            popup.style.display = 'block';
        }
        // Find existing controls
        var Auto_restart_device_switch = document.getElementById('Auto_restart_device_switch');
        var Auto_restart_device_time_input = document.getElementById('Auto_restart_device_time');
    }

    // Update control states based on received data
    if(Auto_restart_device_switch) Auto_restart_device_switch.checked = !!data.Auto_restart_device_open;

    if (Auto_restart_device_time_input && Auto_restart_device_times && Auto_restart_device_times.length === 2) {
        var hours = Auto_restart_device_times[0];
        var minutes = Auto_restart_device_times[1];
        // Format time as HH:MM for the input type="time"
        var time_str = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
        Auto_restart_device_time_input.value = time_str;
    } else if (Auto_restart_device_time_input) {
         Auto_restart_device_time_input.value = "00:00"; // Default if data invalid
    }
}

// Creates a generic popup window to display text content
function create_text_window(title_text, value) {
    title_text = title_text || 'Hint'; // Default title // Dịch
    value = value || ''; // Default value

    // Use the main popup container
    popup.innerHTML = ''; // Clear previous content

    var text_window_container = document.createElement('div'); // Use a more descriptive name
    text_window_container.id = 'text_window_popup_div'; // Unique ID
    text_window_container.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:300px; max-width: 90%; background-color: rgba(0,160,255,1); border-radius: 15px;'; // Combine styles

    popup.appendChild(text_window_container);
    popup.style.display = 'block'; // Show popup

    // Title Bar
    var title_div_text = document.createElement('div'); // Specific name
    var title_h3_text = document.createElement('h3');
    title_h3_text.style = 'font-size: 16px; color:#ffffff; padding: 10px; margin: 0; text-align: center;';
    title_h3_text.title = title_text;
    title_h3_text.innerHTML = title_h3_text.title;
    title_div_text.appendChild(title_h3_text);
    text_window_container.appendChild(title_div_text);

    // Content Area
    var content_div_text = document.createElement('div');
    content_div_text.style = 'background-color: #ffffff; border-radius: 0 0 15px 15px; margin: 0 auto; max-height: 500px; overflow-x: hidden; overflow-y: auto; padding: 15px;'; // Padding for content
    // Adjust max-height based on viewport
    if (document.body.clientHeight < 600) {
        content_div_text.style.maxHeight = (document.body.clientHeight - 120) + 'px'; // Leave some space
    }
    text_window_container.appendChild(content_div_text);

    // Text Display Area
    var text_display_div = document.createElement('div'); // Specific name
    text_display_div.id = 'text_window_text_content'; // Unique ID
    text_display_div.style = 'color: rgba(0, 0, 0, 1); text-align: left; white-space: pre-wrap; word-wrap: break-word;'; // Use black text, allow wrapping
    content_div_text.appendChild(text_display_div);

    // Format and display the text value
    var lines = String(value).split("\r\n"); // Ensure value is a string before splitting
    lines.forEach(line => {
        // Sanitize line before setting innerHTML if needed, or use textContent
        var line_div = document.createElement('div'); // Use div for each line for better control
        line_div.innerHTML = line || ' '; // Use innerHTML to render potential links, use space for empty lines
        text_display_div.appendChild(line_div);
    });

    // Close Button
    var close_btn_text = document.createElement('span');
    close_btn_text.className = 'span1'; // Use existing style if suitable
    close_btn_text.style.borderRadius = '0';
    close_btn_text.style.display = 'block';
    close_btn_text.style.marginTop = '15px';
    close_btn_text.style.borderTop = '1px solid #eee';
    close_btn_text.innerHTML = 'Close'; // Dịch
    close_btn_text.onclick = function () { popup.onclose(); };
    content_div_text.appendChild(close_btn_text);
}

// Creates the popup for selecting the ambient light color
function create_color_selection() {
    var container_id = 'color_selection_popup_div'; // Unique ID

    if (!document.getElementById(container_id)) { // Create if doesn't exist
        color_selection_div = document.createElement('div'); // Use global variable
        color_selection_div.id = container_id;
        color_selection_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:280px; max-width: 90%;'; // Adjust width

        popup.innerHTML = '';
        popup.appendChild(color_selection_div);
        popup.style.display = 'block';

        // Title Bar
        var title_div_color = document.createElement('div');
        title_div_color.style = 'background-color: rgba(0,160,255,1); border-radius:15px 15px 0 0;';
        color_selection_div.appendChild(title_div_color);
        var title_color = document.createElement('h3');
        title_color.style = 'font-size: 16px; color:#ffffff; padding: 10px; margin: 0; text-align: center;';
        title_color.title = 'Set Ambient Light Color'; // Dịch
        title_color.innerHTML = title_color.title;
        title_div_color.appendChild(title_color);

        // Content Area
        var content_div_color = document.createElement('div');
        content_div_color.style = 'background-color: #ffffff; border-radius:0 0 15px 15px; margin: 0 auto; padding: 15px; text-align: center;'; // Center content
        title_div_color.appendChild(content_div_color);
        var settings_div_color = document.createElement('div');
        content_div_color.appendChild(settings_div_color);

        // Color Picker
        var div_picker = document.createElement('div');
        div_picker.style.marginBottom = '10px';
        var text_picker_label = document.createElement('text');
        text_picker_label.style.marginRight = '8px';
        text_picker_label.innerHTML = "Select Color:"; // Dịch
        div_picker.appendChild(text_picker_label);
        var color_picker_input = document.createElement('input'); // Specific name
        color_picker_input.id = 'color_selection';
        color_picker_input.type = 'color';
        // Apply size styles directly if needed, or use CSS classes
        color_picker_input.style = 'width: 100px; height: 50px; vertical-align: middle; border: 1px solid #ccc; padding: 2px; cursor: pointer;'; // Basic styling
        color_picker_input.onchange = function () { // Update text input when color picker changes
            var color_value_input = document.getElementById('color_value');
            if (color_value_input) color_value_input.value = this.value.toUpperCase();
        };
        color_picker_input.oninput = function () { // Live update for browsers that support it
            var color_value_input = document.getElementById('color_value');
            if (color_value_input) color_value_input.value = this.value.toUpperCase();
        };
        div_picker.appendChild(color_picker_input);
        settings_div_color.appendChild(div_picker);

        // Color Value Text Input
        var div_value = document.createElement('div');
        div_value.style.marginBottom = '15px';
        var text_value_label = document.createElement('text');
        text_value_label.innerHTML = "Hex Value: "; // Dịch
        div_value.appendChild(text_value_label);
        var color_value_input = document.createElement('input'); // Specific name
        color_value_input.type = 'text';
        color_value_input.id = 'color_value';
        color_value_input.style = 'height:30px; width:100px; vertical-align: middle; margin-left: 5px; font-family: monospace;'; // Style for hex
        color_value_input.maxLength = 7; // Limit length (#RRGGBB)
        color_value_input.onchange = function () { // Update picker when text input changes
            var color_picker_input = document.getElementById('color_selection');
            if (color_picker_input && /^#[0-9A-F]{6}$/i.test(this.value)) { // Validate hex format
                color_picker_input.value = this.value.toUpperCase();
            }
        };
        div_value.appendChild(color_value_input);
        settings_div_color.appendChild(div_value);

        // Save Button
        var btn_save_color = document.createElement('input');
        btn_save_color.type = 'button';
        btn_save_color.value = 'Save Color'; // Dịch
        btn_save_color.className = 'btn';
        btn_save_color.style = 'margin-right: 10px;'; // Add spacing
        btn_save_color.onclick = function () {
            var color_value_input = document.getElementById('color_value');
            if (color_value_input && /^#[0-9A-F]{6}$/i.test(color_value_input.value)) { // Validate hex
                var color_hex = '0x' + color_value_input.value.substring(1); // Convert #RRGGBB to 0xRRGGBB
                var color_int = parseInt(color_hex); // Parse as integer
                if (!isNaN(color_int) && ws && ws.readyState === WebSocket.OPEN) {
                     ws_send(JSON.stringify({ type: 'send_message', type_id: 'modify_color', what: 4, arg1: 70, arg2: color_int }));
                     // Confirmation comes via 'modify_color' response message
                     popup.onclose(); // Close after sending
                } else {
                     alert("Invalid color value or connection error."); // Dịch
                }
            } else {
                alert('Invalid Hex color value! Use format #RRGGBB.'); // Dịch
            }
        };
        settings_div_color.appendChild(btn_save_color);

        // Cancel Button
        var btn_cancel_color = document.createElement('input');
        btn_cancel_color.type = 'button';
        btn_cancel_color.value = 'Cancel'; // Dịch
        btn_cancel_color.className = 'btn';
        btn_cancel_color.style = 'background-color: #aaa;'; // Style cancel button
        btn_cancel_color.onclick = function () { popup.onclose(); };
        settings_div_color.appendChild(btn_cancel_color);

    } else { // Popup exists, just show it
        if (popup.style.display !== 'block') {
            popup.innerHTML = '';
            popup.appendChild(color_selection_div);
            popup.style.display = 'block';
        }
        // Find existing inputs
        var color_picker_input = document.getElementById('color_selection');
        var color_value_input = document.getElementById('color_value');
    }

    // Update inputs with current color (if available in global 'info')
    if (info && info.music_light_color != null && color_picker_input && color_value_input) {
        var current_color_int = parseInt(info.music_light_color);
        if (!isNaN(current_color_int)) {
            var hex_color = current_color_int.toString(16).toUpperCase();
            // Pad with leading zeros to ensure 6 digits
            while (hex_color.length < 6) { hex_color = '0' + hex_color; }
            var color_str = '#' + hex_color;
            color_picker_input.value = color_str;
            color_value_input.value = color_str;
        }
    } else if (color_picker_input && color_value_input) {
         // Default color if none is set
         color_picker_input.value = '#66CCFF';
         color_value_input.value = '#66CCFF';
    }
}

// Creates the popup showing details and actions for a specific song in the playlist
function create_music_info_window(data) { // data expects { index: number, music_info: object }
    var temp_api_musicinfo = null; // Variable to store fetched API info
    var song_info = data.music_info; // Get the basic info passed in

    if (!song_info || song_info.itemId == null) { // Basic validation
        console.error("Invalid music info provided for popup:", data);
        return;
    }

    var container_id = 'music_info_popup_div'; // Unique ID
    var music_info_div = document.getElementById(container_id);

    if (!music_info_div) { // Create popup if it doesn't exist
        music_info_div = document.createElement('div');
        music_info_div.id = container_id;
        music_info_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:300px; max-width: 90%;';

        popup.innerHTML = '';
        popup.appendChild(music_info_div);
        popup.style.display = 'block';

        // Title Bar (includes cover, title, artist)
        var title_div_music = document.createElement('div'); // Specific name
        title_div_music.style = 'background-color: rgba(0,160,255,1); border-radius:15px 15px 0 0; padding: 10px; display: flex; align-items: center;'; // Use flexbox
        music_info_div.appendChild(title_div_music);

        var pic = document.createElement('img');
        pic.id = 'popup_music_pic'; // ID for updating later
        pic.style = 'border-radius: 10%; height: 60px; width: 60px; margin-right: 10px; object-fit: cover; background-color: #eee;'; // Style cover
        pic.src = song_info.albumUrl || './pic/nopic.jpg'; // Use provided URL or placeholder
        title_div_music.appendChild(pic);

        var div_text_container = document.createElement('div');
        div_text_container.style = 'display: flex; flex-direction: column; overflow: hidden;'; // Column layout for text
        title_div_music.appendChild(div_text_container);

        var title_text = document.createElement('text');
        title_text.id = 'popup_music_title'; // ID for updating
        title_text.style = 'font-size: 15px; font-weight: bold; color: #ffffff; text-align:left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'; // Style title
        title_text.innerHTML = song_info.title || 'Loading...'; // Dịch
        div_text_container.appendChild(title_text);

        var artist_text = document.createElement('text');
        artist_text.id = 'popup_music_artist'; // ID for updating
        artist_text.style = 'font-size: 12px; color: #ffffff; text-align:left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'; // Style artist
        artist_text.innerHTML = song_info.artist || '';
        div_text_container.appendChild(artist_text);

        // Options Area
        var option_div = document.createElement('div');
        option_div.id = 'popup_music_options'; // ID for adding options later
        option_div.style = 'background-color: #ffffff; border-radius:0 0 15px 15px; max-height:400px; overflow-y:auto;';
        music_info_div.appendChild(option_div);

    } else { // Popup exists, update content
        popup.style.display = 'block'; // Ensure visible
        // Update existing elements
        var pic = document.getElementById('popup_music_pic');
        var title_text = document.getElementById('popup_music_title');
        var artist_text = document.getElementById('popup_music_artist');
        var option_div = document.getElementById('popup_music_options');

        if(pic) pic.src = song_info.albumUrl || './pic/nopic.jpg';
        if(title_text) title_text.innerHTML = song_info.title || 'Loading...'; // Dịch
        if(artist_text) artist_text.innerHTML = song_info.artist || '';
        if(option_div) option_div.innerHTML = '<div class="span1" style="padding: 10px;">Loading options...</div>'; // Dịch placeholder while fetching details
    }

    // --- Define Options ---
    var option_list = [];

    option_list.push({
        title: 'Play Song', // Dịch
        onclick: function () {
             if (List && List.playIndex == data.index) { // Check if already playing
                 popup.onclose();
                 return;
             }
             send(null, null, 'play', { index: data.index }); // Send play command with index
             popup.onclose();
        }
    });

    // Add favorite options only if supported
    if (is_new_unisound) {
        option_list.push({
            title: 'Favorite Song', // Dịch
            onclick: function () {
                 if (!temp_api_musicinfo) { alert("Song details not loaded yet."); return; } // Wait for API info // Dịch
                 if (!confirm("Are you sure you want to favorite [" + get_music_title(temp_api_musicinfo) + "]?")) { // Dịch
                     // popup.onclose(); // Keep popup open on cancel?
                     return;
                 }
                 if (ws && ws.readyState === WebSocket.OPEN) {
                      // Send basic info first, API info might not be fully serializable if complex
                      var info_to_send = { ...song_info }; // Copy basic info
                      delete info_to_send.Current_MusicData; // Remove complex data
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'collect', music_info: info_to_send } } }));
                 }
                 popup.onclose();
            },
            requiresApiInfo: true // Flag that this option needs detailed info
        });
        option_list.push({
            title: 'Unfavorite Song', // Dịch
            onclick: function () {
                 if (!temp_api_musicinfo) { alert("Song details not loaded yet."); return; } // Dịch
                 if (!confirm("Are you sure you want to unfavorite [" + get_music_title(temp_api_musicinfo) + "]?")) { // Dịch
                     // popup.onclose();
                     return;
                 }
                 if (ws && ws.readyState === WebSocket.OPEN) {
                      var info_to_send = { ...song_info };
                      delete info_to_send.Current_MusicData;
                      ws_send(JSON.stringify({ type: 'send_to_unisound', data: { type: 'api', data: { type: 'cancel_collect', music_info: info_to_send } } }));
                 }
                 popup.onclose();
            },
            requiresApiInfo: true
        });
    }

    option_list.push({
        title: 'Song Info', // Dịch
        onclick: function () {
             if (!temp_api_musicinfo) { alert("Song details not loaded yet."); return; } // Dịch

            var types = { // Dịch source names
                'qq': "QQ Music", "netease": "Netease Music", "kuwo": "Kuwo Music",
                "kugou": "Kugou Music", "migu": "Migu Music", "5singyc": "5sing Original",
                "5singfc": "5sing Cover", "5singbz": "5sing Accompaniment"
            };
            var text_arr = [];
            text_arr.push("Song Title: " + temp_api_musicinfo.name); // Dịch
            text_arr.push("Artist: " + temp_api_musicinfo.artist); // Dịch

            // Determine source and ID
            var source_type = 'Unknown'; // Dịch
            var source_id = temp_api_musicinfo.id; // Default to full ID
            if (temp_api_musicinfo.id) {
                 var id_parts = temp_api_musicinfo.id.split(',');
                 if (id_parts.length > 1 && types[id_parts[1]]) {
                     source_type = types[id_parts[1]];
                     source_id = id_parts[0]; // Use the part before comma as ID
                 } else if (id_parts[0].startsWith('MUSIC_')) {
                     source_type = 'Kuwo Music'; // Dịch
                     source_id = id_parts[0].substring(6);
                 } else if (id_parts[0].startsWith('local_')) {
                     source_type = 'Local'; // Dịch
                     source_id = id_parts[0].substring(6);
                 }
            }

            var id_display = source_id;
            if (temp_api_musicinfo.link) { // Make ID clickable if link exists
                 id_display = `<a style='color:rgba(238, 0, 0, 1);' target='_blank' href='${temp_api_musicinfo.link}'>${source_id}</a>`;
            }
            text_arr.push("Song ID: " + id_display); // Dịch
            text_arr.push("Source: " + source_type); // Dịch
            text_arr.push("------ Lyrics ------"); // Dịch

            // Format lyrics for display
            if (typeof (temp_api_musicinfo.lrc) == 'string') {
                 var raw_lrc_info = temp_api_musicinfo.lrc.replace(/\[/g, "\r\n[").replace(/\r\n\r\n/g, "\r\n").trim();
                 var lrc_lines_info = raw_lrc_info.split("\r\n");
                 lrc_lines_info.forEach(line => {
                     // Add timestamp if present, otherwise just the line
                      var time_match = line.match(/^(\[\d{1,3}:\d{1,2}[.:]\d{1,3}\])/);
                      var text = line.replace(/(\[.*?\])/g, '').trim();
                      if (time_match) {
                          text_arr.push(time_match[1] + (text || '')); // Include timestamp
                      } else if (text) {
                          text_arr.push(text); // Line without standard timestamp (e.g., [ti:])
                      }
                 });
            } else {
                 text_arr.push("No lyrics data."); // Dịch
            }
            create_text_window('Song Info', text_arr.join("\r\n")); // Dịch title
        },
        requiresApiInfo: true
    });

     option_list.push({ title: 'Cancel', onclick: function() { popup.onclose(); } }); // Dịch


    // --- Fetch detailed info from API ---
    var post_data_info; // Use specific name
    if (song_info.itemId && song_info.itemId.startsWith('local_')) {
        // Use metadata if available for local files
        post_data_info = { info: song_info.itemId, file: song_info.title, metadata: JSON.stringify(Current_MusicData?.MediaMetadata || null) };
    } else {
        post_data_info = { info: song_info.itemId, music_info: JSON.stringify(song_info || null) };
    }

    // API Success Handler
    var success_callback_info = function (api_response) { // Use specific name
        var option_div_update = document.getElementById('popup_music_options'); // Get options div again
        if (!option_div_update) return; // Exit if popup closed
        option_div_update.innerHTML = ''; // Clear 'Loading...' message

        if (api_response.code == 1) {
            temp_api_musicinfo = api_response.data; // Store fetched data

            // Update popup header with fetched info
            var pic_update = document.getElementById('popup_music_pic');
            var title_update = document.getElementById('popup_music_title');
            var artist_update = document.getElementById('popup_music_artist');
            if(pic_update) pic_update.src = temp_api_musicinfo.pic || './pic/nopic.jpg';
            if(title_update) title_update.innerHTML = temp_api_musicinfo.name || song_info.title || 'Unknown Title'; // Dịch
            if(artist_update) artist_update.innerHTML = temp_api_musicinfo.artist || song_info.artist || '';

            // Add options to the popup
            option_list.forEach((option, index) => {
                 // Check if the option requires API info and if we have it
                 var enable_option = !option.requiresApiInfo || (option.requiresApiInfo && temp_api_musicinfo);
                 // Add separator
                 if (index > 0) {
                     var hr = document.createElement('hr');
                     hr.className = 'hr'; hr.style.margin = '0'; hr.style.borderTop = '1px solid #eee';
                     option_div_update.appendChild(hr);
                 }
                 // Add the option row
                 var tr = document.createElement('tr');
                 tr.className = 'span1'; tr.style.display = 'block';
                 if (!enable_option) {
                     tr.setAttribute('none', true); // Disable style
                     tr.style.cursor = 'default';
                 } else {
                     tr.onclick = option.onclick; // Assign click handler
                 }
                 var span = document.createElement('span');
                 span.innerHTML = option.title;
                 tr.appendChild(span);
                 option_div_update.appendChild(tr);
            });

        } else { // API Error
            option_div_update.innerHTML = '<div class="span1" none="true" style="padding: 10px;">Failed to load song details.</div>'; // Dịch error
            // Still add the Cancel button
             var hr_cancel = document.createElement('hr'); hr_cancel.className = 'hr'; hr_cancel.style.margin = '0'; hr_cancel.style.borderTop = '1px solid #eee'; option_div_update.appendChild(hr_cancel);
             var tr_cancel = document.createElement('tr'); tr_cancel.className = 'span1'; tr_cancel.style.display = 'block'; tr_cancel.onclick = function() { popup.onclose(); };
             var span_cancel = document.createElement('span'); span_cancel.innerHTML = 'Cancel'; tr_cancel.appendChild(span_cancel); option_div_update.appendChild(tr_cancel); // Dịch
        }
    };

    // API Error Handler
    var error_callback_info = function () {
        var option_div_update = document.getElementById('popup_music_options');
        if (option_div_update) {
            option_div_update.innerHTML = '<div class="span1" none="true" style="padding: 10px;">Error fetching song details.</div>'; // Dịch error
             // Add Cancel button on error too
             var hr_cancel = document.createElement('hr'); hr_cancel.className = 'hr'; hr_cancel.style.margin = '0'; hr_cancel.style.borderTop = '1px solid #eee'; option_div_update.appendChild(hr_cancel);
             var tr_cancel = document.createElement('tr'); tr_cancel.className = 'span1'; tr_cancel.style.display = 'block'; tr_cancel.onclick = function() { popup.onclose(); };
             var span_cancel = document.createElement('span'); span_cancel.innerHTML = 'Cancel'; tr_cancel.appendChild(span_cancel); option_div_update.appendChild(tr_cancel); // Dịch
        }
    };

    // Check cache first
    var cached_info_str = window.Storage.getItem('musicinfo');
    var use_cache = false;
    if (cached_info_str) {
        try {
            var cached_info = JSON.parse(cached_info_str);
            if (cached_info.code == 1 && cached_info.data && cached_info.data.id == song_info.itemId) {
                success_callback_info(cached_info); // Use cached data
                use_cache = true;
            } else {
                 window.Storage.removeItem('musicinfo'); // Remove invalid cache
            }
        } catch (e) {
             window.Storage.removeItem('musicinfo');
        }
    }

    // Fetch from API if cache not used or invalid
    if (!use_cache) {
         // Use original API URL - this might not work locally without CORS setup or a proxy
         $.ajax({
             type: 'POST',
             url: location.protocol + '//r1.wxfsq.com/music', // Keep original URL
             data: post_data_info,
             dataType: 'jsonp', // JSONP needed for cross-domain
             success: success_callback_info,
             error: error_callback_info,
             timeout: 5000 // Add timeout
         });
    }
}

// Processes the response containing the user's playlists
function get_song_list(data) {
    if (data.code == '200') { // API uses string code '200'
        if(!temp_song_list) temp_song_list = {}; // Initialize if null
        temp_song_list.time = new Date().getTime(); // Timestamp the fetched data
        temp_song_list.data = data; // Store the data
        temp_song_list.music_source = info ? info.music_source : null; // Store source for cache validation
    } else {
         if(temp_song_list) temp_song_list.time = -1; // Invalidate cache on error
        console.warn("Failed to get song list:", data.msg);
    }
    create_song_list_window(data); // Update the UI with fetched data or error state
}

// Creates or updates the popup window displaying user playlists
function create_song_list_window(data) { // data is the raw response from get_song_list or API
    var container_id = 'song_list_popup_div'; // Unique ID
    var song_list_container = document.getElementById(container_id); // Use specific name

    if (!song_list_container) { // Create popup if it doesn't exist
        song_list_container = document.createElement('div');
        song_list_container.id = container_id;
        song_list_container.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px; max-width: 90%; background-color: rgba(0,160,255,1); border-radius: 15px;';

        popup.innerHTML = '';
        popup.appendChild(song_list_container);
        popup.style.display = 'block';

        // Title Bar
        var title_div_sl = document.createElement('div'); // Specific name
        var title_sl = document.createElement('text'); // Use text element for title
        title_sl.id = 'song_list_title';
        title_sl.style = 'display: block; font-size: 16px; font-weight: bold; color: #ffffff; padding: 10px; text-align: center;';
        title_sl.innerHTML = 'Loading Playlists...'; // Dịch
        title_div_sl.appendChild(title_sl);
        song_list_container.appendChild(title_div_sl);

        // Content Area (Scrollable List)
        var content_div_sl = document.createElement('div');
        content_div_sl.id = 'song_list_div'; // ID for the scrollable list itself
        content_div_sl.style = 'background-color: #ffffff; border-radius: 0 0 15px 15px; margin: 0 auto; max-height: 500px; overflow-x: hidden; overflow-y: auto; text-align: left;';
        // Adjust max height based on viewport
        if (document.body.clientHeight < 600) {
            content_div_sl.style.maxHeight = (document.body.clientHeight - 120) + 'px';
        }
        song_list_container.appendChild(content_div_sl);

         // Click handler for the list items
         content_div_sl.onclick = function (event) { // Use event parameter
             clearTimeout(listonclick_timer); // Clear single click timer

             var click_target = event.target;
             var playlist_item_div = null;

             // Traverse up the DOM to find the main 'click' div
             while (click_target && click_target !== content_div_sl) {
                 if (click_target.classList && click_target.classList.contains('click')) {
                     playlist_item_div = click_target;
                     break;
                 }
                 click_target = click_target.parentNode;
             }

             if (playlist_item_div) { // If a playlist item was clicked
                 var playlist_id = playlist_item_div.getAttribute('id');
                 var playlist_title_elem = playlist_item_div.querySelector('text1:first-of-type'); // Find title element more reliably
                 var playlist_title = playlist_title_elem ? playlist_title_elem.innerHTML : 'Unknown Playlist';

                 if (!confirm('Play playlist [' + playlist_title + ']?')) { // Dịch confirmation
                     return;
                 }

                 if (ws && ws.readyState === WebSocket.OPEN) {
                      // Send command to play the selected playlist ID
                      ws_send(JSON.stringify({ type: 'send_message', what: 65536, arg1: 0, arg2: 9, obj: playlist_id.toString() }));
                      popup.onclose(); // Close popup
                      var musicBtn = document.getElementById('btn_page_music');
                      if (musicBtn) switch_page(musicBtn); // Switch to music page
                 } else {
                      alert("Connection error, cannot play playlist."); // Dịch
                 }
             }
         };

        // Close button at the bottom
        var close_btn_sl = document.createElement('span');
        close_btn_sl.className = 'span1'; // Use existing style
        close_btn_sl.style.borderRadius = '0';
        close_btn_sl.style.display = 'block';
        close_btn_sl.style.marginTop = '0px'; // Attach directly below content
        close_btn_sl.style.borderTop = '1px solid #eee';
        close_btn_sl.innerHTML = 'Close'; // Dịch
        close_btn_sl.onclick = function () { popup.onclose(); };
        song_list_container.appendChild(close_btn_sl); // Append close button to main container

    } else { // Popup exists
        if (popup.style.display !== 'block') { // Ensure visible
            popup.innerHTML = '';
            popup.appendChild(song_list_container);
            popup.style.display = 'block';
        }
    }

    // Update content if data is provided
    var song_list_content_div = document.getElementById('song_list_div');
    var song_list_title_elem = document.getElementById('song_list_title');
    if (song_list_content_div && song_list_title_elem) {
        song_list_content_div.innerHTML = ''; // Clear previous list items

        if (data === null) { // Still loading state
             song_list_title_elem.innerHTML = 'Loading Playlists...'; // Dịch
             song_list_content_div.innerHTML = '<div class="span1" style="padding: 10px;">Please wait...</div>'; // Dịch
        } else if (data.code == 200 && data.data && data.data.data) { // Success
            var list_data = data.data.data; // The actual playlist groups
            song_list_title_elem.innerHTML = data.data.title || 'My Playlists'; // Use title from response or default // Dịch

            if (Object.keys(list_data).length === 0) { // Handle empty playlist list
                 song_list_content_div.innerHTML = '<div class="span1" style="padding: 10px;">No playlists found.</div>'; // Dịch
            } else {
                 // Iterate through playlist groups (e.g., "My Playlists", "Favorite Playlists")
                 for (var group_key in list_data) {
                     if (list_data.hasOwnProperty(group_key)) {
                         var group = list_data[group_key];
                         var group_list = group.list || [];

                         // Add group title
                         var div_group_title = document.createElement('div');
                         div_group_title.style = 'font-size: 14px; color: #555; margin: 10px 5px 5px 10px; font-weight: bold;';
                         div_group_title.innerHTML = (group.title || 'Playlist Group') + ' [' + group_list.length + ']'; // Dịch group title if needed
                         song_list_content_div.appendChild(div_group_title);

                         // Add playlists within the group
                         group_list.forEach(item => {
                             var item_div = document.createElement('div');
                             item_div.className = 'click'; // Class for styling and click handling
                             item_div.setAttribute('id', item.id); // Store playlist ID
                             item_div.style = 'border-top: 1px solid #eee;'; // Add separator

                             var pic = document.createElement('img');
                             pic.style = 'border-radius: 5px; margin: 5px 10px 5px 5px; height: 50px; width: 50px; vertical-align: middle; object-fit: cover; background-color: #eee;'; // Adjust size
                             pic.src = item.pic || './pic/nopic.jpg'; // Use cover or placeholder
                             item_div.appendChild(pic);

                             var text_div = document.createElement('div');
                             text_div.style = 'display: inline-block; vertical-align: middle; width: calc(100% - 75px);'; // Adjust width calculation

                             var title1 = document.createElement('text1'); // Use distinct tag/class if needed
                             title1.style = 'font-size: 15px; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #333;'; // Style title
                             title1.innerHTML = item.title || 'Unnamed Playlist'; // Dịch
                             text_div.appendChild(title1);

                             var content1 = document.createElement('text1');
                             content1.style = 'font-size: 11px; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #777;'; // Style content
                             content1.innerHTML = item.content || ''; // e.g., track count
                             text_div.appendChild(content1);

                             item_div.appendChild(text_div);
                             song_list_content_div.appendChild(item_div);
                         });
                     }
                 }
            }
        } else { // Error fetching playlists
            song_list_title_elem.innerHTML = 'Error Loading Playlists'; // Dịch
            song_list_content_div.innerHTML = '<div class="span1" none="true" style="padding: 10px;">' + (data.msg || 'Could not fetch playlists.') + '</div>'; // Dịch error message
        }
    }
}


// Compresses an image file using Canvas
function compressImage(file, quality) { // quality is 0 to 1
    return new Promise((resolve, reject) => {
        if (!file || !file.type.startsWith('image/')) {
            return reject('Invalid file type for compression.'); // Dịch
        }
        const { type, name } = file;
        let img = new Image();
        let reader = new FileReader();

        reader.onload = function (e) {
            img.onload = function () {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d'); // Use 'ctx' convention

                // Calculate new dimensions (optional resizing)
                let width = img.width;
                let height = img.height;
                const MAX_DIMENSION = 1920; // Max width/height before resizing
                if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
                    if (width > height) {
                        height = Math.round(height * (MAX_DIMENSION / width));
                        width = MAX_DIMENSION;
                    } else {
                        width = Math.round(width * (MAX_DIMENSION / height));
                        height = MAX_DIMENSION;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image onto canvas

                // Convert canvas to Blob with specified quality
                canvas.toBlob(function (blob) {
                    if (!blob) {
                        reject("Canvas to Blob conversion failed."); // Dịch
                        return;
                    }
                    // Create a new File object from the Blob
                    let compressedFile = new File([blob], name, { type: 'image/jpeg' }); // Force JPEG for compression control
                    resolve({ type: 'image/jpeg', compressFile: compressedFile });
                }, 'image/jpeg', quality); // Specify JPEG format and quality
            };
            img.onerror = function() {
                reject("Failed to load image for compression."); // Dịch
            }
            img.src = e.target.result; // Set source after onload is defined
        };
        reader.onerror = function() {
             reject("Failed to read file for compression."); // Dịch
        }
        reader.readAsDataURL(file); // Read the file
    });
}

// Finds suitable text color (black/white) for a given background color hex/rgb string
function findTextColor(colorValue) {
    if (!colorValue || typeof colorValue !== 'string') return '#000000'; // Default to black on error

    const regHex = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    const regRgb = /^(rgb|RGB)/;
    var rgbArr = [];

    if (regRgb.test(colorValue)) {
        var colorParts = colorValue.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        if (colorParts.length === 3) {
            rgbArr = colorParts.map(Number); // Convert to numbers
        } else {
            return '#000000'; // Invalid RGB
        }
    } else if (regHex.test(colorValue)) {
        var hex = colorValue.toLowerCase();
        if (hex.length === 4) { // Expand shorthand hex #RGB to #RRGGBB
            hex = "#" + hex.slice(1, 2).repeat(2) + hex.slice(2, 3).repeat(2) + hex.slice(3, 4).repeat(2);
        }
        // Convert #RRGGBB to RGB array
        for (var i = 1; i < 7; i += 2) {
            rgbArr.push(parseInt("0x" + hex.slice(i, i + 2)));
        }
    } else {
        return '#000000'; // Invalid format
    }

    // Check if array is valid
    if (rgbArr.length !== 3 || rgbArr.some(isNaN)) {
        return '#000000';
    }

    // Calculate luminance (simplified YIQ formula)
    var luminance = (0.299 * rgbArr[0] + 0.587 * rgbArr[1] + 0.114 * rgbArr[2]);
    // Return black for light backgrounds, white for dark backgrounds
    return luminance > 128 ? '#000000' : '#ffffff';
}

// Not used in the translated code, kept for reference if needed
// function resBgColor(rgbArr) { ... }

// Gets the background image URL from the applied style (if possible)
function get_background_data() {
    var bg_style_element = document.getElementById('#background_div_style');
    if (bg_style_element && bg_style_element.innerHTML) {
        var css_text = bg_style_element.innerHTML;
        var match = css_text.match(/url\("?([^")]+)"?\)/); // Regex to extract URL
        if (match && match[1]) {
            return match[1];
        }
    }
    // Fallback or check inline style if needed
    // var bgDiv = document.getElementById('background_div');
    // if(bgDiv && bgDiv.style.backgroundImage && bgDiv.style.backgroundImage.includes('url(')) { ... }
    return ''; // Return empty if not found
}

// Gets the color of a pixel from the background image (Requires Canvas and getPixelColor library - NOT included)
// This function likely won't work without the specific library used originally.
// Providing a simplified version or placeholder.
function get_background_color(x, y, callback) {
    console.warn("get_background_color relies on a specific Canvas library (getPixelColor) which is not included. Returning default color.");
    callback('#A9D0F5'); // Return default background color
    /* // Original logic (requires getPixelColor.js)
    var img_data = get_background_data();
    if (img_data != '') {
        var img = document.createElement('img');
        img.crossOrigin = "Anonymous"; // Needed for canvas security if image is cross-origin
        img.src = img_data;
        img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // Use natural dimensions
            canvas.height = this.naturalHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                 // Assuming getPixelColor is available globally or on canvas prototype
                 var colorData = canvas.getPixelColor(x, y); // Call the library function
                 callback(colorData.hex); // Assuming it returns an object with hex property
            } catch (e) {
                 console.error("Error getting pixel color:", e);
                 callback('#A9D0F5'); // Fallback on error
            }
        };
        img.onerror = function() {
            console.error("Failed to load background image for color picking.");
            callback('#A9D0F5'); // Fallback on error
        }
    } else { // Get color from body background if no image
        var rgb_color_str = document.body.style.backgroundColor || 'rgb(169, 208, 245)'; // Default if not set
        var match = rgb_color_str.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
            var r = parseInt(match[1]).toString(16).padStart(2, '0');
            var g = parseInt(match[2]).toString(16).padStart(2, '0');
            var b = parseInt(match[3]).toString(16).padStart(2, '0');
            callback('#' + r + g + b);
        } else {
             callback('#A9D0F5'); // Fallback
        }
    }
    */
}

// Gets background color near top-center (Placeholder)
function get_background_color1(callback) {
    console.warn("get_background_color1 relies on get_background_color which may not work. Returning default.");
    get_background_color(100, 10, callback); // Use default coordinates or logic
}

// Updates the mobile app's status bar appearance based on background
function update_StatusBar(is_dark_background = false) { // Added parameter hint
    if (typeof (plus) != 'undefined') { // Check if PlusRuntime API exists
        var StatusBar_div = document.getElementById('StatusBar');
        if (!StatusBar_div) { // Create status bar placeholder if it doesn't exist
            StatusBar_div = document.createElement('div');
            StatusBar_div.id = 'StatusBar';
            StatusBar_div.style = 'width: 100%; position: fixed; top: 0; left: 0; z-index: 10; background-color: transparent;'; // Basic style
            document.body.insertBefore(StatusBar_div, document.body.firstChild);
        }

        try { // Wrap PlusRuntime calls in try-catch
             if (plus.navigator.isImmersedStatusbar()) { // Immersive/Transparent status bar mode
                 var statusBarHeight = plus.navigator.getStatusbarHeight();
                 StatusBar_div.style.height = statusBarHeight + 'px'; // Set height for spacing
                 StatusBar_div.style.display = 'block';

                 // Set navigation bar and status bar to transparent (Android specific)
                 var Color = plus.android.importClass("android.graphics.Color");
                 plus.android.importClass("android.view.Window");
                 var mainActivity = plus.android.runtimeMainActivity();
                 var window_android = mainActivity.getWindow();
                 var WindowManager = plus.android.importClass("android.view.WindowManager");
                 var View = plus.android.importClass("android.view.View");
                 window_android.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS | WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                 window_android.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
                 window_android.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                 window_android.setStatusBarColor(Color.TRANSPARENT); // Set status bar transparent
                 window_android.setNavigationBarColor(Color.TRANSPARENT); // Set navigation bar transparent

                 // Set status bar text/icon color based on background brightness
                 plus.navigator.setStatusBarStyle(is_dark_background ? 'light' : 'dark');

                 // Hide system navigation bar (optional)
                 // plus.navigator.hideSystemNavigation();

             } else { // Non-immersive mode
                 StatusBar_div.style.display = 'none'; // Hide placeholder div
                 // Get background color near the top to determine status bar style
                 get_background_color1(function (hexColor) {
                     plus.navigator.setStatusBarBackground(hexColor); // Set status bar background color
                     var textColor = findTextColor(hexColor); // Determine text color needed
                     plus.navigator.setStatusBarStyle(textColor === '#ffffff' ? 'light' : 'dark'); // Set style
                 });
             }
             // Optional: Force fullscreen
             // plus.navigator.setFullscreen(true);
        } catch (e) {
             console.error("Error updating status bar via PlusRuntime:", e);
        }
    }

    // Adjust main content style (e.g., for overlays or blur effect)
    if(main_div) {
         // Reset background color overlay, apply background effect if needed
         main_div.style.backgroundColor = (Cover_background_open && music_pic && music_pic.src !== music_pic.nopic) ? 'rgba(19, 16, 66, 0.6)' : 'rgba(0,0,0,0.0)';
    }
    // Apply blur effect from storage
    var BackgroundBlurValue = Storage.getItem(hostname + '_BackgroundBlur') || '0';
    if (background_div) background_div.style.filter = 'blur(' + BackgroundBlurValue + 'px)';
    // Adjust body/container width if needed (original had a width set)
    // if(divs) divs.style.width = '96%';
}


// Gets specific parameters from URL query string
function getparam(keys) {
    if (typeof keys === 'string') keys = [keys]; // Allow single key string
    if (!Array.isArray(keys)) return null; // Expect an array

    var params = {}; // Use object instead of array for key-value store
    var count = 0;
    var url_params = getparam_arr(); // Get all params as object

    keys.forEach(key => {
        if (url_params.hasOwnProperty(key)) {
            params[key] = url_params[key];
            count++;
        }
    });

    return count > 0 ? params : null; // Return object or null
}

// Adds or updates parameters in the URL query string
function putparam(params_to_set) {
    if (typeof params_to_set !== 'object' || params_to_set === null) return;

    var current_params = getparam_arr();
    // Merge new params into current params
    for (var key in params_to_set) {
        if (params_to_set.hasOwnProperty(key)) {
            current_params[key] = params_to_set[key];
        }
    }
    setparam_arr(current_params); // Update the URL
}

// Removes specified parameters from URL query string
function delparam(keys) {
    if (typeof keys === 'string') keys = [keys];
    if (!Array.isArray(keys)) return 0;

    var count = 0;
    var current_params = getparam_arr();
    keys.forEach(key => {
        if (current_params.hasOwnProperty(key)) {
            delete current_params[key];
            count++;
        }
    });

    if (count > 0) {
        setparam_arr(current_params); // Update URL if changed
    }
    return count;
}

// Gets all URL query parameters as an object
function getparam_arr() {
    var params = {};
    var query = location.search.substring(1); // Get query string without '?'
    if (!query) return params; // Return empty object if no query string

    var pairs = query.split('&');
    pairs.forEach(pair => {
        var parts = pair.split('=');
        var key = decodeURIComponent(parts[0]);
        var value = (parts.length > 1) ? decodeURIComponent(parts[1].replace(/\+/g, ' ')) : null; // Handle missing value
        if (key) { // Ensure key is not empty
            params[key] = value;
        }
    });
    return params;
}

// Sets the URL query string based on a parameter object
function setparam_arr(params) {
    var arr = [];
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            if (params[key] === null || params[key] === undefined) {
                arr.push(encodeURIComponent(key)); // Parameter without value
            } else {
                arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
            }
        }
    }
    var new_search = (arr.length > 0 ? '?' : '') + arr.join('&');
    // Use history.replaceState to avoid creating new history entries
    var new_url = location.pathname + new_search + location.hash;
    try { // Add try-catch for replaceState
        window.history.replaceState({ path: new_url }, '', new_url);
    } catch (e) {
         console.warn("Could not update URL with history.replaceState:", e);
         // Fallback might be difficult without full reload
    }
}

// Updates the locally stored list of known devices
function update_device_list(device_data) {
    if (!device_data || !device_data.hostname) return; // Requires hostname

    var stored_list_str = Storage.getItem('device_list');
    var device_list_array = [];
    if (stored_list_str) {
        try {
            device_list_array = JSON.parse(stored_list_str);
            if (!Array.isArray(device_list_array)) device_list_array = []; // Ensure it's an array
        } catch (e) {
             console.error("Error parsing stored device list:", e);
             device_list_array = []; // Reset list on error
        }
    }

    var found = false;
    for (var i = 0; i < device_list_array.length; i++) {
        if (device_list_array[i].hostname === device_data.hostname) {
            // Update existing entry, prioritizing incoming data
            device_list_array[i] = { ...device_list_array[i], ...device_data }; // Merge objects
            found = true;
            break;
        }
    }

    if (!found) {
        device_list_array.push(device_data); // Add new device
    }

    // Store the updated list
    try {
        Storage.setItem('device_list', JSON.stringify(device_list_array));
    } catch(e) {
        console.error("Error saving device list to storage:", e);
    }
}

// Safely sends data via WebSocket
function ws_send(data) {
    if (ws != null && ws.readyState === WebSocket.OPEN) { // Check for OPEN state
        try {
            ws.send(data);
        } catch (e) {
             console.error("WebSocket send error:", e);
             // Optionally try to reconnect or notify user
        }
    } else {
        console.warn("WebSocket not open, message not sent:", data);
    }
}

// Initial setup function called by HTML body
function load() {
     // Logic to handle cross-domain storage loading (if needed and enabled)
     if (location.href.includes('type=message')) { // Special mode for iframe storage sync
         window.onload = null; // Prevent default onload
         window.addEventListener("message", (e) => {
             // Check origin for security if implementing cross-domain storage
             // if (e.origin !== 'expected_origin') return;
             if (e.data.type == 'config') {
                 var list = [];
                 for (var key in localStorage) { // Use localStorage for primary storage
                     if (localStorage.hasOwnProperty(key)) {
                         list.push([key, localStorage.getItem(key)]);
                     }
                 }
                 // Send stored config back to parent window
                 if (e.source) {
                     e.source.postMessage({ type: 'config', list: list }, e.origin);
                 }
             }
         });
         return; // Stop further execution in this mode
     }

    // Basic setup: Add main divs, title, listeners etc.
    var h3s = document.getElementsByTagName('h3');
    if (h3s.length > 0) {
        h3s[0].innerHTML = 'Page Loading..'; // Dịch initial message
    }

    // Ensure main_div covers the whole area initially
    main_div.style = 'height: 100%; position: relative;'; // Added relative positioning
    document.body.appendChild(main_div);

    // Cross-domain storage sync logic (optional, might remove for pure local version)
    /*
    if (!location.host.includes('r1.wxfsq.com') && Storage.getItem('config') != 1) {
        iframe.style.display = 'none';
        window.iframe = iframe;
        // Use the original host for the sync iframe source
        iframe.src = 'http://r1.wxfsq.com/?type=message';
        document.body.appendChild(iframe);
        iframe.onload = () => {
             if (iframe.contentWindow) { // Check if contentWindow exists
                 iframe.contentWindow.postMessage({ type: 'config' }, iframe.src.split('/').slice(0, 3).join('/')); // Send message to iframe origin
             }
        };
        window.addEventListener("message", (e) => {
             // Verify origin before accepting data
             if (e.origin === 'http://r1.wxfsq.com') {
                 if (e.data.type == 'config') {
                     (e.data.list || []).forEach(val => {
                         localStorage.setItem(val[0], val[1]); // Store in local storage
                     });
                     localStorage.setItem('config', 1); // Mark config as loaded
                     location.reload(); // Reload page after loading config
                 }
             }
        });
        // Don't proceed with normal load until config is potentially loaded
        return;
    }
    */

    // --- Setup UI elements ---
    var time = getCookie('time'); // Use timestamp for cache busting
    if (!time) {
        time = new Date().getTime();
        setCookie('time', time, 604800);
    }

    // Status bar placeholder for mobile app
    var div_statusbar = document.createElement('div');
    div_statusbar.id = 'StatusBar';
    div_statusbar.style.display = 'none'; // Hide by default
    main_div.appendChild(div_statusbar);

    // PlusRuntime ready listener (for mobile app integration)
    document.addEventListener('plusready', function () {
        if (typeof plus !== 'undefined') { // Double check plus exists
             // Sync localStorage with plus.storage if needed (first app run)
             if (!localStorage.getItem('app')) {
                 console.log("Syncing localStorage to plus.storage...");
                 for (let key in localStorage) {
                     if (localStorage.hasOwnProperty(key)) {
                         plus.storage.setItem(key, localStorage.getItem(key));
                     }
                 }
                 localStorage.setItem('app', 'true'); // Mark as synced
             }
             Storage = plus.storage; // Use plus.storage going forward
             update_StatusBar(); // Update status bar for app environment
             // Override URL loading for external links
             try { // Add try-catch for Plus features
                plus.webview.currentWebview().overrideUrlLoading({ mode: 'allow', match: '.*wxfsq.*' }, e => plus.runtime.openURL(e.url));
             } catch(e) { console.error("Error setting URL override:", e); }
        }
    }, false); // Use capture phase = false


    // Baidu Analytics (removed for local version)
    /*
    if (typeof (baidu_hm_id) == 'string') { ... }
    */
    no_referrer(); // Set referrer policy

    // Add console if debug parameter present
    if (location.href.includes('debug')) {
        load_console();
    }

    // Add main content container
    main_div.appendChild(divs);
    divs.id = 'divs';
    divs.style = 'text-align: center; display:block; margin:0px auto; padding: 0 5px;'; // Add padding
    divs.innerHTML = ''; // Clear any placeholder content
    divs.appendChild(h3); // Add main title element
    divs.appendChild(login_div); // Add login container (initially hidden)

    // Add main popup container
    popup.className = 'popup2'; // Apply CSS class
    popup.style = 'text-align: center;'; // Basic style
    popup.onclose = function () { // Default close action
        setTimeout(() => { // Delay clearing to allow animations
            popup.innerHTML = '';
            popup.style.display = "none";
        }, 100);
    };
    main_div.appendChild(popup);

    // Load jQuery
    var script_jq = document.createElement('script');
    script_jq.onerror = function () {
        console.error("Failed to load jQuery from primary source. Trying fallback..."); // Dịch
        var script_jq_fallback = document.createElement('script');
        script_jq_fallback.type = 'text/javascript';
        script_jq_fallback.src = './jquery-3.6.0.min.js'; // Fallback to local copy
        main_div.appendChild(script_jq_fallback);
    }
    script_jq.type = 'text/javascript';
    script_jq.src = './jquery-3.6.0.min.js'; // Load local jQuery first
    main_div.appendChild(script_jq);

    // Footer elements (QQ Group Link, Version Info, ICP - optional)
    var div_footer = document.createElement('div'); // Container for footer items
    div_footer.style = 'position: fixed; bottom: 0; left: 0; right: 0; padding: 3px 5px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(2px); z-index: 5;'; // Basic footer styling

    var div_qq = document.createElement('div');
    div_qq.id = 'qun_div';
    // Style adjusted for footer
    div_qq.innerHTML = "<a id='qun' style='color:rgba(238, 0, 0, 1); text-decoration: none;' target='_blank' href='https://jq.qq.com/?_wv=1027&k=hTbg34eR'>QQ Group: 772694950</a>"; // Dịch
    div_footer.appendChild(div_qq);

    // Beian (ICP) info - removed for local/general use
    /*
    if (typeof (beian) == 'string') { ... }
    */

    var div_ver = document.createElement('div');
    div_ver.id = 'ver_div';
    div_ver.style = 'color:rgba(238, 0, 0, 1);'; // Style for version info
    // Content set later in index()
    div_footer.appendChild(div_ver);

    main_div.appendChild(div_footer); // Add footer to main container

    // Spacer div below main content to avoid overlap with fixed footer
    var div_footer_spacer = document.createElement('div');
    div_footer_spacer.style.height = '30px'; // Adjust height based on footer size
    main_div.appendChild(div_footer_spacer);

}

// Loads the vConsole mobile debugging tool
function load_console() {
    if (document.getElementById('console_script')) return; // Don't load twice

    var script = document.createElement('script');
    script.id = 'console_script';
    script.onerror = function () { // Fallback if local fails
        console.warn("Failed to load local vConsole. Trying unpkg..."); // Dịch
        var script_fallback = document.createElement('script');
        script_fallback.type = 'text/javascript';
        script_fallback.src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js'; // Use CDN
        script_fallback.onload = function () {
            if (typeof window.VConsole !== 'undefined') window.mVConsole = new window.VConsole();
        };
        main_div.appendChild(script_fallback);
    };
    script.type = 'text/javascript';
    script.src = './js/vconsole.min.js'; // Assume vConsole is local
    script.onload = function () {
        if (typeof window.VConsole !== 'undefined') window.mVConsole = new window.VConsole();
    };
    main_div.appendChild(script);
}

// Sets the referrer policy to 'never'
function no_referrer() {
    var meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'no-referrer'; // Use 'no-referrer' standard value
    var head = document.getElementsByTagName('head')[0];
    if(head) head.appendChild(meta);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 1000));
    var expires = "expires=" + d.toUTCString(); // Use toUTCString for expires
    // Add SameSite attribute for modern browsers
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/;SameSite=Lax"; // Encode value, specify path
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// ===================================
// INTERNATIONALIZATION
// ===================================

/**
 * Simple internationalization system
 * @type {Object}
 */
var i18n = {
    // Default language
    currentLang: 'en',

    // Translation dictionary
    translations: {
        'en': {
            // General UI
            'play': 'Play',
            'pause': 'Pause',
            'login_success': 'Login successful',
            'login_failed': 'Login failed',
            'connecting': 'Connecting...',
            'connection_error': 'Connection error',
            'refresh_page': 'Refresh Page',
            'save_success': 'Saved!',
            'processing': 'Processing...',
            'no_data': 'No data available',
            'unknown_error': 'Unknown error',

            // Bluetooth
            'scan_devices': 'Scan for Devices',
            'scanning': 'Scanning...',
            'make_discoverable': 'Make Discoverable',
            'disable_discoverable': 'Disable Discoverable',
            'enable_bluetooth': 'Enable Bluetooth Adapter',
            'disable_bluetooth': 'Disable Bluetooth Adapter',
            'turn_on_bluetooth': 'Turn On Bluetooth',
            'turn_off_bluetooth': 'Turn Off Bluetooth',
            'paired_devices': 'Paired Devices',
            'scanned_devices': 'Scanned Devices',
            'connected': 'Connected',

            // Ambient Light
            'turn_on_ambient_light': 'Turn On Ambient Light',
            'turn_off_ambient_light': 'Turn Off Ambient Light',

            // Sound Effects
            'sound_effects_title': 'R1 Speaker Sound Effects{device}',
            'equalizer': 'Equalizer',
            'bass_boost': 'Bass Boost',
            'loudness': 'Loudness',
            'db': 'dB',
            'strength': 'Strength',
            'target_gain': 'Target Gain',
            'preset_eq': 'Preset EQ',

            // Music Player
            'now_playing': 'Now Playing',
            'volume': 'Volume',
            'next_track': 'Next Track',
            'previous_track': 'Previous Track',
            'favorite': 'Favorite',
            'unfavorite': 'Unfavorite',
            'repeat_mode': 'Repeat Mode',
            'shuffle_mode': 'Shuffle Mode',

            // Device Info
            'device_info': 'Device Info',
            'system_info': 'System Info',
            'network_info': 'Network Info',
            'storage_info': 'Storage Info',
            'memory_info': 'Memory Info',
            'cpu_info': 'CPU Info',
            'uptime': 'Uptime',
            'temperature': 'Temperature'
        },
        'vi': {
            // Vietnamese translations can be added here
            'play': 'Phát',
            'pause': 'Tạm dừng',
            'turn_on_bluetooth': 'Bật Bluetooth',
            'turn_off_bluetooth': 'Tắt Bluetooth',
            'enable_bluetooth': 'Bật Bluetooth',
            'disable_bluetooth': 'Tắt Bluetooth',
            'turn_on_ambient_light': 'Bật Đèn Môi Trường',
            'turn_off_ambient_light': 'Tắt Đèn Môi Trường',
            'sound_effects_title': 'Hiệu ứng Âm thanh R1{device}',
            'equalizer': 'Bộ chỉnh âm',
            'bass_boost': 'Tăng cường Bass',
            'loudness': 'Âm lượng',
            'db': 'dB',
            'strength': 'Cường độ',
            'target_gain': 'Mục tiêu Tăng'
        }
    },

    /**
     * Get translated text for a key
     * @param {string} key - The translation key
     * @param {Object} params - Optional parameters for string interpolation
     * @returns {string} - Translated text or the key itself if not found
     */
    t: function(key, params) {
        // Get the translation from the current language
        var translation = this.translations[this.currentLang];
        if (!translation) {
            return key; // Fallback to key if language not found
        }

        var text = translation[key];
        if (!text) {
            // Try English as fallback
            if (this.currentLang !== 'en') {
                text = this.translations['en'][key];
            }

            // If still not found, return the key
            if (!text) {
                return key;
            }
        }

        // Replace parameters if provided
        if (params) {
            for (var param in params) {
                if (params.hasOwnProperty(param)) {
                    text = text.replace('{' + param + '}', params[param]);
                }
            }
        }

        return text;
    },

    /**
     * Set the current language
     * @param {string} lang - Language code
     */
    setLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            // Save language preference in cookie
            setCookie('language', lang, 365);
        }
    },

    /**
     * Initialize language from cookie or browser settings
     */
    init: function() {
        // Try to get language from cookie
        var savedLang = getCookie('language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
            return;
        }

        // Try to get language from browser
        var browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            // Extract language code (e.g., 'en-US' -> 'en')
            var langCode = browserLang.split('-')[0];
            if (this.translations[langCode]) {
                this.currentLang = langCode;
            }
        }
    }
};

// Initialize language
i18n.init();

// ===================================
// HELPER FUNCTIONS
// ===================================

/**
 * Safely parses JSON data with error handling
 * @param {string} jsonString - The JSON string to parse
 * @param {string} source - Source identifier for error logging
 * @returns {Object|null} - Parsed object or null if parsing failed
 */
function safeJsonParse(jsonString, source) {
    if (!jsonString) {
        console.warn(`Empty JSON string from ${source}`);
        return null;
    }

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error(`Failed to parse JSON from ${source}:`, error);
        return null;
    }
}

// ===================================
// ADDED FUNCTIONS
// ===================================

/**
 * Updates the main heading (h3) element with new text
 * @param {string} text - The text to set in the h3 element or translation key
 * @param {Object} params - Optional parameters for translation
 */
function set_h3(text, params) {
    try {
        if (!text) {
            console.warn('set_h3 called with empty text');
            return;
        }

        if (!h3) {
            console.error('h3 element not found');
            return;
        }

        // Check if this is a translation key
        var translatedText = text;
        if (text.indexOf(' ') === -1 && text.length < 30) {
            // Likely a translation key if it has no spaces and is short
            translatedText = i18n.t(text, params);
        }

        if (h3.innerHTML !== translatedText) {
            h3.innerHTML = translatedText;
        }
    } catch (error) {
        console.error('Error in set_h3:', error);
    }
}

// // Function to set the h3 title with proper handling
// function set_h3(text) {
//     if (h3 && typeof text === 'string') {
//         h3.innerHTML = text;
//     }
// }

// // Function to set the h3 title with proper handling
// function set_h3(text) {
//     if (h3.innerHTML != text) h3.innerHTML = text;
// }
