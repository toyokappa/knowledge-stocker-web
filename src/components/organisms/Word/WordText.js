import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { updateWord } from "../../../actions";

class WordText extends Component {
  constructor(props) {
    super(props);

    this.wordId = this.props.wordId;
    const { words } = this.props;
    const word = words[this.wordId];
    this.state = {
      wordText: word.text,
      isEditing: false
    };
  }

  componentDidUpdate() {
    let editWordText = ReactDOM.findDOMNode(this.refs.editWordText);
    editWordText && editWordText.focus();
  }

  handleClickEdit() {
    this.setState({ isEditing: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { wordText } = this.state;
    if (wordText === "") return;

    const { updateWord } = this.props;
    updateWord(this.wordId, wordText);
    this.setState({ isEditing: false });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ wordText: value });
  }

  render() {
    const { wordText, isEditing } = this.state;
    const { words } = this.props;
    const word = words[this.wordId];

    const editWordForm = (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={wordText} ref="editWordText" onChange={this.handleChangeInput.bind(this)} />
      </form>
    );
    const showWord = (
      <>
        <h1>{word.text}</h1>
        <div onClick={this.handleClickEdit.bind(this)}>編集</div>
      </>
    );

    return isEditing ? editWordForm : showWord;
  }
}

function mapStateToProps(state) {
  return {
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateWord: (wordId, wordText) => dispatch(updateWord(wordId, wordText))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordText);
