function addWord(state, action) {
  const { wordId, text } = action;
  return {
    ...state,
    [wordId]: {
      id: wordId,
      text
    }
  };
}

export default function words(state = {}, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    default:
      return state;
  }
}
