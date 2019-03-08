import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function UnauthRoute({ component: Component, auth, ...rest }) {
  return <Route {...rest} render={props => (auth.isSignedIn ? <Redirect to="/" /> : <Component {...props} />)} />;
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(UnauthRoute);
