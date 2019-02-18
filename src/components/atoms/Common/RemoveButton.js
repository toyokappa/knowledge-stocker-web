import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const RemoveButton = styled.span`
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const RemoveButtonComponent = ({ ...props }) => (
  <RemoveButton {...props}>
    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
  </RemoveButton>
);

export default RemoveButtonComponent;
