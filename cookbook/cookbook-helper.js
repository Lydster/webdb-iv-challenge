const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  getRecipe,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish_name) {
  return db("dishes").insert(dish_name);
}

function getRecipes(id) {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
