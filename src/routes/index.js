import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import Details from '../pages/Details';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/create" component={Create} isPrivate />
      <Route path="/details/:meetupId" component={Details} isPrivate />
      <Route path="/edit/:meetupId" component={Edit} isPrivate />
    </Switch>
  );
}
