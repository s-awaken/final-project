const express = require("express");
const router = express.Router();
const { getGroups, getGroupById,changeGroup } = require("../data/queryMethod/group");

router.get("/", (req, res) => {
  
  getGroups().then((result) => {
    // console.log(result)
    let tasks = {};
    for (const data of result) {
      if (!tasks[data.task_id]) {
        tasks[data.task_id] = {
          taskId: data.task_id,
          taskName: data.name,
          taskContent: data.content,
          status:data.status,
          members: [
            {
              employeeId: data.employee_id,
              employeeFirstName: data.first_name,
              employeeLastName: data.last_name,
            },
          ],
        };
      } else {
        tasks[data.task_id].members.push({
          employeeId: data.employee_id,
          employeeFirstName: data.first_name,
          employeeLastName: data.last_name,
        });
      }
      //   if(!tasks[data.id]){
      //     tasks[data.id] = {name:data.name,employees:[{first_name:data.first_name,last_name:data.last_name}],status:data.status}

      //   }else{
      //     tasks[data.id].employees.push({first_name:data.first_name,last_name:data.last_name})
      //   }
    }
    const array = []
    for(task in tasks){
      array.push(tasks[task])
    }
    res.json(array);
  });
});
router.get("/taskId", (req, res) => {
  // const {task_id}=req.query


  getGroupById(1)
  .then((result) => {
    console.log(result);
    let tasks = {};
    for (const data of result) {
      if (!tasks[data.task_id]) {
        tasks[data.task_id] = {
          taskId: data.task_id,
          taskName: data.name,
          taskContent: data.content,
          status:data.status,
          members: [
            {
              employeeId: data.employee_id,
              employeeFirstName: data.first_name,
              employeeLastName: data.last_name,
            },
          ],
        };
      } else {
        tasks[data.task_id].members.push({
          first_name: data.first_name,
          last_name: data.last_name,
        });
      }
    }
    // const array = []
    // for(task in tasks){
    //   array.push(tasks[task])
    // }
    res.json(tasks);
  });
});

router.put("/",(req,res)=>{
  console.log(req.body)
  const {employeeId,currentTaskId,newTaskId} = req.body;
  changeGroup(employeeId,currentTaskId,newTaskId)
  .then((result)=>{
    res.json(result)
  })
})

module.exports = router;
