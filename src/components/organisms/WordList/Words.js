import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem, RemoveButton } from "../../atoms/Common";
import { removeWord } from "../../../actions";

function Words(props) {
  const { wordIds, words, removeWord } = props;
  const wordList = wordIds.map(wordId => {
    const word = words[wordId];
    return (
      <WordListItem key={word.id}>
        <WordLink to={`/words/${word.id}`}>{word.text}</WordLink>
        <RemoveButton onClick={() => removeWord(word.id, word.knowledges)} />
      </WordListItem>
    );
  });

  const noList = <NoList>表示できる単語はありません</NoList>;
  return <WordList>{wordList.length > 0 ? wordList.reverse() : noList}</WordList>;
}

const WordListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 3px solid black;
`;

const WordLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-right: auto;
`;

const NoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: grey;
  font-size: 1.2rem;
  font-weight: bold;
`;

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

function mapDispatchToProps(dispatch) {
  return {
    removeWord: (wordId, knowledgeIds) => dispatch(removeWord(wordId, knowledgeIds))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words);
