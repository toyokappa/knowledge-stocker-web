import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Logo } from "../../atoms/Common";
import HeaderNav from "../../molecules/HeaderNav";

export default function Header() {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <HeaderNav />
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
