// creating a module

// imagine we are going to send an http request to the url we defined in logger.js

// we need to be able to call the function logMessage in this file, we have to make it 'public'

// in the Module object we saw last lecture, we notice that the Module object has a property called 'exports'.

const log = require("./first-app/logger.js");

log("hello");
