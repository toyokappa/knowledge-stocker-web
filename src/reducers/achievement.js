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
    case "REQUEST_ACHIEVEMENT":
      return { ...state, isFetching: true };
    case "SUCCESS_ACHIEVEMENT":
      return {
        ...state,
        wordLength,
        understoodLength,
        understoodRate,
        knowledgeLength,
        aveUnderstanding,
        isFetching: false
      };
    case "FAILURE_ACHIEVEMENT":
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
