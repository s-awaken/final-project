import './App.css';
import { useSelector } from "react-redux";

import allActions from "./actions";

import HeaderMenu from "./components/Menu"

import SignIn from './components/Sign-in'

function App() {
  const login = useSelector((state) => state.currentUser.loggedIn)
  const renderPage =
    login ? (
      <HeaderMenu />
    ) : (
        <SignIn action={allActions.userActions}/>
      )
  return (
    <div className="App">
      {renderPage}
    </div>
  );
}

export default App;
