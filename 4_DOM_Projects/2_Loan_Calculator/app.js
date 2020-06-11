// Listen for form submission
document.querySelector('#loan-form').addEventListener('submit', function(e) {

    // Insure that the results are hidden
    document.querySelector('#results').style.display = 'none';

    // Display the loading gif
    document.querySelector('#loading').style.display = 'block';
    
    // Hide the loading gif and display the results after 1.5 seconds
    setTimeout(calculateResults, 1500)
    
    // Prevent the default event object action
    e.preventDefault();

});

// Calculate the loan results
function calculateResults() {

    // UI variables
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    // Get the principal
    const principal = parseFloat(amount.value);

    // Calculate the calculated interest
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;

    // Calculate the calculated payments
    const calculatedPayments = parseFloat(years.value) * 12;

    // Calculate the required monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x - 1);

    // Check that the calculated monthly payment is finite
    if(isFinite(monthly)) {

        // Display the required monthly payment for the loan to two decimal places
        monthlyPayment.value = monthly.toFixed(2);

        // Display the required total payment for the loan to two decimal places
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);

        // Display the required total interest for the loan to two decimal places
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Display the calculated results
        document.querySelector('#results').style.display = 'block';

        // Hide the loading gif
        document.querySelector('#loading').style.display = 'none';

    }
    else {

        // Display an error message
        showError('Please check that your input is valid!');

    }

}

// Display an error message in the DOM
function showError(msg) {

    // Hide the calculated results
    document.querySelector('#results').style.display = 'none';

    // Hide the loading gif
    document.querySelector('#loading').style.display = 'none';

    // Get UI elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create a div element
    const errorDiv = document.createElement('div');

    // Assign classes to the div element
    errorDiv.className = "alert alert-danger";

    // Add the message to the div
    errorDiv.appendChild(document.createTextNode(msg));

    // Insert the error message into the DOM before the heading
    card.insertBefore(errorDiv, heading);

    // Delete the error message after five seconds
    setTimeout(deleteError, 3000);

}

// Delete an error message from the DOM
function deleteError() {

    // Delete the error message div element from the DOM
    document.querySelector('.alert').remove();

}