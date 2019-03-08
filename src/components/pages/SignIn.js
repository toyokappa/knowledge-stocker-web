import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import { EmailField, PasswordField, Submit, Title } from "../atoms/Common";
import { signIn } from "../../actions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { signIn } = this.props;
    const { email, password } = this.state;
    if (email === "" || password === "") return;

    signIn(email, password);
    this.setState({ email: "", password: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <BaseLayout>
        <SignInContainer>
          <SignInForm onSubmit={this.handleSubmit}>
            <SignInIcon />
            <SignInTitle>ログイン</SignInTitle>
            <SignInEmailField
              name="email"
              value={email}
              placeholder="メールアドレス"
              onChange={this.handleChangeInput}
            />
            <SignInPasswordField
              name="password"
              value={password}
              placeholder="パスワード"
              onChange={this.handleChangeInput}
            />
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

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
