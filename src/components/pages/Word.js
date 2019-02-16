import React from "react";

import BaseLayout from "../templates/BaseLayout";
import WordText from "../organisms/Word/WordText";
import Form from "../organisms/Word/Form";
import KnowledgeList from "../organisms/Word/KnowledgeList";

export default function Word(props) {
  const { match } = props;
  const { params } = match;
  const { wordId } = params;

  return (
    <BaseLayout>
      <WordText wordId={wordId} />
      <Form wordId={wordId} />
      <KnowledgeList wordId={wordId} />
    </BaseLayout>
  );
}
