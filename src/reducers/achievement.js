import * as types from "../constants/ActionTypes";

const initialState = {
  wordLength: null,
  understoodLength: null,
  understoodRate: null,
  knowledgeLength: null,
  aveUnderstanding: null,
  isFetching: false,
  error: null
};

export default function achievement(state = initialState, action) {
  const { type, wordLength, understoodLength, understoodRate, knowledgeLength, aveUnderstanding, error } = action;
  switch (type) {
    case types.REQUEST_ACHIEVEMENT:
      return { ...state, isFetching: true };
    case types.SUCCESS_ACHIEVEMENT:
      return {
        ...state,
        wordLength,
        understoodLength,
        understoodRate,
        knowledgeLength,
        aveUnderstanding,
        isFetching: false
      };
    case types.FAILURE_ACHIEVEMENT:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
