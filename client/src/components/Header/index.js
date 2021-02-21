import React from 'react'
import {ReactComponent as SVGImage} from "../../assets/images/happy-bunch.svg"

export default function Header(props) {
    return (
        <header className="header">
            <div className="container grid">
                <div className="header__left">
                    <p>Jonathan William</p>
                    <h1>Designer by day.<br />Gamer by night.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className="header__right">
                    <img src={SVGImage}/>
                </div>
            </div>
        </header>
    )
}
