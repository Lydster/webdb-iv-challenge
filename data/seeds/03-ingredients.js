exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "beans", quantity: 6 },
    { ingredient_name: "rice", quantity: 6 },
    { ingredient_name: "pepper", quantity: 6 },
    { ingredient_name: "chicken", quantity: 6 },
    { ingredient_name: "cheese", quantity: 6 },
    { ingredient_name: "egg", quantity: 6 },
    { ingredient_name: "flour", quantity: 6 },
    { ingredient_name: "salt", quantity: 6 },
    { ingredient_name: "spices", quantity: 6 },
    { ingredient_name: "legumes", quantity: 6 },
    { ingredient_name: "tomato", quantity: 6 },
    { ingredient_name: "eggplant", quantity: 6 },
    { ingredient_name: "onion", quantity: 6 },
    { ingredient_name: "noodles", quantity: 6 }
  ]);
};
