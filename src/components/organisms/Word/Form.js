import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { NumberField, Submit, UrlField } from "../../atoms/Common";
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
        <KnowledgeUrlField name="url" placeholder="URL" value={url} onChange={this.handleChangeInput} />
        <KnolwedgeUnderstandingField
          name="understanding"
          placeholder="理解度"
          value={understanding}
          onChange={this.handleChangeInput}
        />
        <Submit />
      </form>
    );
  }
}

const KnowledgeUrlField = styled(UrlField)`
  border-right: none;
`;

const KnolwedgeUnderstandingField = styled(NumberField)`
  border-right: none;
`;

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
