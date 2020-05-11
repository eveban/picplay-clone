import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6882bb;
  margin: 15px 15px;
  border-radius: 8px;
  height: 120px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Img = styled.Image`
  align-self: auto;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
export const Description = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 10px;
`;
