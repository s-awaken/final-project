const express = require('express');
const router = express.Router();
const {getDepartments,createDepartments} = require('../data/queryMethod/departments')

router.get("/", (req, res) => {
  getDepartments()
  .then((result)=>{
    res.json(result)
  })
  
  
});
router.get("/1", (req, res) => {
  createDepartments("electronic")
  .then((result)=>{
    res.json(result)
  })
  
  
});
module.exports = router;