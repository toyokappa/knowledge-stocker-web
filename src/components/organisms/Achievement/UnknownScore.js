import React from "react";

import { Score } from "../../molecules/Achievement";

export default function UnknownScore(props) {
  const { wordLength, understoodLength } = props;
  const unknownScore = wordLength - understoodLength;
  return <Score label="ワカラン" value={unknownScore} help="ナレッジが登録されていない単語の総数" />;
}
