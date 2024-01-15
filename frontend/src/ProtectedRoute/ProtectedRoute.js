// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// import useAuth from '../hooks/useAuth';
// import useAuth from './hooks/useAuth'; // Adjust the path based on your project structure

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { auth } = useAuth();

  if (auth?.role && allowedRoles.includes(auth.role)) {
    return <Route element={element} />;
  } else {
    // Redirect to an unauthorized page or login page
    return <Navigate to="/unauthorize" />;
  }
};

export default ProtectedRoute;
