const initialState = {
  id: null,
  text: "",
  knowledges: [],
  isFetching: false,
  error: null
};

export default function word(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_WORD":
      return { ...state, isFetching: true };
    case "SUCCESS_WORD":
      const { id, text, knowledges } = action;
      return { ...state, id, text, knowledges, isFetching: false };
    case "FAILURE_WORD":
      const { error } = action;
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
