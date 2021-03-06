import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route 
      {...rest}
      render={props => 
        getToken() ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;