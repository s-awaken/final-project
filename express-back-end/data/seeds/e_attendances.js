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
        {employee_id:1,date:'2020-10-10'},
        {employee_id:1,date:'2020-10-11'},
        {employee_id:1,date:'2020-10-12'},
        {employee_id:1,date:'2020-10-13'},
        {employee_id:1,date:'2020-10-14'},
        {employee_id:1,date:'2020-10-15'},
        {employee_id:1,date:'2020-10-16'},
        {employee_id:1,date:'2020-10-17'},
        {employee_id:1,date:'2020-10-18'},
        {employee_id:1,date:'2020-10-19'},
        {employee_id:1,date:'2020-10-20'},
        {employee_id:1,date:'2020-10-21'},
        {employee_id:1,date:'2020-10-22'},
        {employee_id:1,date:'2020-10-23'},
        {employee_id:1,date:'2020-10-24'},
        {employee_id:1,date:'2020-10-25'},
        {employee_id:1,date:'2020-10-26'},
        {employee_id:1,date:'2020-10-27'},



        {employee_id:2,date:'2020-10-10'},
        {employee_id:2,date:'2020-10-11'},
        {employee_id:2,date:'2020-10-12'},
        {employee_id:2,date:'2020-10-13'},
        {employee_id:2,date:'2020-10-14'},
        {employee_id:2,date:'2020-10-15'},


        {employee_id:3,date:'2020-10-12'},
        {employee_id:3,date:'2020-10-13'},
        {employee_id:3,date:'2020-10-14'},
        {employee_id:3,date:'2020-10-15'},
        {employee_id:3,date:'2020-10-16'},
        {employee_id:3,date:'2020-10-17'},
        {employee_id:3,date:'2020-10-18'},
        {employee_id:3,date:'2020-10-19'},
        {employee_id:3,date:'2020-10-20'},
        


        {employee_id:4,date:'2020-10-10'},
        {employee_id:4,date:'2020-10-11'},
        {employee_id:4,date:'2020-10-12'},
        {employee_id:4,date:'2020-10-13'},
        {employee_id:4,date:'2020-10-14'},
        {employee_id:4,date:'2020-10-15'},
        {employee_id:4,date:'2020-10-16'},
        {employee_id:4,date:'2020-10-17'},
        {employee_id:4,date:'2020-10-18'},
        {employee_id:4,date:'2020-10-19'},


        


        
      ]);
    });
};