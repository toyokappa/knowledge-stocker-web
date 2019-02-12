import React from "react";
import styled from "styled-components";

const EditButton = styled.span`
  color: white;
  background-color: green;
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
`;

const EditButtonComponent = ({ ...props }) => <EditButton {...props}>編集</EditButton>;

export default EditButtonComponent;
