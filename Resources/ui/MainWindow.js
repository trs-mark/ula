/*
 * Main Window
 */
function MainWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		backgroundColor: '#4D4D4D',
		navBarHidden: true
	});
	
	var rootView = Titanium.UI.createView({
		top: 10, bottom: 10, left: 10, right: 10,
		backgroundColor: '#909090',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var lblTitle = Titanium.UI.createLabel({
		text: ULA_TITLE,
		color: 'black',
		font: ULA_FONT_A,
		top: 100
	});
	
	var btnOpen =Titanium.UI.createButton({
		title: 'Open',
		color: 'black',
		height: 60,
		width: 100,
		top: 20,
	});
	
	btnOpen.addEventListener('click',function(e){
		_c('btnOpen clicked');
		var SampleWindow = require('ui/SampleWindow');
		var sampleWindow = new SampleWindow(navController);
		navController.open(sampleWindow);
	});
	
	/*
	 * heirarchy
	 */
	
	rootView.add(lblTitle);
	rootView.add(btnOpen);
	
	win.add(rootView);
	
	return win;
}

module.exports = MainWindow;
