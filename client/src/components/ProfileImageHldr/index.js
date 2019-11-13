import React from 'react';
import Uploader from "../Uploader";
import "./ProfileImageHldr.css";


export default function ProfileImageHldr() {
    return (
            <div className="card2">
                <div className="img-container2">
                <img src="assets/images/150.jpg" height="300px" width="300px" className="App-logo" alt="logo" />
                    <div className="p-1 remove2">
                        <Uploader isProfile="true" />
                    </div>
                </div>
            </div>
    )
}