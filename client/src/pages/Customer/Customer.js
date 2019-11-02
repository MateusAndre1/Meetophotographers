import React from "react";
import API from "../../utils/API";

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: ""
        };
    }

    componentDidMount() {
        API.grabUser(this.state.firstName).then((res) => {
            this.setState({
                firstName: res.data.firstName
            })
        })
    }

    render() {
        return (
            <div className="container">
                Welcome to the Customer page {this.state.firstName}
            </div>
        )
    }
}

export default Customer;