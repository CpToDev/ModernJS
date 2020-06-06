let val;

// Set a local storage item - Persists until manually cleared
localStorage.setItem('name', 'John');   // setItem(key, value)
localStorage.setItem('age', '30');
localStorage.setItem('city', 'Miami');

// Set a session storage item - Persists until session is ended
sessionStorage.setItem('name', 'Beth');   // setItem(key, value)
sessionStorage.setItem('age', '20');
sessionStorage.setItem('city', 'New York');

// Get item from local storage
val = localStorage.getItem('name');   //getItem(key)
console.log(val);
val = localStorage.getItem('age');
console.log(val);
val = localStorage.getItem('city');
console.log(val);

// Get item from session storage
val = sessionStorage.getItem('name');   //getItem(key)
console.log(val);
val = sessionStorage.getItem('age');
console.log(val);
val = sessionStorage.getItem('city');
console.log(val);

// Remove item from local storage
localStorage.removeItem('name');

// Remove item from session storage
sessionStorage.removeItem('name');

// Clear all items from local storage
//localStorage.clear();

// Clear all items from session storage
//sessionStorage.clear();

// Create a submit event listener
document.querySelector('form').addEventListener('submit', function(e) {

    // Get the task value from the input
    const task = document.querySelector('#task').value;

    let tasks;

    // Check if there are tasks in local storage
    if(localStorage.getItem('tasks') === null) {
        // If not, set tasks to an empty array
        tasks = [];
    }
    else {
        // Otherwise, set tasks equal to local storage
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Push the new task onto the tasks array
    tasks.push(task);

    // Persist the updated tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Print the tasks list in local storage
    console.log(`Task List: ${tasks}`);

    // Prevent the event object's default action
    e.preventDefault();

});

// Get the tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks'));

// Iterate through each item in the tasks array
tasks.forEach(function(task, index) {
    console.log(`Task #${index}: ${task}`);
})