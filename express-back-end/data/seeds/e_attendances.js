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
        {employee_id:3},
        {employee_id:1,date:'2020-10-27'},

        {employee_id:4,date:'2020-10-10'},
        {employee_id:4,date:'2020-10-11'},
        {employee_id:4,date:'2020-10-12'},
        {employee_id:4,date:'2020-10-13'},
        {employee_id:4,date:'2020-10-14'},
        {employee_id:4,date:'2020-10-15'},
        {employee_id:4,date:'2020-10-16'},
        {employee_id:4,date:'2020-10-17'},
        {employee_id:4,date:'2020-10-17'},
        {employee_id:4,date:'2020-10-19'},


        


        
      ]);
    });
};