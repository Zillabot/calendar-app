
exports.up = function(knex, Promise) {
  return knex.schema.createTable('months', function(table) {
    table.increments('days_id').primary();
    table.string('dayName');
    table.string('event');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('months');
};
