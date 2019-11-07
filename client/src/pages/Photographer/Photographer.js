import React from "react";
import API from "../../utils/API";
import { InputElement } from "../../components/InputElement/InputElement";
import NewUploader from "../../components/NewUploader"
// import ph from "../../150.png"

class Photographer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: "",
            profileImage: "",
            image: "",
            isProfile: false
        };
    }

    async componentDidMount() {
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
        this.loadProfileImage();
    }

    loadProfileImage = () => {
        API.grabImage({})
            .then(res => {
                console.log(res.data);
                let result = res.data[0].binImage;
                
                    this.setState({
                        image: result
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


    handleFormSubmit = e => {
        e.preventDefault();
        API.saveGrapher({
            specialty: this.state.specialty
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
                I am a GRAPHER {this.state.firstName}
                <div className="row">
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
                            <button
                                onClick={this.handleFormSubmit}
                                className="btn btn-primary"
                                disabled={!(this.state.specialty)} type="reset">Add</button>
                        </form>

                        <NewUploader />
                        {/* {
                            this.state.image ? (
                                <img src={this.state.image} height="300px" width="300px" alt="logo" />
                            ) : (
                                    <img src={ph} className="App-logo" alt="logo" />
                                )
                        } */}
                        <img src="firebasestorage.googleapis.com/v0/b/meetographers-3edf6.appspot.com/o/images%2F106490.jpg?alt=media&token=f3f73526-bcd1-45d9-86d7-31130fa0e88a" height="300px" width="300px" alt="logo" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Photographer;