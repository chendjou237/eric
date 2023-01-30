import React from 'react'
import { Route, redirect } from 'react-router-dom'
export default function AuthenticatedRoute() {
  return (
    <Route
    {...rest}
    render={props =>
      !appProps.isAuthenticated
        ? <C {...props} {...appProps} />
        : <redirect to="/" />}
  />
  )
}
