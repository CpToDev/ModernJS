/*
    Object Literals
*/

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2020 - this.age; // Reference key on object
    }
}

let val;

// Get key-value pair of object
val = person.firstName; // Common way
console.log(val);

val = person['lastName'];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address;
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

// Create an array of objects
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];
for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}