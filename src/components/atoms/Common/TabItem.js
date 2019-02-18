import React from "react";
import styled from "styled-components";

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

const TabItemComponent = ({ children, ...props }) => <TabItem {...props}>{children}</TabItem>;

export default TabItemComponent;
