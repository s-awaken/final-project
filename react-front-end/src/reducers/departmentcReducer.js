const initialState = {
  departments:[],
  error:''
}

const departments = (state = initialState,action)=>{
  switch(action.type){
    case 'FETCH_DEPARTMENTS_SUCCESS':
      return {
        departments:action.payload,
        error:''
      }
    case 'FETCH_DEPARTMENTS_FAILURE':
      return {
        departments:[],
        error:action.payload
      }
    default:
      return state
  }
}

export default departments