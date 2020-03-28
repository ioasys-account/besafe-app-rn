import React from 'react';
import { Container } from 'screens/Profile/styles';
import { ProfileContainer } from 'containers/Profile';
import Button from 'components/core/Button';
import { View } from 'react-native';

const ProfileScreen = () => (
  <Container>
    <ProfileContainer />
  </Container>
);

export default ProfileScreen;
