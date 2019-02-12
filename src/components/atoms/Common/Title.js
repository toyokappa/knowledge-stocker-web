import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const TitleComponent = ({ children, ...props }) => <Title {...props}>{children}</Title>;

export default TitleComponent;
