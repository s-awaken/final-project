const NEW_TASK_GROUP_1 = "NEW_TASK_GROUP_1"
const NEW_TASK_GROUP_2 = "NEW_TASK_GROUP_2"
const NEW_TASK_GROUP_3 = "NEW_TASK_GROUP_3"

const newTaskGroup1 = (obj) => {
  return {
    type: NEW_TASK_GROUP_1,
    payload: obj
  }
}
const newTaskGroup2 = (obj) => {
  return {
    type: NEW_TASK_GROUP_2,
    payload: obj
  }
}
const newTaskGroup3 = (obj) => {
  return {
    type: NEW_TASK_GROUP_3,
    payload: obj
  }
}
export default {
  newTaskGroup1,
  newTaskGroup2,
  newTaskGroup3
}