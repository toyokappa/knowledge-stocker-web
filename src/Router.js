import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./lib/PrivateRoute";
import UnauthRoute from "./lib/UnauthRoute";
import { ConnectedRouter } from "connected-react-router";

import Auth from "./components/templates/Auth";
import WordList from "./components/pages/WordList";
import Word from "./components/pages/Word";
import Achievement from "./components/pages/Achievement";
import Ranking from "./components/pages/Ranking";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

export default function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Auth>
        <Switch>
          <PrivateRoute exact path="/" component={WordList} />
          <PrivateRoute exact path="/words/:wordId" component={Word} />
          <PrivateRoute exact path="/achievement" component={Achievement} />
          <PrivateRoute exact path="/ranking" component={Ranking} />
          <UnauthRoute exact path="/sign_up" component={SignUp} />
          <UnauthRoute exact path="/sign_in" component={SignIn} />
        </Switch>
      </Auth>
    </ConnectedRouter>
  );
}
