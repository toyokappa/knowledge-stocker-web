import React from "react";
import styled from "styled-components";
import { lifecycle } from "recompose";
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
import { showAchievement } from "../../actions";

function Achievement(props) {
  const { achievement } = props;
  const { wordLength, understoodLength, understoodRate, knowledgeLength, aveUnderstanding } = achievement;

  return (
    <BaseLayout>
      <Container>
        <div>
          <UnderstandingGraph wordLength={wordLength} understoodRate={understoodRate} />
          <ScoreContainer>
            <UnknownScore wordLength={wordLength} understoodLength={understoodLength} />
            <UnderstoodScore understoodLength={understoodLength} />
            <AllScore wordLength={wordLength} />
            <KnowledgeScore knowledgeLength={knowledgeLength} />
            <AveUnderstanding aveUnderstanding={aveUnderstanding} />
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

const enhancedAchievement = lifecycle({
  componentWillMount() {
    const { user, showAchievement } = this.props;
    showAchievement(user.name);
  }
})(Achievement);

function mapStateToProps(state) {
  return {
    user: state.user,
    achievement: state.achievement
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showAchievement: userName => dispatch(showAchievement(userName))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhancedAchievement);
