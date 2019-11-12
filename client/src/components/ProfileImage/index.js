import React from 'react';


export default function ProfileImage(props) {


    return (
        <div className="pos-f-t" style={{ width: "300px" }}>
            <img src={props.src} height="300px" width="300px" alt="logo" />
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <button onClick={props.onClick} className="btn btn-danger">Delete</button>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}