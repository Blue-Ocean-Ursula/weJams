import React from 'react';
import {Button} from '../profileComponents/buttonComponent.jsx';
import {
  BioContainer,
  BioWrapper,
  BioRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrp,
  Column2,
  ImgWrp,
  Img,
} from './bioElements.jsx';

const BioSection = (lightBg, id, imgStart, username, lightText, category, darkText, bio, buttonLabel, img, alt) => {
  console.log('username: ', username)
  return (
    <>
      <BioContainer lightBg={lightBg} id={id}>
        <BioWrapper>
          <BioRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{username}</TopLine>
                <Heading lightText={lightText}>
                  {category}
                </Heading>
                <Subtitle darkText={darkText}>{bio}</Subtitle>
                  <BtnWrp>
                    <Button to='home' >{buttonLabel}</Button>
                  </BtnWrp>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrp>
                <Img src={img} alt={alt}/>
              </ImgWrp>
            </Column2>
          </BioRow>
        </BioWrapper>
      </BioContainer>
    </>
  );
};

export default BioSection;