exports.up = function(knex) {
  return knex.schema
    // Recipes
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name', 255).notNullable()
    })

    // Step by Step Instructions, has foreign key as is 'Many' side of relationship to each Recipe  
    .createTable('step_instructions', tbl => {
      tbl.increments()
      tbl.integer('step_number').notNullable()
      tbl.string('instructions', 4000).notNullable()
      
      // Foreign Key pointing to primary key of Recipes
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    // Ingredients
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 255).notNullable()
      tbl.string('amount', 255).notNullable()
    })

    // 'Intermediary' table for 'Many to Many' relationship between Recipes And Ingredients which has quantity of ingredient per recipe
    .createTable('recipe_ingredients', tbl => {
      tbl.float('quantity').notNullable()

      // Foreign Keys pointing to primary keys of Recipes & Ingredients
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // 'Composite' primary key consisting of primary keys of Recipes & Ingredients
      tbl.primary(['recipe_id', 'ingredient_id'])
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_instructions')
    .dropTableIfExists('recipes')
}