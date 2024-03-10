import React, { useEffect, useRef, useState } from 'react';
import './MyStyles.css';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import { Fab } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function VideoCall() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const params = useParams();

    useEffect(() => {
        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setStream(stream);
                }
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        };

        getMedia();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const handleEndCall = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        navigate(`/chat/${params.chatId}`);
    };

    return (
        <div className='call-container'>
            <video ref={videoRef} autoPlay muted width='100%' height="100%" style={{ borderRadius: '20px' }}></video>
            <Fab color="error" aria-label="add" style={{ position: "absolute", right: '50%', left: '50%', bottom: '10%' }} onClick={handleEndCall}>
                <CallEndRoundedIcon />
            </Fab>
           
                {/* Placeholder for another video element */}
                <video width='20%' height='20%' style={{position:'absolute',top:'60%',right:'10%',border:'2px solid grey'}} src={videoRef} autoPlay muted></video>
        </div>
    );
}

export default VideoCall;
