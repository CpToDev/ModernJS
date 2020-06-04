/*
    Block Scope
    - var in block scope overwrites global scope
    - let and const in block scope do not overwrite global scope
*/

// Global scope
var a = 1;
let b = 2;
const c = 3;

// Function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope', a, b, c);
}
test();

// Block scope
if(true) {
    var a = 4;  // Overwrites a in global scope
    let b = 5;
    const c = 6;
    console.log('Block (If) scope', a, b, c);
}

// Block scope
for(var a = 0; a < 10; a++) {   // Overwrites a in global scope
    console.log('Block (loop) scope a', a);
}

// Block scope
for(let b = 0; b < 10; b++) {   // Does not overwrite b in global scope
    console.log('Block (loop) scope b', b);
}

console.log('Global scope: ', a, b, c);