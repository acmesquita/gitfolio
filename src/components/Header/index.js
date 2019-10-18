import React from 'react';

import { Container } from './styles';

export default function Header({ username }) {
  return (
    <Container>
      <h1>Gitfolio</h1>
      { username && 
        (<div className="username">
          <a href="/">{username}</a>
        </div>)
      }
    </Container>
  );
}
