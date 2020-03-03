import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Routes} from '../../global/constants';
import ProtectedRoute from '../../features/auth/components/ProtectedRoute';
import Homepage from '../../features/homepage';
import Login from '../../features/auth/components/Login';
import Registration from '../../features/auth/components/Registration';
import MovieFullCard from '../MovieFullCard';
import Actor from '../Actor';
import MovieEdit from '../MovieEdit';

export const AppRoutes = () => {
  return (
      <Switch>
        <ProtectedRoute path={Routes.HOMEPAGE} component={Homepage}/>
        <ProtectedRoute path={`${Routes.MOVIES}/:id`} component={MovieFullCard}/>
        <ProtectedRoute path={`${Routes.ACTORS}/:id`} component={Actor}/>
        <ProtectedRoute path={`${Routes.EDIT}/:id`} component={MovieEdit}/>
        <Route path={Routes.LOGIN} component={Login}/>
        <Route path={Routes.REGISTRATION} component={Registration}/>
        <Redirect to={Routes.LOGIN}/>
      </Switch>
  )
};
