import React from "react";
import styled from "styled-components";

const EmptyState = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: grey;
  font-size: 1.2rem;
  font-weight: bold;
`;

const EmptyStateComponent = ({ ...props }) => <EmptyState {...props}>表示できる単語はありません</EmptyState>;

export default EmptyStateComponent;
