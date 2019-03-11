import React from "react";
import styled from "styled-components";
import { lifecycle } from "recompose";
import { connect } from "react-redux";

import { EmptyState } from "../../atoms/WordList";
import Word from "./Word";
import { fetchUserWords } from "../../../actions";

function Words(props) {
  const { user, filter } = props;
  const filteredWords = filterWords(user.words, filter);
  const wordList = filteredWords.map(word => {
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

const enhancedWords = lifecycle({
  componentWillMount() {
    const { user, fetchUserWords } = this.props;
    fetchUserWords(user.name);
  }
})(Words);

function filterWords(words, filter) {
  switch (filter) {
    case "unknown":
      return words.filter(word => !word.understood);
    case "welknown":
      return words.filter(word => word.understood);
    case "all":
      return words;
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserWords: userName => dispatch(fetchUserWords(userName))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhancedWords);
