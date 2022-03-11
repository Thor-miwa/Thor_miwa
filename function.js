// javascript function 
const alertBox = document.getElementById("alertBox");

function showError() {
    alertBox.innerHTML = "Error, failed to submit";
    alertBox.style.color = 'red';
    alertBox.style.fontWeight = 'Bold';
}

function showSuccess (message) {
    alertBox.innerHTML = message;
    alertBox.style.color = 'green';
    alertBox.style.fontWeight = 'Bold'; 
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = "Welcome" + name + "! we have sent a message to your elail address" + email;
    showSuccess(message);
}

