import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

export default function Test() {
  const attendances = useSelector((state) => state.attendances.attendances);
  const departments = useSelector((state) => state.departments.departments);
  const tasks = useSelector((state) => state.tasks.tasks);
  const individualTasks = useSelector((state)=>state.tasks.individualTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.departmentsActions.getDepartments());
    dispatch(
      allActions.attendanceActions.getEmployeeAttendanceInMonth(
        "2020-10-01",
        "2020-10-30",
        4
      )
    );
    dispatch(allActions.tasksActions.fetchTasks());
    dispatch(allActions.tasksActions.fetchTasksByEmployeeId(1))
  }, []);
  const attendancesButton = () => {
    dispatch(
      allActions.attendanceActions.updateAttendance(
        "2020-10-01",
        "2020-10-10",
        4
      )
    );
  };
  const departmentsButton = () => {
    dispatch(allActions.departmentsActions.createDepartments("Mydepartment"));
  };

  const createTaskButton = ()=>{
    dispatch(allActions.tasksActions.createTask("I dont like this task"))
    
  }
  
  const updateTaskNameButton = ()=>{
    dispatch(allActions.tasksActions.updateTaskName("FXXXXK",2))
    
  }
  const updateTaskContentButton = ()=>{
    dispatch(allActions.tasksActions.updateTaskContent("Testing content!!!!!!",2))
  }
  const updateTaskStatusButton = ()=>{
    dispatch(allActions.tasksActions.updateTaskStatus(true,1,"2020-11-23"))
  }
  
  return (
    <div>
      {/* {attendances.countDays}
      {departments.map((department, index) => <p key={index}>&nbsp;{department.name}</p>)} */}
      {tasks.map((task, index) => (
        <p key={index}>
          &nbsp;{task.name}
          <br>

          </br>
          {task.content}
          <br></br>
          {`${task.status}`}
          <br>
          </br>
          {task.finished_at}
        </p>))}

      ------------
      {individualTasks.map((task, index) => (
        <p key={index}>
          &nbsp;{task.name}
          <br>

          </br>
          {task.content}
        </p>
      ))}
      {/* <button onClick={updateTaskStatusButton}>update task status Button</button>
      <button onClick={updateTaskContentButton}>update task content Button</button> */}


      {/* <button onClick={attendancesButton}>Attendances Button</button>
      <button onClick={departmentsButton}>Departments Button</button> */}
      <button onClick={createTaskButton}>Create task Button</button>
      <button onClick={updateTaskNameButton}>updateTaskNameButton</button>
      
    </div>
  );
}
