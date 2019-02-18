import React from "react";
import _ from "lodash";

import { Score } from "../../molecules/Achievement";

export default function UnknownScore(props) {
  const { wordIds, understoodWordIds } = props;
  const unknownScore = wordIds.length - understoodWordIds.length;
  return <Score label="ワカラン" value={unknownScore} />;
}
