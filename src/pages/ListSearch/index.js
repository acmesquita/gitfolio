import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import Item from './Item';

import { search } from '../../service/api';

export default function ListSearch() {

  let { username } = useParams()
  const [items, setItems] = useState([])

  useEffect( () => {
    function load(){
      search(username).then(res => {
        setItems(res.data);
      })
    }

    load();
  }, [username])

  return (
    <Container>
      <Header search={username} />
      <Wrapper>
        { items.length === 0 && (<h2>Nenhum resultado encontrado.</h2>)}
        { items.map((item, index) => {
          return (<Item key={index} data={item} />)
        })}
      </Wrapper>
      
    </Container>
  );
}
