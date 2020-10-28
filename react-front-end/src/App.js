import './App.css';
import { useSelector, useDispatch } from "react-redux";

import allActions from "./actions";

import HeaderMenu from "./components/Menu"
import Login from './components/Login'


function App() {
  const login = useSelector((state) => state.currentUser.loggedIn)
  const renderPage =
    login ? (
      <HeaderMenu />
    ) : (
        <Login action={allActions.userActions}/>
      )
  return (
    <div className="App">
      {renderPage}
    </div>
  );
}

export default App;
