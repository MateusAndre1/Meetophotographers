import React from "react";
import { Col } from "../Grid";
import "./GraphersCard.css"

export default function GraphersCard(props) {

  return (
    <>
      <Col size="sm-3">
        <div className="card3">
          <div className="img-container4">
            <img src={props.img} className="img-fluid galary" alt="skills" />
            <div className="p-2 remove3">
              <button onClick={() => props.deleteGalaryImage(props.id)} value={props.id} className="btn-sml deleteBtn3">Delete</button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
