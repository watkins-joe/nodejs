console.log(__filename); // /Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/first-app/logger.js
console.log(__dirname); // /Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/first-app

// __filename is the directory of where the file is located

// __dirname is the parent directory of there the file is located.

const url = "http://mylogger.io/log";

function logMessage(message) {
  // Send an HTTP request
  console.log(message);
}

// add log to exports object
// module.exports.log = logMessage;

// changing export so that we can export this as a function instead of an object
module.exports = logMessage;
