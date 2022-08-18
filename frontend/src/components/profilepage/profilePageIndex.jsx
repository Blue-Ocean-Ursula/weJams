import React from 'react';
import Navbar from '../homepage/navbar.jsx';
import PhotoSection from './userPhotoSection/userPhotoSection.jsx';
import BioSection from './userBioSection/bioIndex.jsx';
import profileObjOne from './userBioSection/bioData.jsx';

const ProfileHome = () => {
  return (
    <>
    <Navbar />
    <PhotoSection />
    <BioSection {...profileObjOne}/>


    </>
  )
};

export default ProfileHome;