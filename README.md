# Node.js Advanced Course

This repository contains code examples and implementations from an advanced Node.js course, focusing on design patterns and best practices.

## Project Structure

```
.
├── index.js              # Main application entry point
├── logger.js            # Base logger implementation
├── loggerFactory.js     # Factory pattern implementation for loggers
└── examples/            # Additional examples and implementations
```

## Features

- **Factory Pattern Implementation**: Demonstrates the use of the Factory pattern for creating different types of loggers
- **Logger System**: Implements a flexible logging system with:
  - Console Logger
  - File Logger
  - Base Logger functionality

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
node index.js
```

## Usage Examples

The project demonstrates how to use different types of loggers:

```javascript
const loggerFactory = require("./loggerFactory");

// Create a console logger
const consoleLogger = loggerFactory.createLogger("console");
consoleLogger.log("This is a console log message");

// Create a file logger
const fileLogger = loggerFactory.createLogger("file");
fileLogger.log("This is a file log message");
```

## Design Patterns

This project implements several important design patterns:

1. **Factory Pattern**: Used in `loggerFactory.js` to create different types of loggers
2. **Singleton Pattern**: Implemented in the base logger
3. **Strategy Pattern**: Demonstrated through different logging strategies

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
