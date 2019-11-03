import React, { Component } from "react";
import Photographer from "../Photographer";
import Customer from "../Customer";


class Member extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            firstName: "",
            userType: "",
            isUser: false
        };
    }

    componentDidMount() {
        fetch("/api/user_data")
        .then(res => res.json())
        .then((result) => {
            if (result.userType === "Customer") {
                this.setState({
                    isUser: true
                })
            }
            this.setState({
                isLoaded: true,
                firstName: result.firstName,
                userType: result.userType
            })
        })
    };

    render() {
        return (
            <div className="container">
                {this.state.isUser ? (
                    <Customer />
                ) : (
                        <Photographer />
                    )}
            </div>
        )
    }
}

export default Member;