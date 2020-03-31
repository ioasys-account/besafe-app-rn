import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Label from './Label';

import COLORS from 'config/colors';

const Button = ({ label, action, ...props }) => (
  <Container {...props} onPress={(...parameters) => action(...parameters)}>
    <Label color={props.primary ? COLORS.white : COLORS.red} fontSize={18}>
      {label}
    </Label>
  </Container>
);

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  background-color: ${({ primary }) => (primary ? COLORS.red : 'transparent')};
  border-radius: 40px;
  border: ${({ primary }) => (primary ? 'none' : `solid 2px ${COLORS.red}`)};
  margin-top: ${({ marginTop }) => marginTop}px;
`;

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  action: PropTypes.func,
  marginTop: PropTypes.number
};

Button.defaultProps = {
  label: '',
  primary: true,
  action: () => {},
  marginTop: 0
};

export default Button;
