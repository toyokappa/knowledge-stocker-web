import React from "react";
import Tooltip from "react-tooltip";
import styled from "styled-components";

const HelpTooltip = styled(Tooltip).attrs({
  effect: "solid",
  place: "right",
  html: true
})`
  text-align: left;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
`;

const HelpTooltipComponent = ({ ...props }) => <HelpTooltip {...props} />;

export default HelpTooltipComponent;
