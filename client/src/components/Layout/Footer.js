import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <Link to="/" className="logo-wrapper">
                        <div className="logo-icon">B</div>
                        <span className="logo-text">Bloggy</span>
                    </Link>
                    <div className="footer__bottom">
                        <p>© 2021 Bloggy</p>
                        <Link to="/"><p>About</p></Link>
                        <Link to="/"><p>Stories</p></Link>
                        <Link to="/"><p>Popular</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}
