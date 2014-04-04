/*
 * 
 * Setting Window
 * 
 */
function SettingWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		backgroundColor: '#FFF',
		title: 'Learning Setting'
	});
	var rootView = Titanium.UI.createView({
		backgroundColor: "#FFF"
	});
	/*
	 * components
	 */
	var btnStartLearning = Titanium.UI.createButton({
		title: 'Learning Start',
		top: 100,
		backgroundColor: '#7B93AF',
		backgroundImage: 'none',
		color: '#FFF'
	});
	btnStartLearning.addEventListener('click' , function(e){
		var BeginnerCourse = require('ui/courses/BeginnerCourseOneWindow');
		var beginnerCourse = new BeginnerCourse(navController);
		navController.open(beginnerCourse);
	});
	
	var checkboxView1 = Titanium.UI.createView({
		top: 200,
		width: '100%',
		height: 50,
		backgroundColor: '#F5F5F5',
		layout: 'horizontal'
	});
	
	var label1 = Titanium.UI.createLabel({
		text: 'Only word test',
		color: '#B8B8B8',
		left: 5
	});
	var checkbox1 = Ti.UI.createButton({
	    title: '',
	    top: 10,
	    left: 10,
	    width: 30,
	    height: 30,
	    borderColor: '#666',
	    borderWidth: 2,
	    borderRadius: 3,
	    backgroundColor: '#FFF',
	    backgroundImage: 'none',
	    color: '#000',
	    font:{fontSize: 25, fontWeight: 'bold'},
	    value: false //value is a custom property in this casehere.
	});
	//Attach some simple on/off actions
	checkbox1.on = function() {
	    this.backgroundColor = '#FFF';
	    this.title='\u2713';
	    this.value = true;
	};
	 
	checkbox1.off = function() {
	    this.backgroundColor = '#FFF';
	    this.title='';
	    this.value = false;
	};
	checkbox1.addEventListener('click', function(e) {
	    if(false == e.source.value) {
	        e.source.on();
	    } else {
	        e.source.off();
	    }
	});
	/* for checkbox 2*/
	var checkboxView2 = Titanium.UI.createView({
		top: 251,
		width: '100%',
		height: 50,
		backgroundColor: '#F5F5F5',
		layout: 'horizontal'
	});
	
	var label2 = Titanium.UI.createLabel({
		text: 'You do not make an entry',
		color: '#B8B8B8',
		left: 5
	});
	var checkbox2 = Ti.UI.createButton({
	    title: '',
	    top: 10,
	    left: 10,
	    width: 30,
	    height: 30,
	    borderColor: '#666',
	    borderWidth: 2,
	    borderRadius: 3,
	    backgroundColor: '#FFF',
	    backgroundImage: 'none',
	    color: '#000',
	    font:{fontSize: 25, fontWeight: 'bold'},
	    value: false //value is a custom property in this casehere.
	});
	//Attach some simple on/off actions
	checkbox2.on = function() {
	    this.backgroundColor = '#FFF';
	    this.title='\u2713';
	    this.value = true;
	};
	 
	checkbox2.off = function() {
	    this.backgroundColor = '#FFF';
	    this.title='';
	    this.value = false;
	};
	checkbox2.addEventListener('click', function(e) {
	    if(false == e.source.value) {
	        e.source.on();
	    } else {
	        e.source.off();
	    }
	});
	
	/*
	 * heirarchy
	 */
	
	win.add(rootView);
	rootView.add(checkboxView1);
	rootView.add(checkboxView2);
	
	rootView.add(btnStartLearning);
	
	checkboxView1.add(checkbox1);
	checkboxView1.add(label1);
	checkboxView2.add(checkbox2);
	checkboxView2.add(label2);
	
	return win;
}
module.exports = SettingWindow;
