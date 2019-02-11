import React, { Component } from "react";
import { connect } from "react-redux";

import { updateKnowledge, removeKnowledge } from "../../../actions";

class Knowledge extends Component {
  constructor(props) {
    super(props);
    const { knowledge } = this.props;
    this.state = {
      isEditing: false,
      knowledgeUrl: knowledge.url,
      knowledgeUnderstanding: knowledge.understanding
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleClickEdit() {
    this.setState({ isEditing: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledge, updateKnowledge } = this.props;
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    if (knowledgeUrl === "" || knowledgeUnderstanding === "") return;

    updateKnowledge(knowledge.id, knowledgeUrl, knowledgeUnderstanding);
    this.setState({ isEditing: false });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { wordId, knowledge } = this.props;
    const { isEditing, knowledgeUrl, knowledgeUnderstanding } = this.state;
    const editKnowledgeForm = (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="knowledgeUrl" value={knowledgeUrl} onChange={this.handleChangeInput} />
        <input
          type="number"
          name="knowledgeUnderstanding"
          value={knowledgeUnderstanding}
          onChange={this.handleChangeInput}
        />
        <input type="submit" />
      </form>
    );
    const showKnowledge = (
      <>
        <a href={knowledge.url} target="_blank" rel="noopener noreferrer">
          {knowledge.url}
        </a>
        <span> 理解度: {knowledge.understanding}</span>
        <span onClick={this.handleClickEdit.bind(this)}> 編集</span>
        <span onClick={() => removeKnowledge(wordId, knowledge.id)}> x</span>
      </>
    );
    return <li>{isEditing ? editKnowledgeForm : showKnowledge}</li>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateKnowledge: (knowledgeId, url, understanding) => dispatch(updateKnowledge(knowledgeId, url, understanding)),
    removeKnowledge: (wordId, knowledgeId) => dispatch(removeKnowledge(wordId, knowledgeId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Knowledge);
