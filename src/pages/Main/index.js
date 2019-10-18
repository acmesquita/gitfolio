import React from 'react';

import { Container, Wrapper } from './styles';
import BarFind from '../../components/BarFind';

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <h1>Gitfolio</h1>
        <BarFind router="search" placeholder="Digite o username do Github"/>
        <div className="links">
          <a href="/new">Crie seu portfólio</a>
        </div>
      </Wrapper>
    </Container>
  );
}
