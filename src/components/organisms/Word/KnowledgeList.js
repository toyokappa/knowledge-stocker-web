import React from "react";
import styled from "styled-components";

import { EmptyState } from "../../atoms/Word";
import Knowledge from "./Knowledge";

export default function KnowledgeList(props) {
  const { knowledges } = props;
  const sortedKnowledgeIds = knowledges.reverse().sort((fkId, skId) => {
    return knowledges[skId].understanding - knowledges[fkId].understanding;
  });
  const knowledgeList = sortedKnowledgeIds.map(knowledgeId => {
    const knowledge = knowledges[knowledgeId];
    return <Knowledge key={knowledge.id} knowledge={knowledge} />;
  });

  return <List>{knowledgeList.length > 0 ? knowledgeList : <EmptyState />}</List>;
}

const List = styled.ul`
  padding: 0;
`;
