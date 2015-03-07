var moment = require('../moment');
var util = require('util');




var myLogger = function(log, filename) {
	this._filename = filename;
	this._log = log;
}

function getLogMessage(logLevel, filename, args) {
	return util.format(
		'[%s] [%s] %s - %s',
		moment().format(),
		logLevel.toUpperCase(),
		filename,
		util.format.apply(null, args)
	);
}

myLogger.prototype.trace = function() { this._log.trace(getLogMessage('trace', this._filename, arguments)); }
myLogger.prototype.debug = function() { this._log.debug(getLogMessage('debug', this._filename, arguments)); }
myLogger.prototype.info = function() { this._log.info(getLogMessage('info', this._filename, arguments)); }
myLogger.prototype.warn = function() { this._log.warn(getLogMessage('warn', this._filename, arguments)); }
myLogger.prototype.error = function() { this._log.error(getLogMessage('error', this._filename ,arguments)); }



module.exports = myLogger;

