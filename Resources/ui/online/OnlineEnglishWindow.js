/*
 * Sample Window
 */
function OnlineEnglishWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'OnlineEnglish',
		backgroundColor: '#FFF'
	});
	
	var rootView = Titanium.UI.createView({
		top: 10, bottom: 10, left: 10, right: 10,
		backgroundColor: '#FFF',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var btnClose =Titanium.UI.createButton({
		title: 'Restore',
		color: 'black',
		height: 60,
		width: 100,
		top: 20,
	});
	
	btnClose.addEventListener('click',function(e){
		_c('btnClosed clicked');
		navController.back(1);
	});
	
	/*
	 * heirarchy
	 */
		
	win.add(rootView);
	win.rightNavButton = btnClose;
	
	return win;
}

module.exports = OnlineEnglishWindow;
