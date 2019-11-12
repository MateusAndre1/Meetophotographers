import React, { useState } from 'react';
import { storage } from "../firebaseConfig.js";
import API from "../../utils/API"


export default function Uploader(props) {
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
            } else {
                setError("Please select an image to upload")
            }
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
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
                        console.log(url);
                        API.saveImage2({ 
                            binImage: url,
                            profileImage: image.name,
                            isProfile: props.isProfile
                         })
                            .then((res) => {
                                console.log(res);
                            })
                        setUrl(url)
                        setProgress(0);
                    }).then(() =>{
                        return window.location.reload();
                    })
                }
            );
        } else {
            setError("Error please choose an image to upload")
        }
        return url;
    }

    return (
        <div>
            <div className="mt-2">
                <input type="file" onChange={handChange} style={{ width: "233px" }} />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div>
                {progress > 0 ? <progress value={progress} max="100" /> : null}
                <p style={{ color: "red" }}>{error}</p>
            </div>
           

        </div>
    )
}