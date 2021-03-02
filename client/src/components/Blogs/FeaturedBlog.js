import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as SVGImage} from "../../assets/images/happy-bunch.svg"

import {Buffer} from "buffer"

export default class FeaturedBlog extends Component {
    render() {
        console.log(Buffer.from(this.props.post.image.data[0]))
        return (
            <div className="featured-blog section">
                <div className="container grid">
                    <div className="featured-blog__left overlapped__left">
                        <div className="featured-blog__description">
                            <p className="featured-blog__description-subtitle">From the blog</p>
                            <h2 className="featured-blog__description-title">{this.props.post.title}</h2>
                            <p className="featured-blog__description-text">{this.props.post.body}</p>
                            <h2 className="featured-blog__description-title-bg title-bg">Feature</h2>
                            <Link to="/" className="btn btn--secondary featured-blog__description-btn">Read blog article</Link>
                        </div>
                    </div>
                    <div className="featured-blog__right overlapped__right">
                        <div className="featured-blog__right-image overlapped__right-image overlapped__right-image--svg">
                            {/* <SVGImage /> */}
                            {/* <img src={this.props.post.image.data[0].toString('base64')} /> */}
                            <Link to="/" className="btn btn--secondary">Read blog article</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
