// how does node scope these modules to their own files?

// under the hood, node does not execute our code directly. it WRAPS it inside of a function.

// like so:

/**
 * (function(exports, require, module, __filename, __dirname){
 *  // your code here
 * })()
 */

// at runtime, our code is going to be converted to something like above on line 8.

// the actual code is slightly more complicated than this, but we dont want to get too advanced right now

// this is something called an IIFE

// node does NOT execute our code directly.

// it always wraps our code inside each module in something like we see above. inside of a function.

// as an example, the 'require' parameter which is a function, appears to be global, but isn't "global". in fact, it's LOCAL to each module.

// in every module, 'require' is one of the arguments that is passed to this function.

// we call this function the Module Wrapper Function

// like we reviewed earlier, we can use exports.log or module.exports.log in our example to export the log function

/**
 * module.exports.log = log; // IS OK
 * exports.log = log // IS OK, is shortcut of module.exports
 * exports = log; // IS NOT OK, because 'exports' is a reference to 'module.exports'. we cannot change that reference
 */

// we also have __filename and __dirname which represent the path.
