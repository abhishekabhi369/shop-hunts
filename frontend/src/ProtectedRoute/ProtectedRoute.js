
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const ProtectedRoute = ({ element, allowedRoles }) => {
  const { auth } = useAuth();
    console.log(auth,"Protected Route")
  if (auth?.role && allowedRoles.includes(auth.role)) {
    return <Route element={element} />;
    console.log(auth,"Protected Route")
  } else {

    return <Navigate to="/unauthorize" />;
  }
};

export default ProtectedRoute;
