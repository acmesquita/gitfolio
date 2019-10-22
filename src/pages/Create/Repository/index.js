import React from 'react';

// import { Container } from './styles';

export default function Repository({ repo }) {
  return (
    <div className="repositor">
      <img width="50" height="50" className={`padrao ${repo.language}`} alt="" />
      <div className="info">
        <h3>{repo.name}</h3>
        <h5>{repo.full_name}</h5>
        <small>{repo.language}</small>
        <p>{repo.description}</p>
      </div>
    </div>
  );
}
