import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState } from '../app/store';

const ProtectedOutlet: FC = () => {
  const { userId } = useSelector((state: RootState) => state.auth);

  if (!userId) {
    toast.error('Access denied', { position: 'bottom-right' });
  }

  return userId ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedOutlet;
