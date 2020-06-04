/*
    General Loops
*/

// For loop
for(let i = 0; i < 10; i++) {
    if(i === 2) {
        console.log('My favorite number is 2');
        continue;   // Skip to the next iteration
    }
    if(i === 5) {
        console.log('Stop the loop');
        break;  // Exit out of the loop
    }
    console.log(`i is ${i}`);
}

// While loop
let j = 0;
while(j < 10) {
    console.log(`j is ${j}`);
    j++;
}

// Do while loop - Will always run once even if condition is not met
let k = 100;
do {
    console.log(`k is ${k}`);
    k++;
} while(k < 10);

// Iterate over an array - Traditional for loop
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for(let x = 0; x < cars.length; x++) {
    console.log(`My favorite make of car is ${cars[x]}`);
}

// Iterate over an array - Foreach method
cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});

// Map over an array of object
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
]
const ids = users.map(function(user) {
    return user.id; // Returns an array of the user ids
});
console.log(ids);

// For in loop - Used for objects
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}
for(let key in user) {
    console.log(`${key} : ${user[key]}`);
}