import React from 'react';

import { Container, Wrapper } from '../Main/styles';
import BarFind from '../../components/BarFind';

export default function New() {
  return (
    <Container>
      <Wrapper>
        <h2>Criando o seu portfólio</h2>
        <BarFind router="create" placeholder="Digite seu username do Github"/>
      </Wrapper>
    </Container>
  );
}
