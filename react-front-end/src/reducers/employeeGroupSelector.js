const initialState = {
  selected: "group 1"
}
const employeeGroupSelector = (state = initialState, action) => {
  switch (action.type) {
    case "GROUP 1":
      return {selected: "group 1"}
    case "GROUP 2":
      return { selected: "group 2" }
    case "GROUP 3":
      return { selected: "group 3" }
    default:
      return state
    }
}
export default employeeGroupSelector