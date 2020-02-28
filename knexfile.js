// Update with your config settings.

require('dotenv').config();

console.log(process.env);

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_HOST,
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
