class DataService {
  processData(data) {
    return data.map((item) => item * 2);
  }
}

// Decorator
class DataServiceWithLogging {
  constructor(dataService, logger) {
    this.dataService = dataService;
    this.logger = logger;
  }

  processData(data) {
    this.logger.log('Processing data', data);
    const result = this.dataService.processData(data);
    this.logger.log('Processed data', result);
    return result;
  }
}

class Logger {
  log(message) {
    console.log(`[Logger] ${message}`);
  }
}

const dataService = new DataService();
const logger = new Logger();
const dataServiceWithLogging = new DataServiceWithLogging(dataService, logger);

const data = [1, 2, 3, 4, 5];
const result = dataServiceWithLogging.processData(data);
console.log(result);
