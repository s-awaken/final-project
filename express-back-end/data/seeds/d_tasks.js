exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {employee_id:1,content:"this is first content",status:"completed"},
        {employee_id:2,content:"this is second content",status:"in_progress"},
        {employee_id:3,content:"this is third content",status:"todo"},


        
      ]);
    });
};