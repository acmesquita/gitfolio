import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../components/Header';
import Ability from './Ability';

import { showPortfolio } from '../../service/api'

export default function Show() {

  let { id } = useParams()
  const [portfolio, setPortfolio] = useState({})
  useEffect(()=> {
    function load(){
      showPortfolio(id).then( res => {
        setPortfolio(res.data)
      })
    }

    load()
  }, [id])

  return (
    <Container>
      <Header />
      <div className="headerUserName">
        <div>
          <img alt="person" src={portfolio.avatar_url} />
        </div>
        <div className="info">
          <h2>{portfolio.name}</h2>
          <p>{portfolio.bio_full}</p>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="list">
        <Ability />
      </div>
    </Container>
  );
}
