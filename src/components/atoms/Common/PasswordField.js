import React from "react";
import styled from "styled-components";

const PasswordField = styled.input.attrs({
  type: "password"
})`
  font-size: 1.2rem;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  box-sizing: border-box;
`;

const PasswordFieldComponent = ({ inputRef, ...props }) => <PasswordField {...props} ref={inputRef} />;

export default PasswordFieldComponent;
