let allDatas = JSON.parse(localStorage.getItem("data"));
let bestProductsDiv = document.querySelector(".bestProducts");

// Typed.js Library used for text animation.
new Typed("#typed-text", {
  strings: [
    "Discover Your <span>Style</span>",
    "Step into <span>Comfort</span>",
    "Experience the <span>Best</span>",
  ],
  typeSpeed: 70,
  backSpeed: 25,
  loop: true,
  showCursor: false,
});
function bestProducts() {
  let bestProducts = "";

  for (var i = 1; i < 5; i++) {
    bestProducts += `
    <div class="items">
      <img src="${allDatas[i - 1].image}" alt="${allDatas[i - 1].name}"> 
      <h3>${allDatas[i - 1].name}</h3>
      <p>Rating: ${allDatas[i - 1].rating} (155 Reviews)</p>
      <p>Price: ${allDatas[i - 1].price}₹</p>
      <div>
        <button class="btn primary-btn" onclick="isLogin(${
          i - 1
        })">Add to Cart</button>
        <button class="btn secondary-btn" onclick="storeId(${
          i - 1
        })">View Details</button>
      </div>
    </div>
    `;
  }

  bestProductsDiv.innerHTML = bestProducts;
}

bestProducts();

function storeId(id) {
  window.location.replace(
    "./Functionality/Single-Product/SingleProduct.html?id=" + JSON.stringify(id)
  );

  setTimeout(() => {
    window.location.href = "../Single-Product/SingleProduct.html";
  }, 300);
}
