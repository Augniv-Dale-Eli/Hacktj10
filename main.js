function validateLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "admin" && password == "password") {
		window.location.href = "blank.html";
	} else {
		alert("Invalid Login");
	}
}
