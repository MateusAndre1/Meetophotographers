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
    <>
    <li><Link to="/login"><span className="color">Login Here</span></Link></li>
    <li><Link to="/signup"><span className="color">SignUp Here</span></Link></li>
    </>
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
                  <li><Link to="/"><span className="mgheader">Meetographers</span></Link></li>
                  <li><Link to="/members"><span className="color ml-4">Members</span></Link></li>
                </div>
              ) : (
                  <div>
                    <li><Link to="/"><span className="mgheader">Meetographers</span></Link></li>
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