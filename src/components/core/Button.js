import React from 'react';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Label from './Label';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px
  background-color: ${({ primary }) => (primary ? COLORS.red : 'transparent')};
  border-radius: 40px;
  border: ${({ primary }) => (primary ? 'none' : `solid 2px ${COLORS.red}`)};
`;

const Button = ({ label, primary }) => (
  <TouchableOpacity>
    <Container primary={primary}>
      <Label color={primary ? COLORS.white : COLORS.red} fontSize={18}>
        {label}
      </Label>
    </Container>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool
};

Button.defaultProps = {
  label: '',
  primary: true
};

export default Button;
