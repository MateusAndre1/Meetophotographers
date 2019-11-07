import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Auth from "./utils/auth.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
      <div>
        <div className="App">
          
          <Nav />
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path='/signup' component={Signup} exact />
              <ProtectedRoute path='/members' component={Member} exact />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </div>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
