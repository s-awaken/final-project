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
        // {content:"this is first content",name:"task1"},
        // {content:"this is second content",name:"task2"},
        // {content:"this is third content",name:"task3"},
        // {content:"this is forth content",name:"task4"},


        {content:"this is conent1",name:"KPItesting1",status:true,create_at:"2020-10-10",finished_at:"2020-10-17"},
        {content:"this is conent2",name:"KPItesting2",status:true,create_at:"2020-10-10",finished_at:"2020-10-18"},
        {content:"this is conent3",name:"KPItesting3",status:true,create_at:"2020-10-10",finished_at:"2020-10-19"},
        {content:"this is conent4",name:"KPItesting4",status:true,create_at:"2020-10-10",finished_at:"2020-10-20"},

        // {content:"this is showing the KPI task2",name:"KPItesting2",status:true,create_at:"2020-10-10",finished_at:"2020-10-12"},
        // {content:"this is showing the KPI task3",name:"KPItesting3",status:true,create_at:"2020-10-10",finished_at:"2020-10-13"},
        // {content:"this is showing the KPI task4",name:"KPItesting4",status:true,create_at:"2020-10-10",finished_at:"2020-10-14"},
        // {content:"this is showing the KPI task5",name:"KPItesting5",status:true,create_at:"2020-10-10",finished_at:"2020-10-15"},
        // {content:"this is showing the KPI task5",name:"KPItesting5",status:false,create_at:"2020-10-10"},




        
      ]);
    });
};