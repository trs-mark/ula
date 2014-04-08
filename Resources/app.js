
Ti.include('tools.js');
Ti.include('conf.js');

(function(){
	var NavigationWindowController = require('control/common/NavigationWindowController').NavigationWindowController;
	
	var MainWindow = require('ui/MainWindow');
	
	var controller = new NavigationWindowController();
	var baseWindow = new MainWindow(controller);
	
	controller.open(baseWindow);
})();