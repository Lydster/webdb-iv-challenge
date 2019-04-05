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

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
