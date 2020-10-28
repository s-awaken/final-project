exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendances')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('attendances').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {employee_id:1,date:'2020-10-29'},
        {employee_id:1,date:'2020-10-27'},
        {employee_id:3}


        
      ]);
    });
};