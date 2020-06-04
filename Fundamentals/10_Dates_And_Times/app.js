/*
    Dates and Times
*/

let val;

// Create a new date object
const today = new Date();   // Defaults to today's date
val = today;
console.log(val);

val = new Date('9/10/1981 11:25:00');
console.log(val);

val = new Date('September 10 1981');
console.log(val);

// Get the month
val = today.getMonth(); // Zero based months (January = 0)
console.log(val);

// Get the date of the month
val = today.getDate();
console.log(val);

// Get the day of the week
val = today.getDay();   // Zero based from Sunday (Sunday = 0)
console.log(val);

// Get the year
val = today.getFullYear();
console.log(val);

// Get the hour of the date
val = today.getHours();
console.log(val);

// Get the minute of the date
val = today.getMinutes();
console.log(val);

// Get the second of the date
val = today.getSeconds();
console.log(val);

// Get the millisecond of the date
val = today.getMilliseconds()
console.log(val);

// Get the timestamp of the date (amount of seconds that have passed since January 1st 1970)
val = today.getTime();
console.log(val);

// Change the date object
let birthday = new Date();
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);