
exports.seed = function(knex) {
  return knex('table_name').insert([
    {name: 'recipe1'},
    {name: 'recipe2'},
    {name: 'recipe3'},
    {name: 'recipe4'},
    {name: 'recipe5'},
  ])
}
