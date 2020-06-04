/*
    If Statements and Comparison Operators
*/

// Equal to - Checks value, not type
if(100 == '100') {
    console.log('Correct');
} 
else {
    console.log('Incorrect');
}

// Not equal to - Checks value, not type
if(100 != '100') { 
    console.log('Correct');
} 
else {
    console.log('Incorrect');
}

// Equal to - Checks value and type
if(100 === '100') {
    console.log('Correct');
} 
else {
    console.log('Incorrect');
}

// Not equal to - Checks value and type
if(100 !== '100') {
    console.log('Correct');
} 
else {
    console.log('Incorrect');
}

// Check if a variable is undefined (has not been initialized or declared)
if(typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} 
else {
    console.log('No ID');
}

// If else
const color = 'blue';
if(color === 'red') {
    console.log('Color is red');
} 
else if(color === 'blue') {
    console.log('Color is blue');
}
else {
    console.log('Color is not red or blue');
}

// Logical Operator - AND
const name = 'Steve';
let age = 17;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
}
else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
}
else {
    console.log(`${name} is an adult`);
}

// Logical Operator - OR
age = 70;
if(age < 16 || age > 65) {
    console.log(`${name} cannot run in the race`);
}
else {
    console.log(`${name} is registered for the race`);
}

// Ternary Operator
console.log('100' === 100 ? 'Correct' : 'Incorrect');