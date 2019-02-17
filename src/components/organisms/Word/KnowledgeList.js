import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Knowledge from "./Knowledge";

function KnowledgeList(props) {
  const { knowledges, words, wordId } = props;
  const word = words[wordId];
  const knowledgeList = word.knowledges.map(knowledgeId => {
    const knowledge = knowledges[knowledgeId];
    return <Knowledge key={knowledge.id} wordId={wordId} knowledge={knowledge} />;
  });
  const emptyState = <EmptyState>表示できるナレッジはありません</EmptyState>;

  return knowledgeList.length > 0 ? <List>{knowledgeList}</List> : emptyState;
}

const EmptyState = styled.div`
  color: grey;
  font-weight: bold;
`;

const List = styled.ul`
  padding: 0;
`;

function mapStateToProps(state) {
  return {
    words: state.words,
    knowledges: state.knowledges
  };
}

export default connect(
  mapStateToProps,
  null
)(KnowledgeList);
