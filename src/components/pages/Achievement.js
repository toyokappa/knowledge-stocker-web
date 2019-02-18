import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import {
  AllScore,
  AveUnderstanding,
  KnowledgeScore,
  UnderstandingGraph,
  UnderstoodScore,
  UnknownScore
} from "../organisms/Achievement";

function Achievement(props) {
  const { wordIds, words, knowledges } = props;
  const understoodWordIds = wordIds.filter(wordId => words[wordId].understood);

  return (
    <BaseLayout>
      <Container>
        <div>
          <UnderstandingGraph wordIds={wordIds} understoodWordIds={understoodWordIds} />
          <ScoreContainer>
            <UnknownScore wordIds={wordIds} understoodWordIds={understoodWordIds} />
            <UnderstoodScore understoodWordIds={understoodWordIds} />
            <AllScore wordIds={wordIds} />
            <KnowledgeScore wordIds={wordIds} words={words} />
            <AveUnderstanding wordIds={wordIds} words={words} knowledges={knowledges} />
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

const ScoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
`;

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
