import React, { useRef,useEffect, useState } from 'react';
import Modal from 'react-modal';
import CustomModal from './CustomModal';

function Camera() {
    // const customStyles = {
    //     content: {
    //       top: '70%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       marginRight: '-50%',
    //       transform: 'translate(-50%, -50%)',
    //     },
    //   };
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

    // Function to start the camera
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
            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Draw video frame onto canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Convert canvas content to data URL representing the captured image
            const dataURL = canvas.toDataURL('image/png');

            // Set the captured image in state
            setCapturedImage(dataURL);
        }
        
    };

    // Start the camera when the component mounts
    useEffect(() => {
        startCamera();
    }, [openModal]);

    return (
        // <div>
        //     <button onClick={openModal}>Open Modal</button>
        //     <Modal
        //     style={customStyles}
        //     isOpen={modalIsOpen}
        //     onRequestClose={closeModal}
        //     contentLabel="">
        //         <video ref={videoRef} playsInline></video>
        //         <button onClick={takePhoto}>Take Photo</button>
        //         <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        //         <button onClick={closeModal}>close</button>
        //     </Modal>
        //     {capturedImage && (
        //         <div>
        //             <p>Captured Image:</p>
        //             <img src={capturedImage} alt="Captured" />
        //         </div>
        //     )}
            
        // </div>
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