import axios from "axios";

const getEmployeeAttendanceInMonth = (startDate,lastDate,employee_id)=>{
  return (dispatch)=>{
    const obj = {startDate,lastDate,employee_id}
    axios
        .get('http://localhost:8080/attendance',{params:obj})
        .then((response) =>{

          console.log(response)
          const attendances = response.data
          dispatch(fetchAttendanceSuccess(attendances))
        })
        .catch(error =>{
          dispatch(fetchAttendanceFailure(error))
        })
  }
}
const updateAttendance = (startDate,lastDate,employee_id)=>{
  return (dispatch)=>{
    axios
        .put(`http://localhost:8080/attendance/${employee_id}`,{employee_id})
        .then((response)=>{
          return dispatch(getEmployeeAttendanceInMonth(startDate,lastDate,employee_id))
        })
  }
}


const fetchAttendanceSuccess = (attendances) => {
  return {
    type: "FETCH_ATTENDANCES_SUCCESS",
    payload: attendances,
  };
};
const fetchAttendanceFailure = (error) => {
  return {
    type:'FETCH_ATTENDANCES_FAILURE',
    payload:error
  }
};

export default{
  getEmployeeAttendanceInMonth,
  fetchAttendanceSuccess,
  fetchAttendanceFailure,
  updateAttendance
}