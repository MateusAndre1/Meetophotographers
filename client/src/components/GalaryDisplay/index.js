import React from "react";
import { Col } from "../Grid";

export default function GalaryDisplay(props) {

  return (
    <>
          <Col size="4">
          <img src={props.img} className="img-fluid" alt="skills" />
          </Col>
    </>
  );
}
