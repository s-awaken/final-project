const db = require('../db.js')

const createEmployee = (first_name,last_name,is_manager,department_name)=>{

  return db('departments')
  .where({name:department_name})
  .select('id')
  .then((result)=>{
    const department_id = result[0].id
    console.log(department_id)
    return db("employees")
    .returning('*')
    .insert({first_name,last_name,is_manager,department_id})
    .then((data)=>{
      return data
    })
  })
  
}

module.exports = {
  createEmployee
};