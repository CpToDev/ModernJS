let val;

// Select elements by class name
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);  // Get the first element in the html collection

items[0].style.color = 'red';   // Change the color style of the first element in the html collection
items[3].textContent = 'Hello';   // Change the text content of the fourth element in the html collection

// Select elements by class name by chaining selectors
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


// Select elements by tag name
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);  // Get the first element in the html collection

lis[1].style.color = 'blue';   // Change the color style of the second element in the html collection
lis[4].textContent = 'Goodbye';   // Change the text content of the fifth element in the html collection

for(let i = 0; i < lis.length; i++) {   // HTML collections can be iterated through using a for loop without converting to an array
    console.log(lis[i]);
}

lis = Array.from(lis);  // HTML collections must be converted to array to use forEach
lis.forEach(function(item) {
    console.log(item);
});


// Query selector all
const list = document.querySelectorAll('ul.collection li.collection-item');
console.log(list);

list.forEach(function(item) {   // NodeLists do not have to be converted to arrays
    console.log(item);
});

const liOdd = document.querySelectorAll('li:nth-child(odd');    // Select every odd list item in the document
const liEven = document.querySelectorAll('li:nth-child(even');  // Select every even list item in the document

liOdd.forEach(function(li) {
    li.style.background = '#ccc';   // Change the background style of every odd list item in the document
});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';   // Change the background style of every even list item in the document
}
