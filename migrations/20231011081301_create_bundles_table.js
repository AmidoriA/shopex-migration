/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bundles', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('description');
    }).then(() => {
        
    });

    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bundles');
};
