const initialState = {
  id: null,
  text: "",
  knowledges: [],
  isFetching: false,
  error: null
};

export default function word(state = initialState, action) {
  const { id, text, knowledges, error } = action;

  switch (action.type) {
    case "REQUEST_WORD":
      return { ...state, isFetching: true };
    case "SUCCESS_WORD":
      return { ...state, id, text, knowledges, isFetching: false };
    case "FAILURE_WORD":
      return { ...state, isFetching: false, error };
    case "REQUEST_WORD_KNOWLEDGES":
      return { ...state, isFetching: true };
    case "SUCCESS_WORD_KNOWLEDGES":
      return { ...state, knowledges, isFetching: false };
    case "FAILURE_WORD_KNOWLEDGES":
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
