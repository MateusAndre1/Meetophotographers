import React, { Component } from "react";
import Photographer from "../Photographer";
import Customer from "../Customer";


class Member extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            userType: "",
            isUser: false
        };
    }


    componentDidMount() {
        fetch("/api/user_data")
            .then(res => {
                return res.json();
            }).then(data => {
                if (data.userType === "Customer") {
                    this.setState({
                        isUser: true
                    })
                }
                this.setState({
                    firstName: data.firstName,
                    userType: data.userType,
                })
            });

    }

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