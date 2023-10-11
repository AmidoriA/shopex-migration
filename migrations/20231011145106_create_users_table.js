/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();  // Primary Key
        table.string('google_id').unique().notNullable();  // Google's unique ID for the user
        table.string('email').unique().notNullable();  // Email address from Google
        table.string('first_name');  // First Name
        table.string('last_name');  // Last Name
        table.string('profile_picture');  // URL to profile picture
        table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp for when the user was created
        table.timestamp('updated_at').defaultTo(knex.fn.now());  // Timestamp for the last update
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
