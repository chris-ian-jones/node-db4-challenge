
exports.seed = function(knex) {
  return knex('step_instructions').insert([
    // recipe_id must match valid id for a recipe
    { step_number: 1, instructions: 'step a for 1', recipe_id: 1 },
    { step_number: 2, instructions: 'step b for 1', recipe_id: 1 },
    { step_number: 3, instructions: 'step c for 1', recipe_id: 1 },
    { step_number: 1, instructions: 'step a for 2', recipe_id: 2 },
    { step_number: 2, instructions: 'step b for 2', recipe_id: 2 },
    { step_number: 1, instructions: 'step a for 3', recipe_id: 3 },
    { step_number: 1, instructions: 'step a for 4', recipe_id: 4 },
    { step_number: 2, instructions: 'step b for 4', recipe_id: 4 },
    { step_number: 3, instructions: 'step c for 4', recipe_id: 4 },
    { step_number: 4, instructions: 'step d for 4', recipe_id: 4 },
    { step_number: 5, instructions: 'step e for 4', recipe_id: 4 },
    { step_number: 6, instructions: 'step f for 4', recipe_id: 4 }
  ])
}
