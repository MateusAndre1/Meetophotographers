import React, { useState } from 'react';
import {storage} from "../firebaseConfig.js"
import ph from "../../150.png";


export default function NewUploader() {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState("")

    const handChange = e => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file["type"]
            const validImageTypes = ["image/gif", "image/jpeg", "image/png", "image/jpg"]
            if (validImageTypes.includes(fileType)) {
                setError("")
                setImage(file);
            }else {
                setError("Please select an image to upload")
        } 
        }
    }

    const handleUpload = () => {
        if (image) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    setProgress(progress)
                },
                error => {
                    setError(error)
                },
                () => {
                    storage.ref("images").child(image.name).getDownloadURL().then(url => {
                        setUrl(url)
                        setProgress(0);
                    })
                }
            );
        } else {
            setError("Error please choose an image to upload")
        }
    }

    return (
        <div>
            <div>
                <input type="file" onChange={handChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div style={{height:"100px"}}>
                {progress > 0 ? <progress value={progress} max="100" /> : ""}
                <p style={{color:"red"}}>{error}</p>
            </div>
            {
                url ? ( 
                    <img src={url} alt="logo" />
                ) : (
                    <img src={ph} className="App-logo" alt="logo" />
                )
            }
            
        </div>
    )
}