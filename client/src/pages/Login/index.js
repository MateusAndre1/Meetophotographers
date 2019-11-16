import React from "react";
import { InputElement } from "../../components/InputElement";
import API from "../../utils/API";
import "./login.css"


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            email: "",
            password: ""
        };
    }


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
            API.getUser({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => this.isAuthenticated(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="login2">
                <div className="container text-center loginForm">
                            <form className="login">
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
                                <button
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-primary"
                                    disabled={!(this.state.email && this.state.password)}>Login</button>
                            </form>
                </div>
            </div>
        )
    }
}

export default Login;