import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { EditButton, Submit, TextField, Title } from "../../atoms/Common";
import { updateWord } from "../../../actions";

class WordText extends Component {
  constructor(props) {
    super(props);

    this.editWordRef = React.createRef();
    this.wordId = this.props.wordId;
    const { words } = this.props;
    const word = words[this.wordId];
    this.state = {
      wordText: word.text,
      isEditing: false
    };
  }

  componentDidUpdate() {
    const editWordText = ReactDOM.findDOMNode(this.editWordRef.current);
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
      <WordForm onSubmit={this.handleSubmit.bind(this)}>
        <WordTextField value={wordText} inputRef={this.editWordRef} onChange={this.handleChangeInput.bind(this)} />
        <Submit value="更新" />
      </WordForm>
    );
    const showWord = (
      <WordArea>
        <WordTitle>{word.text}</WordTitle>
        <EditButton onClick={this.handleClickEdit.bind(this)} />
      </WordArea>
    );

    return isEditing ? editWordForm : showWord;
  }
}

const WordForm = styled.form`
  margin-bottom: 1rem;
`;

const WordTextField = styled(TextField)`
  width: 30%;
  border-right: none;
`;

const WordArea = styled.div`
  margin-bottom: 1rem;
  vertical-align: middle;
`;

const WordTitle = styled(Title)`
  display: inline-block;
  margin-right: 0.5rem;
`;

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
