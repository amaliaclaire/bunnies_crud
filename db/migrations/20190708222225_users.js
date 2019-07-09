
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.uuid("id").primary()
    table.string("name").notNullable();
    table.integer('age').notNullable();
    table.string("type").notNullable();
    table.timestamps(true, true)
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
};
