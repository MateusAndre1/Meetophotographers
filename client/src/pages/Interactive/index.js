import React, { Component } from "react";
import API from "../../utils/API";
import "./Interactive.css";

export default class Interactive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            image: "/assets/images/studioshoot.jpg",
            gallerys: [],
            isOn: false,
            flash: ""
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
                
                // console.log(randomImage);
                this.setState({
                    gallerys: totalDisplay,
                    images: galleryDisplay
                })
                // console.log(totalDisplay);
                // console.log(galleryDisplay);
                return totalDisplay;
            }).catch(err => {
                if (err) throw err
            });
    }
    randify = e => {
        e.preventDefault();
        let newImages = this.state.images;
        let randomIndex = Math.floor(Math.random() * newImages.length);
        let randomImage = newImages[randomIndex];
        this.setState({
            image: randomImage
        })
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
    flashOn = e => {
        e.preventDefault();
        this.setState({
            flash: "bg-white"
        })
            setTimeout(() => {
                this.setState({
                    flash: ""
                })
            }, 100);
    }
    render() {
        return (
            <>
                <div className="studioBg">
                    <div className={`outerDiv ${this.state.flash}`}>
                        <div className="space"></div>
                        <div className="innerDiv text-center">
                            <div className="innerImage">
                                <img src="/assets/images/camera.png" className="img-fluid camera2" alt="camera" />
                                <div className="onSwitch" onClick={this.turnOn}></div>
                                <div className="sideSwitch" onClick={this.randify}></div>
                                <div className="sideSwitch2" onClick={this.randify}></div>
                                <div className="onFlash" onClick={this.flashOn}><i className="fas fa-bolt bolt"></i></div>
                                {this.state.isOn ? (
                                    <>
                                        <div className="outerImageDiv">
                                            <img src={this.state.image} className="img-fluid outerImage2" alt="camera" />
                                        </div>
                                        <div className="outerImage3Div">
                                            <a href={this.state.image} className="outerImage3" target="_blank" rel="noopener noreferrer">
                                                <img src={this.state.image} className="img-fluid image3 camera2" alt="camera" />
                                            </a>
                                        </div>
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