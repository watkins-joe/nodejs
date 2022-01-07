// modules

// review:

// when we declare variables such as

// const number = 1;

// in the client-side browser JS, they are added to the global scope and is available via the window object

// the problem with the global scope is that if we define the same var or same function in another file, since JS apps are typically built with more than one file, the new function definition will overwrite the previous one.

// in order to build reliable and maintainable apps, we should avoid defining variables and functions in the global scope

// instead, we should use MODULARITY

// modules are small building blocks where we define our variables and functions

// modules helps us prevent variable and function overwriting and are encapuslated within that module

// at the CORE of node, we have the concept of a module. every file in a node application is considered a module.

// the variables and functions defined within that module are scoped to that FILE.

// in OOP terms, that means that they are PRIVATE. they are not available outside of the container/module

// if you want to use a variable or a function defined in a module OUTSIDE of that module, you need to EXPLICITLY export it and make it public

// every node application has at leat one file, or one main module, typically `app.js`

//
