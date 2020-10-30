import {combineReducers} from 'redux'
import currentUser from './currentUser'
import itemSelector from './itemSelector'
import employeeGroupSelector from './employeeGroupSelector'
import currentTaskForGroup from './currentTaskForGroup'
import managerLogin from './managerLogIn'
import attendances from './attendanceReducer'
import departments from  './departmentcReducer'
const rootReducer = combineReducers({
  currentUser,
  itemSelector,
  employeeGroupSelector,
  currentTaskForGroup,
  managerLogin,
  attendances,
  departments,
});
export default rootReducer;