import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import Auth from "../../utils/auth.js";
import "./Nav.css"

const AuthButton = withRouter(({ history }) => (
  Auth.isUserAuthenticated() ? (
    <>
      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-camera camera"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/book">All Profiles</a>
          <button onClick={() => {
            Auth.deauthenticateUser(() => history.push('/')); window.location.href = "/";
          }} className="btn ml-3 mt-3">Sign out</button>
        </div>
      </div>
    </>
  ) : (
      <>
        <li><Link to="/login"><span className="color mr-4">Login</span></Link></li>
        <li><Link to="/signup"><span className="color">SignUp</span></Link></li>
      </>
    )
));

export default class Nav extends Component {
  state = {
    authenticated: false
  }

  componentDidMount() {
    this.setState({ authenticated: Auth.isUserAuthenticated() }, function () {
      // console.log(this.state.authenticated)
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