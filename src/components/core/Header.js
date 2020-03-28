import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import arrowIcon from 'assets/icons/arrow-down.png';
import Label from './Label';
import COLORS from 'config/colors';

const Header = ({ title, subtitle, customBackFunction }) => {
  const { pop } = useNavigation();

  return (
    <StyledContainer>
      <StyledBackButton onPress={customBackFunction || pop}>
        <Arrow source={arrowIcon} />
        <Label marginLeft='15px' fontSize={16} color={COLORS.defaultTextLight}>
          Voltar
        </Label>
      </StyledBackButton>
      <Label>{title}</Label>
      <Label>{subtitle}</Label>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
`;

const StyledBackButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

const Arrow = styled.Image`
  transform: rotate(90deg);
`;

export default Header;
