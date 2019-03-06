import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route {...rest} render={props => (auth.isSignedIn ? <Component {...props} /> : <Redirect to="/sign_in" />)} />
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
