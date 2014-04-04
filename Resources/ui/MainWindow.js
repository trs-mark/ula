/*
 * Main Window
 */
function MainWindow(navController){
	var menuFont = {
		fontSize : '12dp',
		fontFamily : 'Helvetica Neue', 
		fontWeight: 'normal'
	};
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
    	barColor: '#C9516C',
    	barImage: 'ui/imgs/navbar.png',
    	title: 'ula menu',
    	color: '#FFF',
		navBarHidden: false
	});
	
	var rootView = Titanium.UI.createView({
		top: 0, bottom: 0, left: 0, right: 0,
		backgroundColor: '#D2CBD6',
		layout: 'horizontal'
	});
	var btnView=[];
	var btnOpen=[];
	var menuImg=[];
	var menu=[];
	/*
	 * components
	 */
	for(var i=1; i<7; i++){
		btnView[i] = Titanium.UI.createView({
			top: 20,
			left: 45,
			height: 110,
			width: 100
		});
		btnOpen[i] = Titanium.UI.createButton({
			backgroundColor: '#D2CBD6',
			backgroundImage: 'none',
			borderWidth: 1,
			borderRadius: 45,
			borderColor: '#C9516C',
			height: 90,
			width: 90,
			top: 0
		});

		menuImg[i] = Titanium.UI.createImageView({
			image: 'ui/imgs/menu'+i+'.png'
		});
		menu[1] = Titanium.UI.createLabel({
			text: 'コース一覧',
			bottom: 0,
			font: menuFont 
		});
		menu[2] = Titanium.UI.createLabel({
			text: 'お気に入り',
			bottom: 0,
			font: menuFont
		});
		menu[3] = Titanium.UI.createLabel({
			text: '学習履歴',
			bottom: 0,
			font: menuFont
		});
		menu[4] = Titanium.UI.createLabel({
			text: '学習進捗',
			bottom: 0,
			font: menuFont
		});
		menu[5] = Titanium.UI.createLabel({
			text: '設定',
			bottom: 0,
			font: menuFont
		});
		menu[6] = Titanium.UI.createLabel({
			text: 'abc-academy',
			bottom: 0,
			font: menuFont
		});
		
		rootView.add(btnView[i]);
		btnView[i].add(btnOpen[i]);
		btnOpen[i].add(menuImg[i]);
		btnView[i].add(menu[i]);
	}
	/*
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
	
	win.add(rootView);
	
	return win;
}

module.exports = MainWindow;
