let wordNextId = 1;
let knowledgeNextId = 1;

export function addWord(wordText) {
  return { type: "ADD_WORD", wordId: wordNextId++, wordText };
}

export function removeWord(wordId, knowledgeIds) {
  return { type: "REMOVE_WORD", wordId, knowledgeIds };
}

export function addKnowledge(wordId, knowledgeUrl, knowledgeUnderstanding) {
  return {
    type: "ADD_KNOWLEDGE",
    knowledgeId: knowledgeNextId++,
    wordId,
    knowledgeUrl,
    knowledgeUnderstanding
  };
}

export function removeKnowledge(wordId, knowledgeId) {
  return { type: "REMOVE_KNOWLEDGE", wordId, knowledgeId };
}
