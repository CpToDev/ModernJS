/*
    The Window Object
*/

// Window properties
let val;

// Outer window dimensions
val = window.outerHeight;
console.log(val);
val = window.outerWidth
console.log(val);

// Inner window dimensions
val = window.innerHeight;
console.log(val);
val = window.innerWidth
console.log(val);

// Window scroll positions
val = window.scrollY
console.log(val);
val = window.scrollX
console.log(val);

// Location object
val = window.location;
console.log(val);
val = window.location.hostname; // Shows domain name
console.log(val);
val = window.location.port; // Shows current port
console.log(val);
val = window.location.href; // Shows url
console.log(val);
val = window.location.search;   // Shows query string (?id=1)
console.log(val);
//val = window.location.href = 'http://google.com'; // Redirect
//val = window.location.reload();   // Reload the page

// History object
//val = window.history.go();    // Takes you back to a previously visited website (-1 = previous, -2 = previous previous, etc)
val = window.history.length;    // How many sites were previously visited
console.log(val);

// Navigator object
val = window.navigator;
console.log(val);
val = window.navigator.appName; // Netscape or IE
console.log(val);
val = window.navigator.appVersion;  // Browser generation and version
console.log(val);
val = window.navigator.userAgent;   // Browser generation and version 
console.log(val);
val = window.navigator.platform;    // Operating system
console.log(val);
val = window.navigator.vendor;  // Browser vendor (Google Inc.)
console.log(val);
val = window.navigator.language;    // Browser language
console.log(val);

// Alert
alert('Hello World');

// Prompt

const input = prompt('This is a prompt');
console.log(input);

// Confirm
if(confirm('This is a confirmation')) {
    console.log('Confirmed');
}
else {
    console.log('Denied');
}