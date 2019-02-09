import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addKnowledge, removeKnowledge } from "../../actions";

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

  parseKnowledgeList() {
    const { knowledges, words, removeKnowledge } = this.props;
    const word = words[this.wordId];
    const knowledgeList = word.knowledges.map(knowledgeId => {
      const knowledge = knowledges[knowledgeId];
      return (
        <li key={knowledge.id}>
          <a href={knowledge.url} target="_blank" rel="noopener noreferrer">
            {knowledge.url}
          </a>
          <span> 理解度: {knowledge.understanding}</span>
          <span onClick={() => removeKnowledge(this.wordId, knowledge.id)}> x</span>
        </li>
      );
    });
    return knowledgeList;
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
        <ul>{this.parseKnowledgeList()}</ul>
        <Link to="/">一覧に戻る</Link>
      </>
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
      dispatch(addKnowledge(wordId, knowledgeUrl, knowledgeUnderstanding)),
    removeKnowledge: (wordId, knowledgeId) => dispatch(removeKnowledge(wordId, knowledgeId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
