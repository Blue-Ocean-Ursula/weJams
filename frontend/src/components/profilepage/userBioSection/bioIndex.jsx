import React from 'react';
<<<<<<< HEAD
// import { Button } from 'react-scroll';
=======
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
>>>>>>> 78cbb6cc3f13b94add15eb8628fa1c49799c2d2e

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