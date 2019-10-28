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
          <h2>{portfolio.name} <a href={portfolio.html_url}>({portfolio.login})</a></h2>
          <h4>{portfolio.location}</h4>
          <p>{portfolio.bio_full}</p>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="list">
        { portfolio.abilities && portfolio.abilities.map( item => {
          return (<Ability key={item.id} data={item}/>)
        })}
      </div>
    </Container>
  );
}
