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
            <NavLink to="/">単語一覧</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">成績</NavLink>
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
  display: flex;
  align-items: center;
  background-color: gold;
  padding: 20px 30px;
  margin-bottom: 60px;
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
  text-decoration: none;
  padding: 5px 10px;
`;

const Wrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 60px;
`;

const Footer = styled.footer`
  text-align: center;
  color: white;
  background-color: #333;
  padding: 30px 0;
`;

const Copylight = styled.div`
  font-weight: bold;
`;
