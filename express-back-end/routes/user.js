const {getEmployeesByDepartment,getEmployeeByName} = require('../data/queryMethod/user')
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  console.log(req.query)
  const {first_name} = req.query;

  getEmployeeByName(first_name)
  .then((result)=>{
    res.json(result[0])
  })
  
})

module.exports = router;
