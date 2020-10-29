const express = require("express");
const router = express.Router();
const { getKPIinMonth,updateKPI,helper } = require("../data/queryMethod/kpi");

router.get("/",(req,res)=>{
  helper()
  .then((result)=>{
    res.json(result)
  })
})

module.exports = router;
