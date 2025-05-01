const Logger = require('./logger')

const loggerInstance = new Logger();

class ConsoleLogger {
  constructor() {
    this.logger = loggerInstance;
  }

  log(message) {
    console.log(`Using consoleLogger`);

    console.log(`ConsoleLogger: ${message}`);

    this.logger.log(message);
  }
}

class FileLogger {
  constructor() {
    this.logger = loggerInstance;
  }

  log(message) {
    console.log(`Using FileLogger`);

    console.log(`FileLogger: ${message}`);

    this.logger.log(message);
  }
}

class LoggerFactory {
  static createLogger(type) {
    if (type === 'console') {
      return new ConsoleLogger();
    } else if (type === 'file') {
      return new FileLogger();
    } else {
      throw new Error('Invalid logger type')
    }
  }
}

module.exports = LoggerFactory;