import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { EditButton, ListItem, NumberField, RemoveButton, Submit, UrlField } from "../../atoms/Common";
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
        <KnowledgeUrlField
          name="knowledgeUrl"
          placeholder="URL"
          value={knowledgeUrl}
          onChange={this.handleChangeInput}
        />
        <KnolwedgeUnderstandingField
          name="knowledgeUnderstanding"
          placeholder="理解度"
          value={knowledgeUnderstanding}
          onChange={this.handleChangeInput}
        />
        <Submit />
      </form>
    );
    const showKnowledge = (
      <>
        <KnowledgeLink href={knowledge.url} target="_blank" rel="noopener noreferrer">
          {knowledge.url}
        </KnowledgeLink>
        <KnowledgeUnderstanding>理解度: {knowledge.understanding}</KnowledgeUnderstanding>
        <EditButtonWithMarginRight onClick={this.handleClickEdit.bind(this)} />
        <RemoveButton onClick={() => removeKnowledge(wordId, knowledge.id)} />
      </>
    );
    return <ListItem>{isEditing ? editKnowledgeForm : showKnowledge}</ListItem>;
  }
}

const KnowledgeLink = styled.a`
  margin-right: 0.5rem;
`;

const KnowledgeUnderstanding = styled.span`
  margin-right: 0.5rem;
`;

const EditButtonWithMarginRight = styled(EditButton)`
  margin-right: 0.5rem;
`;

const KnowledgeUrlField = styled(UrlField)`
  border-right: none;
`;

const KnolwedgeUnderstandingField = styled(NumberField)`
  border-right: none;
`;

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
