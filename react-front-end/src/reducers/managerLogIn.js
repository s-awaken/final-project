//I can initial state here and pass to the function

const initialState = {
  manager: true
}


const managerLogin = (state = initialState,action)=>{
  switch(action.type){
    case "IS_MANAGER":
      return {manager: true}
    case "EMPLOYEE":
      return {manager:false}
    default:
      return state
  }
}

export default managerLogin;