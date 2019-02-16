import React from "react";
import Circle from "react-circle";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";

function Achievement(props) {
  const { wordIds, words, knowledges } = props;

  // ワカッタ
  const understoodWordIds = wordIds.filter(wordId => words[wordId].understood);

  // ワカッタ指数
  const achievement = wordIds.length > 0 ? (understoodWordIds.length / wordIds.length) * 100 : 0;
  const achievementSize = wordIds.length * 5 + 100;

  // ナレッジ
  const knowledgeIds = wordIds.flatMap(wordId => words[wordId].knowledges);

  // 平均理解度
  const maxUnderstandings = wordIds.map(wordId => {
    const understandings = words[wordId].knowledges.map(knowledgeId => knowledges[knowledgeId].understanding);
    return _.max(understandings);
  });
  const filterdUnderstandings = _.compact(maxUnderstandings);
  const aveUnderstanding = _.sum(filterdUnderstandings) / filterdUnderstandings.length;

  return (
    <BaseLayout>
      <Container>
        <div>
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
          <ScoreContainer>
            <Score>
              <ScoreValue>{wordIds.length - understoodWordIds.length}</ScoreValue>
              <ScoreLabel>ワカラン</ScoreLabel>
            </Score>
            <Score>
              <ScoreValue>{understoodWordIds.length}</ScoreValue>
              <ScoreLabel>ワカッタ</ScoreLabel>
            </Score>
            <Score>
              <ScoreValue>{wordIds.length}</ScoreValue>
              <ScoreLabel>スベテ</ScoreLabel>
            </Score>
            <Score>
              <ScoreValue>{knowledgeIds.length}</ScoreValue>
              <ScoreLabel>ナレッジ</ScoreLabel>
            </Score>
            <Score>
              <ScoreValue>{aveUnderstanding.toFixed(1)}</ScoreValue>
              <ScoreLabel>平均理解度</ScoreLabel>
            </Score>
          </ScoreContainer>
        </div>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CircleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CircleTitle = styled.div``;

const ScoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
`;

const Score = styled.div`
  text-align: center;
  margin: 0 1.5rem 1rem;
`;

const ScoreValue = styled.div`
  color: gold;
  font-size: 3rem;
  font-weight: bold;
`;

const ScoreLabel = styled.div``;

function mapStateToProps(state) {
  return {
    wordIds: state.wordIds,
    words: state.words,
    knowledges: state.knowledges
  };
}

export default connect(
  mapStateToProps,
  null
)(Achievement);
