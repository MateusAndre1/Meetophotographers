import React, { Component } from 'react'
import "./Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                    <a href="https://www.andremroque.com/"><span className="port"> andremroque.com</span></a>
                    <a href="https://www.ericlamacchia.com/"><span className="port"> ericlamacchia.com</span></a>
                    </div>
                </footer>
            </div>
        )
    }
}