import React from "react";

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: ""
        };
    }

    componentDidMount() {
        fetch("/api/user_data")
            .then(res => {
                return res.json();
            }).then(data => {
                
                this.setState({
                    firstName: data.firstName
                })
            });
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