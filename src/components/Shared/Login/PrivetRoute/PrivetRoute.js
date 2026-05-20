import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const PrivetRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <div className="position-absolute top-50 start-50 spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;