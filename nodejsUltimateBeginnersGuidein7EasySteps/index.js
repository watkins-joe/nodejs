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

// this file contains metadata about your project, but most importantly, it keeps track of the dependencies that we use in our projects

// install express with npm i express

// express is a minimal web app framework

// after running the command, a few things changed in our package.json file

// npm added 'express' to our dependencies list.

// the dependencies object allows us to manage multiple dependencies in a project and reinstall them all at once in a different project or system

// the raw source code for the dependencies live in the /node_modules directory

// you should NEVER touch or write code inside of the node_nodules directory.

// now with the package installed, we can import it by name in our JS code. in this case, we simply require express

const express = require("express");

// we have to initialize our app to make use of the express import

const app = express();

// our server will live on a url. when a client makes a request to this url in the browser, the server will respond with some html.

// in our code, we will first create an instance of an express app.

// an express app allows us to create multiple URLS and endpoints the user can navigate to in the browser.

// we then define code for the server to handle those requests.

// when the user navigates to a url in the browser, it's what is known as a GET request, meaning they are requesting some data on the server and are NOT trying to modify or update anythinf on the server.

// with express, we can set up an endpoint like that by calling 'app.get()'

// the first argument of .get() is the URL the user will navigate to.

// in this case, we will just use the forward slash '/'.

// the second argument is a callback function

// you can think of every request to this URL as an event. and then you handle this event with this function

// express gives us two parameters in this callback function --> the request and the response.

// the request is the incoming data from the user.

// in this example, we don't really need to parse any data from the request, however in many cases you may want to look at the headers or the body of the request to authenticate the user or understand what the user is trying to do.

// at this point, we need to implement the code to handle the request. what we want to do is read some HTML from our file system and then send that back down to the browser.

// in our source code, we can then import readFile from node's system module, just like we did earlier.

// then, in our callback function here, we will have access to the HTML string and we can send a response back down to the client by calling response.send(html)

// we can also handle any errors in the callback, we can handle that by sending a response with the .status() method and chaining the .send() with a parameter of the error message you want to send to the user as a string. this is so the user knows something went wrong on the server.

app.get("/", (request, response) => {
  readFile("./home.html", "utf8", (err, html) => {
    if (err) {
      response.status(500).send("sorry, out of order");
    }

    response.send(html);
  });
});

// now, we just need to tell our express app start listening to incoming requests.

// we do that by defining a port which will normally come from a node environment variable.

// this is done with the app object and calling the listen() method on the app object. it receives the port to be used as argument one, and a callback function as a second argument that is called when the app starts up

app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);

// you can start your app by running 'node .' in the command line, which runs node in your current working directory
