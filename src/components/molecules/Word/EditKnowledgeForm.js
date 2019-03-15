import React from "react";
import Rating from "react-rating";
import styled from "styled-components";

import { Submit, UrlField } from "../../atoms/Common";

export default function EditKnowledgeForm(props) {
  const { url, understanding, onSubmit, onChange, onClick } = props;
  return (
    <form onSubmit={onSubmit}>
      <KnowledgeUrlField name="url" placeholder="URL" value={url} onChange={onChange} />
      <KnowledgeRating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={understanding}
        onClick={onClick}
      />
      <KnowledgeSubmit value="更新" />
    </form>
  );
}
const KnowledgeUrlField = styled(UrlField)`
  font-size: 0.8rem;
  width: 30%;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeRating = styled(Rating)`
  color: gold;
  font-size: 0.8rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeSubmit = styled(Submit)`
  font-size: 0.8rem;
  vertical-align: middle;
`;
