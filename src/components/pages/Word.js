import React, { Component } from "react";
import { Link } from "react-router-dom";

import WordText from "../organisms/Word/WordText";
import Form from "../organisms/Word/Form";
import KnowledgeList from "../organisms/Word/KnowledgeList";

export default function Word(props) {
  const { match } = props;
  const { params } = match;
  const { wordId } = params;

  return (
    <>
      <WordText wordId={wordId} />
      <Form wordId={wordId} />
      <KnowledgeList wordId={wordId} />
      <Link to="/">一覧に戻る</Link>
    </>
  );
}
