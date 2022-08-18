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


const BioSection = (
  props,
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  bio,
  buttonLabel,
  alt,
  primary,
  dark,
  dark2
  ) => {

  return (
    <>
      <BioContainer lightBg={'lightBg'} id={'id'}>
        <BioWrapper>
          <BioRow imgStart={'imgStart'}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.currentUserData.username}</TopLine>
                <Heading lightText={'lightText'}>
                  {props.currentUserData.category}
                </Heading>
                <Subtitle darkText={'darkText'}>{props.currentUserData.bio}</Subtitle>
                  <BtnWrp>
                    <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                  </BtnWrp>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrp>
                <Img src={props.currentUserData.avatar} alt={alt}/>
              </ImgWrp>
            </Column2>
          </BioRow>
        </BioWrapper>
      </BioContainer>
    </>
  );
};

export default BioSection;