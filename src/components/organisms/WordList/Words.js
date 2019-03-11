import React from "react";
import styled from "styled-components";
import { lifecycle } from "recompose";
import { connect } from "react-redux";

import { EmptyState } from "../../atoms/WordList";
import Word from "./Word";
import { fetchUserWords } from "../../../actions";

function Words(props) {
  const { user } = props;
  const wordList = user.words.map(word => {
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

// function filterWordIds(wordIds, words, filter) {
//   switch (filter) {
//     case "unknown":
//       return wordIds.filter(wordId => !words[wordId].understood);
//     case "welknown":
//       return wordIds.filter(wordId => words[wordId].understood);
//     case "all":
//       return wordIds;
//     default:
//       throw new Error("Unknown filter: " + filter);
//   }
// }

function mapStateToProps(state) {
  return {
    user: state.user
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
