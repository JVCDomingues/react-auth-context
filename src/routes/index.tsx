import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
