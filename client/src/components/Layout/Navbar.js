import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar__logo-wrapper">
                        <div className="navbar__logo-icon">B</div>
                        <span className="navbar__logo-text">Bloggy</span>
                    </Link>
                    <div className="navbar__listing">
                        <div className="navbar__listing-left">
                            <Link className="navbar__listing-item">About</Link>
                            <Link className="navbar__listing-item">Stories</Link>
                            <Link className="navbar__listing-item">Popular</Link>
                        </div>
                        <div className="navbar__listing-right">
                            <Link className="navbar__listing-item">Signup</Link>
                            <Link className="navbar__listing-item">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
