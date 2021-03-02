import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as SVGImage} from "../../assets/images/happy-bunch.svg"

export default function Header(props) {
    return (
        <header className="header overlapped">
            <div className="container grid">
                <div className="header__left overlapped__left">
                    <div className="header__description">
                        <p className="header__description-author">Jonathan William</p>
                        <h1 className="header__description-title">Designer by day.<br /> Gamer by&nbsp;night.</h1>
                        <p className="header__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className="header__right overlapped__right">
                    <div className="header__right-image overlapped__right-image overlapped__right-image--svg">
                        <SVGImage />
                        <Link to="/" className="btn btn--primary">Read blog article</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
