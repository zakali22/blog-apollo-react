import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Headroom from "headroom.js"

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.navEl = React.createRef();
        this.state = {
            navbarOpen: false
        }
    }

    componentDidMount(){
        const options = {
            "offset": 0,
            "tolerance": 0,
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

        document.addEventListener('scroll', () => {
            if(this.state.navbarOpen && window.pageYOffset > 0){
                this.setState({
                    navbarOpen: false
                })
            }
        })

        document.addEventListener('click', (e) => {
            if(this.state.navbarOpen){
                if(!e.target.classList.contains('navbar__toggler') && !e.target.classList.contains('navbar__listing--mobile') && !e.target.parentElement.classList.contains('navbar__toggler') && !e.target.parentElement.classList.contains('navbar__toggler-icon')){
                    console.log(e.target)
                    this.setState((state) => ({
                        navbarOpen: false
                    }))
                }
            }
        })
    }

    handleNavbarOpen = (e) => {
        this.setState((state) => ({
            navbarOpen: !state.navbarOpen
        }))
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar" ref={this.navEl}>
                    <div className="container">
                        <Link to="/" className="logo-wrapper">
                            <div className="logo-icon">B</div>
                            <span className="logo-text">Bloggy</span>
                        </Link>
                        <div className="navbar__listing navbar__listing--desktop">
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
                        <button onClick={this.handleNavbarOpen} className="navbar__toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile-listing" aria-controls="navbar-mobile-listing" aria-expanded="true">
                            <svg viewBox="0 0 100 80" width="20" height="20" className="navbar__toggler-icon">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                        </button>
                        <div className={`navbar__listing navbar__listing--mobile ${this.state.navbarOpen ? 'show': 'hide'}`}>
                            <Link to="/" className="navbar__listing-item">About</Link>
                            <Link to="/" className="navbar__listing-item">Stories</Link>

                            <Link to="/" className="navbar__listing-item">Signup</Link>
                            <Link to="/" className="navbar__listing-item">Login</Link>

                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
