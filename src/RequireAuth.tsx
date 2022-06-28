import React from 'react';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from './providers/auth/useAuth';

const RequireAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  const { credentials } = useAuth();

  if (!credentials) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default RequireAuth;
