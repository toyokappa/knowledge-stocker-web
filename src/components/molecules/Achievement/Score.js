import React from "react";
import styled from "styled-components";

import Help from "../Help";
import { ScoreLabel, ScoreValue } from "../../atoms/Achievement";

export default function Score(props) {
  const { label, value, help } = props;

  return (
    <ScoreContainer>
      <ScoreValue>{value}</ScoreValue>
      <ScoreLabel>
        <Text>{label}</Text>
        <Help help={help} />
      </ScoreLabel>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  text-align: center;
  margin: 0 1.5rem 1rem;
`;

const Text = styled.span`
  vertical-align: middle;
`;
