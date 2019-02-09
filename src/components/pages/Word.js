import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateWord, addKnowledge, removeKnowledge } from "../../actions";

class Word extends Component {
  constructor(props) {
    super(props);
    this.wordId = this.props.match.params.wordId;
    this.handleSubmitKnowledge = this.handleSubmitKnowledge.bind(this);
    this.handleChangeInputKnowledge = this.handleChangeInputKnowledge.bind(this);
    this.handleClickWord = this.handleClickWord.bind(this);
    this.handleSubmitWord = this.handleSubmitWord.bind(this);
    this.handleChangeInputWord = this.handleChangeInputWord.bind(this);

    this.state = {
      wordText: this.props.words[this.wordId].text,
      isEditing: false,
      knowledgeUrl: "",
      knowledgeUnderstanding: ""
    };
  }

  componentDidUpdate() {
    let editWordText = ReactDOM.findDOMNode(this.refs.editWordText);
    editWordText && editWordText.focus();
  }

  handleSubmitKnowledge(event) {
    event.preventDefault();
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    if (knowledgeUrl === "" || knowledgeUnderstanding === null) return;

    const { addKnowldge } = this.props;
    addKnowldge(this.wordId, knowledgeUrl, knowledgeUnderstanding);
    this.setState({ knowledgeUrl: "", knowledgeUnderstanding: "" });
  }

  handleChangeInputKnowledge(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClickWord() {
    this.setState({ isEditing: true });
  }

  handleSubmitWord(event) {
    event.preventDefault();
    const { wordText } = this.state;
    if (wordText === "") return;

    const { updateWord } = this.props;
    updateWord(this.wordId, wordText);
    this.setState({ isEditing: false });
  }

  handleChangeInputWord(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ wordText: value });
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
    const { wordText, isEditing, knowledgeUrl, knowledgeUnderstanding } = this.state;
    const { words } = this.props;
    const word = words[this.wordId];
    const editWordForm = (
      <form onSubmit={this.handleSubmitWord}>
        <input type="text" value={wordText} ref="editWordText" onChange={this.handleChangeInputWord} />
      </form>
    );

    return (
      <>
        <div onClick={this.handleClickWord}>{isEditing ? editWordForm : <h1>{word.text}</h1>}</div>
        <form onSubmit={this.handleSubmitKnowledge}>
          <input type="text" name="knowledgeUrl" value={knowledgeUrl} onChange={this.handleChangeInputKnowledge} />
          <input
            type="number"
            name="knowledgeUnderstanding"
            value={knowledgeUnderstanding}
            onChange={this.handleChangeInputKnowledge}
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
    updateWord: (wordId, wordText) => dispatch(updateWord(wordId, wordText)),
    addKnowldge: (wordId, knowledgeUrl, knowledgeUnderstanding) =>
      dispatch(addKnowledge(wordId, knowledgeUrl, knowledgeUnderstanding)),
    removeKnowledge: (wordId, knowledgeId) => dispatch(removeKnowledge(wordId, knowledgeId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
