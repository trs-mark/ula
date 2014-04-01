/**
 * Use to control the navigation group
 */
exports.NavigationController = function() {
	this.windowStack = [];
};

/**
 * Use to open a navGroup
 */
exports.NavigationController.prototype.open = function(windowToOpen, args) {
	this.windowStack.push(windowToOpen);
	
	windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;
	
	if(this.windowStack.length === 1) {
		if(Ti.Platform.osname === 'android') {
			windowToOpen.exitOnClose = true;
			windowToOpen.open();
		}
		else {
			this.navGroup = Ti.UI.iPhone.createNavigationGroup({
				window: windowToOpen,
			});
			
			var containerWindow = Ti.UI.createWindow({
				backgroundColor : '#E83828'
			});
			containerWindow.add(this.navGroup);
			containerWindow.open();
		}
	}
	else {
		if(Ti.Platform.osname === 'android') {
			windowToOpen.navBarHidden = true;
			windowToOpen.open({		
			    activityEnterAnimation: Ti.App.Android.R.anim.slide_in_right,
			    activityExitAnimation: Ti.App.Android.R.anim.slide_out_left
			});
		}
		else {
			this.navGroup.open(windowToOpen, args);
		}
	}
};

/**
 * Resets the navGroup
 * @param {Object} window
 */
exports.NavigationController.prototype.home = function(homeWindow) {
	
	var windows = this.windowStack.concat([]);
	for(var i = 1, l = windows.length; i < l; i++) {
		(this.navGroup) ? this.navGroup.close(windows[i]) : windows[i].close();
		(this.windowStack).splice(i, 1);
	}
};

/**
 * 
 */
exports.NavigationController.prototype.back = function(limit, windowToBack) {
	
	var windows = this.windowStack.concat([]);
	var len  = (windows.length) - 2;
	
	for(var i = 1, l = limit; i < l; i++) {
		
		(this.navGroup) ? this.navGroup.close(windows[len], {animated:false}) : windows[len].close();
		(this.windowStack).splice(len, 1);
		len--;
	}
	
	var newWindows = this.windowStack.concat([]);
	var base  = (newWindows.length) - 1;
	(this.navGroup) ? this.navGroup.close(newWindows[base]) : newWindows[base].close();
	(this.windowStack).splice(base, 1);
};