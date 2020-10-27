const initialState = {
  selected: "profile"
}

const itemSelector = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE":
      return {selected: "profile"}
    case "EMPLOYEES":
      return {selected: "employees"}
    case "WORK":
      return {selected: "work"}
    default:
      return state
  }
}
export default itemSelector