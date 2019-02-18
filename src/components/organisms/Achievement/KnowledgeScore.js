import React from "react";

import { Score } from "../../molecules/Achievement";

export default function KnowledgeScore(props) {
  const { wordIds, words } = props;
  const knowledgeIds = wordIds.flatMap(wordId => words[wordId].knowledges);
  return <Score label="ナレッジ" value={knowledgeIds.length} />;
}
