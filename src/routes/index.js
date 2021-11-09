import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Programa from '../pages/Programa';
import Informacoes from '../pages/Informacoes';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import useStyles from './styles';

export default function Routes() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.background} />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programa" component={Programa} />
          <Route exact path="/informacoes" component={Informacoes} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
