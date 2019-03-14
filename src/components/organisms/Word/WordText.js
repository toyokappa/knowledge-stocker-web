import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { EditWordForm, ShowWord } from "../../molecules/Word";
import { updateWord } from "../../../actions";

class WordText extends Component {
  constructor(props) {
    super(props);

    this.editWordRef = React.createRef();
    this.state = {
      wordText: "",
      isEditing: false
    };
  }

  componentDidUpdate() {
    const editWordText = ReactDOM.findDOMNode(this.editWordRef.current);
    editWordText && editWordText.focus();
  }

  handleClickEdit() {
    const { word } = this.props;
    this.setState({ wordText: word.text, isEditing: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { wordText } = this.state;
    const { word } = this.props;
    if (wordText === "") return;

    const { updateWord } = this.props;
    updateWord(word.id, wordText);
    this.setState({ isEditing: false });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ wordText: value });
  }

  render() {
    const { wordText, isEditing } = this.state;
    const { word } = this.props;

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

function mapDispatchToProps(dispatch) {
  return {
    updateWord: (wordId, wordText) => dispatch(updateWord(wordId, wordText))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(WordText);
