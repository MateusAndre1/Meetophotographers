import React from "react";

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: ""
        };
    }

    async componentDidMount() {
        const response = await fetch("/api/user_data", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        this.setState({
            firstName: json.firstName
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