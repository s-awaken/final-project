
const db = require('../db.js')

// const createEmployee = (first_name,last_name,is_manager,department_name)=>{

//   return db('departments')
//   .where({name:department_name})
//   .select('id')
//   .then((result)=>{
//     const department_id = result[0].id
//     console.log(department_id)
//     return db("employees")
//     .returning('*')
//     .insert({first_name,last_name,is_manager,department_id})
//     .then((data)=>{
//       return data
//     })
//   })
  
// }
const getEmployeeAttendanceInMonth = (startDate,lastDate,employee_id)=>{
  return db('attendances')
  // .count('date')
  .where(function(){
    this.where('employee_id',employee_id)
    .andWhere('date','<=',lastDate)
    .andWhere('date','>=',startDate)
  })
  // .count('date')
  .distinctOn('date')
  // .groupBy('date')
  // .count('date')
  
  .then((result)=>{
    // return result
    let countDays = result.length
    return {countDays}
    
  })

}
const updateAttendance = (employee_id)=>{

    return db('attendances')
    .returning('*')
    .insert({employee_id})
    .then((result)=>{
      return result
    })
    .catch((err)=>{
      return err
    })
}

module.exports = {
  getEmployeeAttendanceInMonth,
  updateAttendance
};