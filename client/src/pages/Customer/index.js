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
        this.loadUserData();
        this.loadGraphers();
    }

    loadUserData = () => {
        API.grabUser()
            .then(res => {
                console.log(res);
                this.setState({
                    firstName: res.data.firstName
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    loadGraphers = () => {
        API.graphersCall({})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
                
            })
    }
    render() {
        return (
            <div className="customer">
                <div className="container mt-5">
                    Welcome to the Customer page {this.state.firstName}
                    <GraphersCard />
                </div>
            </div>
        )
    }
}

export default Customer;