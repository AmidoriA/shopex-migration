// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'shopex'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'PROD_STORE_DB_HOST',
      user: 'PROD_STORE_DB_USER',
      password: 'PROD_STORE_DB_PASSWORD',
      database: 'PROD_STORE_DB_NAME'
    }
  }

};
