const db = require('../db.js')


// select * from tasks
// join employee_tasks on (tasks.id = employee_tasks.task_id)
// where employee_id = 4;


const getTasks = ()=>{
  return db('tasks')
  .then((result)=>{
    return result
  })
  
}

const getTasksByEmployeeId = (employee_id)=>{
  return db('tasks')
  .where('employee_tasks.employee_id',employee_id)
  .join('employee_tasks','tasks.id','=','employee_tasks.task_id')
  .then((result)=>{
    return result
  })


}

const getTaskById = (taskId)=>{
  return db('tasks')
  .where('id',taskId)
  .then((result)=>{
    return result
  })
  
}

const createTask = (name)=>{
  return db('tasks')
  .returning('*')
  .insert({name})
  .then((data)=>{
    return data
  })
}
const updateTaskContent = (content,taskId)=>{
  return db('tasks')
  .returning('*')
  .where('id',taskId)
  .update({content})
  .then((data)=>{
    return data
  })
}
const updateTaskName = (name,taskId)=>{
  return db('tasks')
  .returning('*')
  .where('id',taskId)
  .update({name})
  .then((data)=>{
    return data
  })
}

const updateStatus = (status,taskId,finished_at)=>{
  if(status === true){
    return db('tasks')
    .returning('*')
    .where('id',taskId)
    .update({status,finished_at})
    .then((data)=>{
      return data
    })

  }else{
    return db('tasks')
    .returning('*')
    .where('id',taskId)
    .update({
      status:status,
      finished_at:null
    })
    .then((data)=>{
      return data
    })
  }

}
const deleteTask = (taskId)=>{
  return db('tasks')
  .where('id',taskId)
  .del()
}




module.exports = {
  createTask,
  updateStatus,
  updateTaskContent,
  updateTaskName,
  deleteTask,
  getTasks,
  getTaskById,
  getTasksByEmployeeId

};