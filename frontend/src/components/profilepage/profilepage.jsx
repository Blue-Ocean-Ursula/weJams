import React, {useState} from 'react';
import { BioContainer,
  ProfileBg,
  VideoBg,
  BioContent,
  BioH1,
  BioP,
  BioBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './bioSection/bioElements.jsx';
import ConcertBackground from './profileResources/ConcertBackground.mp4';
import Button from './buttonComponent.jsx';

const ProfilePage = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <BioContainer>
      <ProfileBg>
        <VideoBg autoPlay loop muted src={ConcertBackground} type='video/mp4' />
      </ProfileBg>
      <BioContent>
        <BioH1>User Profile Page</BioH1>
        <BioP>
        I am a singer from Italy, Please enjoy my music! !
        </BioP>
        <BioBtnWrapper>
          <Button
          to='Direct Message'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"

          >
            Direct Message {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BioBtnWrapper>
      </BioContent>
    </BioContainer>
  )
};

export default ProfilePage;