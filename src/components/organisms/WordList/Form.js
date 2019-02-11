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
    const { wordText } = this.state;
    if (wordText === "") return;

    const { addWord } = this.props;
    addWord(wordText);
    this.setState({ wordText: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    this.setState({ wordText: target.value });
  }

  render() {
    const { wordText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <WordTextField value={wordText} onChange={this.handleChangeInput} />
        <Submit />
      </form>
    );
  }
}

const WordTextField = styled(TextField)`
  border-right: none;
`;

function mapDispatchToProps(dispatch) {
  return {
    addWord: wordText => dispatch(addWord(wordText))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
