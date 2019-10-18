import React from 'react';

import { Container } from './styles';

export default function Ability() {
  return (
    <Container>
      <img alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="100" height="100" />
      <div className="info">
        <h3>JavaScript</h3>
        <p>Programa desde: 2018</p>
      </div>
    </Container>
  );
}
