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
		backgroundColor: 'gray',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	var tableData = [];
	var table = Titanium.UI.createTableView({
		height: 'auto'
	});
	
	var row1 = Titanium.UI.createTableViewRow({
		title: 'The goal of learning time time 1 week',
		backgroundColor: 'silver'
	});
	tableData.push(row1);
	
	var row2 = Titanium.UI.createTableViewRow({
		title: 'Voice',
		backgroundColor: 'silver'
	});
	tableData.push(row2);
	
	var row3 = Titanium.UI.createTableViewRow({
		title: 'Log out',
		backgroundColor: 'silver'
	});
	tableData.push(row3);
	
	var row4 = Titanium.UI.createTableViewRow({
		title: 'Reset of learning history    Run',
		backgroundColor: 'silver'
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
