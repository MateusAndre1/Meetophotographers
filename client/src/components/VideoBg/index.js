import React, {Component} from 'react';
import "./VideoBg.css"

class VideoBg extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: './assets/videos/backgroundVideo.mp4'
        }
    }

    render () {
        return (
            <video id="background-video" autoPlay loop muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default VideoBg;