import React from "react";
import styled from "styled-components";

const Copylight = styled.div`
  font-weight: bold;
`;

const CopylightComponent = ({ ...props }) => <Copylight {...props}>&copy;2019 toyokappa</Copylight>;

export default CopylightComponent;
