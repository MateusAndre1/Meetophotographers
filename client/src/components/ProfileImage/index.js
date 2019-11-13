import React from 'react';
import "./ProfileImage.css";


export default function ProfileImage(props) {


    return (
        <>
            <div className="card">
                <div className="img-container">
                    <img src={props.src} maxheight="300px" className="img-fluid" alt="logo" />
                    <div className="p-2 remove">
                        <button onClick={props.onClick} className="btn-sml deleteBtn">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}