import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BaseLayout(props) {
  const { children } = props;

  return (
    <BaseContainer>
      <Header>
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
      </Header>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <Copylight>&copy;2019 toyokappa</Copylight>
      </Footer>
    </BaseContainer>
  );
}

const BaseContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.header`
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

const Wrapper = styled.div`
  padding: 0 30px;
  margin-top: 93px;
  margin-bottom: 88px;
  height: calc(100vh - 181px);
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
  background-color: #333;
  padding: 20px 0;
`;

const Copylight = styled.div`
  font-weight: bold;
`;
