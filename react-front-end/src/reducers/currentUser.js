//I can initial state here and pass to the function
const initialState = {
  user:{},
  error:'',
  loggedIn:false
}



const currentUser = (state = initialState,action)=>{
  switch(action.type){
    case "SET_USER_SUCCESS":
      return {
        error:'',
        user:action.payload,
        loggedIn:true
      }
    case "SET_USER_FAILURE":
      return {
        user:{},
        loggedIn:false,
        error:action.payload
      }
    case "LOG_OUT":
      return {
        error:'',
        user:{},
        loggedIn:false
      }
    default:
      return state
  }
}

export default currentUser;