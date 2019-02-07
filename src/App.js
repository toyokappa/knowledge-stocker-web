import React, { Component } from "react";
import { connect } from "react-redux";

import { addWord } from "./actions";

class App extends Component {
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
    const { addWord } = this.props;
    const { wordText } = this.state;
    addWord(wordText);
    this.setState({ wordText: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    this.setState({ wordText: target.value });
  }

  parseWordList() {
    const { wordIds, words } = this.props;
    const wordList = wordIds.map(wordId => {
      const word = words[wordId];
      return <li key={word.id}>{word.text}</li>;
    });
    return wordList;
  }

  render() {
    const { wordText } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={wordText} onChange={this.handleChangeInput} />
          <input type="submit" />
        </form>
        <ul>{this.parseWordList()}</ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    wordIds: state.wordIds,
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: wordText => dispatch(addWord(wordText))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
