import axios from "axios";

const getDepartments = ()=>{
  return (dispatch)=>{
    axios
        .get("http://localhost:8080/departments")
        .then((response)=>{
          console.log(response)
          const departments = response.data
          dispatch(fetchDepartmentsSuccess(departments))
        })
        .catch(error=>{
          dispatch(fetchDepartmentsFailure(error))
        })
  }
}
const createDepartments = (name)=>{
  return (dispatch)=>{
    axios
        .put(`http://localhost:8080/departments/${name}`,{name})
        .then((response)=>{
          return dispatch(getDepartments())
        })
  }
}

const fetchDepartmentsSuccess = (departments)=>{
  return {
    type:"FETCH_DEPARTMENTS_SUCCESS",
    payload:departments
  };
}

const fetchDepartmentsFailure = (error)=>{
  return {
    type:"FETCH_DEPARTMENTS_FAILURE",
    payload:error
  }
}

export default{
  fetchDepartmentsSuccess,
  fetchDepartmentsFailure,
  getDepartments,
  createDepartments,

}