import React from "react";
import { Col } from "../Grid";
import "./GalleryDisplay.css"

export default function GalleryDisplay(props) {

  return (
    <>
      <Col size="sm-4">
        <div className="card3">
          <div className="img-container4 mx-auto">
            <a href={props.img} target="_blank" rel="noopener noreferrer">
              <img src={props.img} className="img-fluid gallery" alt="skills" />
            </a>
            <div className="p-2 remove3">
              <button onClick={() => props.deletegalleryImage(props.id)} value={props.id} className="btn deleteBtn3"><i class="fas fa-thumbtack"></i></button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
