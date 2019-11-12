import React from "react";
import API from "../../utils/API";
import VideoBg from "../../components/VideoBg"


class Home extends React.Component {
    state = {
        authenticated: false,
        email: "",
        password: ""
    };

    isAuthenticated(auth) {
        if (auth.status === 200) {
            console.log(auth.config.data);
            this.setState({
                authenticated: true
            });
            window.location.href = "/signup";
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
        console.log(this.state.email)
        if (this.state.password && this.state.email) {
            API.getUser({
                email: this.state.email,
                password: this.state.password,
            })
                .then(res => this.isAuthenticated(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <>
            <div className="home">
            <VideoBg />
            </div>
            </>
        )
    }
};
   

export default Home;