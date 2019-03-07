import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  padding: 0.25rem 0.5rem;
  border: 3px solid black;
  box-sizing: border-box;
`;

const LogoComponent = ({ ...props }) => <Logo {...props}>Knowledge Stocker</Logo>;

export default LogoComponent;
