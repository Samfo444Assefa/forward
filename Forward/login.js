document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
      showAlert("Please enter both username and password.");
    } else {
      showAlert("Login successful!");
    }
  });
  function showAlert(message) {
    var alertBox = document.getElementById("custom-alert");
    var messageSpan = document.getElementById("custom-alert-message");
    messageSpan.innerHTML = message;
    alertBox.style.display = "block";
  }
  function closeAlert() {
    var alertBox = document.getElementById("custom-alert");
    alertBox.style.display = "none";
  }
  
  