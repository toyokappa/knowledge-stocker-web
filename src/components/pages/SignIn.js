import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseLayout from "../templates/BaseLayout";
import { EmailField, PasswordField, Submit, Title } from "../atoms/Common";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <BaseLayout>
        <SignInContainer>
          <SignInForm>
            <SignInIcon />
            <SignInTitle>ログイン</SignInTitle>
            <SignInEmailField placeholder="メールアドレス" />
            <SignInPasswordField placeholder="パスワード" />
            <SignInSubmit value="ログイン" />
          </SignInForm>
        </SignInContainer>
      </BaseLayout>
    );
  }
}

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SignInForm = styled.form`
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

const SignInEmailField = styled(EmailField)`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SignInPasswordField = styled(PasswordField)`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SignInSubmit = styled(Submit)`
  display: block;
  width: 100%;
`;
