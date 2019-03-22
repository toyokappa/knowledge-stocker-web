import React from "react";
import { lifecycle } from "recompose";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import { showRanking } from "../../actions";

function Ranking(props) {
  const { ranking } = props;
  const userList = ranking.users.map((user, rank) => {
    return (
      <li>
        {rank + 1} {user.name}: {user.score}pt
      </li>
    );
  });
  return (
    <BaseLayout>
      <ul>{userList}</ul>
    </BaseLayout>
  );
}

const enhancedRanking = lifecycle({
  componentWillMount() {
    const { showRanking } = this.props;
    showRanking("monthly");
  }
})(Ranking);

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
