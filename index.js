const Knex = require('knex');
const { Client } = require('mysql'); // Or your database driver
const knexConfigs = require('./knexfile'); // Assuming you're running this in production

exports.handler = async (event, context) => {
  const service = event.service;
  let env = '';
  if (service == 'core') {
    env = 'productionStoreFrontApi';
  } else if (service == 'auth') {
    env = 'productionGoogleAuth';
  } else {
    return {
      statusCode: 400,
      body: 'Invalid Env'
    };
  }
  const knex = Knex(knexConfigs[env]);
  
  try {
    await knex.migrate.latest(); // You can also run `rollback`, `currentVersion`, etc.
    return {
      statusCode: 200,
      service: service,
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

exports.seed = async (event, context) => {
  const service = event.service;
  let env = '';
  if (service == 'core') {
    env = 'productionStoreFrontApi';
  } else if (service == 'auth') {
    env = 'productionGoogleAuth';
  } else {
    return {
      statusCode: 400,
      body: 'Invalid Env'
    };
  }
  const knex = Knex(knexConfigs[env]);
    
    try {
      await knex.seed.run();
      return {
        statusCode: 200,
        service: service,
        body: 'Seed successful',
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        service: service,
        body: 'Seed failed',
        err: error
      };
    } finally {
      await knex.destroy();
    }
};