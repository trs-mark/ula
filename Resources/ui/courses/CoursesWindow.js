/*
 * Sample Window
 */
function CoursesWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
    	barColor: '#C9516C',
    	barImage: 'ui/imgs/navbar.png',
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
	var table = Titanium.UI.createTableView({
		separatorColor: 'transparent'
	});
	
	var row = [];
	for(var i=0; i<6; i++){
		row[i] = Titanium.UI.createTableViewRow({
			title: '初心者コース②　[未購入]  詳細＞',
			color: '#949494',
			font: {
				fontSize: '15dp',
				fontWeight: 'bold',
				fontFamily: 'Helvetica Neue'
			}
		});
		tableData.push(row[i]);
		row[i].addEventListener('click' , function(e){
			var CourseDetailsWindow = require('ui/courses/CourseDetailsWindow');
			var courseDetails = new CourseDetailsWindow(navController);
			navController.open(courseDetails);
		});
	}
	
	var backBtn = Titanium.UI.createButton({
		title: '戻る',
		backgroundImage: 'none',
		backgroundColor: '#ef6e8a',
		width: 50
	});
	backBtn.addEventListener('click',function(e){
		navController.back(1);
	});
	/*
	 * heirarchy
	 */
	
	table.setData(tableData);
	rootView.add(table);
	
	win.add(rootView);
	win.rightNavButton = btnRestore;
	win.leftNavButton = backBtn;
	
	return win;
}

module.exports = CoursesWindow;
