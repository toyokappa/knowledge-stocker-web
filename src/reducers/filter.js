import * as types from "../constants/ActionTypes";

const initialState = "unknown";

export default function filter(state = initialState, action) {
  const { type, filter } = action;
  switch (type) {
    case types.SET_FILTER:
      return filter;
    default:
      return state;
  }
}
