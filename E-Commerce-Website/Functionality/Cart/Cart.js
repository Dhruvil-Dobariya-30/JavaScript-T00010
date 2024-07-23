let allData = JSON.parse(localStorage.getItem("data")) || [];
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let discountPercentage = 0;
let loginData = JSON.parse(localStorage.getItem("Login")) || null;

function isLogin(id) {
  if (loginData) {
    addToCart(id);
  } else {
    alert("Please Login For Add Items In Cart!");
  }
}

function addToCart(id) {
  let productData = allData.find((data) => data.id === id);
  let existingItem = cartItems.find((item) => item.id === id);
  if (existingItem) {
    alert("Product already added!");
    // existingItem.quantity += 1;
  } else {
    cartItems.push({
      ...productData,
      quantity: 1,
      selectedSize: productData.sizes[0],
      selectedColor: productData.colors[0],
    });
  }
  saveCart();
  displayCart();
}

function displayCart() {
  let cartBody = document.getElementById("cart-items-body");
  let itemCount = document.getElementById("item-count");
  itemCount.textContent = `${cartItems.length} items in your bag.`;

  let cartData = "";
  cartItems.forEach((item) => {
    cartData += `
        <tr>
            <td data-label="Product">
                <span class="mobile-label">Product</span>
                <div class="product-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h4>${item.name}</h4>
                        <select class="color-select">
                            ${item.colors
                              .map(
                                (color) =>
                                  `<option value="${color}">${color}</option>`
                              )
                              .join("")}
                        </select>
                        <select class="size-select">
                            ${item.sizes
                              .map(
                                (size) =>
                                  `<option value="${size}">${size}</option>`
                              )
                              .join("")}
                        </select>
                    </div>
                </div>
            </td>
            <td data-label="Price">
                <span class="mobile-label">Price</span>
                ₹${item.price.toFixed(2)}
            </td>
            <td data-label="Quantity">
                <span class="mobile-label">Quantity</span>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </td>
            <td data-label="Total Price">
                <span class="mobile-label">Total Price</span>
                ₹${(item.price * item.quantity).toFixed(2)}
            </td>
            <td data-label="Action">
                <span class="mobile-label">Action</span>
                <button onclick="removeFromCart(${
                  item.id
                })" class="remove-btn">Remove</button>
            </td>
        </tr>
    `;
  });

  cartBody.innerHTML = cartData;
  updateCartSummary();
}

function removeFromCart(id) {
  cartItems = cartItems.filter((item) => item.id !== id);
  saveCart();
  displayCart();
}

function updateQuantity(id, change) {
  let item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      displayCart();
    }
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function updateCartSummary() {
  let subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let discount = subtotal * discountPercentage;
  let total = subtotal - discount;
  document.getElementById("cart-subtotal").textContent = `₹${subtotal.toFixed(
    2
  )}`;
  document.getElementById("discount-amount").textContent = `₹${discount.toFixed(
    2
  )}`;
  document.getElementById("cart-total").textContent = `₹${total.toFixed(2)}`;
}

function applyCoupon() {
  let couponCode = document.getElementById("coupon-input").value;
  if (couponCode === "Offer-1" || couponCode === "Offer-2") {
    discountPercentage = 0.3;
    alert("30% discount applied!");
  } else if (couponCode === "Offer-3") {
    discountPercentage = 0.5;
    alert("50% discount applied!");
  } else {
    alert("Invalid coupon code.");
  }
  updateCartSummary();
}

function saveDeliveryAddress() {
  let address = document.getElementById("delivery-address").value;
  localStorage.setItem("deliveryAddress", address);
}

function checkout() {
  let address = document.getElementById("delivery-address").value;
  if (address == "") {
    alert("Please enter delivery address!");
  } else {
    alert("Order Placed successfully!");
    saveDeliveryAddress();
    localStorage.setItem("discountPercentage", discountPercentage);
    window.location.href =
      "../../Functionality/Shipping-Page/Shipping-Page.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  document
    .getElementById("apply-coupon")
    .addEventListener("click", applyCoupon);
  document.getElementById("checkout-btn").addEventListener("click", checkout);
});
