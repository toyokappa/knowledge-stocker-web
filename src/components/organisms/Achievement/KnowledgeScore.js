import React from "react";

import { Score } from "../../molecules/Achievement";

export default function KnowledgeScore(props) {
  const { knowledgeLength } = props;
  return <Score label="ナレッジ" value={knowledgeLength} help="登録されているナレッジの総数" />;
}
