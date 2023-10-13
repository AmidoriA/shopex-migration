/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('SET foreign_key_checks = 0;');

  // Deletes ALL existing entries
  await knex('users').truncate();

  await knex.raw('SET foreign_key_checks = 1;');
};
