import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 5px 10px;
`;

const NavLinkComponent = ({ children, ...props }) => <NavLink {...props}>{children}</NavLink>;

export default NavLinkComponent;
