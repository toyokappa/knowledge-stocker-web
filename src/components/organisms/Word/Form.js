import React, { Component } from "react";
import { connect } from "react-redux";

import { addKnowledge } from "../../../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      url: "",
      understanding: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { url, understanding } = this.state;
    if (url === "" || understanding === "") return;

    const { wordId, addKnowldge } = this.props;
    addKnowldge(wordId, url, understanding);
    this.setState({ url: "", understanding: "" });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { url, understanding } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="url" value={url} onChange={this.handleChangeInput} />
        <input type="number" name="understanding" value={understanding} onChange={this.handleChangeInput} />
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
    addKnowldge: (wordId, url, understanding) => dispatch(addKnowledge(wordId, url, understanding))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
