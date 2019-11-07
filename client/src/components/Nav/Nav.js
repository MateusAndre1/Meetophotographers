import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import Auth from "../../utils/auth.js";
import "./Nav.css"

const AuthButton = withRouter(({ history }) => (
  Auth.isUserAuthenticated() ? (
    <p>
      <button onClick={() => {
        Auth.deauthenticateUser(() => history.push('/')); window.location.href = "/";
      }} className="btn btn-danger">Sign out</button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    )
));

export default class Nav extends Component {
  state = {
    authenticated: false
  }

  componentDidMount() {
    this.setState({ authenticated: Auth.isUserAuthenticated() }, function () {
      console.log(this.state.authenticated)
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default aqua-gradient">
        <div className="container-fluid">
          <div className="col-md-4">
            <ul>
              {this.state.authenticated ? (
                <div>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/members">Members Content</Link></li>
                </div>
              ) : (
                  <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login Here</Link></li>
                    <li><Link to="/signup">SignUp Here</Link></li>
                    <li><Link to="/members">Members Content</Link></li>
                  </div>
                )}
            </ul>
          </div>
          <div className="col-md-4 text-right">
            <AuthButton />
          </div>
        </div>
      </nav>
    )
  }
}
