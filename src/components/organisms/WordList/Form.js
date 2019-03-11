import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Submit, TextField } from "../../atoms/Common";
import { createUserWords } from "../../../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user, createUserWords } = this.props;
    const { wordText } = this.state;
    if (wordText === "") return;

    createUserWords(user.name, wordText);
    this.setState({ wordText: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    this.setState({ wordText: target.value });
  }

  render() {
    const { wordText } = this.state;
    return (
      <WordForm onSubmit={this.handleSubmit}>
        <WordTextLabel htmlFor="wordText">「ワカラン」単語を入力</WordTextLabel>
        <WordTextField value={wordText} id="wordText" onChange={this.handleChangeInput} />
        <Submit value="追加" />
      </WordForm>
    );
  }
}

const WordForm = styled.form`
  text-align: center;
`;

const WordTextLabel = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const WordTextField = styled(TextField)`
  width: 50%;
  border-right: none;
`;

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUserWords: (userName, wordText) => dispatch(createUserWords(userName, wordText))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
