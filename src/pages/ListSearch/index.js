import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

export default function ListSearch() {

  let { username } = useParams()

  return (
    <>
      <h1>Search for: {username}</h1>
      <p>Listagem</p>
    </>
  );
}
