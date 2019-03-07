import React from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { render } from "react-dom";

import configureStore from "./configureStore";
import Router from "./Router";
import { BaseStyles } from "./constants/styles";
import "./vendor/FontAwesome";
import "font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const { store } = configureStore(history);

render(
  <>
    <BaseStyles />
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
