import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Copylight>&copy;2019 toyokappa</Copylight>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
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
