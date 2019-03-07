import React from "react";
import styled from "styled-components";

const UrlField = styled.input.attrs({
  type: "url"
})`
  font-size: 1.2rem;
  padding: 0.375rem 0.75rem;
  border: 3px solid black;
  box-sizing: border-box;
`;

const UrlFieldComponent = ({ ...props }) => <UrlField {...props} />;

export default UrlFieldComponent;
