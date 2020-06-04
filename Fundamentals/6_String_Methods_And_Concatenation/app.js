/*
    String Methods and Concatenation
*/

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";

let val;

// Concatenates the two variables
val = firstName + lastName;
console.log(val);

// Concatenates the two variables and string
val = firstName + " " + lastName;
console.log(val);

// Append two strings
val = "Brad";
val += " Traversy";
console.log(val);

// Concatenate multiple variables and strings
val = "Hello, my name is " + firstName + " and I am " + age;
console.log(val);

// Escape a character
val = 'That\'s awesome, I can\'t wait';
console.log(val);

// Length property - Don't need () 
val = firstName.length;
console.log(val);

// Concatenation method
val = firstName.concat(' ', lastName);
console.log(val);

// Change to uppercase
val = firstName.toUpperCase();
console.log(val);

// Change to lowercase
val = firstName.toLowerCase();
console.log(val);

// String as read-only array
val = firstName[1];
console.log(val);

// Find index of a character's first appearance
val = firstName.indexOf('l');
console.log(val);

// Find index of a character's last appearance
val = firstName.lastIndexOf('l');
console.log(val);

// Find character at index
val = firstName.charAt('2');
console.log(val);

// Find last character of a string
val = firstName.charAt(firstName.length - 1);
console.log(val);

// Get a substring
val = firstName.substring(0, 4);
console.log(val);

// Slice a string
val = firstName.slice(-3);  // Takes last three characters
console.log(val);

// Split a string by a delimeter into an array
val = str.split(' ');
console.log(val);

// Replace a portion of a string with another string
val = str.replace('Brad', 'Jack');
console.log(val);

// Check if a string includes a string
val = str.includes('Hello');
console.log(val);



