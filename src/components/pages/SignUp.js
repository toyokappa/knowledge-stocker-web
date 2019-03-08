import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import { EmailField, PasswordField, Submit, TextField, Title } from "../atoms/Common";
import { signUp } from "../../actions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { signUp } = this.props;
    const { username, email, password, passwordConfirmation } = this.state;
    if (username === "" || email === "" || password === "" || passwordConfirmation === "") return;

    signUp(username, email, password, passwordConfirmation);
    this.setState({ password: "", passwordConfirmation: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { auth } = this.props;
    const { username, email, password, passwordConfirmation } = this.state;
    return auth.isSignedIn ? (
      <Redirect to="/" />
    ) : (
      <BaseLayout>
        <SignUpContainer>
          <SignUpForm onSubmit={this.handleSubmit}>
            <SignUpIcon />
            <SignUpTitle>新規登録</SignUpTitle>
            <SignUpTextField
              name="username"
              value={username}
              placeholder="ユーザー名"
              onChange={this.handleChangeInput}
            />
            <SignUpEmailField
              name="email"
              value={email}
              placeholder="メールアドレス"
              onChange={this.handleChangeInput}
            />
            <SignUpPasswordField
              name="password"
              value={password}
              placeholder="パスワード"
              onChange={this.handleChangeInput}
            />
            <SignUpPasswordField
              name="passwordConfirmation"
              value={passwordConfirmation}
              placeholder="パスワード(確認)"
              onChange={this.handleChangeInput}
            />
            <SignUpSubmit value="登録" />
          </SignUpForm>
        </SignUpContainer>
      </BaseLayout>
    );
  }
}

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SignUpForm = styled.form`
  width: 450px;
  max-width: 100%;
  padding: 2rem;
  border: 5px solid black;
  margin: 0 auto;
  box-sizing: border-box;
`;

const SignUpIcon = styled(FontAwesomeIcon).attrs({
  icon: ["fas", "user"]
})`
  display: block;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
`;

const SignUpTitle = styled(Title)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SignUpTextField = styled(TextField)`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SignUpEmailField = styled(EmailField)`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SignUpPasswordField = styled(PasswordField)`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SignUpSubmit = styled(Submit)`
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
    signUp: (username, email, password, passwordConfirmation) =>
      dispatch(signUp(username, email, password, passwordConfirmation))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
