import React from "react";
import { Col } from "../Grid";
import "./GraphersCardGallery.css"

export default function GraphersCardGallery(props) {

    return (
        <Col size="md-4">
            <div className="galleryDisplayFront text-center">
                <a href={props.galleryImg} target="_blank" rel="noopener noreferrer">
                    <img src={props.galleryImg} className="img-fluid gallery2" alt="skills" />
                </a>
            </div>
        </Col>
    );
}

