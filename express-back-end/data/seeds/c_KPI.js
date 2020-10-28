exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('k_p_i')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('k_p_i').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {current_score:100,employee_id:1},
        {current_score:150,employee_id:2},
        {current_score:200,employee_id:3}

        
        
      ]);
    });
};