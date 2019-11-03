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

    async componentDidMount() {
        const response = await fetch("/api/user_data");
        const json = await response.json();
        if (json.userType === "Customer") {
            this.setState({
                isUser: true
            })
        }
        this.setState({
            firstName: json.firstName,
            userType: json.userType
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