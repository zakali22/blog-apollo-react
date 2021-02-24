import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Headroom from "headroom.js"

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.navEl = React.createRef();
    }

    componentDidMount(){
        const options = {
            "offset": 205,
            "tolerance": 5,
            "classes": {
                "initial": "header--fixed",
                "pinned": "slideDown",
                "unpinned": "slideUp",
                "top": "top",
                "notTop": "not-top"
            }
        }
        const headroom  = new Headroom(this.navEl.current, options);
        headroom.init();
    }

    render() {
        return (
            <nav className="navbar" ref={this.navEl}>
                <div className="container">
                    <Link to="/" className="logo-wrapper">
                        <div className="logo-icon">B</div>
                        <span className="logo-text">Bloggy</span>
                    </Link>
                    <div className="navbar__listing">
                        <div className="navbar__listing-left">
                            <Link to="/" className="navbar__listing-item">About</Link>
                            <Link to="/" className="navbar__listing-item">Stories</Link>
                            <Link to="/" className="navbar__listing-item">Popular</Link>
                        </div>
                        <div className="navbar__listing-right">
                            <Link to="/" className="navbar__listing-item">Signup</Link>
                            <Link to="/" className="navbar__listing-item">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
