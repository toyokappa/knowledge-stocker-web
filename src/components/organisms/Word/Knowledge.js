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
        <KnowledgeSubmit value="更新" />
      </form>
    );
    const showKnowledge = (
      <>
        <KnowledgeLink href={knowledge.url} target="_blank" rel="noopener noreferrer">
          <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
          <KnowledgeRating
            emptySymbol="fa fa-star-o"
            fullSymbol="fa fa-star"
            fractions={2}
            initialRating={knowledge.understanding}
            readonly
          />
        </KnowledgeLink>
        <EditButtonWithMarginRight onClick={this.handleClickEdit.bind(this)} />
        <RemoveButton onClick={() => removeKnowledge(wordId, knowledge.id)} />
        <KnowledgeLink href={knowledge.url} target="_blank" rel="noopener noreferrer">
          <KnowledgeUrl>{knowledge.url}</KnowledgeUrl>
        </KnowledgeLink>
      </>
    );
    return <KnowledgeListItem>{isEditing ? editKnowledgeForm : showKnowledge}</KnowledgeListItem>;
  }
}

const KnowledgeListItem = styled(ListItem)`
  margin-bottom: 1.75rem;
`;

const KnowledgeLink = styled.a`
  text-decoration: none;
`;

const KnowledgeTitle = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  &:hover {
    text-decoration: underline;
  }
`;

const EditButtonWithMarginRight = styled(EditButton)`
  margin-right: 0.5rem;
`;

const KnowledgeUrl = styled.div`
  color: gold;
  font-size: 0.8rem;
`;

const KnowledgeUrlField = styled(UrlField)`
  font-size: 0.8rem;
  width: 30%;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeRating = styled(Rating)`
  color: gold;
  font-size: 0.8rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeSubmit = styled(Submit)`
  font-size: 0.8rem;
  vertical-align: middle;
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
