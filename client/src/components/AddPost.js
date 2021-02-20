import React from 'react'
import {Mutation} from "react-apollo"
import ADD_POST from "../mutations/addPost"

const CURRENT_USER = "6015d51cb7eaaa248cb5c27a"

export default function AddPost(props) {
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')

    const handleSubmit = (e, addPostFunc) => {
        e.preventDefault();
        addPostFunc({
            variables: {
                title,
                body,
                createdBy: {_id: CURRENT_USER}
            }
        }).then(() => {
            resetFields()
            props.history.push('/')
        })
    }

    const resetFields = () => {
        setTitle('')
        setBody('')
    }

    return (
        <Mutation mutation={ADD_POST}>
            {(addPost) => {
                return (
                    <form onSubmit={e => handleSubmit(e, addPost)}>
                        <input type="text" name="title" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)}/>
                        <input type="text" name="body" value={body} placeholder="Enter body" onChange={e => setBody(e.target.value)}/>
                        <button role="submit">Submit</button>
                    </form>
                )
            }}
        </Mutation>
    )
}
