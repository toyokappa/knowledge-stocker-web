import React from "react";
import styled from "styled-components";

const TextField = styled.input.attrs({
  type: "text"
})`
  font-size: 1.2rem;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
`;

const TextFieldComponent = ({ ...props }) => <TextField {...props} />;

export default TextFieldComponent;
