let val;

// Select element by id - Gets first element in document
const taskTitle = document.getElementById('task-title');
console.log(taskTitle);

val = taskTitle.innerHTML;  // Get the inner html of the selected element
console.log(val);

val = taskTitle.style.background = '#333';  // Change the background style of the selected element
val = taskTitle.style.color = '#fff';  // Change the text color style of the selected element
val = taskTitle.style.padding = '5px';  // Change the padding style of the selected element
val = taskTitle.textContent = 'Task List';  // Change the text content of the selected element
val = taskTitle.innerText = 'My Tasks';  // Change the inner text of the selected element
val = taskTitle.innerHTML = '<span style="color:red">Task List</span>';  // Change the inner html of the selected element

// Query selector - Gets first element in document unless specified otherwise
val = document.querySelector('#task-title');  // Get element by id
console.log(val);

val = document.querySelector('.card-title');  // Get element by class
console.log(val);

val = document.querySelector('h5');  // Get element by html tag
console.log(val);

document.querySelector('ul li').style.color = 'red'; // Change the text color style of the first list item in the document
document.querySelector('li:last-child').style.color = 'blue'; // Change the text color style of the last list item in the document
document.querySelector('li:nth-child(3)').style.color = 'green'; // Change the text color style of the third list item in the document
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // Change the text content of the fourth list item in the document
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Change the background style of the first (odd) list item in the document
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // Change the background style of the second (even) list item in the document
