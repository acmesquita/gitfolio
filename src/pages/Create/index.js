import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Create() {
  let { username } = useParams()

  return (
    <Container>
      <Header username={username} />
      <div className="headerUserName">
        <div>
          <img alt="person" src="https://avatars2.githubusercontent.com/u/15862643?v=4" />
        </div>
        <div className="info">
          <h2>Ana Catharina Mesquita</h2>
          <p>Since 2013, I dedicate myself to learn ways to solve problems with software, my main goal is to learn and improve more and more my knowledge.</p>
        </div>
        <div className="publish">
          <a href="/">Publicar</a>
        </div>
      </div>

      <div className="listRepositores">
        <h2>Repositórios</h2>

        <div className="repositor">
          <img alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="50" height="50" />
          <div className="info">
            <h3>Nome do Projeto</h3>
            <h5>nome completo do projeto</h5>
            <small>Criado em: 09/10/2016</small>
            <p>Crud usando o tutorial do AngularJS para Zumbi</p>
          </div>
        </div>

        <div className="repositor">
          <img alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="50" height="50" />
          <div className="info">
            <h3>Nome do Projeto</h3>
            <h5>nome completo do projeto</h5>
            <small>Criado em: 09/10/2016</small>
            <p>Crud usando o tutorial do AngularJS para Zumbi</p>
          </div>
        </div>
        <div className="repositor">
          <img alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="50" height="50" />
          <div className="info">
            <h3>Nome do Projeto</h3>
            <h5>nome completo do projeto</h5>
            <small>Criado em: 09/10/2016</small>
            <p>Crud usando o tutorial do AngularJS para Zumbi</p>
          </div>
        </div>
        <div className="repositor">
          <img alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="50" height="50" />
          <div className="info">
            <h3>Nome do Projeto</h3>
            <h5>nome completo do projeto</h5>
            <small>Criado em: 09/10/2016</small>
            <p>Crud usando o tutorial do AngularJS para Zumbi</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
