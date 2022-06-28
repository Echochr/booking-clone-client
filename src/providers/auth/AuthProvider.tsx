import React, { useState, ReactNode, FC, useEffect } from 'react';

import AuthContext, { ICredentials, IUser } from './AuthContext';
import { httpLoginUser, httpLogoutUser } from '../../services/LoginService';
import { getCredentials } from '../../services/AuthService';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [credentials, setCredentials] = useState<ICredentials>(null!);

  const signin = async (newUser: IUser, callback: VoidFunction) => {
    try {
      const authenticatedUser = await httpLoginUser(newUser);
      setCredentials(authenticatedUser);
      callback();
    } catch (err) {
      console.error(err);
    }
  };

  const signout = async (callback: VoidFunction) => {
    try {
      await httpLogoutUser();
      callback();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const user: ICredentials | null = getCredentials();
    if (user) {
      setCredentials(user);
    }
  }, []);

  const value = { credentials, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
