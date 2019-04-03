import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem, RemoveButton } from "../../atoms/Common";
import { destroyWord } from "../../../actions";

function Word(props) {
  const { currentUser, word, destroyWord } = props;
  return (
    <WordListItem key={word.id}>
      <WordLink to={`/words/${word.id}`}>{word.text}</WordLink>
      <RemoveButton onClick={() => destroyWord(currentUser.name, word.id)} />
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    destroyWord: (userName, wordId) => dispatch(destroyWord(userName, wordId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
