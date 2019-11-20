import React, { Component } from 'react';
import "./VideoBg.css"

class VideoBg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: './assets/videos/backgroundVideo.mp4'
        }
    }

    render() {
        return (
            <div className="content">
                <video id="background-video" autoPlay playsinline loop muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                </video>
            </div>
        )
    }
};

export default VideoBg;