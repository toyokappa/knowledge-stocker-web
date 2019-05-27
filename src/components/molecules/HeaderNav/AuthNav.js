import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { NavItem, NavLink } from "../../atoms/Common";
import { signOut } from "../../../actions";

function AuthNav(props) {
  const { currentUser, signOut } = props;

  return (
    <Nav>
      <NavItem>
        <NavLink to="/words">ホーム</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/achievement">成績</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/ranking">ランキング</NavLink>
      </NavItem>
      <NavItem>
        <SignOut onClick={() => signOut()}>ログアウト</SignOut>
      </NavItem>
      <NavItem>
        <UserImage src={currentUser.imageUrl} />
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

const UserImage = styled.img`
  height: 25px;
  width: auto;
  vertical-align: middle;
  border-radius: 50%;
  border: 2px solid black;
  margin-left: 0.25rem;
`;

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNav);
