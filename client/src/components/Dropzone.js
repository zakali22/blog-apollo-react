import React, {Component} from 'react'
import Dropzone from 'react-dropzone';

export default class ImageDropzone extends Component {
    state = {
        files: []
    }

    onDrop = (files) => {
        this.setState({
            files
        }, () => {
            this.props.addImage(this.state.files)
        })
    }

    render(){
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
        ));
        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                )}
            </Dropzone>
        )
    }
}
