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
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" exact component={Signup} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/create" exact component={Create} isPrivate />
      <Route path="/details/:meetupId" exact component={Details} isPrivate />
      <Route path="/edit/:meetupId" exact component={Edit} isPrivate />
      <Route component={NotFound} isPrivate />
    </Switch>
  );
}
