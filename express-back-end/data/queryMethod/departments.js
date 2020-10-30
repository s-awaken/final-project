const db = require('../db.js')

const getDepartments = ()=>{
  return db('departments')
  .then((result)=>{
    return result
  })
  
}


const createDepartments = (name)=>{
  return db('departments')
  .returning('*')
  .insert({name})
  .then((data)=>{
    return data
  })
}

module.exports = {
  getDepartments,
  createDepartments
};