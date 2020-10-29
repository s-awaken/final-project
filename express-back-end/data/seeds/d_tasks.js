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
        {content:"this is first content",name:"task1",status:"completed"},
        {content:"this is second content",name:"task2",status:"completed"},
        {content:"this is third content",name:"task3",status:"inprogress"},


        
      ]);
    });
};