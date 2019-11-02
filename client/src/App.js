import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, withRouter, Link, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Member from "./pages/Member";
import User from "./pages/User";
import Photographer from "./pages/Photographer";
import Auth from "./utils/auth.js";

import "./App.css"


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isUserAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

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

class App extends Component {

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
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-default">
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
          <div>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path='/signup' component={Signup} />
            <ProtectedRoute path='/members' component={Member} />
            <ProtectedRoute path='/user' component={User} />
            <ProtectedRoute path='/photographer' component={Photographer} />
            <Route render={() => <Redirect to="/"/>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
