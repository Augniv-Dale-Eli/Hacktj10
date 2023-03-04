function signup() {
	// code to create a new account goes here
	// if the account is created successfully, redirect to the login page
	alert("Account created successfully!");
	window.location.href = "login.html";
  }
  
  function login() {
	// code to check if the username and password are correct goes here
	// if the login is successful, redirect to the dashboard page
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
  
	// For this example, we'll assume the correct credentials are "admin" and "password"
	if (username == "admin" && password == "password") {
	  alert("Login successful!");
	  console.log("Test")
	  window.location.href = "dashboard.html"; // send the user to the dashboard page
	} else {
	  alert("Incorrect username or password");
	  return false;
	}
  }
   