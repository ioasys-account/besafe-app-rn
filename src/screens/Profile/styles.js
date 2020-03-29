import styled from 'styled-components/native';
import COLORS from 'config/colors';

export const Container = styled.View`
  padding: 56px 24px 64px 24px;
  flex: 1;
  justify-content: space-between;
`;

export const SuccessContainer = styled.View`
  padding: 56px 24px 64px 24px;
  flex: 1;
`;

export const SuccessIcon = styled.View`
  border-radius: 16px;
  height: 176px;
  width: 176px;
  background-color: ${COLORS.greyLight};
  align-self: center;
  margin-top: 30px;
`;
