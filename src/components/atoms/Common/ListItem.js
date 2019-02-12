import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  font-size: 1.2rem;
  vertical-align: middle;
  padding: 0.375rem 0;
`;

const ListItemComponent = ({ children, ...props }) => <ListItem {...props}>{children}</ListItem>;

export default ListItemComponent;
