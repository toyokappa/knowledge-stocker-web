import React from "react";

import { Score } from "../../molecules/Achievement";

export default function UnknownScore(props) {
  const { wordIds, understoodWordIds } = props;
  const unknownScore = wordIds.length - understoodWordIds.length;
  return <Score label="ワカラン" value={unknownScore} help="ナレッジが登録されていない単語の総数" />;
}
