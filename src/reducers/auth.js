import * as types from "../constants/ActionTypes";

const initialState = {
  isSignedIn: false,
  isFetching: false,
  error: null,
  errorMessages: {}
};

export default function auth(state = initialState, action) {
  const { type, error, errorMessages } = action;
  switch (type) {
    case types.REQUEST_SIGN_IN:
      return { ...state, isFetching: true };
    case types.SUCCESS_SIGN_IN:
      return { ...state, isSignedIn: true, isFetching: false };
    case types.FAILURE_SIGN_IN:
      return { ...state, isSignedIn: false, isFetching: false, error };
    case types.REQUEST_SIGN_UP:
      return { ...state, isFetching: true };
    case types.SUCCESS_SIGN_UP:
      return { ...state, isSignedIn: true, isFetching: false };
    case types.FAILURE_SIGN_UP:
      return { ...state, isSignedIn: false, isFetching: false, error, errorMessages };
    case types.SUCCESS_SIGN_OUT:
      return { isSignedIn: false };
    default:
      return state;
  }
}
