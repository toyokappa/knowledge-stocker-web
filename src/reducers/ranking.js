import * as types from "../constants/ActionTypes";

const initialState = {
  users: [],
  currentUserRank: null,
  isFetching: false,
  error: null
};

export default function ranking(state = initialState, action) {
  const { type, users, currentUserRank, error } = action;
  switch (type) {
    case types.REQUEST_RANKING:
      return { ...state, isFetching: true };
    case types.SUCCESS_RANKING:
      return { ...state, users, currentUserRank, isFetching: false };
    case types.FAILURE_RANKING:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
