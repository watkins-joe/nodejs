// to load a module, we use the require function

// require();

// this is one of the functions in node.js. we don't have this function in browsers.

// require() takes one argument

// the name or path of the target module that we want to load

// the require function RETURNS the object that is exported from this target module

// as a best practice, is it recommended to store returned objects/imported objects from modules in CONSTANTS using const

// the reason is because we don't want to accidentally overwrite the value of something imported

// if we happen to do that, we will get an error at compilation time, instead of at runtime

// sometimes, instead of exporting an object from a module, you may want to export only a single function.

// for example, in logger.js, we don't necessarily need an object since we only have a single method.

// an object would be useful if we had multiple methods or properties that were being exported

// instead of exporting an object, we can export a single function.

/**
 * changing our code from:
 *
 * module.exports.log = log
 *
 * TO:
 *
 * module.exports = log
 */
