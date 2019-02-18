import React from "react";
import _ from "lodash";

import { Score } from "../../molecules/Achievement";

export default function UnderstoodScore(props) {
  const { understoodWordIds } = props;
  return <Score label="ワカッタ" value={understoodWordIds.length} />;
}
