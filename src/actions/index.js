let wordId = 1;

export function addWord(wordText) {
  return { type: "ADD_WORD", wordId: wordId++, wordText };
}
