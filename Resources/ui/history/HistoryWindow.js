/*
 * Sample Window
 */
function HistoryWindow(navController){
	/*
	 * essentials
	 */
	var win = Titanium.UI.createWindow({
		top: ULA_WIN_TOP,
		backgroundColor: '#FFF',
		title: 'History'
	});
	
	var rootView = Titanium.UI.createView({
		top: 20 , right: 10, left: 10, bottom: 0,
		backgroundColor: '#9F9F9F',
		layout: 'vertical'
	});
	
	/*
	 * components
	 */
	
	var btnbyCourse =Titanium.UI.createButton({
		title: 'Course by',
		color: 'black',
		height: 60,
		width: 100,
		top: 20,
	});
	
	btnbyCourse.addEventListener('click',function(e){
		_c('btnbyCourse clicked');
		var CourseWindow = require('ui/history/CourseByWindow');
		var courseWindow = new CourseWindow(navController);
		navController.open(courseWindow);
	});
	
	var wordCount = Titanium.UI.createLabel({
		text: 'Word Count: 300/1000 ',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: 'white',
		top: 10
	});
	var numQuestions = Titanium.UI.createLabel({
		text: 'Number of questions: 2500/4000 ',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: 'white'
	});
	var achRate = Titanium.UI.createLabel({
		text: 'Achievement rate: 85%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: 'white',
		top: 10
	});
	
	var tableData = [];
	var table = Titanium.UI.createTableView({
		top: 110,
		backgroundColor: 'gray',
		width: '100%',
		height: 200
	});
	
	var learningTime = Titanium.UI.createLabel({
		text: 'Learning time \n12 hours 22 minutes',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: 'white',
		top: 230
	});
	
	/*
	 * heirarchy
	 */
	
	rootView.add(wordCount);
	rootView.add(numQuestions);
	rootView.add(achRate);
	
	win.add(rootView);
	win.add(table);
	win.rightNavButton = btnbyCourse;
	
	rootView.add(learningTime);
	
	return win;
}

module.exports = HistoryWindow;
