import './App.css';
import { useSelector } from "react-redux";

import allActions from "./actions";

import HeaderMenu from "./components/Menu"

import SignIn from './components/Sign-in'

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

export default App;
