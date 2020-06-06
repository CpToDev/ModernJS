let val;

// Get the list with class collection
const list = document.querySelector('ul.collection');
val = list;
console.log(val);


// Get the first list item with class collection-item
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
console.log(val);


// Get the list's child nodes
val = list.childNodes;  // Returns a NodeList - Contains return carraiges
console.log(val);

val = list.childNodes[0];   // Get the first child node
console.log(val);

val = list.childNodes[0].nodeName;  // Get the first child node's name
console.log(val);

/*
    Node Types:
    - 1: Element
    - 2: Attribute (deprecated)
    - 3: Text node
    - 8: Comment
    - 9: Document itself
    - 10: Doctype
*/
val = list.childNodes[0].nodeType;  // Get the first child node's type
console.log(val);


// Get the list's children element nodes - More commmon than childNodes
val = list.children;    // Returns html collection - Only contains elements
console.log(val);

val = list.children[0]; // Get the first child
console.log(val);

list.children[1].textContent = 'Hello'; // Set the text content of the second child

val = list.children[3].children // Get the children of the fourth child in the list
console.log(val);


// Get the first child
val = list.firstChild;  // Functions like list.childNodes - Returns NodeList
console.log(val);
val = list.firstElementChild;   // Functions like list.children - Returns HTML collection
console.log(val);


// Get the last child
val = list.lastChild;  // Functions like list.childNodes - Returns NodeList
console.log(val);
val = list.lastElementChild;   // Functions like list.children - Returns HTML collection
console.log(val);


// Get the number of children elements
val = list.childElementCount;
console.log(val);


// Get the parent node
val = listItem.parentNode;  
console.log(val);
val = listItem.parentElement;   // Get the parent element - Prefer to parentNode
console.log(val);
val = listItem.parentElement.parentElement; // Get the parent of the parent element
console.log(val);


// Get the next sibling
val = listItem.nextSibling; // Returns non-elements
console.log(val);
val = listItem.nextElementSibling;  // Returns only elements
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;  // Returns the third next sibling element
console.log(val);


// Get the previous sibling
val = listItem.previousSibling; // Returns non-elements
console.log(val);
val = listItem.previousElementSibling;  // Returns only elements
console.log(val);
val = listItem.previousElementSibling.previousElementSibling;  // Returns the third previous sibling element
console.log(val);