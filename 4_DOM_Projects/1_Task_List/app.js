// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Function for managing event listeners
function loadEventListeners() {

    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Delete task list item event
    taskList.addEventListener('click', deleteTask);

    // Clear tasks list event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks list event
    filter.addEventListener('keyup', filterTasks);

}

// Get tasks from local storage and display them on the page after it has loaded
function getTasks(e) {

    let tasks;

    // Check if local storage contains tasks
    if(localStorage.getItem('tasks') === null) {

        // If local storage does not contain tasks there is nothing to load
        return;

    }

    // Set tasks to the tasks contained in local storage
    tasks = JSON.parse(localStorage.getItem('tasks'));

    // Loop through the tasks list and add each task to the page
    tasks.forEach(function(task) {

        // Create list item element
        const li = document.createElement('li');

        // Add a class to the list item element
        li.className = 'collection-item';

        // Create a text node and append to the list item element
        li.appendChild(document.createTextNode(task));

        // Create a link element
        const link = document.createElement('a');

        // Add classes to the link element
        link.className = 'delete-item secondary-content';

        // Add icon html to the link element
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link element to the list item element
        li.appendChild(link);

        // Append the list item element to the unordered list task element
        taskList.appendChild(li);

    });

}

// Add a task to the task list
function addTask(e) {

    // Check if the task field is blank
    if(taskInput.value === '') {

        alert('The new task field cannot be blank!');

    }
    else {

        // Create list item element
        const li = document.createElement('li');

        // Add a class to the list item element
        li.className = 'collection-item';

        // Create a text node and append to the list item element
        li.appendChild(document.createTextNode(taskInput.value));

        // Create a link element
        const link = document.createElement('a');

        // Add classes to the link element
        link.className = 'delete-item secondary-content';

        // Add icon html to the link element
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link element to the list item element
        li.appendChild(link);

        // Append the list item element to the unordered list task element
        taskList.appendChild(li);

        // Add the task to local storage
        storeTask(taskInput.value);

        // Clear the new task field input
        taskInput.value = '';

    }

    // Prevent default event object action
    e.preventDefault();

}

// Add a task to local storage
function storeTask(task) {

    let tasks;

    // Check if local storage contains tasks
    if(localStorage.getItem('tasks') === null) {

        // Set tasks to an empty array if local storage does not contain tasks
        tasks = [];

    }
    else {

        // Set tasks to the tasks contained in local storage
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }

    // Append the new task to the tasks list
    tasks.push(task);

    // Update the tasks list in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Delete a task from the task list
function deleteTask(e) {

    // Check if the clicked element is the task item delete button
    // The target is the icon, so its parent is the link with the 'delete-item' class
    if(e.target.parentElement.classList.contains('delete-item')) {

        // Confirm that the user really wants to delete the task item
        if(confirm('Do you really want to delete this task?')) {

            // Delete the task list item from the task list
            // The target is the icon, so its parent's parent is the task list item
            e.target.parentElement.parentElement.remove();

            // Delete the task from local storage
            unstoreTask(e.target.parentElement.parentElement);

        }

    }

}


// Delete a task from local storage
function unstoreTask(taskToDelete) {

    let tasks;

    // Check if local storage contains taskss
    if(localStorage.getItem('tasks') === null) {

        // If local storage does not contain tasks there is nothing to load
        return;

    }

    // Set tasks to the tasks contained in local storage
    tasks = JSON.parse(localStorage.getItem('tasks'));

    // Loop through the tasks list and find the task to delete
    tasks.forEach(function(task, index) {

        // Check if the current task from local storage matches the task to delete
        if(taskToDelete.textContent === task) {

            // Delete the task from the tasks list
            tasks.splice(index, 1);

        }

    });

    // Update the tasks list in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Clear all of the tasks from the task list
function clearTasks(e) {

    // Confirm that the user really wants to clear all task items
    if(confirm('Do you really want to clear the task list?')) {

        // While the task list has a child
        while(taskList.firstChild) {

            // Delete the first child task item from the task list
            taskList.removeChild(taskList.firstChild)

        }

        // Clear all tasks from local storage
        unstoreTasks();

    }

}

// Delete all tasks from local storage
function unstoreTasks() {

    // Clear all tasks from local storage
    localStorage.removeItem('tasks');

}

// Filter the tasks list
function filterTasks(e) {

    // Get the text to filter the tasks list by
    const text = e.target.value.toLowerCase();

    // Loop through each task list item in the tasks list
    document.querySelectorAll('.collection-item').forEach(function(task) {

        // Get the text of the task list item
        const item = task.firstChild.textContent;

        // Check if the task list item text contains the filter text
        if(item.toLowerCase().indexOf(text) !== -1) {

            // Display the task list item if it contains the filter text
            task.style.display = 'block';

        }
        else {

            // Hide the task list item if it does not contain the filter text
            task.style.display = 'none';

        }

    });

}