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

  render() {
    const { wordText } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={wordText} onChange={this.handleChangeInput} />
          <input type="submit" />
        </form>
        <ul>
          <li>aaa</li>
        </ul>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: wordText => dispatch(addWord(wordText))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
