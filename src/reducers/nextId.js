const initialState = {
  wordId: 1,
  knowledgeId: 1
};

export default function nextId(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return { ...state, wordId: state.wordId + 1 };
    case "ADD_KNOWLEDGE":
      return { ...state, knowledgeId: state.knowledgeId + 1 };
    default:
      return state;
  }
}
