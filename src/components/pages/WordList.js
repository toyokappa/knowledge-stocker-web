import React from "react";

import BaseLayout from "../templates/BaseLayout";
import Filters from "../organisms/WordList/Filters";
import Form from "../organisms/WordList/Form";
import Words from "../organisms/WordList/Words";

export default function WordList() {
  return (
    <BaseLayout>
      <Filters />
      <Form />
      <Words />
    </BaseLayout>
  );
}
