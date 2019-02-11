import React from "react";
import { connect } from "react-redux";

import { removeKnowledge } from "../../../actions";

function KnowledgeList(props) {
  const { knowledges, words, wordId, removeKnowledge } = props;
  const word = words[wordId];
  const knowledgeList = word.knowledges.map(knowledgeId => {
    const knowledge = knowledges[knowledgeId];
    return (
      <li key={knowledge.id}>
        <a href={knowledge.url} target="_blank" rel="noopener noreferrer">
          {knowledge.url}
        </a>
        <span> 理解度: {knowledge.understanding}</span>
        <span onClick={() => removeKnowledge(wordId, knowledge.id)}> x</span>
      </li>
    );
  });

  return <ul>{knowledgeList}</ul>;
}

function mapStateToProps(state) {
  return {
    words: state.words,
    knowledges: state.knowledges
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeKnowledge: (wordId, knowledgeId) => dispatch(removeKnowledge(wordId, knowledgeId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeList);
