const {getEmployeeAttendanceInMonth,updateAttendance} = require('../data/queryMethod/attendance.js')
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  
  getEmployeeAttendanceInMonth('2020-10-01','2020-10-27',1)
  .then((result)=>{
    console.log(result)
    res.json(result)
  })
  
  
});
router.get('/1',(req,res)=>{
  updateAttendance(1)
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.json(error)
  })
})

module.exports = router;