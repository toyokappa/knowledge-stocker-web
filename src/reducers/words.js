const initialState = {
  0: {
    id: 0,
    text: "initial state",
    knowledges: []
  }
};

function addWord(state, action) {
  const { wordId, wordText } = action;
  return {
    ...state,
    [wordId]: {
      id: wordId,
      text: wordText,
      knowledges: []
    }
  };
}

function addKnowledge(state, action) {
  const { knowledgeId, wordId } = action;
  const word = state[wordId];
  return {
    ...state,
    [wordId]: {
      ...word,
      knowledges: word.knowledges.concat(knowledgeId)
    }
  };
}

export default function words(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    default:
      return state;
  }
}
