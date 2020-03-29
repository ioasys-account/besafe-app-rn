import styled from 'styled-components/native';
import COLORS from 'config/colors';

export const Container = styled.View`
  padding: 56px 24px 64px 24px;
  flex: 1;
  justify-content: space-between;
`;

export const CheckContainer = styled.View`
  border: solid 1px ${COLORS.grey};
  padding: 12px 16px;
  border-radius: 8px;
`;

export const RiskContainer = styled.View`
  margin: 30px 0px;
  flex: 1;
`;

export const Separator = styled.View`
  margin-top: 20px;
`;
