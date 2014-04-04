/*
 * Sample Window
 */
function ProgressWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Progress',
		backgroundColor: '#FFF'
	});
	
	var rootView = Titanium.UI.createView({
		top: 15, bottom: 0, left: 10, right: 10,
		backgroundColor: '#F5F5F5',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var lblTitle = Titanium.UI.createLabel({
		text: 'Weekly learning progress \n\n1h14m32s / 5h',
		color: '#D8D8D8',
		top: 15
	});
	
	var btnCal =Titanium.UI.createButton({
		title: 'Calendar',
		color: 'black',
		height: 60,
		width: 100,
		top: 20,
	});
	
	btnCal.addEventListener('click',function(e){
		_c('btnCal clicked');
		var Calendar = require('ui/progress/CalendarWindow');
		var calendar = new Calendar(navController);
		navController.open(calendar);
	});
	
	/*
	 * heirarchy
	 */
	
	rootView.add(lblTitle);
	
	win.add(rootView);
	win.rightNavButton = btnCal;
	
	return win;
}

module.exports = ProgressWindow;
