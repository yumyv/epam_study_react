import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export const ProtectedRoute = (props) => {
  const {isLoggedIn} = props;

  return (
      isLoggedIn?<Route {...props}/>:<Redirect to={Routes.LOGIN}/>
  )
};
