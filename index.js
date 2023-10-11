const Knex = require('knex');
const { Client } = require('mysql'); // Or your database driver
const knexConfig = require('./knexfile').production; // Assuming you're running this in production

exports.handler = async (event, context) => {
  const knex = Knex(knexConfig);
  
  try {
    await knex.migrate.latest(); // You can also run `rollback`, `currentVersion`, etc.
    return {
      statusCode: 200,
      body: 'Migration successful',
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Migration failed',
      err: error
    };
  } finally {
    await knex.destroy();
  }
};

exports.handler = async (event, context) => {
    const knex = Knex(knexConfig);
    
    try {
      await knex.seed();
      return {
        statusCode: 200,
        body: 'Seed successful',
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: 'Seed failed',
        err: error
      };
    } finally {
      await knex.destroy();
    }
  };