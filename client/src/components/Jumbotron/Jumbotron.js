import React, { Component } from 'react'
import "./jumbotron.css"
export default class Jumbotron extends Component {
    render() {
        return (
            <div className="containerOne">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <div className="container">
                                    <h1 className="display-4">Meetographer</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
