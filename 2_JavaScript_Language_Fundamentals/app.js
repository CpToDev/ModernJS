/*
    Console Log Methods
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


/*
    Variables
    - Stay away from var - use let and const
    - Variables can include letters, numbers, _, and $
    - Variables cannot start with a number
    - Let is similar to var - Block level scoping advantages
    - Const variable cannot be reassigned and must be initialized with a value
    - Const objects and arrays can have their values reassigned, but the object and array itself cannot be reassigned
*/

// Create a variable
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// Initialize a variable
var dog;    // Set to undefined
console.log(dog);
dog = "bark";
console.log(dog);

// Multi-word variables
var firstName = "John";     // Camel case - Best convention
var first_name = "Sara";    // Underscore
var FirstName = "Tom";      // Pascal case - OOP classes and constructors

// Create a variable with let
let cat = "meow";
console.log(cat);
cat = "woof";
console.log(cat);

// Initialize a variable with let
let cow;    // Set to undefined
console.log(cow);
cow = "moo";
console.log(cow);

// Create a variable with const
const owl = "Hoot";
console.log(owl);

// Create a const object
const person = {
    name: "John",
    age: 30
};
console.log(person);
person.name = "Sara";   // Can reassign object values
person.age = "35";  // Can reassign object values
console.log(person);

// Create a const array
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);    // Can reassign array values
console.log(numbers);


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


/*
    Type Conversion
    - Explicitly convert from one type to another
*/

let val;

// Convert to string with String() function
val = String(5);    // Convert from number to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4+4);  // Convert expression to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true); // Convert boolean to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());   // Convert date to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String([1,2,3,4]);    // Convert array to string
console.log(val);
console.log(typeof val);
console.log(val.length);

// Convert to string with .toString() method
val = (5).toString();   // Convert number to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString(); // Convert boolean to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (new Date()).toString();   // Convert date to string
console.log(val);
console.log(typeof val);
console.log(val.length);

val = ([1,2,3,4]).toString();    // Convert array to string
console.log(val);
console.log(typeof val);
console.log(val.length);

// Convert to number with Number() function
val = Number("5");  // Convert string to number
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(true);  // Convert boolean to number - return false = 0 & true = 1
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(null);  // Convert null to number - return zero
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number("Hello");  // Convert string to number - return NaN (Not a Number)
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number([1,2,3]);  // Convert array to number - return NaN (Not a Number)
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseInt("100.31");  // Convert string to number (integer) - returns only 100
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseFloat("100.31");  // Convert string to number (float) - returns 100.31
console.log(val);
console.log(typeof val);
console.log(val.toFixed());


/*
    Type Coercion
    - Implicitly convert from one type to another
*/

const val1 = "5";
const val2 = 6;
const sum = val1 + val2;    // Changes val2 to a string and concatenates it with val1
console.log(sum);
console.log(typeof sum);


/*
    Numbers and the Math Object
*/

const num1 = 100;
const num2 = 50;

val = num1 + num2;  // Addition
console.log(val);
val = num1 - num2;  // Subtraction
console.log(val);
val = num1 * num2;  // Multiplication
console.log(val);
val = num1 / num2;  // Division
console.log(val);
val = num1 % num2;  // Modulous
console.log(val);
val = Math.PI;  // PI
console.log(val);
val = Math.E;  // Euler's
console.log(val);
val = Math.round(2.4);  // Round
console.log(val);
val = Math.ceil(2.4);  // Round up
console.log(val);
val = Math.floor(2.8);  // Round down
console.log(val);
val = Math.sqrt(64);  // Square root
console.log(val);
val = Math.abs(-3);  // Absolute value
console.log(val);
val = Math.pow(8, 2);  // Power - 8^2
console.log(val);
val = Math.min(2,33,-4,8,213,5);  // Minimum
console.log(val);
val = Math.max(2,33,-4,8,213,5);  // Maximum
console.log(val);
val = Math.random();  // Random decimal
console.log(val);
val = Math.floor(Math.random() * 20) + 1;  // Random integer - From 1 to 20
console.log(val);


/*
    String Methods and Concatenation
*/
const firstName = "William";
const lastName = "Johnson";