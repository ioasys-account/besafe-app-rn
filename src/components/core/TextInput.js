import React from 'react';
import styled from 'styled-components/native';
import COLORS from 'config/colors';
import PropTypes from 'prop-types';

const Input = styled.TextInput`
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px 12px;
  font-size: 18px;
  color: ${COLORS.defaultText};
`;

const TextInput = ({ placeholder, onChange, value }) => (
  <Input onChangeText={onChange} placeholder={placeholder} value={value} />
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  value: ''
};

export default TextInput;
