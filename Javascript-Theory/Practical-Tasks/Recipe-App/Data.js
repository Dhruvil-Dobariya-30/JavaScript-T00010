const recipeData = [
    {
      id: 1,
      name: "Chole Bhature",
      ingredients: ["onions", "tomatoes", "ginger", "garlic", "salt"],
      price: 100,
      quantity: 1,
      availability: "yes",
      category: "lunch",
    },
    {
      id: 2,
      name: "Samosa",
      ingredients: ["potatoes", "flour", "garam masala", "salt", "oil"],
      price: 20,
      quantity: 2,
      availability: "yes",
      category: "snack",
    },
    {
      id: 3,
      name: "Palak Paneer",
      ingredients: ["paneer", "tomatoes", "onions", "garlic", "turmeric", "salt"],
      price: 150,
      quantity: 1,
      availability: "yes",
      category: "Dinner",
    },
    {
      id: 4,
      name: "Rasgulla",
      ingredients: ["milk", "sugar", "water", "rose"],
      price: 50,
      quantity: 5,
      availability: "yes",
      category: "dessert",
    },
  ];
  
  localStorage.setItem("recipe", JSON.stringify(recipeData));