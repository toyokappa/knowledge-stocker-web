import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeWord } from "../../../actions";

function List(props) {
  const { wordIds, words, removeWord } = props;
  const wordList = wordIds.map(wordId => {
    const word = words[wordId];
    return (
      <li key={word.id}>
        <Link to={`/words/${word.id}`}>{word.text}</Link>
        <span onClick={() => removeWord(word.id, word.knowledges)}> x</span>
      </li>
    );
  });
  return <ul>{wordList}</ul>;
}

function mapStateToProps(state) {
  return {
    wordIds: state.wordIds,
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeWord: (wordId, knowledgeIds) => dispatch(removeWord(wordId, knowledgeIds))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
