import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { NavItem, NavLink } from "../../atoms/Common";
import { signOut } from "../../../actions";

function AuthNav(props) {
  const { signOut } = props;

  return (
    <Nav>
      <NavItem>
        <NavLink to="/">ホーム</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/achievements">成績</NavLink>
      </NavItem>
      <NavItem>
        <SignOut onClick={() => signOut()}>ログアウト</SignOut>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;

const SignOut = styled.div`
  color: black;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
`;

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AuthNav);
