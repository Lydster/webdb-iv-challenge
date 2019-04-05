exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "spaghetti", dish_id: 1 },
    { recipe_name: "Bucatini", dish_id: 1 },
    { recipe_name: "Carbonara", dish_id: 1 },
    { recipe_name: "Chili Pablano", dish_id: 2 },
    { recipe_name: "Pozole", dish_id: 2 },
    { recipe_name: "Doro Wat", dish_id: 3 },
    { recipe_name: "Kitfo and Kocho", dish_id: 3 },
    { recipe_name: "Som Tam", dish_id: 4 },
    { recipe_name: "Pad Thai", dish_id: 4 },
    { recipe_name: "Keema Aloo", dish_id: 5 },
    { recipe_name: "Black Chana", dish_id: 5 },
    { recipe_name: "Chicken Tikka Masala", dish_id: 5 }
  ]);
};
