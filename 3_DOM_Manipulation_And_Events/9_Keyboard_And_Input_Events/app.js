const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const select = document.querySelector('select');

// Clear the task form input
taskInput.value = '';

// Create a submit event listener
form.addEventListener('submit', runEventForm);

// Create an event handler function
function runEventForm(e) {

    // Get the event type
    console.log(`EVENT TYPE: ${e.type}`);

    // Get the input value
    console.log(taskInput.value);

    // Prevent the event object's default action
    e.preventDefault();
}

// Create a key down event listener
taskInput.addEventListener('keydown', runEventInput);   // Fires when a key is pressed - Continues to fire when key is held down

// Create a key up event listener
taskInput.addEventListener('keyup', runEventInput);   // Fires when a key is released

// Create a key press event listener
taskInput.addEventListener('keypress', runEventInput);   // Fires when a key is pressed - Continues to fire when key is held down

// Create a focus event listener
taskInput.addEventListener('focus', runEventInput); // Fires when the element is given focus (clicked into)

// Create a blur event listener
taskInput.addEventListener('blur', runEventInput); // Fires when the element is loses focus (clicked out of)

// Create a cut event listener
taskInput.addEventListener('cut', runEventInput);   // Fires when the element's value is cut

// Create a copy event listener
taskInput.addEventListener('copy', runEventInput);   // Fires when the element's value is copied

// Create a paste event listener
taskInput.addEventListener('paste', runEventInput);   // Fires when the element's value is pasted

// Create an input event listener
taskInput.addEventListener('input', runEventInput);   // Fires when there is input into an element

// Create a change event listener
select.addEventListener('change', runEventInput);   // Fires when there is an input change (select)

// Create an event handler function
function runEventInput(e) {

    // Get the event type
    console.log(`EVENT TYPE: ${e.type}`);

    // Get the input's value
    console.log(e.target.value);

}