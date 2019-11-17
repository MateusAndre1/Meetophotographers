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
            graphersGallery: [],
            graphersTotal: []
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
                // console.log(data);

                let totalDisplay = [];
                totalDisplay.push(data)
                // console.log(totalDisplay);
                
                let galleryDisplay = [];
                let profileDisplay = [];
                this.setState({
                    graphersProfile: profileDisplay,
                    graphersGallery: galleryDisplay,
                    graphersTotal: totalDisplay
                })
                for (let i = 0; i < totalDisplay.length; i++) {
                    // console.log(totalDisplay[i]);
                    
                    let childArray = totalDisplay[i]
                    for (let j = 0; j < childArray.length; j++) {
                        // console.log(childArray[j]);
                        let newChild = childArray[j].Images
                        for (let l = 0; l < newChild.length; l++) {
                            console.log(newChild[l]);
                            if (newChild[l].isProfile === false) {
                                let res = newChild[l];
                                galleryDisplay.push(res)
                            }
                        }
                        if (childArray[j].Images[i].isProfile) {
                            let result2 = childArray[j].Images[i];
                            profileDisplay.push(result2);
                        }
                        
                    }
                    
                    
                }

                console.log(profileDisplay);
                console.log(galleryDisplay);
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