import React from "react";
import styled from "styled-components";

const ScoreValue = styled.div`
  color: gold;
  font-size: 3rem;
  font-weight: bold;
`;

const ScoreValueComponent = ({ children, ...props }) => <ScoreValue {...props}>{children}</ScoreValue>;

export default ScoreValueComponent;
