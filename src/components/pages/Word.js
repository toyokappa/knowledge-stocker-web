import React from "react";
import { connect } from "react-redux";

function Word(props) {
  const { match, words } = props;
  const { params } = match;
  const word = words[params.wordId];

  return <h1>{word.text}</h1>;
}

function mapStateToProps(state) {
  return {
    words: state.words
  };
}

export default connect(
  mapStateToProps,
  null
)(Word);
