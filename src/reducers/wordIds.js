const initState = [0];

function addWord(state, action) {
  const { wordId } = action;
  return state.concat(wordId);
}

function removeWord(state, action) {
  const { wordId } = action;
  return state.filter(id => id !== wordId);
}

export default function wordIds(state = initState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    case "REMOVE_WORD":
      return removeWord(state, action);
    default:
      return state;
  }
}
