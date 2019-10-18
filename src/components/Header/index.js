import React from 'react';

import BarFind from '../BarFind'
import { Container } from './styles';

export default function Header({ username, search }) {

  return (
    <Container>
      <h1><a href="/">Gitfolio</a></h1>
      { username && 
        (<div className="username">
          <a href="/">{username}</a>
        </div>)
      }
      {
        search &&
        (<div>
          <BarFind router="search" placeholder={search} />
        </div>)
      }
    </Container>
  );
}
