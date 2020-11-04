import axios from "axios";

const fetchUsers = (department_id)=>{
  return (dispatch)=>{
    const obj = {department_id}
    axios
    .get("http://localhost:8080/user/department",{params:obj})
    .then((response)=>{
      console.log(response.data)
      const users = response.data
      dispatch(fetchUsersSuccess(users))
    })
    .catch((error)=>{
      dispatch(fetchUsersFailure(error))
    })
  }
}

const fetchUsersSuccess = (users) =>{
  return {
    type:"FETCH_USERS_SUCCESS",
    payload:users
  }
}
const fetchUsersFailure = (error)=>{
  return {
    type:"FETCH_USERS_FAILURE",
    payload:error
  }
}

export default{
  fetchUsers
}