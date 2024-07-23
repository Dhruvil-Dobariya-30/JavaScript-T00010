document.addEventListener("DOMContentLoaded", function () {
  let footerContainer = document.getElementById("footer");

  let footer = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../Functionality/All-Products/AllProducts.html">All Products</a></li>
            <li><a href="../../Functionality/Cart/Cart.html">Cart</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Customer Service</h3>
          <ul>
          <li><a href="../../Functionality/Shipping-Page/Shipping-Page.html">Shipping Information</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Our Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} FootSteps. All rights reserved.</p>
      </div>
    </footer>
  `;

  footerContainer.innerHTML = footer;
});
