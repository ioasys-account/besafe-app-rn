import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { PreConditionsContainer } from 'containers/PreConditions';
import Header from 'components/core/Header';
import { Container } from './styles';

const PreConditions = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header customBackFunction={goBack} />
      <PreConditionsContainer />
    </Container>
  );
};

export default PreConditions;
