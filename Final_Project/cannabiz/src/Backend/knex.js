const knex = require('knex');
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '123456',
      database : 'cannabiz'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'cannabiz',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'card_holders'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'cannabiz',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'card_holders'
    }
  }

};

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'cannabiz',
  },
});


module.exports = {
  db
}