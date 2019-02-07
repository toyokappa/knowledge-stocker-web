const initState = [];

function addWord(state, action) {
  const { wordId } = action;
  return state.concat(wordId);
}

export default function wordIds(state = initState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    default:
      return state;
  }
}
