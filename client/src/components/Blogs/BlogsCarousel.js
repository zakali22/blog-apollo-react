import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as StuckHome} from "../../assets/images/stuck-home.svg"
import Slider from "react-slick";
import SampleNextArrow from "./CustomArrowNext";
import SamplePrevArrow from "./CustomArrowPrev"

export default function BlogsCarousel() {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <div className="blogs-carousel section">
            <div className="container">
                <div className="blogs-carousel__description">
                    <div className="blogs-carousel__description-title">
                        <h2>Popular</h2>
                        <h2 className="blogs-carousel__description-title-bg title-bg">Categories</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Slider {...settings}>
                    <Link to="/" className="blogs__listing-card">
                        <div className="blogs__listing-card-image">
                            <StuckHome />
                        </div>
                        <div className="blogs__listing-card-description">
                            <h3>Blogs article heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Link>

                    <Link to="/" className="blogs__listing-card">
                        <div className="blogs__listing-card-image">
                            <StuckHome />
                        </div>
                        <div className="blogs__listing-card-description">
                            <h3>Blogs article heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Link>

                    <Link to="/" className="blogs__listing-card">
                        <div className="blogs__listing-card-image">
                            <StuckHome />
                        </div>
                        <div className="blogs__listing-card-description">
                            <h3>Blogs article heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Link>

                    <Link to="/" className="blogs__listing-card">
                        <div className="blogs__listing-card-image">
                            <StuckHome />
                        </div>
                        <div className="blogs__listing-card-description">
                            <h3>Blogs article heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Link>

                    <Link to="/" className="blogs__listing-card">
                        <div className="blogs__listing-card-image">
                            <StuckHome />
                        </div>
                        <div className="blogs__listing-card-description">
                            <h3>Blogs article heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Link>
                </Slider>
            </div>
        </div>
    )
}
