import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const TabItem = styled.li`
  display: inline-block;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${props => (props.isActive ? "gold" : "white")};
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  border-bottom: none;
  margin: 0 0.25rem;
  cursor: pointer;
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
