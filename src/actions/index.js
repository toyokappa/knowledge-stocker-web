let wordId = 1;

function addWord(text) {
  return { type: "ADD_WORD", wordId: wordId++, text };
}
