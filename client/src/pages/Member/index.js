import React, { Component } from "react";
import Photographer from "../Photographer";
import Customer from "../Customer";
import API from "../../utils/API";
import "./Member.css"

class Member extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            userType: "",
            isUser: false
        };
    }

    async componentDidMount() {
        API.grabUser()
        .then(res => {
            // console.log(res);
            if(res.data.userType === "Customer"){
                this.setState({
                    isUser: true
                })
            }
            this.setState({
                firstName: res.data.firstName
            })
        })
        .catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <>
            <div className="member">
            <div className="container">
                {this.state.isUser ? (
                    <Customer />
                ) : (
                        <Photographer />
                    )}
            </div>
            </div>
            </>
        )
    }
}

export default Member;