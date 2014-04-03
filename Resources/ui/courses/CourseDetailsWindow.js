/*
 * 
 * Course details window
 * 
 */
function CourseDetailsWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Course Details',
		backgroundColor: '#FFF'
	});
	
	var rootView = Titanium.UI.createView({
		top: 10, bottom: 10, left: 10, right: 10,
		backgroundColor: '#FFF',
		layout: 'vertical'
	});
	
	var buyView = Titanium.UI.createView({
		top: '-10dp', bottom: 0 , left: 0 , right: 0,
		backgroundColor: 'gray',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var btnLearningSetting =Titanium.UI.createButton({
		title: 'Learning Setting',
		color: 'black',
		height: 30,
		width: 150,
		top: 15,
	});
	btnLearningSetting.addEventListener('click',function(e){
		var Setting = require('ui/courses/SettingWindow');
		var setting = new Setting(navController);
		navController.open(setting);
	});
	var btnBuy = Titanium.UI.createButton({
		title: 'Buy',
		top: 30,
		width: 80,
		height: 30,
		color: 'white',
		backgroundColor: 'red',
    	backgroundImage: 'none'
	});
	var buyAlert = Titanium.UI.createAlertDialog({
		message: 'Are you sure?',
		buttonNames: ['Purchase' , 'Cancel']
	});
	btnBuy.addEventListener('click' , function(e){
		buyAlert.show();
	});
	
	/*
	 * heirarchy
	 */
		
	win.add(rootView);
	
	rootView.add(btnLearningSetting);
	rootView.add(btnBuy);
	rootView.add(buyView);
	
	return win;
}
module.exports = CourseDetailsWindow;
