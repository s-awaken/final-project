import {combineReducers} from 'redux'
import currentUser from './currentUser'
import itemSelector from './itemSelector'
import employeeGroupSelector from './employeeGroupSelector'
import currentTaskForGroup from './currentTaskForGroup'
const rootReducer = combineReducers({
  currentUser,
  itemSelector,
  employeeGroupSelector,
  currentTaskForGroup
});
export default rootReducer;