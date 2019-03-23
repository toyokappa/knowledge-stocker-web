import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { lifecycle, compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import { showRanking } from "../../actions";
import { ListItem, Title, TabItem } from "../atoms/Common";

function Ranking(props) {
  const { ranking, term, fetchRanking } = props;
  const userList = ranking.users.map((user, index) => {
    const rank = index + 1;
    return (
      <RankingItem key={rank}>
        <RankingCrown>
          {rank < 4 ? <CrownIcon rank={rank} /> : <ShieldIcon />}
          <Rank>{rank}</Rank>
        </RankingCrown>
        <RankingUserName>{user.name}</RankingUserName>
        <RankingScore>{user.score}pt</RankingScore>
      </RankingItem>
    );
  });
  return (
    <BaseLayout>
      <RankingTitle>ワカッタ!!ランキング</RankingTitle>
      <TabMenu>
        <TabItem isActive={term === "monthly"} onClick={() => fetchRanking("monthly")}>
          マンスリー
        </TabItem>
        <TabItem isActive={term === "weekly"} onClick={() => fetchRanking("weekly")}>
          ウィークリー
        </TabItem>
        <TabItem isActive={term === "daily"} onClick={() => fetchRanking("daily")}>
          デイリー
        </TabItem>
      </TabMenu>
      <RankingContainer>
        {userList.length > 0 ? (
          userList
        ) : (
          <RankingItem>
            <RankingUserName>対象のユーザーがいません</RankingUserName>
          </RankingItem>
        )}
      </RankingContainer>
    </BaseLayout>
  );
}

const RankingTitle = styled(Title)`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TabMenu = styled.ul`
  max-width: 500px;
  padding: 0;
  margin: 0 auto;
`;

const RankingContainer = styled.ul`
  list-style: none;
  max-width: 500px;
  padding: 0;
  border: 3px solid black;
  margin: 0 auto;
`;

const RankingItem = styled(ListItem)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 3px solid black;
  &:last-child {
    border: 0;
  }
`;

const RankingCrown = styled.div.attrs({
  className: "fa-stack"
})`
  margin-right: 0.5rem;
`;

const CrownIcon = styled(FontAwesomeIcon).attrs({
  icon: ["fas", "crown"],
  className: "fa-stack-1x"
})`
  color: ${props => {
    switch (props.rank) {
      case 1:
        return "gold";
      case 2:
        return "silver";
      case 3:
        return "#CD7F32";
      default:
        return "transparent";
    }
  }};
  font-size: 2rem;
`;

const ShieldIcon = styled(FontAwesomeIcon).attrs({
  icon: ["fas", "shield-alt"],
  className: "fa-stack-1x"
})`
  color: #ffcc66;
  font-size: 2rem;
`;

const Rank = styled.span.attrs({
  className: "fa-stack-1x"
})`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.1rem;
`;

const RankingUserName = styled.div`
  font-weight: bold;
  margin-right: auto;
`;

const RankingScore = styled.div`
  font-weight: bold;
`;

const enhancer = compose(
  withState("term", "setTerm", "monthly"),
  withHandlers({
    fetchRanking: ({ showRanking, setTerm }) => term => {
      showRanking(term);
      setTerm(term);
    }
  }),
  lifecycle({
    componentWillMount() {
      const { showRanking } = this.props;
      showRanking("monthly");
    }
  })
);

const enhancedRanking = enhancer(Ranking);

function mapStateToProps(state) {
  return {
    ranking: state.ranking
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showRanking: term => dispatch(showRanking(term))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhancedRanking);
