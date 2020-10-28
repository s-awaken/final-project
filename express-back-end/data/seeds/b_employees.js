exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("employees")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employees").insert([
        {
          
          first_name: "henry",
          last_name: "he",
          is_manager: true,
          department_id: 1,
        },
        {
          
          first_name: "Syrym",
          last_name: "Zhauken",
          is_manager: true,
          department_id: 2,
        },
        {
          first_name: "First",
          last_name: "Last",
          is_manager: false,
          department_id: 3,
        }
      ]);
    });
};
