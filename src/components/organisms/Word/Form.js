import React, { Component } from "react";
import Rating from "react-rating";
import styled from "styled-components";
import { connect } from "react-redux";

import { Submit, UrlField } from "../../atoms/Common";
import { createKnowledge } from "../../../actions";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      understanding: null
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { url, understanding } = this.state;
    if (url === "" || understanding === null) return;

    const { wordId, createKnowledge } = this.props;
    createKnowledge(wordId, url, understanding);
    this.setState({ url: "", understanding: null });
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
    const { url, understanding } = this.state;

    return (
      <KnowledgeForm onSubmit={this.handleSubmit.bind(this)}>
        <KnowledgeUrlField name="url" placeholder="URL" value={url} onChange={this.handleChangeInput.bind(this)} />
        <KnowledgeRating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
          initialRating={understanding}
          onClick={this.handleChangeRating.bind(this)}
        />
        <KnowledgeSubmit value="追加" />
      </KnowledgeForm>
    );
  }
}

const KnowledgeForm = styled.form`
  padding-bottom: 1rem;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 2rem;
`;

const KnowledgeUrlField = styled(UrlField)`
  width: 50%;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeRating = styled(Rating)`
  color: gold;
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const KnowledgeSubmit = styled(Submit)`
  vertical-align: middle;
`;

function mapDispatchToProps(dispatch) {
  return {
    createKnowledge: (wordId, url, understanding) => dispatch(createKnowledge(wordId, url, understanding))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
