import React from "react";
import Rating from "react-rating";
import styled from "styled-components";

import { EditButton, RemoveButton } from "../../atoms/Common";

export default function ShowKnowledge(props) {
  const { knowledge, showEditForm, removeKnowledge } = props;

  return (
    <>
      <KnowledgeLink href={knowledge.url} target="_blank" rel="noopener noreferrer">
        <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
        <KnowledgeRating
          emptySymbol="fa fa-star-o"
          fullSymbol="fa fa-star"
          fractions={2}
          initialRating={parseFloat(knowledge.understanding)}
          readonly
        />
      </KnowledgeLink>
      <EditButtonWithMarginRight onClick={showEditForm} />
      <RemoveButton onClick={removeKnowledge} />
      <KnowledgeLink href={knowledge.url} target="_blank" rel="noopener noreferrer">
        <KnowledgeUrl>{knowledge.url}</KnowledgeUrl>
      </KnowledgeLink>
    </>
  );
}

const KnowledgeLink = styled.a`
  text-decoration: none;
`;

const KnowledgeTitle = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  &:hover {
    text-decoration: underline;
  }
`;

const EditButtonWithMarginRight = styled(EditButton)`
  margin-right: 0.5rem;
`;

const KnowledgeUrl = styled.div`
  color: gold;
  font-size: 0.8rem;
`;

const KnowledgeRating = styled(Rating)`
  color: gold;
  font-size: 0.8rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;
