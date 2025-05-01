const loggerFactory = require('./loggerFactory')

const logger = require('./logger')
const loggerInstance = new logger()

const loggerConsole = loggerFactory.createLogger('console')

const loggerFile = loggerFactory.createLogger('file')

loggerConsole.log('CONSOLE')

loggerFile.log('FILE')

console.log('--------------')

loggerInstance.getLogs().forEach(log => console.log(log))


