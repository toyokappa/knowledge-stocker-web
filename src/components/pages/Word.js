import React, { Component } from "react";
import { connect } from "react-redux";

import { addKnowledge } from "../../actions";

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      knowledgeUrl: "",
      knowledgeUnderstanding: ""
    };

    this.wordId = this.props.match.params.wordId;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    if (knowledgeUrl === "" || knowledgeUnderstanding === null) return;

    const { addKnowldge } = this.props;
    addKnowldge(this.wordId, knowledgeUrl, knowledgeUnderstanding);
    this.setState({ knowledgeUrl: "", knowledgeUnderstanding: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    const { words } = this.props;
    const word = words[this.wordId];

    return (
      <>
        <h1>{word.text}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="knowledgeUrl" value={knowledgeUrl} onChange={this.handleChangeInput} />
          <input
            type="number"
            name="knowledgeUnderstanding"
            value={knowledgeUnderstanding}
            onChange={this.handleChangeInput}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addKnowldge: (wordId, knowledgeUrl, knowledgeUnderstanding) =>
      dispatch(addKnowledge(wordId, knowledgeUrl, knowledgeUnderstanding))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
