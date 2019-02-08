import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import WordList from "./components/pages/WordList";
import Word from "./components/pages/Word";

export default function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={WordList} />
        <Route exact path="/words/:wordId" component={Word} />
      </Switch>
    </ConnectedRouter>
  );
}
