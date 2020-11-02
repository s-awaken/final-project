const express = require("express");
const router = express.Router();
const { getKPIinMonth,updateKPI,helper } = require("../data/queryMethod/kpi");

router.get("/",(req,res)=>{
const {startDate,lastDate,employee_id,completed} = req.query
  //"2020-10-01","2020-10-30",4,true
  
  getKPIinMonth(startDate,lastDate,employee_id,completed)
  .then((result)=>{
    res.json(result)
  })
})

module.exports = router;
