let wordNextId = 1;
let knowledgeNextId = 1;

export function addWord(wordText) {
  return { type: "ADD_WORD", wordId: wordNextId++, wordText };
}

export function updateWord(wordId, wordText) {
  return { type: "UPDATE_WORD", wordId, wordText };
}

export function removeWord(wordId, knowledgeIds) {
  return { type: "REMOVE_WORD", wordId, knowledgeIds };
}

export function addKnowledge(wordId, url, understanding) {
  return {
    type: "ADD_KNOWLEDGE",
    knowledgeId: knowledgeNextId++,
    wordId,
    url,
    understanding
  };
}

export function updateKnowledge(knowledgeId, url, understanding) {
  return {
    type: "UPDATE_KNOWLEDGE",
    knowledgeId,
    url,
    understanding
  };
}

export function removeKnowledge(wordId, knowledgeId) {
  return { type: "REMOVE_KNOWLEDGE", wordId, knowledgeId };
}
