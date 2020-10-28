import {combineReducers} from 'redux'
import currentUser from './currentUser'
import itemSelector from './itemSelector'
import employeeGroupSelector from './employeeGroupSelector'
const rootReducer = combineReducers({
  currentUser,
  itemSelector,
  employeeGroupSelector
});
export default rootReducer;