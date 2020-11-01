const initialState = {
  kpi:{},
  error:''
}

const kpi = (state = initialState,action)=>{
  switch(action.type){
    case 'FETCH_KPI_SUCCESS':
    return {
      kpi:action.payload,
      error:''
    }
    case 'FETCH_KPI_FAILURE':
      return{
        kpi:{},
        error:action.payload
      }

    default:
      return state
  }
}

export default kpi