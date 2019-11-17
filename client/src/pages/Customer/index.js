import React from "react";
import API from "../../utils/API";
import GraphersCard from "../../components/GraphersCard";

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: "",
            graphersProfile: [],
            graphersGallery: []
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
                let data = res.data;
                console.log(data[0].Images[0].isProfile);
                
                let galleryDisplay = [];
                let profileDisplay = [];
                this.setState({
                    graphersProfile: profileDisplay,
                    graphersGallery: galleryDisplay
                })
                for (let i = 0; i < data.length; i++) {
                    if (data[0][i].Images.isProfile === true) {
                        
                        let result = data[i].Images[i];
                        console.log(result);
                        profileDisplay.push(result)
                    } 
                }
                console.log(profileDisplay);
            })
            .catch(err => console.log(err));
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