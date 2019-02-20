import React from "react";

import { HelpIcon, HelpTooltip } from "../../atoms/Common";

export default function Help(props) {
  const { help } = props;
  return (
    <>
      <HelpIcon data-tip={help} />
      <HelpTooltip />
    </>
  );
}
