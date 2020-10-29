const db = require('../db.js')
const {getEmployeeAttendanceInMonth} = require('./attendance')

const helper = (startDate,lastDate,employee_id) =>{
  return db('tasks')
  .where(function(){
    this.where('employee_id',employee_id)
    .andWhere('date','<=',lastDate)
    .andWhere('date','>=',startDate)
    .andWhere('tasks.status',completed)
  })
  .join('employee_tasks','tasks.id','=','employee_tasks.task_id')
  .join('employees','employees.id','=','employee_tasks.employee_id')
  .then((result)=>{
    return result
  })
}

const getKPIinMonth = (startDate,lastDate,employee_id)=>{
  getEmployeeAttendanceInMonth(startDate,lastDate,employee_id)
  .then((result)=>{

  })

}
const updateKPI = (employee_Id)=>{

}
module.exports = {
  helper,
  getKPIinMonth,
  updateKPI
};