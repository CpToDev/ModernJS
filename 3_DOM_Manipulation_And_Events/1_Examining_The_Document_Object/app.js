let val;

// Gets the entire document
val = document;
console.log(val);

// Gets the document as a collection (array)
val = document.all;
console.log(val);
val = document.all[1];  // Gets the head tag which is the second tag in the html document
console.log(val);
val = document.all.length;  // Number of elements in the DOM
console.log(val);

// Get the head of the document
val = document.head;
console.log(val);

// Get the body of the document
val = document.body;
console.log(val);

// Get the doctype of the document
val = document.doctype;
console.log(val);

// Get the domain
val = document.domain;
console.log(val);

// Get the URL
val = document.URL;
console.log(val);

// Get the document character set
val = document.characterSet;
console.log(val);

// Get the document content type
val = document.contentType;
console.log(val);

// Get all the forms in the document - NOT RECOMMENDED
val = document.forms;
console.log(val);
val = document.forms[0]; // Gets the first form in the document
console.log(val);
val = document.forms[0].id; // Get the id of the first form in the document
console.log(val);
val = document.forms[0].method; // Get the method of the first form in the document
console.log(val);
val = document.forms[0].action; // Get the action of the first form in the document
console.log(val);

// Get all the links in the document - NOT RECOMMENDED
val = document.links;
console.log(val);
val = document.links[0];  // Get the first link in the document
console.log(val);
val = document.links[0].className; // Get a string of the classes of the first link in the document
console.log(val);
val = document.links[0].classList;  // Get a collection (array) of the classes of the first link in the document
console.log(val);

// Get all the images in the document - NOT RECOMMENDED
val = document.images;
console.log(val);

// Get all the scripts in the document
val = document.scripts;
console.log(val);
val = document.scripts[2].getAttribute('src');  // Get the src attribute of the third script in the document
console.log(val);

// Convert html collection to an array
let scriptsArr = Array.from(document.scripts);
scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});