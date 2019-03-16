import React from "react";

import { Score } from "../../molecules/Achievement";

export default function UnderstoodScore(props) {
  const { understoodLength } = props;
  return <Score label="ワカッタ" value={understoodLength} help="ナレッジが登録されている単語の総数" />;
}
