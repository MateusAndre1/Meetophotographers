import React from "react";
import API from "../../utils/API";
import { InputElement } from "../../components/InputElement";
import { InputElement2 } from "../../components/InputElement2";
import NewUploader from "../../components/NewUploader"
import ph from "../../150.jpg"

class Photographer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: "",
            profileImage: "",
            image: "",
            isProfile: false,
            imageId: 0,
            about: ""
        };
    }

    async componentDidMount() {
        this.loadUserData();
        this.loadProfileImage();
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

    loadProfileImage = () => {
        API.grabImage({})
            .then(res => {
                console.log(res.data);
                let result = res.data[0].binImage;
                let id = res.data[0].id;

                this.setState({
                    image: result,
                    imageId: id
                })

            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    deleteProfileHandler = () => {

        console.log("before destroy" + this.state.imageId);

        API.destroyProfileImage(
            this.state.imageId
        ).then((res) => {
            console.log(res);
            return res;
        }).then(() => {
            return window.location.href = "/members";
        })
    }
    handleFormSubmit = e => {
        e.preventDefault();
        API.saveGrapher({
            specialty: this.state.specialty,
            about: this.state.about
        })
            .then((res) => {
                console.log(res);
                return window.location.href = "/members";
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Profile Picture</h2>
                        {
                            this.state.image ? (
                                <div className="pos-f-t" style={{ width: "300px" }}>
                                    <img src={this.state.image} height="300px" width="300px" alt="logo" />
                                    <div className="collapse" id="navbarToggleExternalContent">
                                        <div className="bg-dark p-4">
                                            <button onClick={this.deleteProfileHandler} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                    <nav className="navbar navbar-dark bg-dark">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                    </nav>
                                </div>
                            ) : (
                                    <div>
                                        <img src={ph} height="300px" width="300px" className="App-logo" alt="logo" />
                                        <NewUploader />
                                    </div>
                                )
                        }
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <h2>What is your Specialty</h2>
                        <form>
                            <InputElement
                                value={this.state.specialty}
                                onChange={this.handleInputChange}
                                name="specialty"
                                placeholder="Wedding"
                                label="specialty"
                                type="text" />
                            <InputElement2
                                value={this.state.about}
                                onChange={this.handleInputChange}
                                name="about"
                                placeholder=""
                                label="About Section"
                                type="text" />
                                <div  className="text-right">
                            <button
                                onClick={this.handleFormSubmit}
                                className="btn btn-primary"
                                disabled={!(this.state.specialty)} type="reset">Add</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Photographer;