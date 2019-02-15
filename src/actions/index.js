export function addWord(wordId, wordText) {
  return { type: "ADD_WORD", wordId, wordText };
}

export function updateWord(wordId, wordText) {
  return { type: "UPDATE_WORD", wordId, wordText };
}

export function removeWord(wordId, knowledgeIds) {
  return { type: "REMOVE_WORD", wordId, knowledgeIds };
}

export function addKnowledge(knowledgeId, wordId, url, understanding) {
  return {
    type: "ADD_KNOWLEDGE",
    knowledgeId,
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

export function setFilter(filter) {
  return { type: "SET_FILTER", filter };
}
