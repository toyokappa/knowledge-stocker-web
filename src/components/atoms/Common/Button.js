import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: gold;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  cursor: pointer;
`;

const ButtonComponent = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export default ButtonComponent;
