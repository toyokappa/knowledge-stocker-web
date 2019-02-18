import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const EditButton = styled.span`
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

const EditButtonComponent = ({ ...props }) => (
  <EditButton {...props}>
    <FontAwesomeIcon icon={["fas", "pencil-alt"]} />
  </EditButton>
);

export default EditButtonComponent;
