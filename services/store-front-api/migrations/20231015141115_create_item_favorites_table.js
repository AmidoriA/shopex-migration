/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item_favorites', function(table) {
        table.increments('id').primary();
        table.integer('item_id').unsigned().notNullable().references('id').inTable('items');
        table.integer('user_id').unsigned();
        table.timestamps(true, true);

        table.index(['item_id', 'user_id']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('item_favorites');
};
