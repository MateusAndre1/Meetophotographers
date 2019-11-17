import React from "react";
import { Col } from "../Grid";

export default function GraphersCard(props) {

    return (
        <Col size="md-4">
            <div>
                <img src={props.galleryImg} className="img-fluid galary" alt="skills" />
            </div>
        </Col>
    );
}

