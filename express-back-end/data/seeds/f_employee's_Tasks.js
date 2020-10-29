exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("employee_tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee_tasks").insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {employee_id:1,task_id:1,score:90},
        {employee_id:2,task_id:1,score:90},
        {employee_id:3,task_id:3,score:70},
        {employee_id:1,task_id:2,score:70},
        {employee_id:2,task_id:3,score:70},

        {employee_id:4,task_id:4,score:40},
        {employee_id:4,task_id:5,score:90},
        {employee_id:4,task_id:6,score:80},
        {employee_id:4,task_id:7,score:60},
        {employee_id:4,task_id:8,score:70},




        
      ]);
    });
};