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
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                firstName: result.firstName
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