import React from "react";
import Circle from "react-circle";
import styled from "styled-components";
import _ from "lodash";

export default function UnderstandingGraph(props) {
  const { wordIds, understoodWordIds } = props;

  // ワカッタ指数
  const achievement = wordIds.length > 0 ? (understoodWordIds.length / wordIds.length) * 100 : 0;
  const achievementSize = wordIds.length * 5 + 100;

  return (
    <CircleContainer>
      <Circle
        animate={true}
        animationDuration="1s"
        size={achievementSize}
        progress={achievement.toFixed()}
        progressColor="gold"
        textColor="black"
        roundedStroke={true}
      />
      <CircleTitle>ワカッタ指数</CircleTitle>
    </CircleContainer>
  );
}

const CircleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CircleTitle = styled.div``;
