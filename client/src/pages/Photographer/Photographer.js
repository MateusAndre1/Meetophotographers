import React from "react";
import API from "../../utils/API";
import { InputElement } from "../../components/InputElement/InputElement";

class Photographer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: ""
        };
    }

    async componentDidMount() {
        const response = await fetch("/api/user_data");
        const json = await response.json();
        this.setState({
            firstName: json.firstName
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveGrapher({
            specialty: this.state.specialty
        })
            .then(() => { window.location.href = "/members"; })
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Photographer;