import axios from "axios";

const fetchTasks = ()=>{
  return (dispatch)=>{
    axios
    .get("http://localhost:8080/task")
    .then((response)=>{
      console.log(response.data)
      const tasks = response.data
      dispatch(fetchTasksSuccess(tasks))
    })
    .catch((error)=>{
      dispatch(fetchTasksFailure(error))
    })

  }
}
const fetchTasksByEmployeeId = (employee_id)=>{
  return (dispatch)=>{
    const obj = {employee_id}
    axios
        .get(`http://localhost:8080/task/${employee_id}`,{params:obj})
        .then((response)=>{
          console.log(response.data)
          const individualTasks = response.data
          dispatch(fetchIndividualTasksSuccess(individualTasks))
        })
        .catch((error)=>{
          dispatch(fetchIndividualTasksFailure(error))
        })
  }
}
const createTask = (name)=>{
  return (dispatch)=>{
    axios
        .put(`http://localhost:8080/task/createTask`,{name})
        .then((response)=>{
          return dispatch(fetchTasks())
          
        })
  }
}
const updateTaskName = (name,taskId)=>{
  return (dispatch)=>{
    axios
        .put(`http://localhost:8080/task/name`,{name,taskId})
        .then((response)=>{
          return dispatch(fetchTasks())
          
          
        })
  }
}

const updateTaskContent = (content,taskId)=>{
  return (dispatch)=>{
    axios.put('http://localhost:8080/task/content',{content,taskId})
    .then((response)=>{
      return dispatch(fetchTasks())
    })
  }
}
const updateTaskStatus = (status,taskId,finished_at)=>{
  return (dispatch)=>{
    axios
    .put(`http://localhost:8080/task/status`,{status,taskId,finished_at})
    .then((response)=>{
      return dispatch(fetchTasks())
    })
  }
}




const fetchTasksSuccess = (tasks)=>{
  return {
    type:"FETCH_TASKS_SUCCESS",
    payload:tasks,
  }
}

const fetchTasksFailure = (error)=>{
  return {
    type:"FETCH_TASKS_FAILURE",
    payload:error
  }
}

const fetchIndividualTasksSuccess = (individualTasks)=>{
  return {
    type:"FETCH_INDIVIDUAL_TASKS_SUCCESS",
    payload:individualTasks,
  }
}

const fetchIndividualTasksFailure = (error)=>{
  return {
    type:"FETCH_INDIVIDUAL_TASKS_FAILURE",
    payload:error
  }
}

export default{
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchIndividualTasksSuccess,
  fetchIndividualTasksFailure,
  fetchTasks,
  fetchTasksByEmployeeId,
  createTask,
  updateTaskName,
  updateTaskContent,
  updateTaskStatus,
}

