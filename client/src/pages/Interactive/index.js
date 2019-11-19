import React, { Component } from "react";
import API from "../../utils/API";
import "./Interactive.css";

export default class Interactive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            image: "",
            gallerys: [],
            isOn: true
        };
    }

    async componentDidMount() {
        this.loadGraphers();
    }

    loadGraphers = () => {
        API.graphersCall({})
            .then(res => {
                let data = res.data;
                // console.log(data);

                let totalDisplay = [];
                let galleryDisplay = [];
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i]);
                    if (data[i].isReady) {
                        // console.log(data[i]);
                        let ready = data[i];
                        totalDisplay.push(ready)
                    }
                }
                totalDisplay.map(gallery => {
                    return gallery.Images.filter(gallerys => {
                        if (!gallerys.isProfile) {
                            // console.log(gallerys.binImage);

                            return galleryDisplay.push(gallerys.binImage)
                        }
                        return res
                    })
                })
                let randomIndex = Math.floor(Math.random() * galleryDisplay.length);
                let randomImage = galleryDisplay[randomIndex]
                console.log(randomImage);

                this.setState({
                    gallerys: totalDisplay,
                    images: galleryDisplay,
                    image: randomImage
                })
                console.log(totalDisplay);
                console.log(galleryDisplay);
                return totalDisplay;
            }).catch(err => {
                if (err) throw err
            });


    }

    turnOn = e => {
        e.preventDefault();
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <>
                <div className="studioBg">
                    <div className="outerDiv">
                        <div className="space"></div>
                        <div className="innerDiv text-center">
                            <div className="innerImage">
                                <img src="/assets/images/camera.png" className="img-fluid camera2" alt="camera" />
                                <div className="onSwitch" onClick={this.turnOn}></div>
                                <div className="sideSwitch" ></div>
                                <div className="sideSwitch2" ></div>
                                {this.state.isOn ? (
                                    <>
                                        <div className="outerImageDiv">
                                            <img src={this.state.image} className="img-fluid outerImage2" alt="camera" />
                                        </div>
                                        <a href={this.state.image} className="outerImage3" target="_blank" rel="noopener noreferrer">
                                            <img src={this.state.image} className="img-fluid camera2" alt="camera" />
                                        </a>
                                    </>
                                ) : (
                                        <>
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                <img src="/assets/images/tripod.png" className="img-fluid tripod" alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};