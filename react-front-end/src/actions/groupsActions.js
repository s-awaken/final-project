import axios from "axios"


const fetchGroups = ()=>{
  return (dispatch)=>{
    axios
        .get("http://localhost:8080/group")
        .then((response)=>{
          console.log(response.data)
          const groups = response.data
          dispatch(fetchGroupsSuccess(groups))
        })
        .catch((error)=>{
          dispatch(fetchGroupsFailure(error))
        })
  }
}
const fetchGroupByTaskId = (task_id)=>{
  return (dispatch)=>{
    const obj={task_id}
    axios.
        get("http://localhost:8080/group/taskId",{params:obj})
        .then((response)=>{
          console.log(response.data)
          const individualGroup = response.data
          dispatch(fetchIndividualGroupSuccess(individualGroup))
        })
        .catch((error)=>{
          dispatch(fetchIndividualGroupFailure(error))
        })
  }
}
const changeGroup = (employeeId,currentTaskId,newTaskId)=>{
  return (dispatch)=>{
    axios
        .put('http://localhost:8080/group',{employeeId,currentTaskId,newTaskId})
        .then((response)=>{
          return dispatch(fetchGroups())
        })
  }
}


const fetchGroupsSuccess = (groups)=>{
  return {
    type:'FETCH_GROUPS_SUCCESS',
    payload:groups,
  }
}


const fetchGroupsFailure = (error)=>{
  return {
    type:"FETCH_GROUPS_FAILURE",
    payload:error
  }
}
const fetchIndividualGroupSuccess = (individualGroup)=>{
  return {
    type:"FETCH_INDIVIDUAL_GROUP_SUCCESS",
    payload:individualGroup
  }
}

const fetchIndividualGroupFailure = (error)=>{
  return {
    type:'FETCH_INDIVIDUAL_GROUP_FAILURE',
    payload:error
  }
}

export default{
  fetchGroupsSuccess,
  fetchGroupsFailure,
  fetchIndividualGroupSuccess,
  fetchIndividualGroupFailure,
  fetchGroups,
  fetchGroupByTaskId,
  changeGroup
}
