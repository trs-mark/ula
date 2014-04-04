/*
 * Setting Window
 */
function SettingsWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		title: 'Settings',
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
	var tableData = [];
	var table = Titanium.UI.createTableView({
		height: 140,
		borderWidth: 1,
		borderColor: '#DADADA',
		backgroundColor: '#DADADA',
		scrollable: false
	});
	
	var row1 = Titanium.UI.createTableViewRow({
		title: 'The goal of learning time time 1 week',
		backgroundColor: '#FFF',
		height: 35
	});
	tableData.push(row1);
	
	var row2 = Titanium.UI.createTableViewRow({
		title: 'Voice',
		backgroundColor: '#FFF',
		height: 35
	});
	tableData.push(row2);
	
	var row3 = Titanium.UI.createTableViewRow({
		title: 'Log out',
		backgroundColor: '#FFF',
		height: 35
	});
	tableData.push(row3);
	
	var row4 = Titanium.UI.createTableViewRow({
		title: 'Reset of learning history    Run',
		backgroundColor: '#FFFF',
		height: 35
	});
	tableData.push(row4);
	/*
	 * heirarchy
	 */
	
	table.setData(tableData);
	rootView.add(table);
	
	win.add(rootView);
	
	return win;
}

module.exports = SettingsWindow;
