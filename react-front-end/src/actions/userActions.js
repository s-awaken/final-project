import axios from "axios"
const SET_USER_SUCCESS = "SET_USER_SUCCESS";
const LOG_OUT = "LOG_OUT";
const SET_USER_FAILURE = "SET_USER_FAILURE"

const getEmployee = (first_name)=>{
  return (dispatch)=>{
    const obj = {first_name}
    axios
        .get(`http://localhost:8080/user`,{params:obj})
        .then((response)=>{
          console.log('aaa')
          console.log(response.data)
          const user = response.data
          dispatch(setUserSuccess(user))
        })
        .catch(error=>{
          dispatch(setUserFailure(error))
        })
  }
}

const setUserFailure = (error) => {
  return {
    type:SET_USER_FAILURE,
    payload:error
  }
};

const setUserSuccess = (user) => {
  return {
    type: SET_USER_SUCCESS,
    payload: user,
  };
};
const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export default {
  getEmployee,
  logOut,

};
