import React, { useRef,useEffect, useState } from 'react';
import Modal from 'react-modal';
import CustomModal from './CustomModal';

function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
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
        
    };
    useEffect(() => {
        startCamera();
    }, [openModal]);

    return (
        <div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-2xl m-4" >Upload an Image</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-2xl" onClick={openModal}>Click an Image</button>
            {modalIsOpen && <CustomModal closeModal={closeModal}>
                {!capturedImage &&<video ref={videoRef} autoPlay playsInline></video>}
                <div className='flex flex-row justify-center'>
                    <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={takePhoto}>Take a photo</button>
                    <button className="bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-black rounded shadow-2xl m-1" onClick={closeModal}>Cancel</button>
                </div>
               
                {capturedImage && (<img src={capturedImage} className='h w-96' alt="Captured" />
        )}
            </CustomModal>}
        
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
    );
}

export default Camera;