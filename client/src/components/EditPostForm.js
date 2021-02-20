import React from 'react'
import {Mutation} from "react-apollo"
import EDIT_POST from "../mutations/editPost"
import {withRouter} from "react-router-dom"

const CURRENT_USER = "6015d51cb7eaaa248cb5c27a"

function EditPostForm(props) {
    const [title, setTitle] = React.useState(props.post.title || '')
    const [body, setBody] = React.useState(props.post.body || '')

    React.useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    const handleSubmit = (e, editPostFunc, onSuccess) => {
        e.preventDefault();
        editPostFunc({
            variables: {
                id: props.post._id,
                title,
                body
            }
        }).then(() => {
            resetFields()
            onSuccess()
        })
    }

    const resetFields = () => {
        setTitle('')
        setBody('')
    }
    console.log(props.post._id)
    return (
        <Mutation mutation={EDIT_POST}>
            {(editPost, result) => {
                const onSuccess = () => result.client.writeData({data: {isEditMode: false}})
                return (
                    <form onSubmit={e => handleSubmit(e, editPost, onSuccess)}>
                        <input type="text" name="title" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)} style={{display: 'block', minWidth: "300px"}}/>
                        <textarea type="text" name="body" value={body} placeholder="Enter body" onChange={e => setBody(e.target.value)} style={{display: 'block', minWidth: "400px", minHeight: "100px"}}></textarea>
                        <button role="submit">Submit</button>
                    </form>
                )
            }}
        </Mutation>
    )
}

export default withRouter(EditPostForm)