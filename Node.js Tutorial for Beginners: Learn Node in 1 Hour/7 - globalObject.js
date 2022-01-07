// global object

// in last section, we used console.log to log something to the console

// `console` is considered a global object

// it's part of the global scope, meaning we can access it from anywhere

// we have a bunch of other objects and functions that are also globally available in node

// another example is setTimeout

// another is clearTimeout();

// another is setInterval(), used to repeatedly call a function are a certain delay

// another is clearInterval() to stop the function from being called repetitively

// these are some example

// in browsers, we have the `window` object that represents our global scope

// on the window object is where we have access to all of the global object, like console for console.log

// JS automatically adds `window` behind the scenes when we run console.log, because that's where the object is defined.

// in node, we don't have the windoow object, though.

// instead in node, we have the `global` object

// we can access them via the `global` object. NOT the `window` object.

// when we declare variables in node, they are NOT added to the `global` object, unlike how they are in the browser.

// console.log(global.message); // undefined

// variables and functions that we define in node.js are not added to the `global` object

// they are only SCOPED TO THE FILE IT WAS WRITTEN IN ITSELF

// they are not available outside of the file.

// this is because of node's MODULAR system

// we will cover this in the next lecture
