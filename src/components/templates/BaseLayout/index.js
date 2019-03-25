import React from "react";
import styled from "styled-components";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import { Loading } from "../../atoms/Common";

export default function BaseLayout(props) {
  const { children, isFetching } = props;
  const fetching = (
    <FetchingContainer>
      <Fetching>
        <Loading />
      </Fetching>
    </FetchingContainer>
  );

  return (
    <BaseContainer>
      {isFetching ? fetching : null}
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

const FetchingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const Fetching = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  padding: 0 30px;
  margin-top: 93px;
  margin-bottom: 88px;
  height: calc(100vh - 181px);
`;
