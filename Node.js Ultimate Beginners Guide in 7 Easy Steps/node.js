// node js in 7 easy steps

// 1. what is node js?

// a runtime that allows you to run JS on a server

// what can node do?

// when we visit a URL that points to a server, we can use Node to handle the request and serve an html file from the file system, and then respond back to the client so that they can view the HTML in the browser

// 2. how to install node?

// node -v, checks if node is installed

// 3. hello world

// type 'node' into the console, it will allow you to run JS code in the console and will print our the results

// the default entry into a node.js app is the index.js file

// run js files with node using "node <fileName>"

// 4. node runtime

// in most ways, JS works the same way it does in the browser, as it does with node.js

// there are some important differences to know about

/**
 * 1.) node has a handful of idenfitiers
 * - console: we've already used this to log out values to the terminal
 * - global: a namespace that is available throughout the entire node process. for example:
 * console.log(global.luckyNum);
 *
 * global.luckyNum = '23';
 *
 * console.log(global.luckyNum); // 23
 *
 * 'global' can be best compared to the 'window' object in the browser.
 *
 * - process: gives you access to the currently running node process. you might use it to check the current platform or OS, or grab an environment variable from the server.
 */

// 5. events

// often hear people describe it as an "asynchronous, event-driven JS runtime"

// the runtime implements something called the event loop, just like a web browser does. allows node to push intensive operations off to a separate thread, so only very fast non-blocking operations happen on the MAIN thread.

// this is why people call node NON-BLOCKING

// it's a design choice that makes node VERY suitable for high thru-put, like real-time applications, web servers, and things ike that.

// how does that affect me as a programmer?

// normally, you don't have to think about the low level details. you just need to know how events and callbacks work.

// and in most cases, you'll listen to events.

// events can come in many forms, but one example is on the process global we looked at earlier.

// because a node process finishes, it emits an event named 'exit'. we can listen to this event using 'on' and then register a callback function as the second argument.

// when the 'exit' event occurs, node.js will call this function.

/**
 * process.on('exit', function() {
 *  console.log('hi');
 * })
 */

// that event is build into node by default, but you can also create your own from scratch

// for that, you will want to import EventEmitter from the events module that is build into node.

/**
 * const { EventEmitter } = require('events');
 *
 * const eventEmitter = new EventEmitter();
 * // can create a custom eventEmitter by instantiating the class.
 *
 * then, we register a callback that fire on the 'lunch' event.
 *
 * with that, you can then call emit() on that eventEmitter with the event name you are listening for, and that triggers your callback function to run.
 *
 * the event-driven style of programming is useful for when you have something that is CPU intensive.
 *
 */

// 6. file system

// node has a build in file system module called 'fs'. it can read, write, and delete files on the file system among other things.

// can also do things in a blocking or non-blocking way.

// any time you see a function that ends in 'sync', think of 'BLOCKING' behavior

// in other words, it will need to finish all of its work before your other code can run

// we can read a text file in node by passing the path to that file, and then specify the encoding as 'utf8'

// reading a file may take a while, especially if it is a very large file.

// 7. modules & npm

// lets talk about the 'require' function

// a module is nothing more than a javascript file that exports its code.

// node has a lot of built-in modules that we have looked at. there are a lot

// the TRADITIONAL way of importing a module into node is with the 'require()' function. this is the CommonJS method of importing modules

// recently, node added support for ES Modules, which use the import/export syntax

// most node.js code written in vanilla JS still uses require(), so it's important to know this.

// create a variable inside of the file in which you want to import the module and import it using require() and then the path name of the module file as a string as the argument of require()
