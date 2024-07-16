let newDish = {
    id: 0,
    name: "Paneer Paratha",
    ingredients: ["wheat flour", "paneer", "onions", "coriander", "salt"],
    price: 150,
    quantity: 1,
    availability: "yes",
    category: "lunch",
  };
  
  // Add
  function addDish(dish) {
    let recipes = JSON.parse(localStorage.getItem("recipe"));
    dish.id = recipes.length + 1;
    recipes.push(dish);
    localStorage.setItem("recipe", JSON.stringify(recipes));
    console.log("New dish added:", recipes);
  }
  addDish(newDish);
  
  // Update
  function updatePrice(newPrice) {
    let recipes = JSON.parse(localStorage.getItem("recipe"));
    let recipeUpdate = recipes.find((item) => item.id === 2);
    if (recipeUpdate) {
      recipeUpdate.price = newPrice;
      localStorage.setItem("recipe", JSON.stringify(recipes));
      console.log("Updated price:", newPrice);
    } else {
      console.log("Recipe not found");
    }
  }
  updatePrice(60);
  
  // Remove
  function removeDish(id) {
    let recipes = JSON.parse(localStorage.getItem("recipe"));
    let remainingRecipes = recipes.filter((item) => item.id !== id);
    localStorage.setItem("recipe", JSON.stringify(remainingRecipes));
    console.log("Remaining dishes:", remainingRecipes);
  }
  removeDish(5);
  
  // searchByIngredient
  function searchByIngredient(ingredient) {
    let recipes = JSON.parse(localStorage.getItem("recipe"));
    let matchedRecipes = recipes.filter((item) =>
      item.ingredients.includes(ingredient)
    );
    let recipeNames = matchedRecipes.map((item) => item.name);
    console.log("Dishes containing ingredient:", recipeNames);
  }
  searchByIngredient("paneer");
  
  // Filter
  function filterByCategory(category) {
    try {
      let recipes = JSON.parse(localStorage.getItem("recipe"));
      let categories = recipes.filter((item) => item.category.includes(category));
      let categoryNames = categories.map((item) => item.name);
      console.log("Dishes in category:", categoryNames);
    } catch (error) {
      console.warn("Error:", error);
    }
  }
  filterByCategory("lunch");