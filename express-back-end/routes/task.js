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


router.get("/", (req, res) => {
  
  createTask("fxxk")
  .then((result)=>{
    res.json(result)
  })
  
  
});

module.exports = router;
