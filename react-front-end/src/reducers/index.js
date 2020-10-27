import {combineReducers} from 'redux'
import counter from './counter';
import currentUser from './currentUser'
import countries from './countries'
const rootReducer = combineReducers({
  counter,
  currentUser,
  countries
});
export default rootReducer;