import React from 'react';

import { Container } from './styles';

export default function Item({ data }) {
  return (
    <Container>
      <img alt="person" src={data.avatar_url} width="50" height="50" />
      <div className="info">
        <h3><a href={`/show/${data.id}`}>{data.name}</a></h3>
        <small>Desde: {data.start_year}</small>
        <p>{data.bio}</p>
      </div>
    </Container>
    
  );
}
