import React from "react";
import styled from "styled-components";

const EmptyState = styled.li`
  list-style: none;
  color: grey;
  font-weight: bold;
`;

const EmptyStateComponent = ({ ...props }) => <EmptyState {...props}>表示できるナレッジはありません</EmptyState>;

export default EmptyStateComponent;
