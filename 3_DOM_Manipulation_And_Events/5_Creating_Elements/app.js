// Create a list item element
const li = document.createElement('li');
console.log(li);

// Add a class to the list item element
li.className = 'collection-item';
console.log(li);

// Add an id to the list item element
li.id = 'new-item';
console.log(li);

// Add an attribute to the list item element
li.setAttribute('title', 'New Item');
console.log(li);

// Create a text node and append it to the list item element
li.appendChild(document.createTextNode('Hello World'));
console.log(li);

// Create a link element
const link = document.createElement('a');
console.log(link);

// Add classes to the link element
link.className = 'delete-item secondary-content';
console.log(link);

// Add icon html to the link element
link.innerHTML = '<i class="fa fa-remove"></i>';
console.log(link);

// Append the link element as a child of the list item element
li.appendChild(link);
console.log(li);

// Append the list item element as a child of the unordered list
document.querySelector('ul.collection').appendChild(li);
