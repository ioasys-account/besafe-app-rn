import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import Button from 'components/core/Button';

import COLORS from 'config/colors';
import { setStoreItem } from 'config/storage';

import { StyledContainer } from './styles';

const Onboarding = () => {
  const { width } = useWindowDimensions();
  const { replace } = useNavigation();

  const onPressAgreed = () => {
    setStoreItem('@BeSafe:TermAgreed', 'true', () => replace('Profile'));
  };

  return (
    <StyledContainer>
      <Label
        fontWeight='bold'
        fontSize={40}
        lineHeight={50}
        color={COLORS.black}
        textAlign='center'
      >
        Título do Onboarding
      </Label>
      <Label
        fontSize={21}
        lineHeight={25}
        color={COLORS.black}
        textAlign='center'
        marginTop={30}
        marginBottom={40}
      >
        Parágrafo curto falando do objetivo do app e da importância de todos nós se juntarmos contra
        o Corona.
      </Label>
      <Button label='Concordar' action={onPressAgreed} width={width - 80} primary />
    </StyledContainer>
  );
};

export default Onboarding;
