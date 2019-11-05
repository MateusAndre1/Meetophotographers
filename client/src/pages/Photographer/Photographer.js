import React from "react";
import API from "../../utils/API";
import { InputElement } from "../../components/InputElement/InputElement";
import Uploader from "../../components/Uploader"

class Photographer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: "",
            profileImage: ""
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
    }


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

                        <form action="/api/photographers" method="post" encType="multipart/form-data">
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
                       
                        <Uploader />
                       
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Photographer;