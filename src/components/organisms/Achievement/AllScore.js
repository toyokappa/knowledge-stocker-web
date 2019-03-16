import React from "react";

import { Score } from "../../molecules/Achievement";

export default function AllScore(props) {
  const { wordLength } = props;
  return <Score label="スベテ" value={wordLength} help="登録されている単語の総数" />;
}
