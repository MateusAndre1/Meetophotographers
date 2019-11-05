import React from 'react';
import API from "../../utils/API.js"
 
class Uploader extends React.Component {
    state = {
            selectedFile: null,
            profileImage: ""
        };
    

    fileSelectedHandler = e => {
        console.log(e.target.files[0]);
        
        this.setState({
            selectedFile: e.target.files[0]
        })
        
    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        API.saveImage({})
        .then((res) => {
            console.log(res)
            window.location.href = "/"
        })
        // .then(() => {return window.history.back()})
    }
   
 
    render() {
        return (
            <>
            <input type="file" name="binImage" onChange={this.fileSelectedHandler}/>
            <button onSubmit={this.fileUploadHandler}>Upload</button>
            </>
        );
    }
}

export default Uploader