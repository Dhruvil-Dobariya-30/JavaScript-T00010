let productDiv = document.getElementById("products");
let cartsDiv = document.getElementById("carts");
let usersDiv = document.getElementById("users");

let userData, productData, cartData;

function getUserData() {
  const url = "https://dummyjson.com/users";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.users);
}

function getProductData() {
  const url = "https://dummyjson.com/products";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.products);
}

function getCartData() {
  const url = "https://dummyjson.com/carts";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.carts);
}

Promise.all([getUserData(), getProductData(), getCartData()])
  .then(([users, products, carts]) => {
    userData = users;
    productData = products;
    cartData = carts;

    displayUserData();
    displayProducts();
    displayCarts();
  })
  .catch((error) => console.error("Error fetching data:", error));

function displayProducts() {
  productDiv.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    productDiv.innerHTML += `
            <div class="Product-card">
                <img src=${productData[i].thumbnail}>
                <h3>Title : ${productData[i].title}</h3>
                <h4>Category : ${productData[i].category}</h4>
                <h5>Description : ${productData[i].description}</h5>
                <h3>Price : $${productData[i].price}</h3>
            </div>`;
  }
}

function displayCarts() {
  cartsDiv.innerHTML = "";
  cartData.forEach((cart) => {
    cart.products.forEach((pro) => {
      cartsDiv.innerHTML += `
	        <div class="cart-card">
	            <img src=${pro.thumbnail}>
	            <h3>Title : ${pro.title}</h3>
	            <h4> Price : ${pro.price}</h4>
	            <h4>Quantity : ${pro.quantity}</h4>
	            <h3>Total : ${pro.total}</h3>
	        </div>`;
    });
  });
}

function displayUserData() {
  usersDiv.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    usersDiv.innerHTML += `
            <div class="user-card">
	            <img src=${userData[i].image}>
	            <h3>FirstName : ${userData[i].firstName}</h3>
	            <h3>LastName : ${userData[i].lastName}</h3>
	            <h3>Email : ${userData[i].email}</h3>
	        </div>`;
  }
}
