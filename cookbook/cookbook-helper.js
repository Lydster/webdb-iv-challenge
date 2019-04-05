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

function getDish() {
  return db("dishes")
    .where({ id })
    .first();
}
