import axios from "axios";

const fetchKpi = (startDate,lastDate,employee_id,completed)=>{
  return (dispatch)=>{
    const obj = {startDate,lastDate,employee_id,completed}
    axios.get("http://localhost:8080/kpi",{params:obj})
    .then((response)=>{
      console.log(response.data)
      const kpi = response.data
      dispatch(fetchKpiSuccess(kpi))
    })
    .catch((error)=>{
      dispatch(fetchKpiFailure(error))
    })
  }
}

const fetchKpiSuccess = (kpi)=>{
  return {
    type:"FETCH_KPI_SUCCESS",
    payload:kpi
  }
}

const fetchKpiFailure = (error)=>{
  return {
    type:"FETCH_KPI_FAILURE",
    payload:error
  }
}

export default{
  fetchKpi
}