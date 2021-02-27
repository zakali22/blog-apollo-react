import React, { Component } from 'react'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import FeaturedBlog from "../components/Blogs/FeaturedBlog"
import BlogsCarousel from "../components/Blogs/BlogsCarousel"
import NavbarThemeContext from "../context/NavbarTheme"

export default class Homepage extends Component {

    componentDidMount(){
        let value = this.context

        value.changeColorTheme('dark')
    }

    render() {
        return (
            <main className="main-content">
                <Header />
                <Blogs />
                <FeaturedBlog />
                <BlogsCarousel />
            </main>
        )
    }
}


Homepage.contextType = NavbarThemeContext