import React from 'react'
import {Query} from "react-apollo"
import FETCH_POST from "../queries/fetchPost"
import EditPostForm from "./EditPostForm"
import EditModeToggle from "./EditModeToggle"

export default function EditPost(props) {
    return (
        <Query query={FETCH_POST} variables={{postId: props.match.params.id}}>
            {({loading, data, client}) => {
                console.log(client)
                if(loading) return <h3>Loading form</h3>
                const {post, isEditMode} = data;
                return (
                    <React.Fragment>
                        <EditModeToggle />
                        {
                            isEditMode ? (
                                <EditPostForm post={post} />
                            ) : (
                                <>
                                <div className="post-details">
                                    <h2>{post.title}</h2>
                                    <p>{post.createdBy.name}</p>
                                    <p>{post.body}</p>
                                </div>
                                <button onClick={() => {
                                    client.writeData({data: {isEditMode: true}})
                                    props.history.push('/')
                                }}>Return to homepage</button>
                                </>
                            ) 
                        }
                    </React.Fragment>
                )
            }}
        </Query>
    )
}
