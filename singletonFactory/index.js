import LoggerFactory from './loggerFactory.js';
import Logger from './logger.js';

const loggerInstance = new Logger();

const loggerConsole = LoggerFactory.createLogger('console');

const loggerFile = LoggerFactory.createLogger('file');

loggerConsole.log('CONSOLE');

loggerFile.log('FILE');

console.log('--------------');

loggerInstance.getLogs().forEach(log => console.log(log));


