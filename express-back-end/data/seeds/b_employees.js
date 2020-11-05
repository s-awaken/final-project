exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("employees")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("employees").insert([
        {
          
          first_name: "Henry",
          last_name: "He",
          is_manager: true,
          department_id: 1,
        },
        {
          
          first_name: "Syrym",
          last_name: "Zhauken",
          is_manager: true,
          department_id: 1,
        },
        {
          first_name: "Alice",
          last_name: "Wander",
          is_manager: false,
          department_id: 1,
        },
        {
          first_name: "Bob",
          last_name: "Smith",
          is_manager: false,
          department_id: 1,
        },
      ]);
    });
};
