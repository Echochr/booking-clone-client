import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState } from '../app/store';

const AdminProtectedOutlet: FC = () => {
  const { userId, isAdmin } = useSelector((state: RootState) => state.auth);

  if (!userId || !isAdmin) {
    toast.error('Access denied', { position: 'bottom-right' });
  }

  return (userId && isAdmin) ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminProtectedOutlet;
