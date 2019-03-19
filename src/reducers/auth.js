import * as types from "../constants/ActionTypes";

const initialState = {
  isSignedIn: false,
  isFetching: false,
  error: null
};

export default function auth(state = initialState, action) {
  const { type, error } = action;
  switch (type) {
    case types.REQUEST_SIGN_IN:
      return { ...state, isFetching: true };
    case types.SUCCESS_SIGN_IN:
      return { ...state, isSignedIn: true, isFetching: false };
    case types.FAILURE_SIGN_IN:
      return { ...state, isSignedIn: false, isFetching: false, error };
    case types.SUCCESS_SIGN_OUT:
      return { isSignedIn: false };
    default:
      return state;
  }
}
