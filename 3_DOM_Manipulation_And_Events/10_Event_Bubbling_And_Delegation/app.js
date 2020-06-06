/*
    Event Bubbling
    - When a child element's event listener is fired, the event is 'bubbled up' to its parent, firing its event as well
    - The event will 'bubble' all the way up to the body
*/

// Create a click event listener on the card title element
document.querySelector('.card-title').addEventListener('click', function(e) {
    console.log('Bubbling - Card title');  // Click on the card title
});

// Create a click event listener on the card content element
document.querySelector('.card-content').addEventListener('click', function(e) {
    console.log('Bubbling - Card content'); 
});

// Create a click event listener on the card element
document.querySelector('.card').addEventListener('click', function(e) {
    console.log('Bubbling - Card'); 
});

// Create a click event listener on the col element
document.querySelector('.col').addEventListener('click', function(e) {
    console.log('Bubbling - Col'); 
});

/*
    Without Event Delegation
    - Will only be able to listen for an event on the first element in the list
*/

// Get the first delete item icon element
const delItem = document.querySelector('.delete-item');

// Create a click event listener for the delItem element
delItem.addEventListener('click', deleteItemWO);

// Create an event handler function
function deleteItemWO(e) {
    console.log('Delete Item - Without Delegation');
}

/*
    Event Delegation
    - Event listener is placed on a parent element and then acts on its children
    - Use when dynamically inserting elements on the page or when act on similar elements (list items)
*/

// Create a click event listener for the body element
document.querySelector('ul').addEventListener('click', deleteItem);

// Create an event handler function
function deleteItem(e) {

    // Only perform the event action on the element with the following classes
    if(e.target.parentElement.classList.contains('delete-item')) {
        
        console.log('Delete Item - With Delegation');

        // Delete the list element
        e.target.parentElement.parentElement.remove();

    }

}