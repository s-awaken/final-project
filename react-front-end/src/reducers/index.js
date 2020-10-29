import {combineReducers} from 'redux'
import currentUser from './currentUser'
import itemSelector from './itemSelector'
import employeeGroupSelector from './employeeGroupSelector'
import currentTaskForGroup from './currentTaskForGroup'
import managerLogin from './managerLogIn'
const rootReducer = combineReducers({
  currentUser,
  itemSelector,
  employeeGroupSelector,
  currentTaskForGroup,
  managerLogin
});
export default rootReducer;