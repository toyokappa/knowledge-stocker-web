import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HelpIcon = styled(FontAwesomeIcon).attrs({
  icon: ["fas", "question-circle"]
})`
  color: #ccc;
  font-size: 0.9rem;
  vertical-align: middle;
  margin-left: 0.25rem;
`;

const HelpIconComponent = ({ ...props }) => <HelpIcon {...props} />;

export default HelpIconComponent;
