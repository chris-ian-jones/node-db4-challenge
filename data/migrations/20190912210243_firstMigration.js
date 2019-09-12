exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name', 255).notNullable()
    })
    .createTable('step_instructions', tbl => {
      tbl.increments()
      tbl.integer('step_number').notNullable()
      tbl.string('instructions', 4000).notNullable()
      
      //Foreign Key
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 255).notNullable()
      tbl.string('amount', 255).notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.float('quantity').notNullable()

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