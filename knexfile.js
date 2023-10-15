// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  developmentStoreFrontApi: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'shopex-store-front-api'
    },
    migrations: {
      directory: './services/store-front-api/migrations'
    },
    seeds: {
      directory: './services/store-front-api/seeds'
    },
  },

  developmentGoogleAuth: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'shopex-google-auth'
    },
    migrations: {
      directory: './services/google-auth/migrations'
    },
    seeds: {
      directory: './services/google-auth/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_dbs',
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

  productionStoreFrontApi: {
    client: 'mysql',
    connection: {
      host: 'PROD_STORE_DB_HOST',
      user: 'PROD_STORE_DB_USER',
      password: 'PROD_STORE_DB_PASSWORD',
      database: 'PROD_STORE_DB_NAME'
    },
    migrations: {
      directory: './services/store-front-api/migrations'
    },
    seeds: {
      directory: './services/store-front-api/seeds'
    }
  },

  productionGoogleAuth: {
    client: 'mysql',
    connection: {
      host: 'PROD_GOOGLE_AUTH_DB_HOST',
      user: 'PROD_GOOGLE_AUTH_DB_USER',
      password: 'PROD_GOOGLE_AUTH_DB_PASSWORD',
      database: 'PROD_GOOGLE_AUTH_DB_NAME'
    },
    migrations: {
      directory: './services/google-auth/migrations'
    },
    seeds: {
      directory: './services/google-auth/seeds'
    }
  }

};
