import React from "react";
import styled from "styled-components";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

export default function BaseLayout(props) {
  const { children } = props;

  return (
    <BaseContainer>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </BaseContainer>
  );
}

const BaseContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  padding: 0 30px;
  margin-top: 93px;
  margin-bottom: 88px;
  height: calc(100vh - 181px);
`;
