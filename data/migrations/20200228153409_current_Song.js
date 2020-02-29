
exports.up = function(knex, Promise) {
  return knex.schema.createTable('current_Song', function(table) {
      table.increments();
      table.string('user_id').notNullable();
      table.string('song_id').notNullable();
      table.timestamp('finished_at').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('current_Song');
};
