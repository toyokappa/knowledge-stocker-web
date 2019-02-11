import React from "react";
import styled from "styled-components";

const NumberField = styled.input.attrs({
  type: "number"
})`
  font-size: 1.2rem;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
`;

const NumberFieldComponent = ({ ...props }) => <NumberField {...props} />;

export default NumberFieldComponent;
