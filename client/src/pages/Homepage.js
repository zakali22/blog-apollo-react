import React, { Component } from 'react'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import FeaturedBlog from "../components/Blogs/FeaturedBlog"
import BlogsCarousel from "../components/Blogs/BlogsCarousel"
import NavbarThemeContext from "../context/NavbarTheme"

import {Query} from "react-apollo"
import FETCH_POSTS from "../queries/fetchPosts"

export default class Homepage extends Component {

    componentDidMount(){
        let value = this.context

        value.changeColorTheme('dark')
    }

    render() {
        return (
            <Query query={FETCH_POSTS}>
                {({loading, data}) => {
                    if(loading) return <p>Loading</p>

                    const {posts} = data
                    console.log(posts)
                    
                    return (
                        <main className="main-content">
                            <Header />
                            <Blogs  />
                            {posts.length > 0 && <FeaturedBlog post={posts[0]}/>}
                            <BlogsCarousel />
                        </main>
                    )
                }}
            </Query>
        )
    }
}


Homepage.contextType = NavbarThemeContext