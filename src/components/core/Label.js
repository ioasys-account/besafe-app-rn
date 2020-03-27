/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from 'config/colors';

const Label = props => <StyledLabel {...props}>{props.children}</StyledLabel>;

Label.defaultProps = {
  width: 'auto',
  height: 'auto',
  minHeight: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  borderBottomWidth: 0,
  borderBottomColor: 'transparent',
  backgroundColor: 'transparent',
  color: COLORS.defaultText,
  fontWeight: '200',
  textAlign: 'left',
  fontStyle: 'normal',
  fontSize: 14,
  fontWeight: 400
};

Label.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  textAlign: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  borderBottomColor: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  minHeight: PropTypes.number,
  children: PropTypes.oneOfType(PropTypes.shape({}), PropTypes.string).isRequired
};

const StyledLabel = styled.Text`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  border-bottom-width: ${({ borderBottomWidth }) => borderBottomWidth};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Label;
