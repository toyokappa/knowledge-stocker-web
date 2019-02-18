import React from "react";

import { Score } from "../../molecules/Achievement";

export default function AllScore(props) {
  const { wordIds } = props;
  return <Score label="スベテ" value={wordIds.length} />;
}
