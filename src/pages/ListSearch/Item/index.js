import React from 'react';

import { Container } from './styles';

export default function Item({ id }) {
  return (
    <Container>
      <img alt="person" src="https://avatars2.githubusercontent.com/u/15862643?v=4" width="50" height="50" />
      <div className="info">
        <h3><a href={`/show/${id}`}>Ana Catharina Mesquita</a></h3>
        <small>Criado em: 09/10/2016</small>
        <p>Crud usando o tutorial do AngularJS para Zumbi</p>
      </div>
    </Container>
    
  );
}
