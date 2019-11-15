import React, { Component } from "react";
import API from "../../utils/API";
import { InputElement } from "../../components/InputElement";
import { InputElement2 } from "../../components/InputElement2";
import Uploader from "../../components/Uploader";
import { Col, Row, Container } from "../../components/Grid";
import GalaryDisplay from "../../components/GalaryDisplay";
import ProfileImage from "../../components/ProfileImage";
import ProfileImageHldr from "../../components/ProfileImageHldr";
import AboutSection from "../../components/AboutSection";

class Photographer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            specialty: "",
            profileImage: "",
            image: "",
            isProfile: false,
            imageId: 0,
            about: "",
            galarys: []
        };


    }


    async componentDidMount() {
        this.loadUserData();
        this.loadImage();
        this.loadGrapher();
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

    loadImage = () => {
        API.grabImage({})
            .then(res => {
                // console.log(res.data);
                let data = res.data;
                let newGalarys = [];
                this.setState({
                    galarys: newGalarys
                })
                for (let i = 0; i < data.length; i++) {
                    if (data[i].isProfile === true) {
                        // console.log(data[i].id);
                        let result = data[i].binImage;
                        let id = data[i].id;
                        this.setState({
                            image: result,
                            imageId: id
                        })
                    } else {
                        let result2 = data[i]
                        newGalarys.push(result2)
                    }
                }
                // console.log(newGalarys);
            })
            .catch(err => console.log(err));
    };

    loadGrapher = () => {
        API.grabGrapher({})
            .then(res => {
                console.log(res.data);
                let data = res.data;
                this.setState({
                    grapherSpecialty: data[0].specialty,
                    grapherAbout: data[0].about,
                    grapherId: data[0].userId
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

    deleteProfileImage = () => {

        console.log("before destroy" + this.state.imageId);

        API.destroyProfileImage(
            this.state.imageId
        ).then((res) => {
            console.log(res);
            return res;
        }).then(() => {
            window.location.reload();
        })
    }

    deleteGalaryImage = (id) => {

        console.log("before destroy" + id);

        API.destroyProfileImage(
            id
        ).then((res) => {
            console.log(res);
            return res;
        }).then(() => {
            window.location.reload();
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
                return window.location.reload();
            })
            .catch(err => console.log(err));
    };

    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <h2>Profile Picture</h2>
                        {
                            this.state.image ? (
                                <ProfileImage src={this.state.image} onClick={this.deleteProfileImage} />
                            ) : (
                                    <ProfileImageHldr />
                                )
                        }
                    </Col>
                    {
                        this.state.grapherSpecialty ? (
                            <AboutSection />
                        ) : (
                                <Col size="md-6">
                                    <h2>What is your Specialty</h2>
                                    <form>
                                        <InputElement
                                            value={this.state.specialty}
                                            onChange={this.handleInputChange}
                                            name="specialty"
                                            placeholder="Wedding"
                                            label="Specialty"
                                            type="text" />
                                        <InputElement2
                                            value={this.state.about}
                                            onChange={this.handleInputChange}
                                            name="about"
                                            placeholder="Tell us about yourself, you can include any other sub specialties here as well."
                                            label="About Section"
                                            type="text" />
                                        <button
                                            onClick={this.handleFormSubmit}
                                            className="btn btn-primary"
                                            disabled={!(this.state.specialty && this.state.about)} type="reset">Add</button>
                                    </form>
                                </Col>
                            )
                    }

                </Row>
                <div className="mt-5">
                    <h2>Upload photos to gallery</h2>
                    <Uploader isProfile="false" />
                    <div>
                        <Row>
                            {this.state.galarys.map(galary => {
                                return <GalaryDisplay
                                    deleteGalaryImage={this.deleteGalaryImage}
                                    id={galary.id}
                                    value={galary.id}
                                    key={galary.id}
                                    img={galary.binImage}
                                />
                            })}
                        </Row>
                    </div>
                </div>
            </Container >
        )
    }
}

export default Photographer;