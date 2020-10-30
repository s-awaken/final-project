import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import allActions from "../actions";

export default function Test(){

  const attendances = useSelector(state => state.attendances.attendances)
  const dispatch = useDispatch()

  useEffect(()=>{

      dispatch(allActions.attendanceActions.getEmployeeAttendanceInMonth("2020-10-01",'2020-10-30',4))
    
  },[])
  const save = ()=>{
    dispatch(allActions.attendanceActions.updateAttendance("2020-10-01",'2020-10-10',4))

  }
  return (
    <div>
      {attendances.countDays}

      <button onClick={save}>Tesing button</button>
    </div>
  )

}