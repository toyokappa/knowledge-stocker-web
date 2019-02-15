import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Submit, TextField } from "../../atoms/Common";
import { addWord } from "../../../actions";

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
    const { nextId } = this.props;
    const { wordText } = this.state;
    if (wordText === "") return;

    const { addWord } = this.props;
    addWord(nextId.wordId, wordText);
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
    nextId: state.nextId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: (wordId, wordText) => dispatch(addWord(wordId, wordText))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
