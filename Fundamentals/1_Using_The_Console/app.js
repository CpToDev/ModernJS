/*
    Using The Console
*/

// Clear the console
console.clear();

// Print a string
console.log("Hello World");

// Print a number
console.log(123);

// Print a boolean
console.log(true);

// Print a variable
var greeting = "Hello";
console.log(greeting);

// Print an array
console.log([1,2,3,4]);

// Print an object
console.log({a:1, b:2});

// Display object as a table
console.table({a:1, b:2})

// Print an error
console.error("This is an error");

// Print a warning
console.warn("This is a warning");

// Print the time required to complete an action
console.time("id");
console.log("Some action");
console.log("Some action");
console.log("Some action");
console.timeEnd("id")
