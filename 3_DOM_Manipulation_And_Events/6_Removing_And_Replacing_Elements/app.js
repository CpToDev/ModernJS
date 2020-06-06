let val;

// Create a new h2 element
const newHeading = document.createElement('h2');
console.log(newHeading);

// Add an id to the h2 element
newHeading.id = 'task-title';
console.log(newHeading);

// Add a new textnode to the h2 element
newHeading.appendChild(document.createTextNode('Task List'));
console.log(newHeading);

// Get the existing h5 element to be replaced
const oldHeading = document.querySelector('#task-title');
console.log(oldHeading);

// Get the parent of the existing h5 element
const cardAction = oldHeading.parentElement;
console.log(cardAction);

// Replace the existing h5 element with the new h2 element
cardAction.replaceChild(newHeading, oldHeading);
console.log(document.querySelector('#task-title'));


// Get the list item elements
let lis = document.querySelectorAll('li');
console.log(lis);

// Get the parent (ul) of the list item elements
const list = lis[0].parentElement;
console.log(list);

// Remove the first list item element
lis[0].remove();
lis = document.querySelectorAll('li');  // Get an updated query of the list item elements
console.log(lis);

// Remove the fourth child list item of the unordered list element
list.removeChild(lis[3]);
console.log(list.children);


// Get the first list item element
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

// Get the link element child of the list item element
const link = firstLi.children[0];   // The link element is the first child
console.log(link);

// Get the classes of the link element
val = link.className;   // Returns string of classes
console.log(val);
val = link.classList;   // Returns DOMTokenList of classes (similar to array, but not an array)
console.log(val);
val = link.classList[0];    // Get the first class in the list
console.log(val);

// Add a class to the link element
link.classList.add('test');
console.log(link.classList);

// Remove a class from the link element
link.classList.remove('test');
console.log(link.classList);


// Get attributes of the link element
val = link.getAttribute('href');    // Get the href attribute
console.log(val);

// Set attributes of the link element
link.setAttribute('href', 'http://google.com');
console.log(link);

// Check if the link element has an attribute
val = link.hasAttribute('href');
console.log(val);
val = link.hasAttribute('title');
console.log(val);