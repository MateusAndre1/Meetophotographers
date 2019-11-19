import React from "react";
import { Col, Row } from "../Grid";
import "./GraphersCard.css"

export default function GraphersCard(props) {

  return (
    <div className="graphers-body my-5">
      <h3 className="text-white">Grapher: {props.name}</h3>
      <Row>
        <Col size="md-4">
          <div className="">
            <img src={props.profileImg} className="img-fluid profilePic" alt="skills" />
          </div>
        </Col>
        <Col size="md-8">
          <h3>Specialty: {props.specialty} <img src="/assets/images/fivestar.png" className="stars" alt="stars" /></h3>
          <hr className="hr2" />
          <p className="aboutCardSection">{props.about}</p>
          <div className="email text-right mr-5">
          <a href={`mailto:${props.email}`}><i className="far fa-envelope emailSection"></i></a>
          </div>
        </Col>
      </Row>
      <hr className="hr2" />
      <div className="mt-5">
        <Row>
          {props.children}
        </Row>
      </div>
    </div>
  );
}
