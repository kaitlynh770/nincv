import { useRef, useState } from 'react';
import openingVideo from '../assets/getting the mail.mp4';
import styles from '../styling/OpeningVideo.module.scss';
import Letter from './Letter.jsx';

const OpeningVideo = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  if(videoEnded){
    //return the Letter Component
    return <Letter/>
  }

return (
    <div onClick={handleClick} className = {styles.openingVideoContainer}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        controls
        muted
        onEnded = {() => setVideoEnded(true)}
      >
        <source src={openingVideo} type="video/mp4" />
      </video>
    </div>
  );
};
export default OpeningVideo;