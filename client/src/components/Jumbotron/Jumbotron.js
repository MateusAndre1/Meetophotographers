import React, { Component } from 'react'
import "./jumbotron.css"
export default class Jumbotron extends Component {
    render() {
        return (
            <div className="containerOne">
                <div className="jumbotron homej jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <div className="container">
                                    <h1 className="display-4">Meetographer</h1>
                                    <p className="lead">A networking app that allows you to showcase photographs, choose a specialization and get hired to shoot events.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
