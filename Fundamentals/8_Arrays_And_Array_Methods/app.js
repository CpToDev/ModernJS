/*
    Arrays and Array Methods
*/

// Methods for creating arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];    // Common way
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]; // Arrays can store values of different types
console.log(mixed);

let val;

// Get array length
val = numbers.length;   // Property of array - no ()
console.log(val);

// Check if something is an array
val = Array.isArray(numbers);
console.log(val);
val = Array.isArray('Hello');
console.log(val);

// Get value from array via index - zero based index
val = numbers[3];
console.log(val);

// Insert value into array
numbers[2] = 100;
console.log(numbers);

// Find the index of a value
val = numbers.indexOf(36);
console.log(val);

// Push value onto the end of an array
numbers.push(250);
console.log(numbers);

// Push value onto the front of an array
numbers.unshift(120);
console.log(numbers);

// Pop a value off the end of an array
numbers.pop();
console.log(numbers);

// Pop a value off the front of an array
numbers.shift();
console.log(numbers);

// Splice value from an array
numbers.splice(1, 1);   // Splice out the value in the index one
console.log(numbers);

// Reverse an array
numbers.reverse();
console.log(numbers);

// Concatenate two arrays
val = numbers.concat(numbers2);
console.log(val);

// Sort an array of strings alphabetically
val = fruit.sort();
console.log(fruit);

// Sort an array of numbers
val = numbers.sort()    // Sorts based on first digit in number
console.log(val);
val = numbers.sort(function(x, y) { // Sorts numbers from smallest to largest
    return x - y;
});
console.log(val);
val = numbers.sort(function(x, y) { // Sorts numbers from largest to Smallest
    return y - x;
});
console.log(val);

// Find the first value that meets a condition
function under50(number) {
    return number < 50;
}
val = numbers.find(under50);
console.log(val);

