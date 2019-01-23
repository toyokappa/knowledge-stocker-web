const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return "Add Todo";
    case "REMOVE_TODO":
      return "Remove Todo";
    default:
      return state;
  }
}
