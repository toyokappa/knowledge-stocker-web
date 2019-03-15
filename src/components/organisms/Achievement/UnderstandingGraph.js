import React from "react";
import Circle from "react-circle";
import styled from "styled-components";

import { HelpIcon } from "../../atoms/Common";

export default function UnderstandingGraph(props) {
  const { wordLength, understoodRate } = props;
  const achievementSize = wordLength * 5 + 100;

  return (
    <CircleContainer>
      <Circle
        animate={true}
        animationDuration="1s"
        size={achievementSize}
        progress={understoodRate}
        progressColor="gold"
        textColor="black"
        roundedStroke={true}
      />
      <CircleTitle>
        <Label>ワカッタ指数</Label>
        <HelpIcon data-tip="パーセンテージ: ワカッタ ÷ スベテ × 100%<br>円の大きさ: スベテの数に応じて変化" />
      </CircleTitle>
    </CircleContainer>
  );
}

const CircleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CircleTitle = styled.div``;

const Label = styled.span`
  vertical-align: middle;
`;
