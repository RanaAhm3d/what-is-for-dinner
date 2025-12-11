const meals = [
  {
    id: 1,
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts.",
    difficulty: "Intermediate",
    category: "Asian",
    image: "/images/Pad Thai.jpg",
    prepTime: "10",
    cookTime: "15",
    servings: 2,
    rating: 4.8,
    reviews: 356,

    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges & cilantro",
    ],

    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss 2–3 minutes.",
      "Add eggs and bean sprouts. Toss together.",
      "Serve with peanuts, lime, and cilantro.",
    ],

    nutrition: {
      calories: "500 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },

    tips: [
      "Don’t oversoak noodles.",
      "Cook on high heat for wok flavor.",
      "Balance sweet, sour, and salty flavors.",
      "Prep ingredients before cooking.",
    ],
  },

  {
    id: 2,
    name: "Creamy Alfredo Pasta",
    description: "Classic fettuccine pasta in a rich cream-parmesan sauce.",
    difficulty: "Easy",
    category: "Italian",
    image: "/images/Creamy Alfredo Pasta.jpg",
    prepTime: "8",
    cookTime: "15",
    servings: 3,
    rating: 4.6,
    reviews: 190,

    ingredients: [
      "250g fettuccine pasta",
      "1 cup heavy cream",
      "1/2 cup grated parmesan",
      "2 garlic cloves",
      "2 tbsp butter",
      "Salt & pepper",
      "Parsley",
    ],

    instructions: [
      "Cook pasta according to package instructions.",
      "Melt butter and sauté garlic.",
      "Add cream and simmer 3 minutes.",
      "Mix in parmesan until melted.",
      "Combine with pasta and season.",
      "Garnish with parsley.",
    ],

    nutrition: {
      calories: "650 kcal",
      protein: "18g",
      carbs: "70g",
      fat: "28g",
      fiber: "3g",
      sodium: "620mg",
    },

    tips: [
      "Do not boil the sauce after adding cheese.",
      "Use fresh parmesan for best melting.",
      "Reserve some pasta water to adjust thickness.",
    ],
  },

  {
    id: 3,
    name: "Chicken Teriyaki",
    description: "Japanese-style glazed chicken served with rice.",
    difficulty: "Intermediate",
    category: "Asian",
    image: "/images/Chicken Teriyaki.jpg",
    prepTime: "15",
    cookTime: "20",
    servings: 2,
    rating: 4.9,
    reviews: 412,

    ingredients: [
      "2 chicken breasts",
      "1/4 cup soy sauce",
      "2 tbsp honey",
      "1 tbsp rice vinegar",
      "1 tbsp sesame oil",
      "1 garlic clove",
      "1 tsp ginger",
      "Sesame seeds",
    ],

    instructions: [
      "Mix soy sauce, honey, vinegar, garlic, ginger.",
      "Marinate chicken 10 minutes.",
      "Cook chicken until golden.",
      "Pour sauce and simmer until thick.",
      "Serve with rice and sesame seeds.",
    ],

    nutrition: {
      calories: "450 kcal",
      protein: "40g",
      carbs: "32g",
      fat: "14g",
      fiber: "1g",
      sodium: "980mg",
    },

    tips: [
      "Let sauce reduce slowly for shine.",
      "Use boneless thighs for juicier meat.",
      "Add a splash of mirin for extra flavor.",
    ],
  },

  {
    id: 4,
    name: "Beef Tacos",
    description: "Mexican-style tacos with seasoned ground beef.",
    difficulty: "Easy",
    category: "Mexican",
    image: "/images/Beef Tacos.webp",
    prepTime: "12",
    cookTime: "10",
    servings: 4,
    rating: 4.7,
    reviews: 278,

    ingredients: [
      "300g ground beef",
      "1 taco seasoning packet",
      "1 onion, chopped",
      "Shredded cheese",
      "Lettuce",
      "Tomatoes",
      "Tortilla wraps",
    ],

    instructions: [
      "Cook beef until browned.",
      "Add onions and taco seasoning.",
      "Warm tortilla wraps.",
      "Assemble tacos with cheese and veggies.",
    ],

    nutrition: {
      calories: "430 kcal",
      protein: "22g",
      carbs: "34g",
      fat: "20g",
      fiber: "3g",
      sodium: "880mg",
    },

    tips: [
      "Toast tortillas lightly for better flavor.",
      "Add lime juice for freshness.",
      "Use cheddar or Mexican blend cheese.",
    ],
  },

  {
    id: 5,
    name: "Greek Salad",
    description: "Refreshing Mediterranean salad with feta cheese.",
    difficulty: "Easy",
    category: "Mediterranean",
    image: "/images/Greek Salad.jpg",
    prepTime: "10",
    cookTime: "0",
    servings: 2,
    rating: 4.5,
    reviews: 150,

    ingredients: [
      "1 cucumber",
      "2 tomatoes",
      "1/2 red onion",
      "Feta cheese",
      "Olives",
      "Olive oil",
      "Oregano",
    ],

    instructions: [
      "Chop all vegetables.",
      "Mix olive oil and oregano for dressing.",
      "Add feta cheese on top.",
      "Serve chilled.",
    ],

    nutrition: {
      calories: "220 kcal",
      protein: "6g",
      carbs: "10g",
      fat: "18g",
      fiber: "3g",
      sodium: "450mg",
    },

    tips: [
      "Use fresh feta, not pre-crumbled.",
      "Add lemon juice for brightness.",
    ],
  },

  {
    id: 6,
    name: "Butter Chicken",
    description: "Rich and creamy Indian chicken curry.",
    difficulty: "Hard",
    category: "Indian",
    image: "/images/Butter Chicken.webp",
    prepTime: "20",
    cookTime: "35",
    servings: 4,
    rating: 4.9,
    reviews: 513,

    ingredients: [
      "400g chicken breast",
      "1 cup tomato puree",
      "1 cup cream",
      "2 tbsp butter",
      "1 tbsp garam masala",
      "1 tsp turmeric",
      "1 tsp chili powder",
      "Garlic & ginger paste",
    ],

    instructions: [
      "Marinate chicken in spices 15 minutes.",
      "Cook chicken until golden.",
      "Add tomato puree and simmer.",
      "Pour cream and stir until thick.",
      "Serve with rice or naan.",
    ],

    nutrition: {
      calories: "620 kcal",
      protein: "38g",
      carbs: "22g",
      fat: "40g",
      fiber: "2g",
      sodium: "900mg",
    },

    tips: [
      "Use ghee for extra richness.",
      "Let sauce simmer slowly.",
      "Add kasuri methi (dry fenugreek) for authentic taste.",
    ],
  },
  {
    id: 7,
    name: "Chicken Biryani",
    description: "Fragrant Indian rice dish layered with spiced chicken.",
    difficulty: "Hard",
    category: "Indian",
    image: "/images/Chicken Biryani.webp",
    prepTime: "25",
    cookTime: "40",
    servings: 4,
    rating: 4.8,
    reviews: 389,

    ingredients: [
      "500g basmati rice",
      "400g chicken",
      "1 cup yogurt",
      "2 onions",
      "Biryani masala",
      "Saffron water",
      "Ghee",
    ],

    instructions: [
      "Marinate chicken with yogurt and spices.",
      "Fry onions until golden.",
      "Cook rice until 70% done.",
      "Layer rice and chicken, add saffron water.",
      "Cook on low heat for 20 minutes.",
    ],

    nutrition: {
      calories: "650 kcal",
      protein: "32g",
      carbs: "78g",
      fat: "22g",
      fiber: "3g",
      sodium: "720mg",
    },

    tips: [
      "Use long-grain basmati rice.",
      "Cook on very low heat for best flavor.",
      "Add fried onions between layers.",
    ],
  },

  {
    id: 8,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing.",
    difficulty: "Easy",
    category: "Mediterranean",
    image: "/images/Caesar-Salad.jpg",
    prepTime: "10",
    cookTime: "0",
    servings: 2,
    rating: 4.4,
    reviews: 145,

    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
      "Black pepper",
    ],

    instructions: [
      "Chop lettuce and place in a bowl.",
      "Add croutons and parmesan.",
      "Toss with Caesar dressing.",
      "Season and serve chilled.",
    ],

    nutrition: {
      calories: "180 kcal",
      protein: "7g",
      carbs: "14g",
      fat: "11g",
      fiber: "2g",
      sodium: "340mg",
    },

    tips: [
      "Use fresh parmesan for best taste.",
      "Chill lettuce before serving.",
    ],
  },

  {
    id: 9,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella.",
    difficulty: "Intermediate",
    category: "Italian",
    image: "/images/Margherita Pizza.jpg",
    prepTime: "20",
    cookTime: "15",
    servings: 2,
    rating: 4.7,
    reviews: 210,

    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt",
    ],

    instructions: [
      "Spread sauce on rolled dough.",
      "Add mozzarella slices.",
      "Bake at high heat until crispy.",
      "Top with basil and olive oil.",
    ],

    nutrition: {
      calories: "540 kcal",
      protein: "22g",
      carbs: "68g",
      fat: "18g",
      fiber: "3g",
      sodium: "780mg",
    },

    tips: ["Use a hot oven (250–300°C).", "Add basil after baking."],
  },

  {
    id: 10,
    name: "Sushi Platter",
    description: "Assortment of maki and nigiri with fresh vegetables.",
    difficulty: "Hard",
    category: "Asian",
    image: "/images/Sushi Platter.webp",
    prepTime: "30",
    cookTime: "0",
    servings: 2,
    rating: 4.9,
    reviews: 498,

    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Cucumber",
      "Avocado",
      "Smoked salmon",
      "Soy sauce",
      "Pickled ginger",
    ],

    instructions: [
      "Cook sushi rice with vinegar mix.",
      "Lay nori and add fillings.",
      "Roll tightly and slice.",
      "Serve with soy sauce and ginger.",
    ],

    nutrition: {
      calories: "390 kcal",
      protein: "18g",
      carbs: "62g",
      fat: "7g",
      fiber: "3g",
      sodium: "680mg",
    },

    tips: ["Wet the knife before slicing.", "Don’t overfill the rolls."],
  },

  {
    id: 11,
    name: "Chicken Shawarma Plate",
    description: "Middle Eastern-style spiced chicken with garlic sauce.",
    difficulty: "Intermediate",
    category: "Middle Eastern",
    image: "/images/Chicken Shawarma Plate.webp",
    prepTime: "15",
    cookTime: "20",
    servings: 3,
    rating: 4.8,
    reviews: 320,

    ingredients: [
      "300g chicken thighs",
      "Shawarma spices",
      "Garlic sauce",
      "Pita bread",
      "Pickles",
      "Onions",
    ],

    instructions: [
      "Marinate chicken with spices.",
      "Cook until golden and tender.",
      "Serve with garlic sauce and pita.",
    ],

    nutrition: {
      calories: "480 kcal",
      protein: "33g",
      carbs: "42g",
      fat: "18g",
      fiber: "3g",
      sodium: "760mg",
    },

    tips: [
      "Use chicken thighs for juicier shawarma.",
      "Slice thinly after cooking.",
    ],
  },

  {
    id: 12,
    name: "Salmon Rice Bowl",
    description: "Grilled salmon on seasoned rice with veggies.",
    difficulty: "Easy",
    category: "Asian",
    image: "/images/Salmon Rice Bowl.png",
    prepTime: "12",
    cookTime: "15",
    servings: 2,
    rating: 4.8,
    reviews: 301,

    ingredients: [
      "2 salmon fillets",
      "Steamed rice",
      "Soy sauce",
      "Sesame oil",
      "Cucumber",
      "Carrots",
      "Sesame seeds",
    ],

    instructions: [
      "Grill salmon until cooked.",
      "Slice vegetables.",
      "Assemble rice bowl with toppings.",
      "Drizzle soy sauce and sesame oil.",
    ],

    nutrition: {
      calories: "520 kcal",
      protein: "34g",
      carbs: "50g",
      fat: "18g",
      fiber: "2g",
      sodium: "610mg",
    },

    tips: ["Use sushi rice for best texture.", "Add avocado for creaminess."],
  },
];

