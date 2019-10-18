import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Ability from './Ability';

export default function Show() {
  return (
    <Container>
      <Header />
      <div className="headerUserName">
        <div>
          <img alt="person" src="https://avatars2.githubusercontent.com/u/15862643?v=4" />
        </div>
        <div className="info">
          <h2>Ana Catharina Mesquita</h2>
          <p>Since 2013, I dedicate myself to learn ways to solve problems with software, my main goal is to learn and improve more and more my knowledge.</p>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="list">
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
        <Ability />
      </div>
    </Container>
  );
}
