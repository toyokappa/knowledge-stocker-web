import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem, RemoveButton } from "../../atoms/Common";
import { removeWord } from "../../../actions";

function Word(props) {
  const { word, removeWord } = props;
  return (
    <WordListItem key={word.id}>
      <WordLink to={`/words/${word.id}`}>{word.text}</WordLink>
      <RemoveButton onClick={() => removeWord(word.id, word.knowledges)} />
    </WordListItem>
  );
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

function mapDispatchToProps(dispatch) {
  return {
    removeWord: (wordId, knowledgeIds) => dispatch(removeWord(wordId, knowledgeIds))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Word);
