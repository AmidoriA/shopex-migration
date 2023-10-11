/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('shops', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('url_alias');
        table.boolean('recommended').defaultTo(false);
        table.integer('created_by_user_id').unsigned();
    }).then(() => {
        return knex.schema.table('items', (table) => {
            table.renameColumn('seller_id', 'shop_id');
        });
    }).then(() => {
        return knex.schema.table('items', (table) => {
            table.foreign('shop_id').references('id').inTable('shops');
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('items', (table) => {
        // Remove the foreign key constraint
        table.dropForeign('shop_id');
    }).then(() => {
        return knex.schema.table('items', (table) => {
            // Rename the column back to its original name
            table.renameColumn('shop_id', 'seller_id');
        });
    }).then(() => {
        // Drop the 'shops' table
        return knex.schema.dropTable('shops');
    });
};
