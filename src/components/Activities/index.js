import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../images/avatar.png';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

export default function Activties() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@everson_gsilva</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <Username>Everson Silva</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <IconAnt name="lock" size={14} color="#19c86e" />
            <Date>há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <Comment name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <IconAnt name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
