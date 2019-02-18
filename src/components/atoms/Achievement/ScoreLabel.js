import React from "react";
import styled from "styled-components";

const ScoreLabel = styled.div``;

const ScoreLabelComponent = ({ children, ...props }) => <ScoreLabel {...props}>{children}</ScoreLabel>;

export default ScoreLabelComponent;
