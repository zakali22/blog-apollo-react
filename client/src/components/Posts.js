import React, { Component } from 'react'
import {Query} from "react-apollo"
import {Link} from "react-router-dom"

import FETCH_POSTS from "../queries/fetchPosts"

export default class Posts extends Component {
    render() {
        return (
            <Query query={FETCH_POSTS} fetchPolicy={'cache-and-network'}>
                {({loading, data, client}) => {
                    if(loading) return <h3>Loading</h3>
                    client.writeData({data: {isEditMode: true}})
                    
                    const {posts} = data
                    if(data.posts.length === 0) return <h3>There are no posts</h3>
                    return posts.map(post => <h1 key={post._id}><Link to={`/post/${post._id}`}>{post.title}</Link></h1>)
                }}
            </Query>
        )
    }
}
