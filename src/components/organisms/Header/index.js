import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoLink to="/">Knowledge Stocker</LogoLink>
      </Logo>
      <HeaderNav>
        <NavItem>
          <NavLink to="/">ホーム</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/achievements">成績</NavLink>
        </NavItem>
      </HeaderNav>
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
  padding: 20px 30px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const HeaderNav = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const NavLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 5px 10px;
`;
