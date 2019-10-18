import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { Container } from './styles';

import Main from './pages/Main'
import ListSearch from './pages/ListSearch';
import New from './pages/New';
import Create from './pages/Create';
import Show from './pages/Show';

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search/:username" component={ListSearch} />
        <Route path="/new" component={New} />
        <Route path="/create/:username" component={Create} />
        <Route path="/show/:id" component={Show} />
      </Switch>
    </BrowserRouter>
  );
}
