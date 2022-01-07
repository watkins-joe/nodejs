const url = "http://mylogger.io/log";

function logMessage(message) {
  // Send an HTTP request
  console.log(message);
}

// module.exports is the commonJS format of exporting

// add log to exports object
module.exports.log = logMessage;

// add url to exports object
module.exports.endPoint = url;
