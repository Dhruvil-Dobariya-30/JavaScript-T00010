let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let discountPercentage =
  parseFloat(localStorage.getItem("discountPercentage")) || 0;

function displayOrderDetails() {
  let orderItemsContainer = document.getElementById("order-items");
  let subtotalElement = document.getElementById("subtotal");
  let discountElement = document.getElementById("discount");
  let totalElement = document.getElementById("total");
  let itemCountElement = document.getElementById("item-count");

  let order = "";
  let subtotal = 0;
  let totalItems = 0;

  cartItems.forEach((item) => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;
    order += `
          <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>₹${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
      `;
  });

  orderItemsContainer.innerHTML = order;
  itemCountElement.textContent = `${totalItems} item${
    totalItems !== 1 ? "s" : ""
  } in your order`;

  let discount = subtotal * discountPercentage;
  let total = subtotal - discount;

  subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
  discountElement.textContent = `₹${discount.toFixed(2)}`;
  totalElement.textContent = `₹${total.toFixed(2)}`;
}
function displayDeliveryInfo() {
  let estimatedDeliveryElement = document.getElementById("estimated-delivery");
  let deliveryAddressElement = document.getElementById("delivery-address");

  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  estimatedDeliveryElement.textContent = deliveryDate.toDateString();
  deliveryAddressElement.textContent =
    localStorage.getItem("deliveryAddress") || "No address provided";
}

function cancelOrder() {
  if (confirm("Are you sure you want to cancel this order?")) {
    localStorage.removeItem("cart");
    localStorage.removeItem("discountPercentage");
    localStorage.removeItem("deliveryAddress");
    alert("Order cancelled successfully!");
    window.location.href = "../../index.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayOrderDetails();
  displayDeliveryInfo();
  document
    .getElementById("cancel-order")
    .addEventListener("click", cancelOrder);
});
