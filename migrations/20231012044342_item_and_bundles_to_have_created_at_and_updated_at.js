/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('items', (table) => {
        table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp for when the user was created
        table.timestamp('updated_at').defaultTo(knex.fn.now());  // Timestamp for the last update
    }).then(() => {
        return knex.schema.table('bundles', (table) => {
            table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp for when the user was created
            table.timestamp('updated_at').defaultTo(knex.fn.now());  // Timestamp for the last update
        });
    }).then(() => {
        return knex.schema.table('bundle_items', (table) => {
            table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp for when the user was created
            table.timestamp('updated_at').defaultTo(knex.fn.now());  // Timestamp for the last update
        });
    }).then(() => {
        return knex.schema.table('shops', (table) => {
            table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp for when the user was created
            table.timestamp('updated_at').defaultTo(knex.fn.now());  // Timestamp for the last update
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('bundle_items', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
    }).then(() => {
        return knex.schema.table('bundles', (table) => {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        });
    }).then(() => {
        return knex.schema.table('items', (table) => {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        });
    }).then(() => {
        return knex.schema.table('shops', (table) => {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        });
    });
};
