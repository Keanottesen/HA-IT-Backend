
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', function(table) {
      table.increments();
      table.string('api_id').notNullable();
      table.string('name').notNullable();
      table.string('picture').notNullable();
      table.integer('nb_album').notNullable();
      table.string('tracklist').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
