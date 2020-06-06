let val;

// Select the 'clear tasks' button element
const clearBtn = document.querySelector('.clear-tasks');
console.log(clearBtn);

// Add an event listener to the button element - Anonymous function
clearBtn.addEventListener('click', function(e) { // Listens for a click event
    console.log('Clicked - Anonymous function');
    e.preventDefault(); // Prevent the event object's default behavior
});

// Add an event listener to the button element - Named function
clearBtn.addEventListener('click', onClick);
function onClick(e) {
    
    // Get the event object
    val = e;
    console.log(val);

    // Get the event object's target element
    val = e.target;
    console.log(val);
    val = e.target.classList;   // Get the target element's classes
    console.log(val);

    // Set the innerText of the event target element
    e.target.innerText = 'Hello from event object';

    // Get the event object's type
    val = e.type;
    console.log(val);

    // Get the event object's timestamp
    val = e.timestamp;
    console.log(val);

    // Get the event object's cursor coordinates relative to the window
    val = e.clientY;    // Number of pixels from the top of the window
    console.log(val);
    val = e.clientX;    // Number of pixels from the left of the window
    console.log(val);

    // Get the event objects's cursor coordinates relative to the target element
    val = e.offsetY;    // Number of pixels from the top of the target element
    console.log(val);
    val = e.offsetX;    // Number of pixels from the left of the target element
    console.log(val);
    
}
