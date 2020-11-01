import axios from "axios"

const fetchGroupsSuccess = (groups)=>{
  return {
    type:'FETCH_GROUPS_SUCCESS',
    payload:groups,
  }
}


const fetchGroupsFailure = (error)=>{
  return {
    type:"FETCH_GROUPS_FAILURE",
    payload:error
  }
}
const fetchIndividualGroupSuccess = (individualGroup)=>{
  return {
    type:"FETCH_INDIVIDUAL_GROUP_SUCCESS",
    payload:individualGroup
  }
}

const fetchIndividualGroupFailure = (error)=>{
  return {
    type:'FETCH_INDIVIDUAL_GROUP_FAILURE',
    payload:error
  }
}
