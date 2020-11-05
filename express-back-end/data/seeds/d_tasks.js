exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        // {content:"this is first content",name:"task1"},
        // {content:"this is second content",name:"task2"},
        // {content:"this is third content",name:"task3"},
        // {content:"this is forth content",name:"task4"},


        {content:"Summary should include: all the work done, attendance, review the sales",name:"Write week summary",status:true,create_at:"2020-10-10",finished_at:"2020-10-17"},
        {content:"Create Database Migrations using KNEX, should include: Total Sales, Sellers id and name",name:"Create migrations",status:true,create_at:"2020-10-10",finished_at:"2020-10-18"},
        {content:"Prepare, Present, get hired",name:"Demo Day Presentation",status:true,create_at:"2020-10-10",finished_at:"2020-10-19"},
        {content:"Work on the Manage.io project",name:"Post-Bootcamp",status:true,create_at:"2020-10-10",finished_at:"2020-10-20"},

        // {content:"this is showing the KPI task2",name:"KPItesting2",status:true,create_at:"2020-10-10",finished_at:"2020-10-12"},
        // {content:"this is showing the KPI task3",name:"KPItesting3",status:true,create_at:"2020-10-10",finished_at:"2020-10-13"},
        // {content:"this is showing the KPI task4",name:"KPItesting4",status:true,create_at:"2020-10-10",finished_at:"2020-10-14"},
        // {content:"this is showing the KPI task5",name:"KPItesting5",status:true,create_at:"2020-10-10",finished_at:"2020-10-15"},
        // {content:"this is showing the KPI task5",name:"KPItesting5",status:false,create_at:"2020-10-10"},




        
      ]);
    });
};