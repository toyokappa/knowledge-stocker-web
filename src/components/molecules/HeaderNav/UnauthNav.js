import React from "react";
import styled from "styled-components";

import { NavItem, NavLink } from "../../atoms/Common";

export default function UnauthNav() {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">ホーム</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/sign_up">新規登録</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/sign_in">ログイン</NavLink>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;
