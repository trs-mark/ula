Ti.include('tools.js');
Ti.include('conf.js');

var NavigationController = require('control/common/NavigationController').NavigationController;

var MainWindow = require('ui/MainWindow');

var controller = new NavigationController();
var baseWindow = new MainWindow(controller);

controller.open(baseWindow);