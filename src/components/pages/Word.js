import React from "react";
import { lifecycle } from "recompose";
import { connect } from "react-redux";

import BaseLayout from "../templates/BaseLayout";
import WordText from "../organisms/Word/WordText";
import Form from "../organisms/Word/Form";
import KnowledgeList from "../organisms/Word/KnowledgeList";
import { fetchWord } from "../../actions";

function Word(props) {
  const { word } = props;

  return (
    <BaseLayout>
      <WordText word={word} />
      <Form word={word} />
      <KnowledgeList knowledges={word.knowledges} />
    </BaseLayout>
  );
}

const enhancedWord = lifecycle({
  componentWillMount() {
    const { match, fetchWord } = this.props;
    const { wordId } = match.params;
    fetchWord(wordId);
  }
})(Word);

function mapStateToProps(state) {
  return {
    word: state.word
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWord: wordId => dispatch(fetchWord(wordId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhancedWord);
