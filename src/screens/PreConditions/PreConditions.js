import React from 'react';
import Header from 'components/core/Header';
import { Container } from 'screens/PreConditions/styles';
import { PreConditionsContainer } from 'containers/PreConditions';
import { useNavigation } from '@react-navigation/native';

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
