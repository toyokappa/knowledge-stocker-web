import React from "react";
import styled from "styled-components";

import { NavItem, NavLink } from "../../atoms/Common";

export default function HeaderNav() {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">ホーム</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/achievements">成績</NavLink>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;
