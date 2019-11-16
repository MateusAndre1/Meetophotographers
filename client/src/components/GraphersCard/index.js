import React from "react";
import { Col, Row } from "../Grid";
import "./GraphersCard.css"

export default function GraphersCard(props) {

  return (
    <div className="graphers-body">
      <Row>
        <Col size="md-4">
          <div className="">
            <img src="assets/images/150.jpg" className="img-fluid galary" alt="skills" />
          </div>
        </Col>
        <Col size="md-8">
          <p>Specialty: Wedding</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
      <div className="mt-5">
        <Row>
          <Col size="md-4">
            <div className="">
              <img src="assets/images/150.jpg" className="img-fluid galary" alt="skills" />
            </div>
          </Col>
          <Col size="md-4">
            <div className="">
              <img src="assets/images/150.jpg" className="img-fluid galary" alt="skills" />
            </div>
          </Col>
          <Col size="md-4">
            <div className="">
              <img src="assets/images/150.jpg" className="img-fluid galary" alt="skills" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}