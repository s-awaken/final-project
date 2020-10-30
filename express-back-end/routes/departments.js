const express = require('express');
const router = express.Router();
const {getDepartments,createDepartments} = require('../data/queryMethod/departments')

router.get("/", (req, res) => {
  getDepartments()
  .then((result)=>{
    res.json(result)
  })
  
  
});
router.put("/:name", (req, res) => {
  console.log(req.body)
  const {name}=req.body
  createDepartments(name)
  .then((result)=>{
    res.json(result)
  })
  
  
});
module.exports = router;