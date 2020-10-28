
exports.up = (knex) => {
  return knex.schema
    .createTable("departments", (table) => {
      table.increments("id");
      table.string("name", 64).notNullable();
      table.text("test",128);
    });
    // .createTable("employees", (table) => {
    //   table.increments("id");
    //   table.string("first_name", 64).notNullable();
    //   table.string("last_name", 64).notNullable();
    //   table.boolean("is_manager").notNullable();
    //   table.integer("department_id").unsigned();
    //   table.foreign("department_id").references("id").inTable("departments");
    // });
};
exports.down = (knex) => {
  return knex.schema
  .dropTable("departments")
  // .dropTable("employees");
};