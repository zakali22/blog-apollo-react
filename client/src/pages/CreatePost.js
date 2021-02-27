import React, { Component } from 'react'
import NavbarThemeContext from "../context/NavbarTheme"

export default class CreatePost extends Component {
    componentDidMount(){
        let value = this.context

        value.changeColorTheme('light')
    }

    render() {
        return (
            <main className="main-content">
                <div className="create-post__panels split-panels">
                    <div className="create-post__panels-left split-panels__left"></div>
                    <div className="create-post__panels-right split-panels__right"></div>
                </div>
            </main>
        )
    }
}

CreatePost.contextType = NavbarThemeContext