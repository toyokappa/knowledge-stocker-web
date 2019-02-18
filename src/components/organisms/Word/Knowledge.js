import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem } from "../../atoms/Common";
import { EditKnowledgeForm, ShowKnowledge } from "../../molecules/Word";
import { updateKnowledge, removeKnowledge } from "../../../actions";

class Knowledge extends Component {
  constructor(props) {
    super(props);
    const { knowledge } = this.props;
    this.state = {
      isEditing: false,
      url: knowledge.url,
      understanding: knowledge.understanding
    };
  }

  handleClickEdit() {
    this.setState({ isEditing: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledge, updateKnowledge } = this.props;
    const { url, understanding } = this.state;
    if (url === "" || understanding === null) return;

    updateKnowledge(knowledge.id, url, understanding);
    this.setState({ isEditing: false });
  }

  handleChangeInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleChangeRating(value) {
    this.setState({ understanding: value });
  }

  render() {
    const { wordId, knowledge, removeKnowledge } = this.props;
    const { isEditing, url, understanding } = this.state;
    const editKnowledgeForm = (
      <EditKnowledgeForm
        url={url}
        understanding={understanding}
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChangeInput.bind(this)}
        onClick={this.handleChangeRating.bind(this)}
      />
    );
    const showKnowledge = (
      <ShowKnowledge
        knowledge={knowledge}
        showEditForm={this.handleClickEdit.bind(this)}
        removeKnowledge={() => removeKnowledge(wordId, knowledge.id)}
      />
    );
    return <KnowledgeListItem>{isEditing ? editKnowledgeForm : showKnowledge}</KnowledgeListItem>;
  }
}

const KnowledgeListItem = styled(ListItem)`
  margin-bottom: 1.75rem;
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
