import React from "react";
import { connect } from "react-redux";

import Knowledge from "./Knowledge";

function KnowledgeList(props) {
  const { knowledges, words, wordId } = props;
  const word = words[wordId];
  const knowledgeList = word.knowledges.map(knowledgeId => {
    const knowledge = knowledges[knowledgeId];
    return <Knowledge key={knowledge.id} wordId={wordId} knowledge={knowledge} />;
  });

  return <ul>{knowledgeList}</ul>;
}

function mapStateToProps(state) {
  return {
    words: state.words,
    knowledges: state.knowledges
  };
}

export default connect(
  mapStateToProps,
  null
)(KnowledgeList);
