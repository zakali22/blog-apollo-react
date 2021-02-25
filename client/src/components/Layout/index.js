import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout(props) {
    return (
        <div className="page-wrapper">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}
