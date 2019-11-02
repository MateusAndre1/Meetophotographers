import React, { Component } from "react";
import { InputElement } from "../../components/InputElement/InputElement";
import { DropdownInput } from "../../components/DropdownInput/DropdownInput";
import API from "../../utils/API";

class Signup extends Component {
    state = {
        authenticated: false,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userType: ""
    };

    componentDidMount() {
        this.isAuthenticated({})
    }

    isAuthenticated(auth) {
        if (auth.status === 200) {
            sessionStorage.setItem('token', auth.config.data);
            window.location.href = "/members";
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password && this.state.email) {
            API.saveUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userType: this.state.userType
            })
                .then(res => this.isAuthenticated(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>SignUp Form</h2>

                        <form className="login">
                            <InputElement
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="Enter your First Name"
                                label="First Name"
                                type="text" />
                            <InputElement
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Enter Your Last Name"
                                label="Last Name"
                                type="text" />
                            <InputElement
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                                label="Email Address"
                                type="email" />
                            <InputElement
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Enter Password"
                                label="Password"
                                type="password" />
                            <DropdownInput
                                value={this.state.userType}
                                onChange={this.handleInputChange}
                                name="userType"
                                placeholder="User or Photographer"
                                label="User or Photographer"
                                type="text" />
                            <button
                                onClick={this.handleFormSubmit}
                                className="btn btn-primary"
                                disabled={!(this.state.email && this.state.password && this.state.firstName && this.state.lastName && this.state.userType)}>Sign Up</button>
                        </form>

                        <br />
                        <p>Or Login <a href="/">here</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;