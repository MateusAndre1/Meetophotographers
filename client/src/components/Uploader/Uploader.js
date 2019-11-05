import React from 'react';
import API from "../../utils/API.js"
 
class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null
        };
    }

    fileSelectedHandler = e => {
        console.log(e.target.files[0]);
        
        this.setState({
            selectedFile: e.target
        })
        
    }

    fileUploadHandler = () => {
        
        API.saveImage({
            profileImage: this.state.selectedFile
        })
        .then((res) => {console.log(res)});
        

    }
   
 
    render() {
        return (
            <>
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button>
            </>
        );
    }
}

export default Uploader