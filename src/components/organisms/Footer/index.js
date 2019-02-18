import React from "react";
import styled from "styled-components";

import { Copylight } from "../../atoms/Common";

export default function Footer() {
  return (
    <FooterContainer>
      <Copylight />
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
