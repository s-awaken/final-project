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
    res.json(tasks);
  });
});
router.get("/1", (req, res) => {
  getGroupById(1).then((result) => {
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
    res.json(tasks);
  });
});

router.get("/2",(req,res)=>{
  changeGroup(2,1,2)
  .then((result)=>{
    res.json(result)
  })
})

module.exports = router;
