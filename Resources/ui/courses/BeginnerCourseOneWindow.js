/*
 * 
 * Beginner Course One Window
 * 
 */
function BeginnerCourseOneWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		backgroundColor: '#FFF',
		title: 'Beginner Course 1'
	});
	var rootView = Titanium.UI.createView({
		backgroundColor: "#FFF"
	});
	/*
	 * components
	 */
	var progresSection = Titanium.UI.createView({
		layout: 'horizontal'
	});
	
	var progressBar = Titanium.UI.createView({
		width: '80%',
		height: 20,
		top: 5,
		left: 10,
		backgroundColor: 'green'
	});
	
	var percent = Titanium.UI.createView({
		width: '10%',
		height: 20,
		left: 10,
		top: 5,
		backgroundColor: 'gray',
		color: '#FFF'
	});
	
	var prcntLabel = Titanium.UI.createLabel({
		text: '40%'
	});
	
	var info = Titanium.UI.createView({
		backgroundColor: 'gray',
		height: 60,
		width: '80%',
		top: 30
	});
	
	var question = Titanium.UI.createView({
		backgroundColor: 'gray',
		height: 60,
		width: '85%',
		top: 120,
		right: 30
	});
	
	var choices = Titanium.UI.createView({
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: 'gray',
		left: 10,
		top: 230,
		right: 5,
		height: 120,
		layout: 'vertical'
	});
	
	var checkbox = Ti.UI.createButton({
	    title: '',
	    top: 3,
	    left: 10,
	    width: 20,
	    height: 20,
	    borderColor: '#666',
	    borderWidth: 2,
	    borderRadius: 3,
	    backgroundColor: '#aaa',
	    backgroundImage: 'none',
	    color: '#fff',
	    font:{fontSize: 25, fontWeight: 'bold'},
	    value: false //value is a custom property in this casehere.
	});
	//Attach some simple on/off actions
	checkbox.on = function() {
	    this.backgroundColor = '#007690';
	    this.title='\u2713';
	    this.value = true;
	};
	 
	checkbox.off = function() {
	    this.backgroundColor = '#aaa';
	    this.title='';
	    this.value = false;
	};
	checkbox.addEventListener('click', function(e) {
	    if(false == e.source.value) {
	        e.source.on();
	    } else {
	        e.source.off();
	    }
	});
	
	var row1 = Titanium.UI.createView({
		color: '#000',
		backgroundColor: 'white',
		height: 30,
		width: '100%',
		layout: 'horizontal'
	});
	
	var lbl1 = Titanium.UI.createLabel({
		text: '  red',
		color: '#000'
	});
	
	var row2 = Titanium.UI.createView({
		color: '#000',
		backgroundColor: 'white',
		height: 30,
		width: '100%',
		layout: 'horizontal'
	});
	
	var lbl2 = Titanium.UI.createLabel({
		text: '  red',
		color: '#000'
	});
	
	var row3 = Titanium.UI.createView({
		color: '#000',
		backgroundColor: 'white',
		height: 30,
		width: '100%',
		layout: 'horizontal'
	});
	
	var lbl3 = Titanium.UI.createLabel({
		text: '  red',
		color: '#000'
	});
	
	var row4 = Titanium.UI.createView({
		color: '#000',
		backgroundColor: 'white',
		height: 30,
		width: '100%',
		layout: 'horizontal'
	});
	
	var lbl4 = Titanium.UI.createLabel({
		text: '  red',
		color: '#000'
	});
	
	/*
	 * heirarchy
	 */
	
	win.add(rootView);
	
	rootView.add(progresSection);
	rootView.add(info);
	rootView.add(question);
	rootView.add(choices);
	
	progresSection.add(progressBar);
	progresSection.add(percent);
	
	percent.add(prcntLabel);
	
	choices.add(row1);
	choices.add(row2);
	choices.add(row3);
	choices.add(row4);
	
	row1.add(checkbox);
	row1.add(lbl1);
	row2.add(checkbox);
	row2.add(lbl2);
	row3.add(checkbox);
	row3.add(lbl3);
	row4.add(checkbox);
	row4.add(lbl4);
	
	
	
	return win;
}
module.exports = BeginnerCourseOneWindow;
