const initialState = {
  isSignedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_SIGN_IN":
      return { isSignedIn: true };
    case "SIGN_OUT":
      return { isSignedIn: false };
    default:
      return state;
  }
}
