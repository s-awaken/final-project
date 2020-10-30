import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import allActions from "../actions";

export default function Test(){

  const attendances = useSelector(state => state.attendances.attendances)
  const departments = useSelector(state => state.departments.departments)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(allActions.departmentsActions.getDepartments())
      dispatch(allActions.attendanceActions.getEmployeeAttendanceInMonth("2020-10-01",'2020-10-30',4))
    
  },[])
  const attendancesButton = ()=>{
    dispatch(allActions.attendanceActions.updateAttendance("2020-10-01",'2020-10-10',4))
    

  }
  const departmentsButton = ()=>{
    dispatch(allActions.departmentsActions.createDepartments("hahaDepartment"));

  }
  return (
    <div>
      {attendances.countDays}
      {departments.map((department, index) => <p key={index}>&nbsp;{department.name}</p>)}

      <button onClick={attendancesButton}>Attendances Button</button>
      <button onClick={departmentsButton}>Departments Button</button>


    </div>
  )

}