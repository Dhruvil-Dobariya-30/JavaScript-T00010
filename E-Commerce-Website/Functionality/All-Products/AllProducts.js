let alldatas = JSON.parse(localStorage.getItem("data")) || [];
let productDiv = document.querySelector(".allProductDiv");
let loadMoreBtn = document.getElementById("load-more-btn");
let searchInput = document.getElementById("search-input");
let currentItem = 0;
let initialLoad = 8;
let itemsPerLoad = 4;

let filters = {
  brand: "All",
  rating: "All",
  price: "All",
  category: "All",
  type: "All",
  search: "",
};

function filterProducts(products) {
  return products.filter(
    (product) =>
      (filters.brand === "All" || product.brand === filters.brand) &&
      (filters.category === "All" || product.category === filters.category) &&
      (filters.type === "All" || product.type === filters.type) &&
      (filters.search === "" ||
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.category.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.type.toLowerCase().includes(filters.search.toLowerCase()))
  );
}

function sortProducts(products) {
  if (filters.price === "Low to High") {
    products.sort((a, b) => a.price - b.price);
  } else if (filters.price === "High to Low") {
    products.sort((a, b) => b.price - a.price);
  }

  if (filters.rating === "High to Low") {
    products.sort((a, b) => b.rating - a.rating);
  } else if (filters.rating === "Low to High") {
    products.sort((a, b) => a.rating - b.rating);
  }

  return products;
}

function productList(product) {
  return `
    <div class="product-list">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="price">₹${product.price}</p>
        <p class="rating">Rating: ${product.rating}</p>
        <p>Collection : ${product.category}</p>
        <button class="btn primary-btn" onclick="isLogin(${product.id})">Add to Cart</button>
        <button class="btn secondary-btn" onclick="storeId(${product.id})">See Details</button>
      </div>
    </div>
  `;
}

function displayProducts(start, end) {
  let filteredData = sortProducts(filterProducts(alldatas));
  let newProducts = filteredData.slice(start, end).map(productList).join("");

  if (start === 0) {
    productDiv.innerHTML = newProducts;
  } else {
    productDiv.innerHTML += newProducts;
  }
  currentItem = end;

  loadMoreBtn.style.display = end >= filteredData.length ? "none" : "block";
}

function updateFilters() {
  filters.brand = document.getElementById("Brand").value;
  filters.rating = document.getElementById("Rating").value;
  filters.price = document.getElementById("Price").value;
  filters.category = document.getElementById("Category").value;
  filters.type = document.getElementById("Type").value;

  currentItem = 0;
  displayProducts(0, initialLoad);
}

function storeId(id) {
  window.location.href = `../Single-Product/SingleProduct.html?id=${id}`;
}

function loadMore() {
  displayProducts(currentItem, currentItem + itemsPerLoad);
}

function manageFilter(id, options) {
  return `
    <div>
      <label for="${id}">${id}</label>
      <select id="${id}">
        ${options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
      </select>
    </div>
  `;
}

function options(array, key) {
  let uniqueValues = ["All"];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueValues.includes(array[i][key])) {
      uniqueValues.push(array[i][key]);
    }
  }
  return uniqueValues;
}

function setupFilters() {
  let filterDiv = document.querySelector(".filterDiv");
  let filterOptions = {
    Brand: options(alldatas, "brand"),
    Rating: ["All", "High to Low", "Low to High"],
    Price: ["All", "Low to High", "High to Low"],
    Category: options(alldatas, "category"),
    Type: options(alldatas, "type"),
  };

  let filterData = "";
  for (let id in filterOptions) {
    filterData += manageFilter(id, filterOptions[id]);
  }
  filterDiv.innerHTML = filterData;

  document.getElementById("Brand").addEventListener("change", updateFilters);
  document.getElementById("Rating").addEventListener("change", updateFilters);
  document.getElementById("Price").addEventListener("change", updateFilters);
  document.getElementById("Category").addEventListener("change", updateFilters);
  document.getElementById("Type").addEventListener("change", updateFilters);
}

function performSearch() {
  filters.search = searchInput.value;
  currentItem = 0;
  displayProducts(0, initialLoad);
}

setupFilters();
displayProducts(0, initialLoad);
