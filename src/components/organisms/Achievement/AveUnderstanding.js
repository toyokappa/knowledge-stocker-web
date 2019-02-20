import React from "react";
import _ from "lodash";

import { Score } from "../../molecules/Achievement";

export default function AveUnderstanding(props) {
  const { wordIds, words, knowledges } = props;
  const maxUnderstandings = wordIds.map(wordId => {
    const understandings = words[wordId].knowledges.map(knowledgeId => knowledges[knowledgeId].understanding);
    return _.max(understandings);
  });
  const filterdUnderstandings = _.compact(maxUnderstandings);
  const aveUnderstanding =
    filterdUnderstandings.length > 0 ? (_.sum(filterdUnderstandings) / filterdUnderstandings.length).toFixed(1) : "-";
  return <Score label="平均理解度" value={aveUnderstanding} help="全単語の理解度の平均値" />;
}
