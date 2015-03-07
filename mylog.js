var log = require('../loglevel');
var myLogger = require('./myLogger.js');


var mylog = function() {
}


mylog.setup = function(level) {

	switch(level) {
		case 'trace':
		case 'debug':
		case 'log':
		case 'info':
		case 'warn':
		case 'error':
			log.setLevel(level);
			break;

		case 'all':
			log.enableAll();
			break;
		
		case 'none':
			log.disableAll();
			break;
	}
}


mylog.getLogger = function(filename) {
	return new myLogger(log, filename);
}



module.exports = mylog;

