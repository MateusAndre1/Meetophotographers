import React from "react";
import API from "../../utils/API";
import GraphersCard from "../../components/GraphersCard";

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: ""
        };
    }

    async componentDidMount() {
        API.grabUser()
        .then(res => {
            this.setState({
                firstName: res.data.firstName
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container">
                Welcome to the Customer page {this.state.firstName}
                <GraphersCard />
            </div>
        )
    }
}

export default Customer;