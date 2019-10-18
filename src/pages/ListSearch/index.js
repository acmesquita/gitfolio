import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import Item from './Item';

export default function ListSearch() {

  let { username } = useParams()

  return (
    <Container>
      <Header search={username} />
      <Wrapper>
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
        <Item id="0" />
      </Wrapper>
      
    </Container>
  );
}
