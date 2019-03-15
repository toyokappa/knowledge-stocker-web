import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItem } from "../../atoms/Common";
import { EditKnowledgeForm, ShowKnowledge } from "../../molecules/Word";
import { updateWordKnowledges, destroyWordKnowledges } from "../../../actions";

class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      url: "",
      understanding: null
    };
  }

  handleClickEdit() {
    const { knowledge } = this.props;
    this.setState({ isEditing: true, url: knowledge.url, understanding: knowledge.understanding });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { knowledge, updateWordKnowledges } = this.props;
    const { url, understanding } = this.state;
    if (url === "" || understanding === null) return;

    updateWordKnowledges(knowledge.id, url, understanding);
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
    const { knowledge, destroyWordKnowledges } = this.props;
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
        removeKnowledge={() => destroyWordKnowledges(knowledge.id)}
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
    updateWordKnowledges: (knowledgeId, url, understanding) =>
      dispatch(updateWordKnowledges(knowledgeId, url, understanding)),
    destroyWordKnowledges: knowledgeId => dispatch(destroyWordKnowledges(knowledgeId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Knowledge);
