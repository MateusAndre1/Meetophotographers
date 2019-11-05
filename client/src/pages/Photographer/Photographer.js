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
            profileImage: "",
            image: ""
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
            this.loadImage();
    }
    loadImage = () => {
        API.grabImage({})
          .then(res =>{
              console.log(res.data[0].binImage);
              
              this.setState({
              image: res.data[0].binImage
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
                        <form action="/api/images" method="post" encType="multipart/form-data">
                        <Uploader />
                        </form>
                    </div>
                </div>
                <div><img src="../../../assets/images/2019-11-05T16:22:31.916Z178663.jpg" width="300px" height="300px" alt="profilepic"/></div>
            </div>
        )
    }
}

export default Photographer;