const initialState = {};

function addWord(state, action) {
  const { wordId, wordText } = action;
  return {
    ...state,
    [wordId]: {
      id: wordId,
      text: wordText,
      understood: false,
      knowledges: []
    }
  };
}

function removeWord(state, action) {
  const { wordId } = action;
  const { [wordId]: someValue, ...newState } = state;
  return newState;
}

function addKnowledge(state, action) {
  const { knowledgeId, wordId } = action;
  const word = state[wordId];
  return {
    ...state,
    [wordId]: {
      ...word,
      understood: true,
      knowledges: word.knowledges.concat(knowledgeId)
    }
  };
}

function removeKnowledge(state, action) {
  const { wordId, knowledgeId } = action;
  const word = state[wordId];
  const knowledges = word.knowledges.filter(id => id !== knowledgeId);
  const understood = knowledges.length > 0;
  return {
    ...state,
    [wordId]: {
      ...word,
      understood,
      knowledges
    }
  };
}

export default function words(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    case "REMOVE_WORD":
      return removeWord(state, action);
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    case "REMOVE_KNOWLEDGE":
      return removeKnowledge(state, action);
    default:
      return state;
  }
}