const tryBtn = document.getElementById("try-btn");

function showRecipe(meal) {
  document.querySelector("#recipe-image img").src = meal.image;
  document.getElementById("recipe-name").textContent = meal.name;
  document.getElementById("recipe-description").textContent = meal.description;
  document.getElementById("difficulty-badge").textContent = meal.difficulty;
  document.getElementById("category-badge").textContent = meal.category;
  document.getElementById("prep-time").textContent = meal.prepTime;
  document.getElementById("cook-time").textContent = meal.cookTime;
  document.getElementById("servings-time").textContent = meal.servings;
  document.getElementById("rating-average").textContent = meal.rating;
  document.getElementById("rating-quantity").textContent = meal.reviews;
  document.getElementById("calories-value").textContent =
    meal.nutrition.calories;
  document.getElementById("protein-value").textContent = meal.nutrition.protein;
  document.getElementById("carbohydrates-value").textContent =
    meal.nutrition.carbs;
  document.getElementById("fat-value").textContent = meal.nutrition.fat;
  document.getElementById("fiber-value").textContent = meal.nutrition.fiber;
  document.getElementById("sodium-value").textContent = meal.nutrition.sodium;
  const totalMinutes = Number(meal.prepTime) + Number(meal.cookTime);
  const warning = document.getElementById("time-warning");
  if (totalMinutes > 45) {
    warning.classList.remove("d-none");
  } else {
    warning.classList.add("d-none");
  }

  const ingredientsList = document.getElementById("ingredients-list");
  ingredientsList.innerHTML = "";
  meal.ingredients.forEach((item, index) => {
    ingredientsList.innerHTML += `
      <li><span>${index + 1}</span> ${item}</li>
    `;
  });

  const instructionsList = document.getElementById("instructions-list");
  instructionsList.innerHTML = "";
  meal.instructions.forEach((step, index) => {
    instructionsList.innerHTML += `
      <li><span>${index + 1}</span> ${step}</li>
    `;
  });

  const tipsList = document.getElementById("tips-list");
  tipsList.innerHTML = "";
  meal.tips.forEach((tip) => {
    tipsList.innerHTML += `
      <li class="d-flex flex-row align-items-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-check text-white"></i>
        </div>
        <span class="mb-1">${tip}</span>
      </li>
    `;
  });
}

tryBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * meals.length);
  showRecipe(meals[randomIndex]);
});
