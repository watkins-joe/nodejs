// function sayHello(name) {
//   console.log(`Hello ${name}!`);
// }

// sayHello("Joe");

// console.log(window);

// const message = "hello";

// console.log(global.message); // undefined

console.log(module);

// logs a Module object, a JSON object with key-value pairs.

/**
 * Module {
  id: '.',
  path: '/Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/first-app',
  exports: {},
  parent: null,
  filename: '/Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/first-app/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/first-app/node_modules',
    '/Users/joewatkins/Documents/Local Coursework/Nodejs/Node.js Tutorial for Beginners: Learn Node in 1 Hour/node_modules',
    '/Users/joewatkins/Documents/Local Coursework/Nodejs/node_modules',
    '/Users/joewatkins/Documents/Local Coursework/node_modules',
    '/Users/joewatkins/Documents/node_modules',
    '/Users/joewatkins/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
 */

// module is not a global object. it appears to be, but it is not.

// in node, every file is a module. all functions are variables defined in that file are scoped to that module. they're not available outside of the module, unless we do a little more work.
