// Update with your config settings.

require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
     port: process.env.DB_PORT,
     host: process.env.DB_HOST,
     database: process.env.DB_DATABASE,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_HOST,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

};
