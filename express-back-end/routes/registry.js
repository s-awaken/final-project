const {createEmployee} = require('../data/queryMethod/registry.js')
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  // const user_id = req.session.id;
  createEmployee("testFirst","testLast",true,"test")
  .then((result)=>{
    // console.log(result)
    res.json(result[0])
  })
});

module.exports = router;