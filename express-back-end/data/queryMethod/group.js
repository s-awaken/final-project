const db = require('../db.js')

const getGroups = ()=>{
  return db('tasks')
  .join('employee_tasks','tasks.id','employee_tasks.task_id')
  .join('employees','employees.id','employee_tasks.employee_id')
  .then((result)=>{
    console.log(result)
    return result
  })
}
const getGroupById = (id)=>{
  return db('tasks')
  .where('tasks.id',id)
  .join('employee_tasks','tasks.id','=','employee_tasks.task_id')
  .join('employees','employees.id','=','employee_tasks.employee_id')
  .then((result)=>{
    return result
  })
}
const changeGroup = (employeeId,currentTaskId,newTaskId)=>{
  return db('employee_tasks')
  .returning('*')
  .where(function(){
    this.where('task_id',currentTaskId)
    .andWhere('employee_id',employeeId)
  })
  .update({task_id:newTaskId})
  .then((result)=>{
    return result
  })

}

module.exports = {
  getGroups,
  getGroupById,
  changeGroup
};