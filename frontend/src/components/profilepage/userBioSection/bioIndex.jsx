import React from 'react';
import {Button} from 'react-scroll';
import { BioContainer,
  BioWrapper,
  BioRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrp,
  Column2,
  ImgWrp
} from './bioElements.jsx';

const BioSection = () => {
  return (
    <>
      <BioContainer Id={'Id'}>
        <BioWrapper>
          <BioRow>
            <Column1>
              <TextWrapper>
                <TopLine>T-Jamz Biography</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                  <BtnWrp>
                    <Button to='home' />
                  </BtnWrp>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrp>
                <Img/>
              </ImgWrp>
            </Column2>
          </BioRow>
        </BioWrapper>
      </BioContainer>
    </>
  );
};

export default BioSection;