import React from "react";
import styled from "styled-components";

const EmailField = styled.input.attrs({
  type: "email"
})`
  font-size: 1.2rem;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  box-sizing: border-box;
`;

const EmailFieldComponent = ({ inputRef, ...props }) => <EmailField {...props} ref={inputRef} />;

export default EmailFieldComponent;
