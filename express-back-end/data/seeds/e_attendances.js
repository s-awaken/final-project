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
        {present:true,employee_id:1,datetime:"2020-10-27 23:19:34"},
        {present:true,employee_id:2,datetime:"2020-10-28 23:19:34"},
        {present:false,employee_id:3}


        
      ]);
    });
};