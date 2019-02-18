import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const LogoComponent = ({ ...props }) => <Logo {...props}>Knowldege Stocker</Logo>;

export default LogoComponent;
