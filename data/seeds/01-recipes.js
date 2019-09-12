exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'recipe1'},
    {name: 'recipe2'},
    {name: 'recipe3'},
    {name: 'recipe4'}
  ])
}