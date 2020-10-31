const {
  createTask,
  updateStatus,
  updateTaskContent,
  updateTaskName,
  getTasks,
  getTaskById,
  getTasksByEmployeeId,
  assignTask

} = require('../data/queryMethod/task')
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  
  getTasks()
  .then((result)=>{
    res.json(result)
  })
  
});
router.get("/employee_id", (req, res) => {
  const {employee_id} = req.query
  getTasksByEmployeeId(employee_id)
  .then((result)=>{
    res.json(result)
  })
  
  
});

router.put(`/createTask`,(req,res)=>{
  console.log(req.body)
  const {name} = req.body;
  createTask(name)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })

})

router.put(`/content`,(req,res)=>{
  console.log(req.body)
  const {content,taskId} = req.body;
  updateTaskContent(content,taskId)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })

})

router.put(`/name`,(req,res)=>{
  console.log(req.body)
  const {name,taskId} = req.body;
  updateTaskName(name,taskId)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })

})

router.put(`/status`,(req,res)=>{
  console.log(req.body)
  const {status,taskId,finished_at} = req.body;
  updateStatus(status,taskId,finished_at)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })
})

router.put(`/assignTask`,(req,res)=>{
  console.log(req.body)
  const {employee_id,task_id} = req.body;
  assignTask(employee_id,task_id)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })
})



module.exports = router;
