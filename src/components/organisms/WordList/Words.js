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
      <ListItem key={word.id}>
        <WordLink to={`/words/${word.id}`}>{word.text}</WordLink>
        <RemoveButton onClick={() => removeWord(word.id, word.knowledges)} />
      </ListItem>
    );
  });
  return <WordList>{wordList.reverse()}</WordList>;
}

const WordLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 0.5rem;
`;

const WordList = styled.ul`
  padding: 0;
`;

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
)(Words);
