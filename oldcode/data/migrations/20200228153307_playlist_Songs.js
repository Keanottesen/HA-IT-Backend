
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlists_Songs', function(table) {
      table.increments();
      table.string('song_id').notNullable();
      table.string('playlist_id').notNullable();
      table.timestamp('deleted_at').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlists_Songs');
};
