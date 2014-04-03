/*
 * 
 *  Course By Window
 * 
 */
function CourseByWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		title: 'Learning History',
		top: ULA_WIN_TOP,
		backgroundColor: '#FFF'
	});
	var rootView = Titanium.UI.createView({
		backgroundColor: '#9F9F9F',
		layout: 'vertical'
	});
	/*
	 * components
	 */
	var tableData = [];
	var table = Titanium.UI.createTableView({
		top: 6 , left: 2 , right: 2
	});
	
	var course1 = Titanium.UI.createTableViewRow({
		title: 'Advanced course ①',
		color: 'gray'
	});
	tableData.push(course1);
	course1.addEventListener('click' , function(e){
		var History = require('ui/history/HistoryWindow');
		var history = new History(navController);
		navController.open(history);
	});
	
	var course2 = Titanium.UI.createTableViewRow({
		title: 'Advanced course ①',
		color: 'gray'
	});
	tableData.push(course2);
	
	var course3 = Titanium.UI.createTableViewRow({
		title: 'Advanced course ②',
		color: 'gray'
	});
	tableData.push(course3);
	/*
	 * heirarchy
	 */
	
	win.add(rootView);
	
	table.setData(tableData);
	rootView.add(table);
	
	return win;
}

module.exports = CourseByWindow;
