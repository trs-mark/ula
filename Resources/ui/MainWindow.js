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
		top: 0, bottom: 0, left: 0, right: 0,
		backgroundColor: '#FFFFFF'/*909090*/,
		layout: 'horizontal'
	});
	
	/*
	 * components
	 */
	var lblTitle = Titanium.UI.createLabel({
		text: ULA_TITLE,
		color: 'white',
		backgroundColor: 'blue',
		font: ULA_FONT_A,
		top: 0,
		height: '40',
		width: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var btnOpen1 =Titanium.UI.createButton({
		title: 'Courses',
		color: 'white',
		backgroundColor: 'gray',
    	backgroundImage: 'none',
		height: 65,
		width: 130,
		top: 30,
		left: 10
	});
	var btnOpen2 =Titanium.UI.createButton({
		title: 'Favorites',
		color: 'black',
		height: 65,
		width: 130,
		top: 30,
		right: 10
	});
	var btnOpen3 =Titanium.UI.createButton({
		title: 'History',
		color: 'black',
		height: 65,
		width: 130,
		top: 30,
		left: 10
	});
	var btnOpen4 =Titanium.UI.createButton({
		title: 'Progress',
		color: 'black',
		height: 65,
		width: 130,
		top: 30,
		right: 10
	});
	var btnOpen5 =Titanium.UI.createButton({
		title: 'Setting',
		color: 'black',
		height: 65,
		width: 130,
		top: 30,
		left: 10
	});
	var btnOpen6 =Titanium.UI.createButton({
		title: 'Online English',
		color: 'black',
		height: 65,
		width: 130,
		top: 30,
		right: 10
	});
	
	btnOpen1.addEventListener('click',function(e){
		_c('btnOpen1 clicked');
		var CoursesWindow = require('ui/courses/CoursesWindow');
		var coursesWindow = new CoursesWindow(navController);
		navController.open(coursesWindow);
	});
	btnOpen2.addEventListener('click',function(e){
		_c('btnOpen2 clicked');
		var FavoritesWindow = require('ui/favorites/FavoritesWindow');
		var favoritesWindow = new FavoritesWindow(navController);
		navController.open(favoritesWindow);
	});
	btnOpen3.addEventListener('click',function(e){
		_c('btnOpen3 clicked');
		var HistoryWindow = require('ui/history/HistoryWindow');
		var historyWindow = new HistoryWindow(navController);
		navController.open(historyWindow);
	});
	btnOpen4.addEventListener('click',function(e){
		_c('btnOpen4 clicked');
		var ProgressWindow = require('ui/progress/ProgressWindow');
		var progressWindow = new ProgressWindow(navController);
		navController.open(progressWindow);
	});
	btnOpen5.addEventListener('click',function(e){
		_c('btnOpen5 clicked');
		var SettingsWindow = require('ui/setting/SettingsWindow');
		var settingsWindow = new SettingsWindow(navController);
		navController.open(settingsWindow);
	});
	btnOpen6.addEventListener('click',function(e){
		_c('btnOpen6 clicked');
		var OnlineEnglishWindow = require('ui/online/OnlineEnglishWindow');
		var onlineEnglishWindow = new OnlineEnglishWindow(navController);
		navController.open(onlineEnglishWindow);
	});
	
	/*
	 * heirarchy
	 */
	
	rootView.add(lblTitle);
	rootView.add(btnOpen1);
	rootView.add(btnOpen2);
	rootView.add(btnOpen3);
	rootView.add(btnOpen4);
	rootView.add(btnOpen5);
	rootView.add(btnOpen6);
	
	win.add(rootView);
	
	return win;
}

module.exports = MainWindow;
