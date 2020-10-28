// Initial State
const PROFILE = "PROFILE"
const EMPLOYEES = "EMPLOYEES"
const WORK = "WORK"
const profile = () => {
  return {
    type: PROFILE
  }
}
const employees = () => {
  return {
    type: EMPLOYEES
  }
}
const work = () => {
  return {
    type: WORK
  }
}
export default {
  profile,
  employees,
  work
}