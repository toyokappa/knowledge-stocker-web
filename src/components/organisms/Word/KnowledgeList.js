import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { EmptyState } from "../../atoms/Word";
import Knowledge from "./Knowledge";

function KnowledgeList(props) {
  const { knowledges, words, wordId } = props;
  const word = words[wordId];
  const sortedKnowledgeIds = word.knowledges.reverse().sort((fkId, skId) => {
    return knowledges[skId].understanding - knowledges[fkId].understanding;
  });
  const knowledgeList = sortedKnowledgeIds.map(knowledgeId => {
    const knowledge = knowledges[knowledgeId];
    return <Knowledge key={knowledge.id} wordId={wordId} knowledge={knowledge} />;
  });

  return <List>{knowledgeList.length > 0 ? knowledgeList : <EmptyState />}</List>;
}

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
