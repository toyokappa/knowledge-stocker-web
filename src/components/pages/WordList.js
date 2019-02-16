import React from "react";
import styled from "styled-components";

import BaseLayout from "../templates/BaseLayout";
import Filters from "../organisms/WordList/Filters";
import Form from "../organisms/WordList/Form";
import Words from "../organisms/WordList/Words";

export default function WordList() {
  return (
    <BaseLayout>
      <Container>
        <FormContainer>
          <Form />
        </FormContainer>
        <ListContainer>
          <Filters />
          <Words />
        </ListContainer>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const FormContainer = styled.div`
  width: calc(100% - 450px);
  align-self: center;
  margin-top: -3.5rem;
`;

const ListContainer = styled.div`
  width: 450px;
  box-sizing: border-box;
`;
