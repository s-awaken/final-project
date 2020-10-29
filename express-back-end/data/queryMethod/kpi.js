const db = require('../db.js')
const {getEmployeeAttendanceInMonth} = require('./attendance')

const helper = (startDate,lastDate,employee_id,completed) =>{
  return db('tasks')
  .where(function(){
    this.where('employee_id',employee_id)
    .andWhere('tasks.create_at','>=',startDate)
    .andWhere('tasks.finished_at','<=',lastDate)
    .andWhere('tasks.status',completed)
  })
  .join('employee_tasks','tasks.id','=','employee_tasks.task_id')
  .join('employees','employees.id','=','employee_tasks.employee_id')
  .then((result)=>{
    return result
  })
}

const getKPIinMonth = (startDate,lastDate,employee_id,completed)=>{
  return getEmployeeAttendanceInMonth(startDate,lastDate,employee_id)
  .then((result)=>{
    return helper(startDate,lastDate,employee_id,completed)
    .then((performances)=>{
      let averageTaskScore = 0;
      let totalAttendance = result.countDays;
      let taskAmount = performances.length;
      let totalScore = 0;
      for(performance of performances){
        totalScore += performance.score
      }
      averageTaskScore = totalScore / taskAmount
      let kpi = 0.25 * totalAttendance + 0.25 * taskAmount + 0.5 *averageTaskScore;
      return {totalAttendance,taskAmount,averageTaskScore,kpi}
    })
  })

}


// {
//   totalAttendance: 8,
//   taskAmount: 5,
//   averageTaskScore: 68,
//   kpi: 37.25
//   }
const updateKPI = (employee_Id)=>{

}
module.exports = {
  helper,
  getKPIinMonth,
  updateKPI
};