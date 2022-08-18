import React, { useState } from "react";
import {
  UploadsCard,
  UploadsIcon,
  UploadsH2,
  UploadsP
} from './uploadsElements.jsx';
import icon1 from '../profileResources/icon1.svg';
import SampleTrack from '../profileResources/SampleTrack.mp3';

const UploadCard = (props) => {
  /*State*/
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(SampleTrack));
  const startStop = () => {
    if (isPlaying === true) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    } else {
      audio.play();
      setIsPlaying(true)
    }
  };
  return (
    <UploadsCard onClick={startStop}>
          <UploadsIcon src={icon1} />
          <UploadsH2>{props.currentUserData.uploads[0].version_history[0].version_name}</UploadsH2>
          <UploadsP>{props.currentUserData.uploads[0].version_history[0].description}</UploadsP>
      </UploadsCard>
  )
}

export default UploadCard;