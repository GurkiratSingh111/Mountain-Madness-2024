import React, { useRef,useEffect, useState } from 'react';
import CustomModal from './CustomModal';
import Overlay from './Overlay';
import axios from "axios"
function Camera() {
    
    
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadfile, setUploadFile] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [response,setResponse] = useState("");
    const handleFileUpload = (event) => {
        setCapturedImage(null);
        const file = event.target.files[0]; // Assuming single file selection
        if (file) {
          // You may want to perform additional checks on the file here (e.g., size, type)
          setUploadFile(URL.createObjectURL(file));
        }
      };
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }

    };

    async function uploadCameraImage(){
        const response = await axios.get("http://localhost:3000",{capturedImage})
        setResponse(response.data)
    }
    async function uploadFileImage(){
        const response = await axios.get("http://localhost:3000",{uploadfile})
        setResponse(response.data)
    }



    // Function to take a photo
    const takePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');
            setCapturedImage(dataURL);
        }
        setUploadFile(null);
        
    };
    useEffect(() => {
        startCamera();
    }, [openModal]);

    return (
        <div>
            <input className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-2xl m-4"  type="file"
        accept="image/*" // Allow only image files
        onChange={handleFileUpload}/>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-2xl" onClick={()=>{
                openModal();
                setCapturedImage(null);

            }}>Click an Image</button>
            {modalIsOpen && 
            <div className='flex flex-col justify-center items-center'>
            <Overlay/>
            <CustomModal closeModal={closeModal}>
                <h1 className='text-black text-center mb-1 font-bold'>Click an Image</h1>
                {!capturedImage &&<video ref={videoRef} autoPlay playsInline></video>}
                {capturedImage && (<img src={capturedImage} className='h w-96' alt="Captured" />
        )}
                <div className='flex flex-row justify-center'>
                    {!capturedImage && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={takePhoto}>Take a photo</button>}
                    {!capturedImage && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={closeModal} >Cancel</button>}
                    {capturedImage &&  <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={closeModal}>OK</button>}
                </div>
            </CustomModal>
            </div>}
            {capturedImage && (<img src={capturedImage} className='h w-96' alt="Captured" />)}
            {uploadfile && (<img src={uploadfile} className='h-96 w-96' alt="Captured" />)}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        {capturedImage && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={uploadCameraImage}>Submit</button>}
        {capturedImage && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={()=>setCapturedImage(null)}>Delete Image</button>}
        {uploadfile && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={uploadFileImage}>Submit</button>}
        {uploadfile && <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={()=>setUploadFile(null)}>Delete Image</button>}
    </div>
    );
}

export default Camera;