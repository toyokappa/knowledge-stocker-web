import React, { Component } from "react";
import Rating from "react-rating";
import styled from "styled-components";
import { connect } from "react-redux";

import { EditButton, ListItem, RemoveButton, Submit, UrlField } from "../../atoms/Common";
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
  }

  handleClickEdit() {
    this.setState({ isEditing: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledge, updateKnowledge } = this.props;
    const { knowledgeUrl, knowledgeUnderstanding } = this.state;
    if (knowledgeUrl === "" || knowledgeUnderstanding === null) return;

    updateKnowledge(knowledge.id, knowledgeUrl, knowledgeUnderstanding);
    this.setState({ isEditing: false });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleChangeRating(value) {
    this.setState({ knowledgeUnderstanding: value });
  }

  render() {
    const { wordId, knowledge, removeKnowledge } = this.props;
    const { isEditing, knowledgeUrl, knowledgeUnderstanding } = this.state;
    const editKnowledgeForm = (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <KnowledgeUrlField
          name="knowledgeUrl"
          placeholder="URL"
          value={knowledgeUrl}
          onChange={this.handleChangeInput.bind(this)}
        />
        <KnowledgeRating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
          initialRating={knowledgeUnderstanding}
          onClick={this.handleChangeRating.bind(this)}
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
  margin-right: 0.5rem;
`;

const KnowledgeRating = styled(Rating)`
  color: gold;
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.5rem;
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
