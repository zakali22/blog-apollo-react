import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as SVGImage} from "../../assets/images/happy-bunch.svg"

export default class FeaturedBlog extends Component {
    render() {
        return (
            <div className="featured-blog">
                <div className="container grid">
                    <div className="featured-blog__left overlapped__left">
                        <div className="featured-blog__description">
                            <p className="featured-blog__description-subtitle">From the blog</p>
                            <h2 className="featured-blog__description-title">How to understand project goal</h2>
                            <p className="featured-blog__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h2 className="featured-blog__description-title-bg title-bg">Feature</h2>
                        </div>
                    </div>
                    <div className="featured-blog__right overlapped__right">
                        <div className="featured-blog__right-image overlapped__right-image overlapped__right-image--svg">
                            <SVGImage />
                            <Link to="/" className="btn btn--secondary">Read blog article</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
