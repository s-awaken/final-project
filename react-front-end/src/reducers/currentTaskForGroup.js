//I can initial state here and pass to the function
const taskForGroup = {
  group1: "task1",
  group2: "task2",
  group3: "task3"
}



const currentTaskForGroup = (state = taskForGroup,action)=>{
  switch (action.type) {
    case "NEW_TASK_GROUP_1":
      return {
        ...state,
        group1: action.payload
      }
    case "NEW_TASK_GROUP_2":
      return {
        ...state,
        group2: action.payload
      }
    case "NEW_TASK_GROUP_3":
      return {
        ...state,
        group3: action.payload
      }
    default:
      return state
  }
}

export default currentTaskForGroup;