const url = "http://mylogger.io/log";

function logMessage(message) {
  // Send an HTTP request
  console.log(message);
}

// add log to exports object
module.exports.log = logMessage;
