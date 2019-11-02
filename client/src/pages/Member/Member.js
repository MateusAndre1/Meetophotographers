import React, { Component } from "react";
import Photographer from "../Photographer";
import Customer from "../Customer";
import API from "../../utils/API";


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
        API.grabUser(this.state.firstName, this.state.userType).then((res) => {
            if (res.data.userType === "Customer") {
                this.setState({
                    isUser: true
                })
            }
            this.setState({
                firstName: res.data.firstName,
                userType: res.data.userType
            })
        })
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