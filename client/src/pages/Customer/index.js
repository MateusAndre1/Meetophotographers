import React from "react";
import API from "../../utils/API";
import GraphersCard from "../../components/GraphersCard";
import GraphersCardGallery from "../../components/GraphersCardGallery";

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
                // console.log(res);
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
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i]);
                    if (data[i].isReady) {
                        // console.log(data[i]);
                        let ready = data[i];
                        totalDisplay.push(ready)
                    }
                }
                this.setState({
                    graphersTotal: totalDisplay
                })
                console.log(totalDisplay);
                return totalDisplay;
            }).then(res => {
                // console.log(res);

                let galleryDisplay = [];
                let profileDisplay = [];


                for (let i = 0; i < res.length; i++) {
                    // console.log(res[i].Images);
                    let childArray = res[i].Images;

                    for (let j = 0; j < childArray.length; j++) {
                        // console.log(childArray[j]);
                        if (childArray[j].isProfile) {
                            let profileRes = childArray[j];
                            profileDisplay.push(profileRes)
                        } else {
                            let galleryRes = childArray[j];
                            galleryDisplay.push(galleryRes)
                        }
                    }
                }
                this.setState({
                    graphersProfile: profileDisplay
                })
                console.log(profileDisplay);
                console.log(galleryDisplay);
            })
            .catch(err => {
                if (err) throw err
            });


    }
    render() {
        return (
            <div className="customer">
                <div className="container mt-5">
                    Welcome to the Customer page {this.state.firstName}
                    {this.state.graphersTotal.map(profile => {
                        return <GraphersCard
                            key={profile.id}
                            name={`${profile.firstName} ${profile.lastName}`}
                            specialty={profile.specialty}
                            about={profile.about}
                            profileImg={profile.Images.map(pic => {
                                if (pic.isProfile) {
                                    return pic.binImage
                                }
                            })}>
                            {profile.Images.map(gallery => {
                                if (!gallery.isProfile) {
                                    return <GraphersCardGallery
                                        galleryImg={gallery.binImage}
                                    />
                                }
                            })}
                        </GraphersCard>
                    })}
                </div>
            </div>
        )
    }
}

export default Customer;