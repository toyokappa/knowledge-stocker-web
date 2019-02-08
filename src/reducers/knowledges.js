function removeWord(state, action) {
  const { knowledgeIds } = action;
  const newState = knowledgeIds.reduce((prevState, knowledgeId) => {
    const { [knowledgeId]: someValue, ...nextState } = prevState;
    return nextState;
  }, state);
  return newState;
}

function addKnowledge(state, action) {
  const { knowledgeId, wordId, knowledgeUrl, knowledgeUnderstanding } = action;
  return {
    ...state,
    [knowledgeId]: {
      id: knowledgeId,
      wordId,
      url: knowledgeUrl,
      understanding: knowledgeUnderstanding
    }
  };
}

export default function knowledges(state = {}, action) {
  switch (action.type) {
    case "REMOVE_WORD":
      return removeWord(state, action);
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    default:
      return state;
  }
}
