let allData = JSON.parse(localStorage.getItem("SignupData")) || [];

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});

function login() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");

  if (loginEmail.value === "" || loginPassword.value === "") {
    alert("Please fill in both email and password fields.");
  } else if (
    allData.find(
      (e) => e.email === loginEmail.value && e.password === loginPassword.value
    )
  ) {
    alert("Login successful!");
    window.location.href = "../../index.html";
    localStorage.setItem(
      "Login",
      JSON.stringify({ email: loginEmail.value, password: loginPassword.value })
    );
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  signup();
});

function signup() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  var data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (allData.find((user) => user.email === data.email)) {
    alert("User already exists!");
  } else {
    allData.push(data);
    localStorage.setItem("SignupData", JSON.stringify(allData));
    alert("User registered successfully!");
    showLogin();
  }
}

document.getElementById("show-signup").addEventListener("click", showSignup);
document.getElementById("show-login").addEventListener("click", showLogin);

function showSignup() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
}

function showLogin() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("signup-container").style.display = "none";
}
