// recipe_id must match valid id for a recipe
// ingredient_id must match valid id for an ingredient
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { quantity: 1, recipe_id: 1, ingredient_id: 1 },
    { quantity: 2, recipe_id: 2, ingredient_id: 2 },
    { quantity: 3, recipe_id: 3, ingredient_id: 3 },
    { quantity: 2, recipe_id: 4, ingredient_id: 4 },
    { quantity: 6, recipe_id: 1, ingredient_id: 5 },
    { quantity: 3, recipe_id: 1, ingredient_id: 6 },
    { quantity: 2, recipe_id: 2, ingredient_id: 7 },
    { quantity: 3, recipe_id: 4, ingredient_id: 8 },
    { quantity: 5, recipe_id: 4, ingredient_id: 9 },
    { quantity: 1, recipe_id: 1, ingredient_id: 10 },
    { quantity: 2, recipe_id: 2, ingredient_id: 11 },
    { quantity: 3, recipe_id: 4, ingredient_id: 12 },
  ])
}
