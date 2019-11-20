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
            }).catch(err => {
                if (err) throw err
            });
    }
    render() {
        return (
            <div className="customer">
                <div className="container mt-5">
                    <div className="welcome text-center">Welcome to Meetographers, {this.state.firstName}.</div>
                    {this.state.graphersTotal.map(profile => {
                        return <GraphersCard
                            key={profile.id}
                            name={`${profile.firstName} ${profile.lastName}`}
                            specialty={profile.specialty}
                            about={profile.about}
                            email={profile.email}
                            profileImg={profile.Images.filter(pic => {
                                return pic.isProfile
                            }).map(pic => {
                                return pic.binImage
                            })}>
                            {profile.Images.filter(gallery => {
                                return !gallery.isProfile
                            }).map(gallery => {
                                return <GraphersCardGallery
                                        key={gallery.id}
                                        galleryImg={gallery.binImage}
                                    />
                            })}
                        </GraphersCard>
                    })}
                </div>
            </div>
        )
    }
}

export default Customer;