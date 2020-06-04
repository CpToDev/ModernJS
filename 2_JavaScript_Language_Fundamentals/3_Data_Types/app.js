/*
    Data Types
    - Primitive data types: 
        - stored on the stack
        - stored directly in the location the variables accesses
        - String, Number, Boolean, Null, Undefined, Symbols(ES6)
    - Reference data types:
        - stored on the heap
        - accessed by reference with a pointer to a location in memory
        - Arrays, Object Literals, Functions, Dates, Anything Else
    - Dynamically types language:
        - Types are associated with values and not variables
        - The same variable can hold multiple types
        - Don't need to specify a variables type
*/

// String
const deer = "John Doe";
console.log(typeof deer);   // Prints variable type

// Number
const count = 13
console.log(typeof count);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);    // Bug in JS typeof - Null is NOT an object

// Undefined
let test;
console.log(typeof test);

// Symbol (ES6)
const sym = Symbol();
console.log(typeof sym);

// Array
const hobbies = ["movies", "music"];
console.log(typeof hobbies);    // Prints type as object

// Object Literal
const address = {
    city: "Boston",
    state: "MA"
}
console.log(typeof address);    // Prints type as object

// Date
const today = new Date();
console.log(typeof today);  // Prints type as object
