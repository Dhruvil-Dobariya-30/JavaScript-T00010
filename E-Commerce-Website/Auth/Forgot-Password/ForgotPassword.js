let allData = JSON.parse(localStorage.getItem("SignupData")) || [];
let forgotEmail = document.getElementById("forgotEmail");
let captchaInput = document.getElementById("captcha-input");
let newPass = document.getElementById("new-pass");
let newRePass = document.getElementById("new-re-pass");
let message = document.getElementById("message");

let currentCaptcha = "";
let currentEmail = "";

function checkEmail() {
  currentEmail = forgotEmail.value;
  if (allData.find((e) => e.email === currentEmail)) {
    document.getElementById("email-section").classList.remove("active");
    document.getElementById("email-section").classList.add("remove");
    document.getElementById("captcha-section").classList.remove("remove");
    document.getElementById("captcha-section").classList.add("active");
    generateCaptcha();
  } else {
    message.textContent = "Email not found. Please try again.";
    forgotEmail.value = "";
  }
}

function generateCaptcha() {
  let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  currentCaptcha = "";

  for (let i = 0; i < 6; i++) {
    currentCaptcha += all.charAt(Math.floor(Math.random() * all.length));
  }

  document.getElementById("captcha-div").textContent = currentCaptcha;
}

function verifyCaptcha() {
  if (captchaInput.value === currentCaptcha) {
    document.getElementById("captcha-section").classList.remove("active");
    document.getElementById("captcha-section").classList.add("remove");
    document.getElementById("new-password-section").classList.remove("remove");
    document.getElementById("new-password-section").classList.add("active");
    message.textContent = "";
  } else {
    message.textContent = "Incorrect captcha. Please try again.";
    captchaInput.value = "";
    generateCaptcha();
  }
}

function resetPassword() {
  if (newPass.value !== newRePass.value) {
    message.textContent = "Passwords do not match. Please try again.";
    newPass.value = newRePass.value = "";
    return;
  }

  let user = allData.find((u) => u.email === currentEmail);
  if (user) {
    user.password = newPass.value;
    localStorage.setItem("SignupData", JSON.stringify(allData));
    message.textContent = "Password reset successfully!";
    window.location.href = "/index.html";
  }
}
