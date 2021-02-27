import React, { Component } from 'react'
import NavbarThemeContext from "../context/NavbarTheme"
import AddPost from "../components/AddPost"

export default class CreatePost extends Component {
    componentDidMount(){
        let value = this.context

        value.changeColorTheme('light--with-split-panels')
    }

    render() {
        return (
            <main className="create-post main-content">
                <div className="create-post__panels split-panels">
                    <div className="create-post__panels-left split-panels__left">
                        <div className="split-panels__left-description">
                            <h3>Share Your Experiences to the World</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div className="create-post__panels-right split-panels__right">
                        <div className="split-panels__right-content">
                            <h3>Create a post</h3>
                            <AddPost />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

CreatePost.contextType = NavbarThemeContext