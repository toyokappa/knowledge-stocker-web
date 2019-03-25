import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
  margin: -1.25rem 0 1rem;
`;

const errorMessageComponent = ({ message, attribute, ...props }) => {
  return message ? (
    <ErrorMessage {...props}>
      {attribute}
      {message}
    </ErrorMessage>
  ) : null;
};

export default errorMessageComponent;
