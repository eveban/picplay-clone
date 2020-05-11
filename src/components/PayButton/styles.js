import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${({ focused }) => (focused ? '#000' : '#ccc')};
  font-size: 12px;
`;
