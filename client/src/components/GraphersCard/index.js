import React from "react";
import { Col, Row } from "../Grid";
import "./GraphersCard.css"

export default function GraphersCard(props) {

  return (
    <div className="graphers-body">
      <h3 className="text-white">Grapher: {props.name}</h3>
      <Row>
        <Col size="md-4">
          <div className="">
            <img src={props.profileImg} className="img-fluid galary" alt="skills" />
          </div>
        </Col>
        <Col size="md-8">
          <h3>Specialty: {props.specialty}</h3>
          <hr className="hr2" />
          <p>{props.about}</p>
        </Col>
      </Row>
      <div className="mt-5">
        <Row>
          <Col size="md-4">
            <div>
              <img src={props.galleryImg} className="img-fluid galary" alt="skills" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
