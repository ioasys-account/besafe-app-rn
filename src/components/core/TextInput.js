import React from 'react';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import PropTypes from 'prop-types';

const Input = styled.TextInput`
  border: solid 1px ${COLORS.grey};
  border-radius: 8px;
  padding: 16px 12px;
  font-size: 18px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const TextInput = ({
  placeholder,
  onChange,
  value,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
}) => (
  <Input
    onChangeText={onChange}
    placeholder={placeholder}
    value={value}
    placeholderTextColor={COLORS.defaultTextLight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  />
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

TextInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  value: '',
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  marginTop: 0
};

export default TextInput;
