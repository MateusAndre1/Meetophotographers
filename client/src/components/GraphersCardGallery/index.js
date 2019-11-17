import React from "react";
import { Col } from "../Grid";

export default function GraphersCardGallery(props) {

    return (
        <Col size="md-4">
            <div>
                <a href={props.galleryImg} target="_blank" rel="noopener noreferrer">
                    <img src={props.galleryImg} className="img-fluid galary" alt="skills" />
                </a>
            </div>
        </Col>
    );
}

