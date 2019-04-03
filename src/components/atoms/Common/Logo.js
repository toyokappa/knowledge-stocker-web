import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-family: ta-f1blockline, sans-serif;
  font-size: 24px;
  color: black;
  padding: 0.25rem 0.5rem;
`;

const LogoComponent = ({ ...props }) => <Logo {...props}>ワカッター！</Logo>;

export default LogoComponent;
