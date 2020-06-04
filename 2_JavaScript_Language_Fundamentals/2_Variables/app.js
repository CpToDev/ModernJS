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