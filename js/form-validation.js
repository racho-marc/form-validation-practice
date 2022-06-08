const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

const validateForm = function() {
    // Using Constraint API
    isValid = form.checkValidity();
    
    // Style main message for an error
    if(!isValid) {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }

    // Check if passwords match
    if(password.value === confirmPassword.value) {
        passwordsMatch = true;
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    } else {
        passwordsMatch = false;
        message.textContent = "Make sure passwords match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }

    
}

const storeFormData = function() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }

    // do something with user data
    console.log(user);
}

// Event listener
const processFormData = function(e) {
    e.preventDefault();
    console.log(e);
    // validate form
    validateForm();
    // Submit Data if valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}
form.addEventListener('submit', processFormData);