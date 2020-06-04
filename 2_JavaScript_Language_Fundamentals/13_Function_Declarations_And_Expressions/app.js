/*
    Function Declarations and Expressions
*/

// Basic function declaration
function greet(firstName = 'John', lastName = 'Doe') {  // Provide default parameter values
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Steve', 'Smith'));
console.log(greet());


// Function expressions - Assign function to variable
const square = function(x = 3) {
    return x * x;
};
console.log(square(8));
console.log(square(3));


// Immidiatley Invokable Function Expressions (IIFEs) - Function is declared and executed at the same time
(function(name) {
    console.log('Hello ' + name);
})('Brad');


// Object property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}...`);
    },
}

todo.delete = function() {  // Object property methods can be declared outside of the object declaration
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();