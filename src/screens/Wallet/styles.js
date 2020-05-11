import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
  // colors: ['#52e78c', '#1ab563'],
  // start: { x: 1, y: 0.2 },
})`
  height: 250px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;
export const ActionLabel = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 10px;
`;
export const UseBalance = styled.View`
  background: #1c1c1e;
  justify-content: space-between;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
`;
export const UseBalanceTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
`;

export const PaymenMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymenMethodsTitle = styled.Text`
  color: #828293;
  text-transform: uppercase;
`;
export const Card = styled.View`
  background: #1e232a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 10px;
`;
export const CardTitle = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  margin-top: 10px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const AddLabel = styled.Text`
  color: #52e78c;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
`;
export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
`;
export const UseTicketLabel = styled.Text`
  color: #52e78c;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  text-decoration-line: underline;
`;
