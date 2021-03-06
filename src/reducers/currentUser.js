import * as types from "../constants/ActionTypes";

const initialState = {
  name: "",
  imageUrl: "",
  words: [],
  isFetching: false,
  error: null
};

export default function currentUser(state = initialState, action) {
  const { type, userName, imageUrl, words, error } = action;
  switch (type) {
    case types.SUCCESS_SIGN_IN:
      return { ...state, name: userName, imageUrl };
    case types.REQUEST_WORDS:
      return { ...state, isFetching: true };
    case types.SUCCESS_WORDS:
      return { ...state, words, isFetching: false };
    case types.FAILURE_WORDS:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
