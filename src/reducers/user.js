const initialState = {
  name: "",
  words: [],
  isFetching: false,
  error: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_SIGN_IN":
      return { ...state, name: action.userName };
    case "REQUEST_USER_WORDS":
      return { ...state, isFetching: true };
    case "SUCCESS_USER_WORDS":
      const { words } = action;
      return { ...state, words, isFetching: false };
    case "FAILURE_USER_WORDS":
      const { error } = action;
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
