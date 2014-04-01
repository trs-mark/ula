//global functions here

function _getDevIndex(){
	var dev_index = 0;
	if(ULA_IS_IPHONE){
		if(ULA_IS_IPHONE5){
			dev_index = 1;
		}else{
			dev_index = 0;
		}
	}else if(ULA_OSNAME === 'ipad'){
		dev_index = 2;
	}else if(ULA_IS_ANDROID){
		if (ULA_DEVICE_DP_HEIGHT >= 960 && ULA_DEVICE_DP_WIDTH >= 720){
			//xlarge
			dev_index = 6;
		}else if(ULA_DEVICE_DP_HEIGHT >= 640 && ULA_DEVICE_DP_WIDTH >= 480){
			//large
			dev_index = 5;
		}else if(ULA_DEVICE_DP_HEIGHT >= 470 && ULA_DEVICE_DP_WIDTH >= 320){
			//normal
			dev_index = 4;
		}else if(ULA_DEVICE_DP_HEIGHT >= 426 && ULA_DEVICE_DP_WIDTH >= 320){
			//small
			dev_index = 3;
		}else{
			_c('warning->screen class last option');
			//normal
			dev_index = 7;
		}
	}
	return dev_index;
}

//logs
function _c(msg){
	Titanium.API.info(new Date() + '-' + msg);
}

//alternative size control
function _s(sizesArray){
	return sizesArray[ULA_DEV_INDEX];
}

//is ios7
function _isIOS7Plus() {
	if (ULA_IS_IOS) {
		var version = ULA_PLATFORM_VERSION.split(".");
		var major = parseInt(version[0],10);
		// can only test this support on a 3.2+ device
		if (major >= 7) {
			return true;
		}
	}
	return false;
}