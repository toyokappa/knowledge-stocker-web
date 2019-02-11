import React from "react";
import styled from "styled-components";

const RemoveButton = styled.span`
  color: white;
  background-color: red;
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
`;

const RemoveButtonComponent = ({ ...props }) => <RemoveButton {...props}>削除</RemoveButton>;

export default RemoveButtonComponent;
