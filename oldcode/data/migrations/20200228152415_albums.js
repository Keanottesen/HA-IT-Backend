
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', function(table) {
      table.increments();
      table.string('api_id').notNullable();
      table.string('title').notNullable();
      table.string('upc').notNullable();
      table.string('cover').notNullable();
      table.string('label').notNullable();
      table.integer('duration').notNullable();
      table.date('release_date').notNullable();
      table.integer('nb_tracks').notNullable();
      table.json('contributors').notNullable();
      table.string('tracklist').notNullable();
      table.integer('artist_id').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums');
};
