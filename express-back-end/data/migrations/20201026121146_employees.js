exports.up = (knex) => {
  return knex.schema
    .createTable("departments", (table) => {
      table.increments("id").primary();
      table.string("name", 64).notNullable();
      

    })
    .createTable("employees", (table) => {
      table.increments("id").primary();
      table.string("first_name", 64).notNullable();
      table.string("last_name", 64).notNullable();
      table.boolean("is_manager").notNullable();
      table.integer("department_id").unsigned();
      table.foreign("department_id").references("id").inTable("departments");
    })
    .createTable("k_p_i",(table)=>{
      table.increments("id").primary();
      table.integer("current_score");
      table.integer("employee_id").unsigned();
      table.foreign("employee_id").references("id").inTable("employees");
    })
    .createTable("tasks",(table)=>{
      table.increments("id").primary();
      table.integer("employee_id").unsigned();
      table.foreign("employee_id").references("id").inTable("employees");
      table.text("content")
      table.text("name")
      
    })
    .createTable("attendances",(table)=>{
      table.increments("id").primary();
      table.date('date').defaultTo(knex.fn.now())
      // table.unique('date')
      table.integer("employee_id").unsigned();
      table.foreign("employee_id").references("id").inTable("employees");
    })
    .createTable("employee_tasks",(table)=>{
      table.increments("id").primary();
      table.integer("employee_id").unsigned();
      table.foreign("employee_id").references("id").inTable("employees")
      table.integer("task_id").unsigned();
      table.foreign("task_id").references("id").inTable("tasks");
      table.integer("score");
      table.string("status")
      
    })
};
exports.down = (knex) => {
  return knex.schema
  .dropTableIfExists("employee_tasks")
  .dropTableIfExists("attendances")
  .dropTableIfExists("tasks")
  .dropTableIfExists("k_p_i")
  .dropTableIfExists("employees")
  .dropTableIfExists("departments")

  // .dropTable("departments")
};
exports.config = { transaction: false };