import * as types from "../constants/ActionTypes";

const initialState = {
  id: null,
  text: "",
  knowledges: [],
  isFetching: false,
  error: null
};

export default function word(state = initialState, action) {
  const { type, id, text, knowledges, error } = action;

  switch (type) {
    case types.REQUEST_WORD:
      return { ...state, isFetching: true };
    case types.SUCCESS_WORD:
      return { ...state, id, text, knowledges, isFetching: false };
    case types.FAILURE_WORD:
      return { ...state, isFetching: false, error };
    case types.REQUEST_KNOWLEDGES:
      return { ...state, isFetching: true };
    case types.SUCCESS_KNOWLEDGES:
      return { ...state, knowledges, isFetching: false };
    case types.FAILURE_KNOWLEDGES:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
