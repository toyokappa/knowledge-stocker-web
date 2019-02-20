import React from "react";

import { Score } from "../../molecules/Achievement";

export default function UnderstoodScore(props) {
  const { understoodWordIds } = props;
  return <Score label="ワカッタ" value={understoodWordIds.length} help="ナレッジが登録されている単語の総数" />;
}
