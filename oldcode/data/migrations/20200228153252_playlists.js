
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlists', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('owner_user_id').notNullable();
      table.timestamp('deleted_at').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlists');
};
