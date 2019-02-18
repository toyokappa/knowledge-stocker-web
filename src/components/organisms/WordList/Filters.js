import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { TabItem } from "../../atoms/Common";
import { setFilter } from "../../../actions";

function Filters(props) {
  const { filter, setFilter } = props;
  return (
    <TabMenu>
      <TabItem isActive={filter === "unknown"} onClick={() => setFilter("unknown")}>
        ワカラン
      </TabItem>
      <TabItem isActive={filter === "welknown"} onClick={() => setFilter("welknown")}>
        ワカッタ
      </TabItem>
      <TabItem isActive={filter === "all"} onClick={() => setFilter("all")}>
        スベテ
      </TabItem>
    </TabMenu>
  );
}

const TabMenu = styled.ul`
  padding: 0;
  border-bottom: 3px solid black;
  margin: 0;
`;

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
