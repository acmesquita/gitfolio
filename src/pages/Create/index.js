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
  })

  function publish(event){
    event.preventDefault()
    const repos = []
    repositories.forEach(repository => {
      repos.push({
        name: repository.name,
        full_name: repository.full_name,
        owner: user.name,
        html_url: repository.html_url,
        description: repository.description,
        start: repository.created_at,
        last_update: repository.updated_at,
        last_pushed: repository.pushed_at,
        language: repository.language
      })
    })

    const portfolio = {
      login: user.login,
      avatar_url: user.avatar_url,
      name: user.name,
      location: user.location,
      email: user.email,
      bio: user.bio,
      start: user.created_at,
      last_update: user.updated_at,
      repositories_attributes: repos
    }

    createPortfolio({portfolio}).then(()=> {
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
          <span onClick={publish}>Publicar</span>
        </div>
      </div>

      <div className="listRepositores">
        <h2>Repositórios - {repositories.length}</h2>
        { repositories.map(repo => {
          return (
            <Repository key={repo.id} repo={repo} />
          )
        })}
      </div>
    </Container>
  );
}
