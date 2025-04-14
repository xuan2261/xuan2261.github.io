	document.body.style = 'background-color:#A9D0F5;';
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'http://'+control_host+'/new_r1_control.css';
	document.getElementsByTagName("head")[0].appendChild(link);

	var script = document.createElement('script');
	script.onerror = function(){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://'+control_host+'/jquery-3.6.0.min.js';
		main_div.appendChild(script);
	}
    script.type = 'text/javascript';
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    document.getElementsByTagName("head")[0].appendChild(script);

	var config_wifi_div = document.createElement("div");
	config_wifi_div.style = 'text-align:center;';

	var h3 = document.createElement('h3');
	h3.style.color = 'rgba(238, 0, 0, 1)';
	h3.innerHTML = 'R1 Speaker Network Configuration';
	config_wifi_div.appendChild(h3);
	window.StatusBar_div = document.createElement("div");
	document.body.appendChild(StatusBar_div);
	document.body.appendChild(config_wifi_div);

	window.config_wifi_btn = null;
	window.timer = -1;
	load();

	document.addEventListener('plusready',function(){
		if(typeof(plus) != 'undefined'){
			if(plus.navigator.isImmersedStatusbar()){
				StatusBar_div.style.height = (parseInt(plus.navigator.getStatusbarHeight()/2)+5) + 'px';
			}
		}
	});

	function load(){
		window.tips = document.createElement('text');
		tips.id = 'text';
		tips.style = 'display:block; text-align:left; margin:10px auto; width:70%; height:200px; background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(0,160,255,1); border-radius:15px; overflow-x:hidden; overflow-y:auto;';
		tips.innerHTML = "<text>Network Configuration Steps:</text><br>";
		tips.innerHTML += "<text>1. Press and hold the top button of the speaker for 5 seconds until it prompts 'Starting network configuration' (and the white light at the bottom flashes).</text><br>";
		tips.innerHTML += "<text>2. Connect your device to the R1's WiFi hotspot (Phicomm_R1_XXXX).</text><br>";
		tips.innerHTML += "<text>3. Return to this page, enter the WiFi name and password you want to connect to, and click Start Configuration.</text><br>";
		tips.innerHTML += "<text>Please use a mobile phone to open this page for network configuration!</text><br>";

		var text = document.createElement('text');
		text.innerHTML = 'Tips:';
		config_wifi_div.appendChild(text);
		config_wifi_div.appendChild(document.createElement('div'));
		config_wifi_div.appendChild(tips);
		config_wifi_div.appendChild(document.createElement('div'));

		var text = document.createElement('text');
		text.innerHTML = 'Input:';
		config_wifi_div.appendChild(text);
		config_wifi_div.appendChild(document.createElement('div'));

		var text = document.createElement('text');
		text.innerHTML = 'WiFi:';
		config_wifi_div.appendChild(text);
		var ssid = document.createElement('input');
		ssid.type = 'text';
		ssid.id = 'ssid';
		ssid.className = 'input';
		ssid.style.width = '65%';
		ssid.value = sessionStorage.getItem('ssid');
		config_wifi_div.appendChild(ssid);

		config_wifi_div.appendChild(document.createElement('div'));

		var text = document.createElement('text');
		text.innerHTML = 'Encryption:';
		config_wifi_div.appendChild(text);
		var encryption = document.createElement('select');
		encryption.id = 'encryption';
		encryption.className = 'input';
		encryption.value = sessionStorage.getItem('secure');
		encryption.style.width = '65%';

		var encryptions = [['No Encryption','INSECURE'],['WEP Encryption','WEP'],['WPA Encryption','WPA']];

		for(var i=0;i<encryptions.length;i++){
			var option = document.createElement('option');
			option.innerHTML = encryptions[i][0];
			option.value = encryptions[i][1];
			encryption.appendChild(option);
		}

		encryption[encryptions.length-1].selected = true;

		for(var i in encryptions){
			if(encryptions[i][1] == sessionStorage.getItem('secure')){
				encryption[i].selected = true;
			}
		}

		config_wifi_div.appendChild(encryption);

		config_wifi_div.appendChild(document.createElement('div'));


		var text = document.createElement('text');
		text.innerHTML = 'Password:';
		config_wifi_div.appendChild(text);
		var password = document.createElement('input');
		password.type = 'text';
		password.id = 'password';
		password.className = 'input';
		password.style.width = '65%';
		password.value = sessionStorage.getItem('password');
		config_wifi_div.appendChild(password);

		config_wifi_div.appendChild(document.createElement('div'));

		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = 'Start Configuration';
		btn.id = 'config_wifi_btn';
		btn.onclick = function(){
			this.disabled = true;
			this.value = 'Sending network configuration...';
			var data = {
				ssid:ssid.value,
				secure:encryption.value,
				password:password.value,
				mac:''
			};

			sessionStorage.setItem('ssid',ssid.value);
			sessionStorage.setItem('secure',encryption.value);
			sessionStorage.setItem('password',password.value);

			var success = function(a,b){
				console.log(a);
				console.log(b);
			};
			var error = function(a,b){
				if(window.timer != -1){
					clearTimeout(window.time);
					window.time = -1;
					config_wifi_btn.value = 'Network configuration sent, please check if the configuration was successful!';
					alert(config_wifi_btn.value);
					setTimeout(function(){
						config_wifi_btn.disabled = false;
						config_wifi_btn.value = 'Start Configuration';
					},1000);
				}
			};
			window.timer = setTimeout(function(){
				if(configwifi_ajax.readyState == 1){
					window.timer = -1;
					config_wifi_btn.value = 'Configuration timeout, please check if you have connected to the R1 hotspot and turned off mobile data!';
					alert(config_wifi_btn.value);
					setTimeout(function(){
						config_wifi_btn.disabled = false;
						config_wifi_btn.value = 'Start Configuration';
					},1000);
					location.reload();
				}
			},3000);
			window.configwifi_ajax = $.ajax({type:'POST',url:'http://192.168.43.1:8989/api/configwifi',dataType:'json',data:JSON.stringify(data),success:success,error:error});
		};
		window.config_wifi_btn = btn;
		config_wifi_div.appendChild(btn);

		config_wifi_div.appendChild(document.createElement('br'));

		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = 'Return to Home';
		btn.onclick = function(){
			location.href = '../?no_auto_connect';
		};
		config_wifi_div.appendChild(btn);
	}