import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import { Button, Title } from "../atoms/Common";
import { signIn } from "../../actions";

function SignIn(props) {
  const { auth, signIn } = props;
  return (
    <BaseLayout isFetching={auth.isFetching}>
      <SignInContainer>
        <SignInForm>
          <SignInIcon />
          <SignInTitle>ログイン</SignInTitle>
          <SignInButton onClick={() => signIn()}>ログイン</SignInButton>
        </SignInForm>
      </SignInContainer>
    </BaseLayout>
  );
}

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SignInForm = styled.div`
  width: 450px;
  max-width: 100%;
  padding: 2rem;
  border: 5px solid black;
  margin: 0 auto;
  box-sizing: border-box;
`;

const SignInIcon = styled(FontAwesomeIcon).attrs({
  icon: ["fas", "lock"]
})`
  display: block;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
`;

const SignInTitle = styled(Title)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SignInButton = styled(Button)`
  display: block;
  width: 100%;
`;

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(signIn())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
