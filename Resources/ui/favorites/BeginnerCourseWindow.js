/*
 * Sample Window
 */
function BeginnerCourseWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'BeginnerCourseWindow',
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
		top: 5
	});
	
	
	/* Create row for tables */
	var row1 = Ti.UI.createTableViewRow({
		title : 'To hear a voice, please select the word in question',
		font: '10dp',
		backgroundColor: 'gray'
	});
	tableData.push(row1);
	var row2 = Ti.UI.createTableViewRow({
		title : 'Take the Japanese translation to sit.',
		font: '10dp',
		backgroundColor: 'gray'
	});
	tableData.push(row2);
	var row3 = Ti.UI.createTableViewRow({
		title : 'Please translated into English and a sit down.',
		font: '10dp',
		backgroundColor: 'gray'
	});
	tableData.push(row3);
	
	/*
	 * heirarchy
	 */
	
	table.setData(tableData);
	rootView.add(table);
	win.add(rootView);
	
	return win;
}

module.exports = BeginnerCourseWindow;
