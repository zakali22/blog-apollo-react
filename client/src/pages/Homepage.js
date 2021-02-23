import React, { Component } from 'react'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import FeaturedBlog from "../components/Blogs/FeaturedBlog"
import BlogsCarousel from "../components/Blogs/BlogsCarousel"

export default class Homepage extends Component {
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
