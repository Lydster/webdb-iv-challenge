exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();
      tbl
        .string("dish_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .notNullable()
        .unique();
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
      tbl.float("quantity").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients");
};
