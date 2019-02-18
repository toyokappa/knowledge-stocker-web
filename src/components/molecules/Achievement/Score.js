import React from "react";
import styled from "styled-components";

import { ScoreLabel, ScoreValue } from "../../atoms/Achievement";

export default function Score(props) {
  const { label, value } = props;

  return (
    <ScoreContainer>
      <ScoreValue>{value}</ScoreValue>
      <ScoreLabel>{label}</ScoreLabel>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  text-align: center;
  margin: 0 1.5rem 1rem;
`;
