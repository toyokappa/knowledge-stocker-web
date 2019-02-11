import React, { Component } from "react";
import { connect } from "react-redux";

import { addKnowledge } from "../../../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      knowledgeUrl: "",
      knowledgeUnderstanding: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    if (knowledgeUrl === "" || knowledgeUnderstanding === null) return;

    const { wordId, addKnowldge } = this.props;
    addKnowldge(wordId, knowledgeUrl, knowledgeUnderstanding);
    this.setState({ knowledgeUrl: "", knowledgeUnderstanding: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="knowledgeUrl" value={knowledgeUrl} onChange={this.handleChangeInput} />
        <input
          type="number"
          name="knowledgeUnderstanding"
          value={knowledgeUnderstanding}
          onChange={this.handleChangeInput}
        />
        <input type="submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
    knowledges: state.knowledges
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
)(Form);
