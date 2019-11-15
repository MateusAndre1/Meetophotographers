import React, { Component } from "react";
import { Col } from "../Grid";
import API from "../../utils/API"
import { InputElement } from "../InputElement";
import { InputElement2 } from "../InputElement2";
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
      about: ""
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
        console.log(res);
        return window.location.reload();
      })
      .catch(err => console.log(err));
  }

  loadGrapher = () => {
    API.grabGrapher({})
      .then(res => {
        console.log(res.data);
        let data = res.data;
        this.setState({
          grapherSpecialty: data[0].specialty,
          grapherAbout: data[0].about,
          grapherId: data[0].UserId
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

  render() {
    return (
      <>
        {this.state.isEdit ? (
          <Col size="md-6">
            <h2 className="mb-4">Specialty: {this.state.grapherSpecialty}</h2>
            <h4>{this.state.grapherAbout}</h4>
            <div className="text-right mt-4">
              <button className="btn-small btn-danger edit" onClick={this.editAbout}>Edit</button>
            </div>
          </Col>
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
                  onClick={this.updateGrapher}
                  className="btn btn-success"
                  disabled={!(this.state.specialty && this.state.about)} type="reset">Save</button>
              </form>
            </Col>
          )

        }
      </>
    );
  }
}
