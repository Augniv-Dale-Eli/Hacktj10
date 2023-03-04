function validateSignup() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm-password").value;

	if (password != confirmPassword) {
		alert("Passwords do not match");
		return false;
	} else {
		// Code to save the user's details goes here
		alert("Signup successful!");
		window.location.href = "login.html";
	}
}

function validateLogin() {
	var username = document.getElementById
}