import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

import { getUser, getUserRepository, createPortfolio } from '../../service/api'
import Repository from './Repository';

export default function Create() {
  let { username } = useParams()
  const [user, setUser] = useState({})
  const [repositories, setRepositories] = useState([])

  useEffect( () => {
    function load(){
      getUser(username).then(res => {
        setUser(res.data)
      })
      getUserRepository(username).then(res => {
        setRepositories(res.data)
      })
    }

    load()
  }, [])

  function publish(event){
    event.preventDefault()
    const body = {portfolio: user}
    body.portfolio.repositories = repositories
    console.log(body)
    createPortfolio(body).then(()=> {
      window.location.href='/'
    })
  }

  return (
    <Container>
      <Header username={username} />
      <div className="headerUserName">
        <div>
          <img alt="person" src={user.avatar_url} />
        </div>
        <div className="info">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
        <div className="publish">
          <a href="#" onClick={publish}>Publicar</a>
        </div>
      </div>

      <div className="listRepositores">
        <h2>Repositórios</h2>
        { repositories.map(repo => {
          return (
            <Repository key={repo.id} repo={repo} />
          )
        })}
        
      </div>
    </Container>
  );
}
