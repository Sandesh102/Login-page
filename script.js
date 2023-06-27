document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password are valid (dummy validation)
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to the hotel management page or perform any other action
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
