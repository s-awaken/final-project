const initialState = {
  groups:[],
  individualGroup:{},
  error:''
}

const groups = (state = initialState,action)=>{
  switch(action.type){
    case 'FETCH_GROUPS_SUCCESS':
      return {
        ...state,
        groups:action.payload,
        error:''
      }
    case 'FETCH_GROUPS_FAILURE':
      return {
        ...state,
        groups:[],
        error:action.payload
      }
    case 'FETCH_INDIVIDUAL_GROUP_SUCCESS':
      return {
        ...state,
        individualGroup:action.payload,
        error:''
      }
    case 'FETCH_INDIVIDUAL_GROUP_FAILURE':
      return {
        ...state,
        individualGroup:{},
        error:action.payload
      }
    default:
      return state
  }
}

export default groups