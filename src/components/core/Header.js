import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';

import Label from './Label';

const Header = ({ title, subtitle, customBackFunction }) => {
  const { pop } = useNavigation();

  return (
    <StyledContainer>
      <StyledBackButton onPress={customBackFunction || pop}>
        <Label>{`< Voltar`}</Label>
        <Label>{title}</Label>
        <Label>{subtitle}</Label>
      </StyledBackButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  padding-right: 15;
  padding-left: 15;
`;

const StyledBackButton = styled.TouchableOpacity`
  align-items: center;
`;

export default Header;
