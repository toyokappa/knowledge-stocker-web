const initialState = { wordId: 1 };

export default function nextId(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return { wordId: state.wordId + 1 };
    default:
      return state;
  }
}
