const url = "http://mylogger.io/log";

function logMessage(message) {
  // Send an HTTP request
  console.log(message);
}

// add log to exports object
// module.exports.log = logMessage;

// changing export so that we can export this as a function instead of an object
module.exports = logMessage;
