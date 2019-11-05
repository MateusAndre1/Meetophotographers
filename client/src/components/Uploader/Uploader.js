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

    fileUploadHandler = () => {
        API.saveImage({
            binImage: this.state.selectedFile,
            profileImage: this.state.selectedFile.name
        })
        .then((res) => {console.log(res)})
    }
   
 
    render() {
        return (
            <>
            <input type="file" name="binImage" onChange={this.fileSelectedHandler}/>
            <button type="submit" onClick={this.fileUploadHandler}>Upload</button>
            </>
        );
    }
}

export default Uploader