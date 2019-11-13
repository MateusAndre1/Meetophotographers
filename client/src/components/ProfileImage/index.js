import React from 'react';
import "./ProfileImage.css";


export default function ProfileImage(props) {


    return (
        <>
            <div className="card">
                <div className="img-container">
                    <img src={props.src} maxHeight="300px" className="img-fluid" alt="logo" />
                    <div className="p-2 remove">
                        <button onClick={props.onClick} className="btn btn-danger remove">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}