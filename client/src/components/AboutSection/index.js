import React, { Component } from "react";
import { Col } from "../Grid";
import API from "../../utils/API"
import { InputElement2 } from "../InputElement2";
import { DropdownInputSpecialty } from "../DropdownInput";
import "./AboutSection.css";

export default class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      grapherSpecialty: "",
      grapherAbout: "",
      grapherId: "",
      specialty: "",
      about: "",
      isReady: ""
    }
  }

  async componentDidMount() {
    this.loadGrapher();
  }

  updateGrapher = e => {
    e.preventDefault();
    API.updateGrapher({
      specialty: this.state.specialty,
      about: this.state.about
    })
      .then((res) => {
        // console.log(res);
        return window.location.reload();
      })
      .catch(err => console.log(err));
  }

  loadGrapher = () => {
    API.grabGrapher({})
      .then(res => {
        // console.log(res.data);
        let data = res.data;
        this.setState({
          grapherSpecialty: data[0].specialty,
          grapherAbout: data[0].about,
          grapherId: data[0].UserId,
          isReady: data[0].isReady
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

  editAbout = e => {
    e.preventDefault();
    this.setState({
      isEdit: false
    })
  }

  editAboutBack = e => {
    e.preventDefault();
    this.setState({
      isEdit: true
    })
  }

  readyDeploy = e => {
    e.preventDefault();
    API.updateGrapher({
      isReady: true
    })
      .then((res) => {
        console.log(res);
        return window.location.reload();
      })
      .catch(err => console.log(err));
  }

  dontDeploy = e => {
    e.preventDefault();
    API.updateGrapher({
      isReady: false
    })
      .then((res) => {
        console.log(res);
        return window.location.reload();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.isEdit ? (

          <Col size="md-8">
            <div className="wrapper">
              <h2 className="mb-4 specialtySection">Specialty: {this.state.grapherSpecialty}</h2>
              <hr className="hr2" />
              <h5 className="aboutSection">{this.state.grapherAbout}</h5>
              <div className="text-right mt-4">
                <button className="btn-small btn-danger edit" onClick={this.editAbout}>Edit</button>
              </div>
            </div>
            {this.state.isReady ? (
              <div className="wrapper2 text-center">
                <p className="mb-1 about-ready">Would you like to deactive your profile from being viewed?</p>
                <div className="text-center">
                  <button className="btn-small btn-danger edit" onClick={this.dontDeploy}>Yes</button>
                </div>
              </div>
            ) : (
                <div className="wrapper2 text-center">
                  <Col size="sm-12">
                    <p className="mb-1 about-ready">If you are ready with your profile, go ahead and deploy it here</p>
                    <p className="mb-1 about-ready">(don't forget to add some photos if you haven't done so yet!)</p>
                  </Col>
                  <div className="text-center">
                    <button className="btn-small btn-success edit" onClick={this.readyDeploy}>Deploy!</button>
                  </div>
                </div>
              )
            }

          </Col>

        ) : (
          
            <Col size="md-8">
              <h2>Describe yourself</h2>
              <form className="formEdit">
                <DropdownInputSpecialty
                  value={this.state.specialty}
                  onChange={this.handleInputChange}
                  name="specialty"
                  placeholder="Choose"
                  label="Specialty"
                  type="text" />
                <InputElement2
                  value={this.state.about}
                  onChange={this.handleInputChange}
                  name="about"
                  placeholder="Tell us about yourself, you can include any other sub specialties here as well."
                  label="About"
                  type="text" />
                <div className="text-right mt-4">
                  <button
                    onClick={this.editAboutBack}
                    className="btn-small mr-3 btn-danger edit"
                    type="reset">Cancel</button>
                  <button
                    onClick={this.updateGrapher}
                    className="btn-small btn-success edit"
                    disabled={!(this.state.specialty && this.state.about)} type="reset">Save</button>
                </div>
              </form>
            </Col>
          )

        }
      </>
    );
  }
}
