exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('KPI')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('KPI').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {quantity:100,employee_id:1},
        {quantity:150,employee_id:2},
        {quantity:200,employee_id:3}

        
        
      ]);
    });
};