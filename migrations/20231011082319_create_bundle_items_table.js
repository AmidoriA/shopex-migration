/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bundle_items', (table) => {
        table.increments('id').primary();
        table.integer('item_id').unsigned().index().references('id').inTable('items');
        table.integer('bundle_id').unsigned().index().references('id').inTable('bundles');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bundle_items');
};
