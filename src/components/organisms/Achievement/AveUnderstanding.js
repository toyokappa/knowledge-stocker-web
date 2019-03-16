import React from "react";

import { Score } from "../../molecules/Achievement";

export default function AveUnderstanding(props) {
  const { aveUnderstanding } = props;
  return <Score label="平均理解度" value={aveUnderstanding} help="全単語の理解度の平均値" />;
}
