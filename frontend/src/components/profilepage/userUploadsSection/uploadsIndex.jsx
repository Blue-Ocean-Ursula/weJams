import React from 'react';
import {
  UploadsContainer,
  UploadsH1,
  UploadsWrapper,
} from './uploadsElements.jsx';
import icon1 from '../profileResources/icon1.svg';
import UploadCard from './uploadsCard.jsx';

const Uploads = (props) => {
  return (
    <UploadsContainer id="uploads">
      <UploadsH1>My Uploads</UploadsH1>
      <UploadsWrapper>
          <UploadCard currentUserData={props.currentUserData} />
      </UploadsWrapper>
    </UploadsContainer>
  )
}

export default Uploads;