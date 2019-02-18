import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  display: inline-block;
`;

const NavItemComponent = ({ children, ...props }) => <NavItem {...props}>{children}</NavItem>;

export default NavItemComponent;
