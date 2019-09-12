const db = require('../data/db-config')

module.exports = {
  getRecipes,
  getShoppingList,
}

function getRecipes(){
  return db('recipes')
}

function getShoppingList(recipe_id){
  return db('recipe_ingredients as r_i')
    .join('ingredients as i', 'i.id', 'r_i.ingredient_id')
    .where('r_i.recipe_id', recipe_id)
    .select('i.name', 'i.amount', 'r_i.quantity')
}