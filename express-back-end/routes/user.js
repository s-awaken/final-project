const {getEmployeesByDepartment} = require('../data/queryMethod/user')
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  getEmployeesByDepartment(3)
  .then((result)=>{
    res.json(result)
  })
})

module.exports = router;
