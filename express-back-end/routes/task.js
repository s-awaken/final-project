const {
  createTask,
  updateStatus,
  updateTaskContent,
  updateTaskName,
  deleteTask,
  getTasks,
  getTaskById
} = require('../data/queryMethod/task')
const express = require('express');
const router = express.Router();


router.put("/", (req, res) => {
  
  getTasks()
  .then((result)=>{
    res.json(result)
  })
  
  
});

module.exports = router;
