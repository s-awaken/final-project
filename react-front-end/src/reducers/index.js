import {combineReducers} from 'redux'
import currentUser from './currentUser'
import itemSelector from './itemSelector'
import employeeGroupSelector from './employeeGroupSelector'
import currentTaskForGroup from './currentTaskForGroup'
import managerLogin from './managerLogIn'
import attendances from './attendanceReducer'
import departments from  './departmentcReducer'
import tasks from './tasksReducer'
import groups from './groupsReducer'
import kpi from './kpiReducer'
import users from './userReducer'

const rootReducer = combineReducers({
  currentUser,
  itemSelector,
  employeeGroupSelector,
  currentTaskForGroup,
  managerLogin,
  attendances,
  departments,
  tasks,
  groups,
  kpi,
  users
});
export default rootReducer;