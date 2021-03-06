import React from "react";
import styled from "styled-components";

const Submit = styled.input.attrs({
  type: "submit"
})`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: gold;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  cursor: pointer;
`;

const SubmitComponent = ({ ...props }) => <Submit {...props} />;

export default SubmitComponent;
