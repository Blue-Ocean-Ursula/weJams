
import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../homepage/navbar.jsx';
import PhotoSection from './userPhotoSection/userPhotoSection.jsx';
import BioSection from './userBioSection/bioIndex.jsx';
import Uploads from './userUploadsSection/uploadsIndex.jsx';

const ProfileHome = (props) => {
  /*State*/
  const [currentUserData, setCurrentUserData] = useState(props.currentUserData);
  const [userData, setUserData] = useState({});


  return (
    <>
    <Navbar />
    <PhotoSection />
    <BioSection currentUserData={props.currentUserData} />
    <Uploads />
    </>
  )
};

export default ProfileHome;