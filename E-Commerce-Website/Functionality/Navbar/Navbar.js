document.addEventListener("DOMContentLoaded", function () {
  let navbarContainer = document.getElementById("navbar");
  let loginData = JSON.parse(localStorage.getItem("Login"));
  let signupData = JSON.parse(localStorage.getItem("SignupData"));

  function userName(email) {
    let user = signupData.find((user) => user.email === email);
    return user ? user.name : "User";
  }

  function updateNavbar() {
    let user = loginData ? userName(loginData.email) : null;

    let navbar = `
      <nav class="navbar">
        <a href="/" class="navbar-brand">FootSteps</a>
        <button class="navbar-toggle">&#9776;</button>
        <div class="navbar-menu">
          <ul class="navbar-links">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../Functionality/All-Products/AllProducts.html">All Products</a></li>
            <li><a href="#" id="cartLink">Cart</a></li>
          </ul>
          <div class="buttons">
            ${
              !loginData
                ? `<button class="btnn sign"><a href="../../Auth/Login/Login.html">Sign Up</a></button>`
                : ""
            }
            <button class="btnn login" id="loginLogoutBtn">
              ${loginData ? "Logout" : "Login"}
            </button>
            <div class="profile-section">
              <div class="profile-icon">
                <img src="../../Data/Images/user.png" alt="Profile Pic">
              </div>
              ${user ? `<div class="user-name">${user}</div>` : ""}
              <div class="profile-hover-box">
                ${
                  user
                    ? `<p>Welcome, ${user}</p>
                     <a href="../../Auth/Reset-Password/Reset-Password.html">Reset Password</a>
                     <a href="../../Functionality/Shipping-Page/Shipping-Page.html">Track Order</a>
                     `
                    : "<p>Please log in to view your profile</p>"
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;

    navbarContainer.innerHTML = navbar;

    let navbarToggle = document.querySelector(".navbar-toggle");
    let navbarMenu = document.querySelector(".navbar-menu");
    let buttons = document.querySelector(".buttons");
    let loginLogoutBtn = document.getElementById("loginLogoutBtn");
    let cartLink = document.getElementById("cartLink");

    navbarToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
      buttons.classList.toggle("active");
    });

    loginLogoutBtn.addEventListener("click", function () {
      if (loginData) {
        localStorage.removeItem("Login");
        loginData = null;
        updateNavbar();
        window.location.href = "../../index.html";
      } else {
        window.location.href = "../../Auth/Login/Login.html";
      }
    });

    cartLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (loginData) {
        window.location.href = "../../Functionality/Cart/Cart.html";
      } else {
        alert("please Login For Viewing Cart!");
      }
    });
  }

  updateNavbar();
});
