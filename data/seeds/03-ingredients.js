
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'ing aa', amount: '1oz' },
    { name: 'ing bb', amount: '1l' },
    { name: 'ing cc', amount: '10ml' },
    { name: 'ing dd', amount: '100g' },
    { name: 'ing ee', amount: '1kg' },
    { name: 'ing ff', amount: '1 cup' },
    { name: 'ing gg', amount: '13oz' },
    { name: 'ing hh', amount: '40g' },
    { name: 'ing ii', amount: '188ml' },
    { name: 'ing jj', amount: '1.4kg' },
    { name: 'ing kk', amount: '111l' },
    { name: 'ing ll', amount: '1345mg' }
  ])
}