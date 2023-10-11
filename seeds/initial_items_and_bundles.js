/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('SET foreign_key_checks = 0;');

  // Deletes ALL existing entries
  await knex('bundle_items').truncate();
  await knex('items').truncate();
  await knex('bundles').truncate();

  await knex('items').insert([
    { name: 'First Item', description: 'First item description'},
    { name: 'Second Item', description: 'Second item description'}
  ]);

  await knex('bundles').insert([
    { name: 'First Bundle', description: 'First bundle description'},
    { name: 'Second Bundle', description: 'Second bundle description'}
  ]);

  await knex('bundle_items').insert([
    { item_id:1, bundle_id: 1 },
    { item_id:1, bundle_id: 2 },
  ]);

  await knex.raw('SET foreign_key_checks = 1;');
};
