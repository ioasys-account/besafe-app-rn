import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as profileActions } from 'store/ducks/profile';
import { ProfilePresentation } from 'components/presentation/Profile';

const ProfileContainer = () => {
  return <ProfilePresentation />;
}

export default ProfileContainer;
