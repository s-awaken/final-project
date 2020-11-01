import './App.css';
import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import allActions from "./actions";

import ManagerMenu from "./components/ManagerMenu"
import EmployeeMenu from "./components/EmployeeMenu"

import Login from './components/Login'


function App() {
  const login = useSelector((state) => state.currentUser.loggedIn)
  const manager = useSelector((state) => state.currentUser.user.is_manager)
  const tasks = useSelector((state) => state.tasks.tasks);
  
  const dispatch = useDispatch()

  console.log(login)
  React.useEffect(() => {
    dispatch(allActions.tasksActions.fetchTasks());
  }, [])
  
  const renderPage = 
    !login ? (
      <Login action={allActions.userActions}/>
    ) : (
        manager ? (
          <ManagerMenu tasks={tasks}/>
        ) : (
          <EmployeeMenu tasks={tasks}/>
        )
    )

  // const renderPage =
  //   manager ? (
  //     login ? (
  //       <ManagerMenu tasks={tasks}/>
  //     ) : (
  //         <SignIn action={allActions.userActions} changeLogin={allActions.managerLoginAction} />
  //       )
  //   ) : (
  //       login ? (
  //         <EmployeeMenu tasks={tasks}/>
  //       ) : (
  //           <EmployeeSignIn action={allActions.userActions} changeLogin={allActions.managerLoginAction} />
  //         )
  //     )
  return (
    <div className="App">
      {renderPage}  
    </div>
  );
}
export default App;
