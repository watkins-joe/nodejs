// node architecture

// before node, we used JS in the browser to run our JS code

// browsers have a JS engine that runs our JS code and converts it to machine code, code that a computer is able to understand

// for example

/**
 * browser JS engines:
 * Microsoft Edge: Chakra
 * Firefox: SpiderMonkey
 * Chrome: v8 (fastest engine)
 */

// because of these engine differences, JS code can behave differently in one browser vs another.

// the browser provides a runtime environment for JS code

// for example, in the browser, we have the 'Window' or 'Document' object. these objects allows us to work with the environment in which our code is running.

// the creator of node embedded the v8 chrome engine into a C++ program and called it Node.exe

// similar to a browser, Node is a runtime environment for JS code

// also has certain objects that provide an environment for our JS code

// these objects ARE DIFFERENT from the ones that we have in the browser

// for example

/**
 * we don't have the 'document' object
 *
 * intead, we have other objects that give us other capabilities
 *
 * such as 'fs' for filesystem
 *
 * 'http' for listening to requests.
 *
 * we can't do this stuff inside of the browser
 */

// node is a program that includes the v8 engine plus additional modules that give us capabilities that we don't have in the browser

// node is not a framework. it's a runtime environment for executing js code.
