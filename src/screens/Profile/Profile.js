import React from 'react';
import Label from 'components/core/Label';
import { Container } from 'screens/Profile/styles';
import TextInput from 'components/core/TextInput';

const Profile = () => (
  <Container>
    <Label fontWeight='bold' fontSize={32}>
      {'Criar perfil'}
    </Label>
    <TextInput placeholder="Nome completo" />
  </Container>
);

export default Profile;
