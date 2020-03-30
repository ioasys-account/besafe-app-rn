import React from 'react';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Label from './Label';

const Button = ({ label, primary, action, marginTop }) => (
  <TouchableOpacity onPress={(...parameters) => action(...parameters)}>
    <Container primary={primary} marginTop={marginTop}>
      <Label color={primary ? COLORS.white : COLORS.red} fontSize={18}>
        {label}
      </Label>
    </Container>
  </TouchableOpacity>
);

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${({ primary }) => (primary ? COLORS.red : 'transparent')};
  border-radius: 40px;
  border: ${({ primary }) => (primary ? 'none' : `solid 2px ${COLORS.red}`)};
  margin-top: ${({ marginTop }) => marginTop};
`;

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  action: PropTypes.func,
  marginTop: PropTypes.string
};

Button.defaultProps = {
  label: '',
  primary: true,
  action: () => {},
  marginTop: 0
};

export default Button;
