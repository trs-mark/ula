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
		backgroundColor: '#F5F5F5',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	
	var btnRestore =Titanium.UI.createButton({
		title: 'Restore',
		color: 'black',
		backgroundColor: '#225CE0',
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
	
	var row = [];
	for(var i=0; i<10; i++){
		row[i] = Titanium.UI.createTableViewRow({
			title: 'number 1',
			color: '#E3E3E3'
		});
		tableData.push(row[i]);
		row[i].addEventListener('click' , function(e){
			var CourseDetailsWindow = require('ui/courses/CourseDetailsWindow');
			var courseDetails = new CourseDetailsWindow(navController);
			navController.open(courseDetails);
		});
	}
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
