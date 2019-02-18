import React from "react";
import styled from "styled-components";

import { EditButton, Title } from "../../atoms/Common";

export default function ShowWord(props) {
  const { word, onClick } = props;

  return (
    <WordArea>
      <WordTitle>{word.text}</WordTitle>
      <EditButton onClick={onClick} />
    </WordArea>
  );
}

const WordArea = styled.div`
  margin-bottom: 1rem;
  vertical-align: middle;
`;

const WordTitle = styled(Title)`
  display: inline-block;
  margin-right: 0.5rem;
`;
