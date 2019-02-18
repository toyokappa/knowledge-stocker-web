import React from "react";
import styled from "styled-components";

import { Submit, TextField } from "../../atoms/Common";

export default function EditWordForm(props) {
  const { wordText, onSubmit, onChange, inputRef } = props;

  return (
    <WordForm onSubmit={onSubmit}>
      <WordTextField value={wordText} inputRef={inputRef} onChange={onChange} />
      <Submit value="更新" />
    </WordForm>
  );
}

const WordForm = styled.form`
  margin-bottom: 1rem;
`;

const WordTextField = styled(TextField)`
  width: 30%;
  border-right: none;
`;
