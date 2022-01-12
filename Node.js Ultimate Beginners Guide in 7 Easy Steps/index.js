console.log("hello world");

const { readFile, readFileSync } = require("fs");

const txt = readFileSync("./hello.txt", "utf8");

console.log(txt);
console.log("DO THIS ASAP"); // this console.log won't run until after that file has been read. this is the blocking behvaior we were talking about.

/**
 * console looks like this for this example:
 * 'meme text' (contents of hello.txt)
 * 'DO THIS ASAP' (line 8)
 */

// you an refactor this to make it non blocking by refactoring it to a callback

// with readFile, we pass the same first two arguments and then add a callback function as the third argument

// inside the callback fucntionfunction, we can access an error object if the operation fails, or when successful, the actual text from the file.

// the super cool thing about this is that even though the console.log(txt) comes first in our code, it's not the thing that gets executed first.

// node registers the callback, executes the rest of the script, and then finally runs the callback when the file has been read.

// that gives us two different ways to read a file.

// there is one more way to go abput this, too.

// the third is using a Promise-based solution. Promises are asynchronous and non-blocking and tend to produce much cleaner code compared to using callbacks.

// for this, we import readFile from the promises namespace.

// const { readFile } = require("fs").promises;

// this gives us a function that returns a promise when called. you should be able to use this function with top-level await, which means you can use await to resolve the promise at the top of the script IF you are using node 14.3.x
// const file = await readFile("./hello.txt", "utf8");

// otherwise, you will need to wrap it inside of an async function.

async function hello() {
  const file = await readFile("./hello.txt", "utf8");
}

// this async await syntax will make your code much more legible, especially with multiple calls in the same file

// 7. modules & npm

const myModule = require("./my-module");

console.log(myModule); // with an empty file, it console logs an empty object '{}'

// in order to make a module useful, we have to export some code from it.

// in the module's file, you can reference this object with module.exports

// you can ad new properties to the exports object, or redefine it as a new object

// in either case, whatever you add here iwll be available to use in the other file.

console.log(myModule); // { memes: 'i love them' }

// no longer console.logs an empty object, as we are now exporting something from that module.

// eventually, you will want to use someone else's code. using NPM for this is pretty standard.

// npm is a tool to install remote packages into your code

// npm init to get started, npm init -y (the -y flag sets default options)

// this creates a package.json file in the root of the app
