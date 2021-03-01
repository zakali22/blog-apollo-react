import React, {useState} from 'react'
import {Mutation} from "react-apollo"
import ADD_POST from "../mutations/addPost"
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import {withRouter} from "react-router-dom"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ImageDropzone from "./Dropzone"

const CURRENT_USER = "6015d51cb7eaaa248cb5c27a"

function AddPost(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [preview, setPreview] = useState(false)
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [convertedContent, setConvertedContent] = useState(null);
    const [image, setImage] = useState('')

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

    const handleSubmit = (e, addPostFunc) => {
        e.preventDefault();

        console.log(title)
        console.log(image)
        if(title.length && convertedContent && image.length) {
            addPostFunc({
                variables: {
                    title,
                    body: convertedContent,
                    image,
                    createdBy: {_id: CURRENT_USER}
                }
            }).then(() => {
                resetFields()
                // props.history.push('/')
            })
        }
    }

    const createMarkup = (html) => {
        return  {
            __html: DOMPurify.sanitize(html)
        }
    }

    const resetFields = () => {
        setTitle('')
        setEditorState(() => EditorState.createEmpty());
    }

    const handlePreview = (e) => {
        e.stopPropagation();
        if(title.length && convertedContent) {
            setPreview(true)
        }
    }

    const handleImageAdd = (image) => {
        setImage(image)
    }

    return (
        <Mutation mutation={ADD_POST}>
            {(addPost) => {
                return (
                    <React.Fragment>
                        {
                            preview ? (
                                <div className="preview">
                                    <h2 className="preview__title">{title}</h2>
                                    <div dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
                                    <button onClick={() => setPreview(false)} className="btn btn--primary">Return to form</button>
                                </div> 
                            ) : (
                                <React.Fragment>
                                    <h3>Create a post</h3>
                                    <form onSubmit={e => handleSubmit(e, addPost)} className="form">
                                        <input type="text" name="title" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)}/>
                                        {/* <input type="text" name="body" value={body} placeholder="Enter body" onChange={e => setBody(e.target.value)}/> */}
                                        <Editor 
                                            editorState={editorState}
                                            onEditorStateChange={handleEditorChange}
                                            wrapperClassName="wrapper-class"
                                            editorClassName="editor-class"
                                            toolbarClassName="toolbar-class" 
                                            placeholder="Enter body"
                                        />
                                        <ImageDropzone addImage={handleImageAdd} />
                                        <button role="submit" className="btn btn--secondary">Submit</button>
                                        <a href="#" onClickCapture={handlePreview} className="btn btn--primary">Preview</a>
                                    </form>
                                </React.Fragment>
                            )
                        }
                    </React.Fragment>
                )
            }}
        </Mutation>
    )
}



export default withRouter(AddPost)