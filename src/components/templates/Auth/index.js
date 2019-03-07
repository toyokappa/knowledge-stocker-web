import { Component } from "react";
import { connect } from "react-redux";

import { authenticate } from "../../../actions";

class Auth extends Component {
  componentWillMount() {
    this.checkAuth();
  }

  componentWillUpdate() {
    this.checkAuth();
  }

  checkAuth() {
    const { authenticate } = this.props;
    const authToken = localStorage.getItem("authToken");
    authenticate(authToken);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: authToken => dispatch(authenticate(authToken))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Auth);
