import './App.css';
import { useSelector } from "react-redux";
import React from 'react'
import allActions from "./actions";
​
import ManagerMenu from "./components/ManagerMenu"
import EmployeeMenu from "./components/EmployeeMenu"
​
import SignIn from './components/ManagerSign-in'
import EmployeeSignIn from './components/EmployeeSign-in'
​
function App() {
  const login = useSelector((state)=> state.currentUser.loggedIn)
  const manager = useSelector((state) => state.managerLogin.manager)
  
  const renderPage = 
    manager ? (
      login ? (
        <ManagerMenu/>
      ) : (
        <SignIn action={allActions.userActions} changeLogin={allActions.managerLoginAction} />
      )
    ) : (
        login ? (
          <EmployeeMenu />
        ) : (
          <EmployeeSignIn action={allActions.userActions} changeLogin={allActions.managerLoginAction} />
        )
      )
  return (
    <div className="App">
      {renderPage}
    </div>
  );
}
​
export default App;
