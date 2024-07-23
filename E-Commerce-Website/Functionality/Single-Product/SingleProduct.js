let Data = JSON.parse(localStorage.getItem("data")) || [];
let singleProductDiv = document.querySelector(".item");
let ID = new URLSearchParams(window.location.search).get("id");
let productID = JSON.parse(ID);

function displayProduct() {
  singleProductDiv = "";

  Data.map((data) => {
    if (data.id === productID) {
      singleProductDiv += `
       <div class="product-content">
        <div class="imgDiv">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="infoDiv">
            <h1 class="card-name">${data.name}</h1>
            <p class="card-description">${data.description}</p>
            <p class="card-details">Sizes: ${data.sizes.join(", ")}</p>
            <p class="card-details">Colors: ${data.colors.join(", ")}</p>
            <p class="card-details">Collection: ${data.category}</p>
            <p class="card-details">Type: ${data.type}</p>
            <p class="rating">Rating: ${data.rating} / 5.0</p>
            <h2 class="card-price">Price : ${data.price}₹</h2>
            <button class="btn" onclick="addToCart(${productID})">Add To Cart</button>
        </div>
       </div>
    `;
    }
  });

  document.querySelector(".item").innerHTML = singleProductDiv;
}

displayProduct();
