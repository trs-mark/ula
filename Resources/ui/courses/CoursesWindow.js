/*
 * Sample Window
 */
function CoursesWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Courses',
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
	
	var btnRestore =Titanium.UI.createButton({
		title: 'Restore',
		color: 'black',
		height: 60,
		width: 100,
		top: 20,
	});
	/* Alert for Restore button */
	var alertRestore = Titanium.UI.createAlertDialog({
			title: 'AlertDialog',
			message: "this is the alert dialog",
			buttonNames: ['Yes','No']
		});
	btnRestore.addEventListener('click',function(e){
		alertRestore.show();
	});
	
	var tableData = [];
	var table = Titanium.UI.createTableView({});
	
	var row1 = Titanium.UI.createTableViewRow({
		title: 'number 1'
	});
	tableData.push(row1);
	row1.addEventListener('click' , function(e){
		var CourseDetailsWindow = require('ui/courses/CourseDetailsWindow');
		var courseDetails = new CourseDetailsWindow(navController);
		navController.open(courseDetails);
	});
	
	/*
	 * heirarchy
	 */
	
	table.setData(tableData);
	rootView.add(table);
	
	win.add(rootView);
	win.rightNavButton = btnRestore;
	
	return win;
}

module.exports = CoursesWindow;
