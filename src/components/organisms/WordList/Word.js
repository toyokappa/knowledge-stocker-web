import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem, RemoveButton } from "../../atoms/Common";
import { destroyUserWords } from "../../../actions";

function Word(props) {
  const { user, word, destroyUserWords } = props;
  return (
    <WordListItem key={word.id}>
      <WordLink to={`/words/${word.id}`}>{word.text}</WordLink>
      <RemoveButton onClick={() => destroyUserWords(user.name, word.id)} />
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    destroyUserWords: (userName, wordId) => dispatch(destroyUserWords(userName, wordId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
