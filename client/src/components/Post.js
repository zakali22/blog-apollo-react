import React from 'react'
import {Query, Mutation} from "react-apollo"
import FETCH_POST from "../queries/fetchPost"
import DELETE_POST from "../mutations/deletePost"
import {Link} from "react-router-dom"

export default function Post(props) {
    const {match: {params}} = props

    const handlePostDelete = (postId, deletePostFunc) => {
        deletePostFunc({
            variables: {
                id: postId
            }
        }).then((res) => {
            props.history.push('/')
        })
    }
    
    return (
        <Query query={FETCH_POST} variables={{postId: params.id}}>
            {({loading, data}) => {
                if(loading) return <p>Loading post</p>
                const {post} = data
                console.log(post)
                return (
                    <div className="post">
                        <h2>{post.title}</h2>
                        {post.createdBy && <p>Created by {post.createdBy.name}</p>}
                        <p>{post.body}</p>

                        <Link to={`/edit/${post._id}`}>Edit post</Link>
                        <Mutation mutation={DELETE_POST}>
                            {(deletePost) => (
                                <button onClick={e => handlePostDelete(post._id, deletePost)} style={{display: 'block'}}>Delete post</button>
                            )}
                        </Mutation>
                    </div>
                )
            }}
        </Query>
    )
}
