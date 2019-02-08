function addKnowledge(state, action) {
  const { knowledgeId, wordId, knowledgeUrl, knowledgeUnderstanding } = action;
  return {
    ...state,
    [knowledgeId]: {
      wordId,
      url: knowledgeUrl,
      understanding: knowledgeUnderstanding
    }
  };
}

export default function knowledges(state = {}, action) {
  switch (action.type) {
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    default:
      return state;
  }
}
