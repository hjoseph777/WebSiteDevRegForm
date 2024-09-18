// This is what happens when someone tries to submit the form
function checkForm(event) {
    // Prevent the form from submitting to a server
    event.preventDefault();

    // Get the values entered by the user
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create a message to show to the user
    var message = "Is this information correct?\n\n" +
                  "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Email: " + email + "\n" +
                  "Password: " + password.charAt(0) + password.charAt(1) + password.charAt(2) + "...";

    // Show a confirmation dialog to the user
    var userConfirmed = confirm(message);

    // If the user confirms the information is correct
    if (userConfirmed) {
        // Show a thank you message
        alert("Thanks for signing up!");

        // Clear all the input fields
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    } else {
        // If the user cancels, clear the input fields immediately
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
}

// Set up the form when the webpage loads
window.onload = function() {
    // Find the form element
    var form = document.getElementById('registerForm');
    
    // Attach the checkForm function to the form's submit event
    form.onsubmit = checkForm;
};



