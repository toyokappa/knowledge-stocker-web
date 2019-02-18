import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { EditWordForm, ShowWord } from "../../molecules/Word";
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
      <EditWordForm
        wordText={wordText}
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChangeInput.bind(this)}
        inputRef={this.editWordRef}
      />
    );
    const showWord = <ShowWord word={word} onClick={this.handleClickEdit.bind(this)} />;

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
