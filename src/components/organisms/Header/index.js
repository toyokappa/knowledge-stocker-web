import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { Logo } from "../../atoms/Common";
import { AuthNav, UnauthNav } from "../../molecules/HeaderNav";

function Header(props) {
  const { auth } = props;

  return (
    <HeaderContainer>
      <LogoLink to={auth.isSignedIn ? "/words" : "/"}>
        <Logo />
      </LogoLink>
      {auth.isSignedIn ? <AuthNav /> : <UnauthNav />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: gold;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
