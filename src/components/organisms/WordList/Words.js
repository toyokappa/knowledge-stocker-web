import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { EmptyState } from "../../atoms/WordList";
import Word from "./Word";

function Words(props) {
  const { wordIds, words } = props;
  const wordList = wordIds.reverse().map(wordId => {
    const word = words[wordId];
    return <Word word={word} key={word.id} />;
  });

  return <WordList>{wordList.length > 0 ? wordList : <EmptyState />}</WordList>;
}

const WordList = styled.ul`
  position: relative;
  height: calc(100% - 40px);
  overflow-y: scroll;
  padding: 0;
  border-right: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  margin: 0;
`;

function filterWordIds(wordIds, words, filter) {
  switch (filter) {
    case "unknown":
      return wordIds.filter(wordId => !words[wordId].understood);
    case "welknown":
      return wordIds.filter(wordId => words[wordId].understood);
    case "all":
      return wordIds;
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

function mapStateToProps(state) {
  return {
    wordIds: filterWordIds(state.wordIds, state.words, state.filter),
    words: state.words
  };
}

export default connect(
  mapStateToProps,
  null
)(Words);
