import {combineReducers} from 'redux'
import counter from './counter';
import currentUser from './currentUser'
const rootReducer = combineReducers({
  counter,
  currentUser
});
export default rootReducer;