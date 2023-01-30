import React from 'react'
import { redirect, Route,  } from 'react-router-dom'
export default function UnAuthenticatedRoute() {
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <redirect
              to={`/login`}
            />}
    />
  );
}
