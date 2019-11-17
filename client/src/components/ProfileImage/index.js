import React from 'react';
import "./ProfileImage.css";


export default function ProfileImage(props) {


    return (
        <>
            <div className="card">
                <div className="img-container">
                    <div className="profile-pic">
                    <img src={props.src} className="img-fluid profile" alt="logo" />
                    </div>
                    <div className="p-2 remove">
                        <button onClick={props.onClick} className="btn-sml deleteBtn3"><i class="fas fa-thumbtack"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}