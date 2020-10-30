const initialState = {
  attendances:{},
  error:''
}

const attendances = (state = initialState,action) =>{
  switch (action.type){
    
    case 'FETCH_ATTENDANCES_SUCCESS':
      return {
        loading:false,
        attendances:action.payload,
        error:''
      }
    case 'FETCH_ATTENDANCES_FAILURE':
      return{
        loading:false,
        attendances:{},
        error:action.payload
      }
    default:
      return state
  }
}
export default attendances