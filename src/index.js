import React from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import configureStore from "./configureStore";
import Router from "./Router";
import { BaseStyles } from "./constants/styles";
import "./vendor/FontAwesome";
import "font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

render(
  <>
    <BaseStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router history={history} />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
