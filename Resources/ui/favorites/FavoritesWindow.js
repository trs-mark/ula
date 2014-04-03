/*
 * Sample Window
 */
function FavoritesWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Favorites',
		backgroundColor: '#FFFFFF'
	});
	
	var rootView = Titanium.UI.createView({
		top: 0, bottom: 0, left: 0, right: 0,
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var tableData = [];
	var table = Titanium.UI.createTableView({
		color: 'gray',
		top: 5
	});
	
	
	/* Create row for tables */
	var row1 = Ti.UI.createTableViewRow({
		title : 'Beginner course ①',
		backgroundColor: 'gray'
	});
	tableData.push(row1);
	row1.addEventListener('click', function() {
		var BeginnerCourseWindow = require('ui/favorites/BeginnerCourseWindow');
		var beginnerCourseWindow = new BeginnerCourseWindow(navController);
		navController.open(beginnerCourseWindow);
	});
	var row2 = Ti.UI.createTableViewRow({
		title : 'number 2',
		backgroundColor: 'gray'
	});
	tableData.push(row2);
	row2.addEventListener('click', function() {
		
	});
	
	/*
	 * heirarchy
	 */
	
	table.setData(tableData);
	rootView.add(table);
	win.add(rootView);
	
	return win;
}

module.exports = FavoritesWindow;
