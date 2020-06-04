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
