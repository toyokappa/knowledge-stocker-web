import React from "react";
import styled from "styled-components";

import { NavItem, NavLink } from "../../atoms/Common";
import { isSignedIn } from "../../../utils/signIn";

export default function HeaderNav() {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">ホーム</NavLink>
      </NavItem>
      {isSignedIn() ? (
        <>
          <NavItem>
            <NavLink to="/achievements">成績</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">ログアウト</NavLink>
          </NavItem>
        </>
      ) : (
        <NavItem>
          <NavLink to="/">ログイン</NavLink>
        </NavItem>
      )}
    </Nav>
  );
}

const Nav = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;
