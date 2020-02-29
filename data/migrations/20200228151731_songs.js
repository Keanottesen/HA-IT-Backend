
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', function(table) {
      table.increments();
      table.string('api_id').notNullable();
      table.string('title').notNullable();
      table.string('duration').notNullable();
      table.integer('preview').notNullable();
      table.string('tracklist').notNullable();
      table.json('contributors').notNullable();
      table.string('album_id').notNullable();
      table.string('artist_id').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs');
};
