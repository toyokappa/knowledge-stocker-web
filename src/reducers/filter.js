const initialState = "unknown";

export default function filter(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
}
