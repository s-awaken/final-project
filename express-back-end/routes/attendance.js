const {getEmployeeAttendanceInMonth,updateAttendance} = require('../data/queryMethod/attendance.js')
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  
  // console.log(req.query);
  
  const {startDate, lastDate,employee_id} = req.query;

  getEmployeeAttendanceInMonth(startDate,lastDate,employee_id)
  .then((result)=>{
    // console.log(result)
    res.json(result)
  })
  
  
});
router.put(`/:id`,(req,res)=>{

  console.log(req.body)
const {employee_id} = req.body;

  updateAttendance(employee_id)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })
})

module.exports = router;