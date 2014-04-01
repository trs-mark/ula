//global variables here

//identify device platform
const ULA_VERSION = Titanium.App.version;
const ULA_PLATFORM = Titanium.Platform.name;
const ULA_PLATFORM_VERSION = Titanium.Platform.version;
const ULA_OSNAME = Titanium.Platform.osname;
const ULA_DEV_H = Titanium.Platform.displayCaps.platformHeight;
const ULA_DEV_W = Titanium.Platform.displayCaps.platformWidth;

const ULA_IS_ANDROID = (ULA_OSNAME==='android');
const ULA_ANDROID_API_LEVEL = (ULA_IS_ANDROID)?Titanium.Platform.Android.API_LEVEL:false; //refer to http://en.wikipedia.org/wiki/Android_version_history (gingerbread 9-10, ICS 14-15, JB 16-18, KitKat 19)

const ULA_IS_IOS = (ULA_PLATFORM == 'iPhone OS');
const ULA_IS_IOS7 = _isIOS7Plus();
const ULA_IS_IPHONE = (ULA_OSNAME==='iphone');
const ULA_IS_IPAD = (ULA_OSNAME==='ipad');

const ULA_IS_IPHONE5 = (ULA_IS_IPHONE&&ULA_DEV_H==568&&ULA_DEV_W==320);
const ULA_IS_ANDROID_NEXUS=(ULA_IS_ANDROID&&ULA_DEV_H==1205&&ULA_DEV_W==800);

//size class resolution
const ULA_DEVICE_DP_WIDTH = ULA_DEV_W / (Titanium.Platform.displayCaps.dpi / 160);
const ULA_DEVICE_DP_HEIGHT = ULA_DEV_H / (Titanium.Platform.displayCaps.dpi / 160);

//device category index
const ULA_DEV_INDEX = _getDevIndex();

const ULA_WIN_TOP = ULA_IS_IOS7 ? 20 : 0;
const ULA_TITLE = "ULA APP";

const ULA_FONT_A = {
	fontSize : _s(['30dp','30dp','50dp','30dp','30dp','40dp','50dp','30dp']),
	fontFamily : 'Helvetica Neue', 
	fontWeight: 'bold'
};
