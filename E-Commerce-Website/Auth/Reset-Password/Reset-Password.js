function reset() {
  let allData = JSON.parse(localStorage.getItem("SignupData")) || [];
  let email = document.getElementById("resetEmail").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("re-pass").value;
  let messageElement = document.getElementById("message");

  let userFound = false;

  allData.forEach((data) => {
    if (data.email === email) {
      userFound = true;
      if (data.password === password) {
        data.password = rePassword;
        localStorage.setItem("SignupData", JSON.stringify(allData));
        messageElement.textContent = "Password reset successfully!";
        messageElement.style.color = "#4cc9f0";
        redirect();
      } else {
        messageElement.textContent = "Incorrect current password!";
      }
    }
  });

  if (!userFound) {
    messageElement.textContent = "Email not found!";
  }
}

function redirect() {
  setTimeout(() => {
    window.location.href = "../../index.html";
  }, 2000);
}
