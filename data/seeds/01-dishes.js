exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { dish_name: "Italian" },
    { dish_name: "Mexican" },
    { dish_name: "Ethiopian" },
    { dish_name: "Thai" },
    { dish_name: "Indian" }
  ]);
};
