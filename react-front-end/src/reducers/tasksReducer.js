const initialState = {
  tasks:[],
  individualTasks:[],
  error:''
}
const tasks = (state = initialState,action)=>{
  switch(action.type){

    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks:action.payload,
        error:''
      }
      // return Object.assign({},state,{
      //   tasks:action.payload
      // })
    case 'FETCH_TASKS_FAILURE':
      return {
        ...state,
        tasks:[],
        error:action.payload
      }
    case 'FETCH_INDIVIDUAL_TASKS_SUCCESS':
      return {
        ...state,
        individualTasks:action.payload,
        error:''
      }
    case 'FETCH_INDIVIDUAL_TASKS_FAILURE':
        return {
          ...state,
          individualTasks:[],
          error:action.payload
        }
    default:
      return state
  }
}

export default tasks