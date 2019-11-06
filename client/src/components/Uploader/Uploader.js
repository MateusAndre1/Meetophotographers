import React from 'react';
import API from "../../utils/API.js"

class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            profileImage: "",
            UserId: ""
        };
    }

    fileSelectedHandler = e => {
        console.log(e.target.files[0]);

        this.setState({
            selectedFile: e.target.files[0]
        })

    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        console.log("UserId has props question mark?" + this.props.id);
        console.log("is this ENV??? " + process.env.NODE_ENV);
        if (!process.env.NODE_ENV === "production") {
            API.saveImage({ UserId: this.state.id })
                .then((res) => {
                    console.log(res)
                })
        } else {
            //to do uplaod to firebase
            alert("STOP THAT!!!!")
        }
       
    }


    render() {
        return (
            <>
                <input type="file" name="binImage" onChange={this.fileSelectedHandler} />
                <button onSubmit={this.fileUploadHandler}>Upload</button>
            </>
        );
    }
}

export default Uploader