import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as StuckHome} from "../../assets/images/stuck-home.svg"

export default class Blogs extends Component {
    render() {
        return (
            <div className="blogs section">
                <div className="container">
                    <div className="blogs__title">
                        <h2>Blogs</h2>
                        <h2 className="blogs__title-bg title-bg">Blogs</h2>
                    </div>
                    <div className="blogs__listing grid">
                        <Link to="/" className="blogs__listing-card blogs__listing-card--condensed blog-1">
                            <div className="blogs__listing-card-image">
                                <StuckHome />
                            </div>
                            <div className="blogs__listing-card-description">
                                <h3>Blogs article heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Link>

                        <Link to="/" className="blogs__listing-card blogs__listing-card--expanded blog-2">
                            <div className="blogs__listing-card-image">
                                <StuckHome />
                            </div>
                            <div className="blogs__listing-card-description">
                                <h3>Blogs article heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Link>

                        <Link to="/" className="blogs__listing-card blogs__listing-card--expanded blog-3">
                            <div className="blogs__listing-card-image">
                                <StuckHome />
                            </div>
                            <div className="blogs__listing-card-description">
                                <h3>Blogs article heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Link>

                        <Link to="/" className="blogs__listing-card blogs__listing-card--condensed blog-4">
                            <div className="blogs__listing-card-image">
                                <StuckHome />
                            </div>
                            <div className="blogs__listing-card-description">
                                <h3>Blogs article heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
