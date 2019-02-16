import React from "react";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";

function Achievement(props) {
  return (
    <BaseLayout>
      <div>aaa</div>
    </BaseLayout>
  );
}

function mapStateToProps(state) {
  return {
    wordIds: state.wordIds,
    words: state.words
  };
}

export default connect(
  mapStateToProps,
  null
)(Achievement);
