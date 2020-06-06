const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Create a click event listener
clearBtn.addEventListener('click', runEvent);

// Create a double click event listener
clearBtn.addEventListener('dblclick', runEvent);

// Create a mouse down event listener
clearBtn.addEventListener('mousedown', runEvent);   // Fires at start of click and hold

// Create a mouse up event listener
clearBtn.addEventListener('mouseup', runEvent);   // Fires at end of click and hold

// Create a mouse enter event listener
card.addEventListener('mouseenter', runEvent);   // Fires when the cursor enters the element

// Create a mouse leave event listener
card.addEventListener('mouseleave', runEvent);   // Fires when the cursor leaves the element

// Create a mouse over event listener
card.addEventListener('mouseover', runEvent);   // Fires when the cursor enters the element - Also fires when entering a child element

// Create a mouse out event listener
card.addEventListener('mouseout', runEvent);   // Fires when the cursor leaves the element - Also fires when leaving a child element

// Create a mouse move event listener
card.addEventListener('mousemove', runEventMouseMove);   // Fires when the mouse moves within the element

// Create an event handler function
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault(); // Prevent the event object's default action
}

// Create an event handler function
function runEventMouseMove(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault(); // Prevent the event object's default action

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}