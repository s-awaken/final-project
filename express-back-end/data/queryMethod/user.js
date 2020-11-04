const db = require('../db.js')

const getEmployeesByDepartment = (department_id)=>{
  return db('employees')
  .where(function(){
    this.where('department_id',department_id)
    
    
  })
  .then((result)=>{
    return result
  })

}

const getEmployeeByName = (firstName)=>{
  return db('employees')
  .where('first_name',firstName)
  .then((result)=>{
    return result
  })
}

module.exports = {
  getEmployeesByDepartment,
  getEmployeeByName      

};