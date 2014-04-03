/*
 * 
 * Calendar window
 * 
 */

function CalendarWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Calendar',
		backgroundColor: '#FFF'
	});
	var rootView = Titanium.UI.createView({
		layout: 'vertical'
	});
	/*
	 * components
	 */
	var calLabel = Titanium.UI.createLabel({
		text: '< 2014年3月 >',
		top: 20
	});
	
	/*
	 * heirarchy
	 */
	
	win.add(rootView);
	
	rootView.add(calLabel);
	
	return win;
}

module.exports = CalendarWindow;
