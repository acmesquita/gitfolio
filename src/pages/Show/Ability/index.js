import React from 'react';

import { Container } from './styles';

export default function Ability({ data }) {
  return (
    <Container>
      <img alt="" width="50" height="50" className={`padrao ${data.language}`} />
      <div className="info">
        <h3>{data.language}</h3>
        <hr/>
        <div className="list_info">
          {data.description.split(' - ').map( desc => {
            return (<p> → {desc}</p>) 
          })}
        </div>
      </div>
    </Container>
  );
}
